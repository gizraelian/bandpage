let commentEmptyParent = document.getElementById('commentParent');
let commentsList = '';

const KEY_API = "bcf2c26d-8eb0-4b64-8621-933dd22a0c01"; 
const url = "https:project-1-api.herokuapp.com"; 

let commentFunction = function() {
  let request = fetch("https://project-1-api.herokuapp.com/comments" + "?api_key=" + KEY_API);
  request.then((response) => {
    return response.json();
  }).then((commentsList) => {
      commentsDisplayFunctionLoop(commentsList);
    console.log(commentsList);
  });
};

window.onload = commentFunction();

//postcomment function
const init = {
  body: '',
  method: 'POST',
  headers: {
    'content-type': 'application/json'
  }
};

let newPost = function() {
  let request = fetch("https://project-1-api.herokuapp.com/showdates" + "?api_key=" + KEY_API);
  request.then((response) => {
    return response.json();
  }).then((data) => {
  });


  let postRequest = fetch("https://project-1-api.herokuapp.com/comments?api_key=" + KEY_API, init);
  postRequest.then((response) => {

    // post response
    // console.log(response.status);
    return response.json();
  }).then((justPosted) => {

    // post response json
    // console.log(justPosted);
    lastPostedId = justPosted.id;

    return fetch("https://project-1-api.herokuapp.com/comments?api_key=" + KEY_API);
  }).then((response) => {

    // comment list response
    return response.json();
  }).then((commentsList) => {

    // commentsArray = commentsList;
    // comment list response json
    console.log(commentsList);
    const match = commentsList.find((item) => {
      return item.id === lastPostedId;
    });
    console.log(match);
  });
}
  
  // 6
  /*
  let badRequest = fetch("https://project-1-api.herokuapp.com/notanendpoint");
  badRequest.then((response) => {


  }, (err) => {
    console.err('Caught!');
  });
  */  
  
 function commentsDisplayFunctionLoop(commentsList)
 {
     for(var i = 0; i < commentsList.length; i++)
     {
         let commentContainer = document.createElement("div");
         let commentName = document.createElement("p");
         let commentText = document.createElement("p");
         
         commentName.innerHTML = commentsList[i].name;
         commentText.innerHTML = commentsList[i].comment;
     
         commentContainer.setAttribute('id', "idCommentContainer");
         commentName.setAttribute('id', "idCommentName");
         commentText.setAttribute('id', "idCommentText");
     
         commentEmptyParent.appendChild(commentContainer);
         commentContainer.appendChild(commentName);
         commentContainer.appendChild(commentText);
     }   
 }
 
 let button = document.getElementById('commentsForm');
 button.addEventListener('submit', (event) => 
 {
  event.preventDefault(); 

  let newName = event.target[0].value;
  let newComment = event.target[1].value;

  init.body = JSON.stringify({ name: newName, comment: newComment })
  console.log(init)

  newPost();

  commentFunction();

    // postComment();
 
     let storeNameInput = document.getElementById('commentsInputName').value;
     let storeTextBodyInput = document.getElementById('commentsInputComment').value;
     let newCommentObj = 
     {
         name: storeNameInput,
         comment: storeTextBodyInput
     };
 
     document.getElementById('commentParent').innerHTML = '';
     commentsDisplayFunctionLoop(commentsList);
 
 });
