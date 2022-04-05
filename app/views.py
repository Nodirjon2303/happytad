from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect

from .forms import *
from django.contrib.auth import authenticate, login, logout
from .models import *
from InvoiceGenerator.api import Invoice, Item, Client, Provider, Creator
from tempfile import NamedTemporaryFile
import json
from django.http import JsonResponse
import os

# Create your views here.

def loginView(request):
    if request.POST:
        print(request.POST)
        if request.user.username:
            return redirect('home')
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        print(user)
        if user:
            print("Ishladi")
            login(request=request, user=user)
            return redirect('home')
    return render(request, 'login.html', context={})


def registerView(request):
    form = Profile_Form(request.POST)
    if form.is_valid():
        form.save()
        username = request.POST.get("username")
        password = request.POST.get("password1")
        mobile = request.POST.get("mobile")
        company = request.POST.get("company")
        region = request.POST.get('region')

        user = authenticate(request=request, username=username, password=password)
        Tadbirkor.objects.create(user=user,phone_number=mobile, company_name=company, address=region).save()
        if user:
            login(request=request, user=user)
            
            return redirect('login')
    context = {
        'form': Profile_Form()
    }


    return render(request, 'Registration.html', context=context)

def homeView(request):
    # homethemes = Homethemes.objects.all()
    # data=[]
    # res=[]
    # for i in homethemes:
    #     res.append(i)
    #     if len(res)==3:
    #         data.append(res)
    #         res=[]
    # context = {'homethemes':data}
    context = {}

    return render(request, 'home-new.html', context=context)

def logoutView(request):
    if request.user.username:
        logout(request)
        return redirect('home')



def BlogPageView(request):
    blogs = Free_advice.objects.all()
    data=[]
    # max=Free_advice.objects.latest('number_of_view')
    data_trend=Free_advice.objects.order_by('number_of_view').last()
    data_last=Free_advice.objects.order_by('created_date').last()
    for blog in blogs:
        if data_last.title == blog.title:
            continue
        else:
            post={

                'title':blog.title,
                'image':blog.image,
                'description':blog.description,
                'slug':blog.slug

            }

            data.append(post)

    context={
        'data_last':data_last,

        'data':data,
        'data_trend':data_trend,

    }
    return render(request,"blogpage.html",context)

def BlogDetailView(request,slug):
    blog=Free_advice.objects.get(slug=slug)
    context={

        'blog_detail':blog
    }

    return render(request,'blog-detail.html',context)


def invoiceView(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        # # choose english as language
        os.environ["INVOICE_LANG"] = "en"

        client = Client(summary=data['to_customer'], address=data['to_address'],)
        provider = Provider(data['from_name'], bank_account='2600420569', bank_code='2010', address=data['from_address'])
        creator = Creator(data['from_name'])

        invoice = Invoice(client, provider, creator)
        invoice.currency_locale = 'en_US.UTF-8'
        invoice.currency = ''
        invoice.number =  data['invoice_number']
        invoice.use_tax = True
        for i in data['data']:
            print(i)
            invoice.add_item(Item(int(float(i['quantity'])), int(float(i['unit_price'])), description=i['description']))
        print("Ishladi")
        from InvoiceGenerator.pdf import SimpleInvoice
        import random
        pdf = SimpleInvoice(invoice)
        soni = random.randint(1, 1000)
        pdf.gen(f"media/invoice{soni}.pdf", generate_qr_code=True)

        return JsonResponse({'media': f'media/invoice{soni}.pdf'})
    return render(request, 'invoice.html', context={})
@login_required(login_url='login')
def CalculatorView(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        description = data['description']
        amount = data['amount']
        type = data['type']
        Cashbook.objects.create(user=request.user, type=type, description=description, amount=amount).save()
        return JsonResponse({"data": 'ok'})

    cashbooks = Cashbook.objects.filter(user=request.user).order_by('-id')
    data = []
    balance = 0
    for i in cashbooks:
        dict = {
            'description': i.description,
            'amount': i.amount,
            'created_date': i.created_date
        }
        if i.type == 'income':
            dict['type'] = '+'
            balance += i.amount
            dict['color'] = 'green'
        else:
            dict['type'] = '-'
            balance -=i.amount
            dict['color'] = 'red'
        data.append(dict)
    return render(request, 'calculator.html', context={'cashbook':data, 'balance':balance})


