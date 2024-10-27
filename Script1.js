$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(".menu-items a").click(function () {
  $("#checkbox").prop("checked", false);
});

document.getElementById("addToCartButton").addEventListener("click", function() {
    console.log("Product added to cart");
    document.getElementById("message").textContent = "Product has been added to your cart!";
    this.disabled = true; // Optionally disable the button after adding
    this.textContent = "Added to Cart"; // Change button text
});


