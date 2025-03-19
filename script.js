function updatePrice() {
    let service = document.getElementById("service");
    let price = service.value;
    document.getElementById("price").innerText = `$${price}`;
}

function bookService() {
    let service = document.getElementById("service").options[document.getElementById("service").selectedIndex].text;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    
    if (!date || !time) {
        alert("Please select a date and time.");
        return;
    }

    alert(`Booking Confirmed!\nService: ${service}\nDate: ${date}\nTime: ${time}`);
}
