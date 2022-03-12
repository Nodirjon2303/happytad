from django.shortcuts import render, redirect

from .forms import *
from django.contrib.auth import authenticate, login, logout
from .models import *


# Create your views here.

def loginView(request):
    if request.POST:
        if request.user.username:
            return redirect('home')
        username = request.POST.get('username')
        password = request.POST.get('password')
        if request.user.username == '':
            user = authenticate(request, username=username, password=password)
            if user:
                login(request=request, user=user)
                if user.status == 'admin':
                    return redirect('admin')
                elif user.status == 'doctor':
                    return redirect('doctor')
                else:
                    return HttpResponse("Sizda hali status yo'q")
            else:
                return HttpResponse("Username yoki password xato")
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
    return render(request, 'home.html', context={})