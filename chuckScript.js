function inItSite() {
    getChucksImage()
}
const apiKey = "9a24058784msh79227efe82ec8bcp16813bjsnfc6a32e66701"
const Burl =  "matchilling-chuck-norris-jokes-v1.p.rapidapi.com"

function getChuckNorrisInformation() {

}

function makeRequest() {
  
}

function getChucksImage() {
    let mainDiv = document.getElementsByTagName('main')[0]
    let imageBox = document.createElement('div')
    imageBox.style.display = "flex"
    imageBox.style.width = 50+"em"

    let chuckImage = document.createElement('img')
    
    chuckImage.src = 'chuckie.jpg';

    imageBox.appendChild(chuckImage)
    mainDiv.appendChild(imageBox)
}