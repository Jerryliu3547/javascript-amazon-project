// sending out message to backend
const xhr = new XMLHttpRequest();

xhr.addEventListener('load', ()=>{
    console.log(xhr.response)
});

// there are 4 types of request of HTTP, which are
// Get, Post, Put, Delete
xhr.open('GET', 'https://supersimplebackend.dev/products/first');
xhr.send();

// status code
// start with 4(our problem) or 5(backend's problem) === failed