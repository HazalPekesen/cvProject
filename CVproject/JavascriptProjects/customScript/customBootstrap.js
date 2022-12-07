//bootstrap toasttrigger script değerleri tanımlaması
var toastTrigger = document.getElementById('btnTemizle')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)  

        toast.show()
    })
}

//bootstrap tooltip script değerleri tanımlaması
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})