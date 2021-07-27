var i = 0;
var images = ["../assets/accountant-calculator.jpg", "../assets/accountant-calculator.jpg", "../assets/accountant-calculator.jpg"];
var slideTime = 5000; // 3 seconds

function changeImageFoward() {
        if (i== images.length-1) {
                i= 0;
                document.getElementById("bg-img").style.backgroundImage = "url(" + images[i] + ")";
        } else {
                i++;
                document.getElementById("bg-img").style.backgroundImage = "url(" + images[i] + ")";
        }


}

function changeImageBackward() {
        if (i== 0) {
                i= images.length-1;
                document.getElementById("bg-img").style.backgroundImage = "url(" + images[i] + ")";
        } else {
                i--;
                document.getElementById("bg-img").style.backgroundImage = "url(" + images[i] + ")";
        }
} 

function changeImage() {
    document.getElementById("bg-img").style.backgroundImage = "url(" + images[i] + ")";

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout(changeImage, slideTime);
}

window.onload = changeImage;