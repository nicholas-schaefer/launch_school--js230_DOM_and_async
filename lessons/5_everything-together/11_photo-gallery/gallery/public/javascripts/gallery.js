async function getData(path, successCallback) {
  const url = "/" + path;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    successCallback(json);
  } catch (error) {
    console.error(error.message);
  }
}

document.addEventListener("DOMContentLoaded", (event) => {

  function drawPhotos(json){
    let slides = document.getElementById('slides');
    let photos = document.getElementById('photos');
    let template = Handlebars.compile(photos.innerHTML);
    let html = template({photos: json});

    slides.innerHTML = html;
  }

  function drawPhotoInformation(json){
    let sectionHeader = document.querySelector('section > header');
    let handlebars_photo_information = document.getElementById('photo_information');

    let template = Handlebars.compile(handlebars_photo_information.innerHTML);
    let html = template(json[0]);

    sectionHeader.innerHTML = html;
  }

  //TODO: maybe private in class?
  function renderPhotoComments(commentsJSON){
    let commentsList = document.querySelector('#comments > ul');
    let handlebars_photo_comments = document.getElementById('photo_comments');
    let handlebars_photo_comment = document.getElementById('photo_comment');

    Handlebars.registerPartial(
      "photo_comment", handlebars_photo_comment.innerHTML
    )

    let template = Handlebars.compile(handlebars_photo_comments.innerHTML);
    let html = template({ comments: commentsJSON });

    commentsList.innerHTML = html;
  }

  function drawPhotoComments(photosJSON){
    const firstPhoto = photosJSON[0];
    const commentsPath = `comments?photo_id=${firstPhoto.id}`

    getData(commentsPath, (commentsJSON) =>{
      renderPhotoComments(commentsJSON);
    });
  }

  getData("photos", (json)=>{
    drawPhotos(json);
    drawPhotoInformation(json);
    drawPhotoComments(json);
  });

  function fake(){
    let _ = {
      "src": "http://placehold.co/1280x1024",
      "title": "City Lights",
      "caption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      "created_at": "3/31/15",
      "likes": 5,
      "favorites": 2,
      "id": 1
    }
  }

})