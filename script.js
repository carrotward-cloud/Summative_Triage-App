document.getElementById("triageForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Hide form, show confirmation
    document.getElementById("triageForm").classList.add("hidden");
    document.getElementById("confirmation").classList.remove("hidden");
});

document.getElementById("newRequest").addEventListener("click", function() {
    // Reset form
    document.getElementById("triageForm").reset();

    // Show form again
    document.getElementById("confirmation").classList.add("hidden");
    document.getElementById("triageForm").classList.remove("hidden");
});
