(function(){
  document.getElementById("copyButton").addEventListener("click", function() {
    const pageUrl = window.location.href;

    navigator.clipboard.writeText(pageUrl).then(function() {
        const successMessage = document.getElementById("copySuccessMessage");
        successMessage.style.display = "block";
    }).catch(function(error) {
        console.error("Помилка копіювання: ", error);
    });
  });
}());
