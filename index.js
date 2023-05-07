function convertJpgToPng() {
    var fileInput = document.getElementById("fileInput");

    var file = fileInput.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        var img = new Image();
        img.onload = function () {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            var pngData = canvas.toDataURL("image/png");
            downloadPng(pngData);
        }
        img.src = reader.result;
    }

    reader.readAsDataURL(file);
    fileInput.value = "";
}

function downloadPng(pngData) {
    var downloadLink = document.createElement("a");
    downloadLink.href = pngData;
    console.log(pngData);
    downloadLink.download = "converted.png";
    var downloadButton = document.createElement("button");
    downloadButton.textContent = "Download";

    // Set the CSS styles for the download button
    downloadButton.style.display = "inline-block";
    downloadButton.style.padding = "12px 24px";
    downloadButton.style.backgroundColor = "#4CAF50";
    downloadButton.style.color = "#fff";
    downloadButton.style.fontSize = "16px";
    downloadButton.style.fontWeight = "bold";
    downloadButton.style.textDecoration = "none";
    downloadButton.style.borderRadius = "4px";
    downloadButton.style.border = "none";
    downloadButton.style.cursor = "pointer";
    downloadButton.style.transition = "background-color 0.3s ease-in-out";

    // Set the CSS styles for the download button when hovered
    downloadButton.style.backgroundColor = "#3E8E41";
    downloadButton.addEventListener("click", function () {
        downloadLink.click();
        setTimeout(() => {
            downloadButton.style.display = "none";
        }, 500);
        
    });
    document.body.appendChild(downloadButton);
}

var slideIndex = 0;
var slides = document.querySelectorAll(".slider img");

function showSlides() {
    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 3000);
