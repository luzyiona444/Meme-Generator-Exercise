document.addEventListener("DOMContentLoaded", function(){
    var memeForm = document.getElementById("formMeme");
    var listGallery = document.querySelector(".galleryMeme");

memeForm.addEventListener("submit", function(event){
     event.preventDefault();

        // creating the li element

    var memeLi = document.createElement('li');
    memeLi.classList.add("meme-img");
    
    // creating the canvas element to put our img background
        var topText = document.getElementById("textTop");
        var urlInput = document.getElementById('imageUrl').value,
        src =  urlInput;
        img = document.createElement('img');
        img.src = src;


    var topTextDiv = document.createElement('div');
    topTextDiv.classList.add("text", "top");
    topTextDiv.innerText = document.getElementById("textTop").value;


    var bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add("text", "bottom");
    bottomTextDiv.innerText = document.getElementById("textBottom").value;

    var removeDiv = document.createElement('div');
    removeDiv.classList.add("redCross");
    removeDiv.innerText = "X";
    removeDiv.style.color = "red";
    


listGallery.appendChild(memeLi);
memeLi.appendChild(img);
memeLi.appendChild(topTextDiv);
memeLi.appendChild(bottomTextDiv);
memeLi.appendChild(removeDiv);
memeForm.reset();
    });
function remove(event){
  event.target.parentNode.remove();
}
listGallery.addEventListener('click', remove, false);
});