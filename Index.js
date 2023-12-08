const PrsFrVBUX = document.getElementById('typing');
let arrayOfHiddenImages = [];
const PressForVbucks = document.getElementsByClassName('PressForVbucks')
function BringImagesBack() {
    arrayOfHiddenImages.map((imageID) => {

        document.getElementById(imageID).style.display = 'block'

        arrayOfHiddenImages = []
    })
};

function CreditCard() {
    const VBucks = document.getElementsByClassName('PressForVbucks')
    for (const element of Object.values(VBucks)) {

        element.style.display = 'block'
    }
}







function HideImage(ImageID) {
    arrayOfHiddenImages.push(ImageID)
    const clickedImage = document.getElementById(ImageID);
    clickedImage.style.display = 'none';
    console.log(PrsFrVBUX.style.display = 'block');
    if (ImageBack.style.display === 'none' || !ImageBack.style.diplay); {

    }
}


