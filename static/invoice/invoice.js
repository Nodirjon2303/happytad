function download_invoice(){
    from_name = document.getElementById('from_name').value
    from_address = document.getElementById('from_address').value
    to_name = document.getElementById('to_new_customer').value
    to_address = document.getElementById('to_address').value
    invoice_number = document.getElementById('invoice_number').value
    invoice_start = document.getElementById('dateStart').value
    invoice_due = document.getElementById('dateEnd').value
    items = document.getElementsByClassName('noborder selectItem')
    descriptions = document.getElementsByName('description[]')
    unit_prices = document.getElementsByName('unit_price[]')
    quantities = document.getElementsByName('qty[]')
    amounts = document.getElementsByName('total[]')
    invoice_data = []
    console.log(from_name, from_address, to_name, to_address, invoice_number, invoice_start, invoice_due)
    for (i = 0;i<items.length;i++){
        if (items[i].value && descriptions[i].value && unit_prices[i].value && quantities[i].value && amounts[i].value){
            invoice_data.push({
                'item': items[i].value,
                'description': descriptions[i].value,
                'unit_price': unit_prices[i].value,
                'quantity':quantities[i].value,
                'amount': amounts[i].value,
            })
        }

    if (invoice_data.length && from_name && from_address && to_name && to_address){
        console.log("Invoice chiqarsak bo'ladi")
        // console.log(invoice_data)
        var url = `/invoice/`
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({
            'to_customer':to_name,
            'from_name': from_name,
            'invoice_number': invoice_number,
            'data':invoice_data,
            'from_address': from_address,
            'to_address': to_address,


        })
    })
        .then((response) => {
            response.json().then((data) => {
            console.log(data['media'])
            document.getElementById('downloadid').innerHTML=`
            <a href="/${data['media']}" download="invoice">
            <button type="button" >Download Invoice</button></a>`
            document.getElementById('downloadid2').innerHTML=`
            <a href="/${data['media']}" download="invoice">
            <button type="button" >Download Invoice</button></a>`

            })



        })
    }
    else {
        console.log("Invoice chiqarish uchun yetarlicha malumot yo'q")
        document.getElementById('invoice_inform').innerHTML = "" +
            "<p>Siz invoice uchun yetarlicha malumot kiritganingiz yo'q hali Malomotlarni to'ldirib qayta urinib ko'ring</p>"
    }
    }
}