function bookService() {
    let serviceDropdown = document.getElementById("service");
    let service = serviceDropdown.options[serviceDropdown.selectedIndex].text;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;

    if (!date || !time) {
        alert("Please select a date and time.");
        return;
    }

    // Save booking details to localStorage
    localStorage.setItem("serviceType", service);
    localStorage.setItem("bookingDate", date);
    localStorage.setItem("bookingTime", time);

    // Redirect to confirmation.html
    window.location.href = "confirmation.html";
}