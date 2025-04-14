// this section demonstrates how to grab DOM Elements for manipulation
const form = document.getElementById('resourceForm');
const resourceList= document.getElementById('resourceList');
const counter=document.getElementById('counter');
const search=document.querySelector('.search-input');
const filter=document.querySelectorAll('.filter-btn');

//this section demonstrates how to handles state management in javascript
let resources=JSON.parse(localStorage.getItem('resources'));
let currentFilter="all";
let searchTerm='';

// This section demonstrates how we should  our initialize our application
function init(){
    renderResources();
    bindEvents();
    updateCounter();


};[]
//this section demonstrates how to bind events to DOM elements
function bindEvents(){
   form.addEventListener('submit',handleFormSubmit); 
   search.addEventListener('input',handleSearch);
   resourceList.addEventListener('click',handleResourceListClick);
   filterButtons.forEach(btn=>{
    btn.addEventListener('click',handleFilterClick);
   });
}

//this section demonstrates how to handle form submissions js
function handleFormSubmit(e){
    e.preventDefault();
   

const formData=new FormData(form);
const resource={
  
    name:formData.get('resourceName').trim(),
    type: formData.get('resourceType'),
    location: formData.get('resourceLocation').trim(),
    id:Date.now().toString(),
    dateAdded:new Date().toLocaleDateString(),
}
if (validateForm(resource)){
    addResources(resource);
    form.reset();
    clearErrors();
}
};[];
// this section demonstrates how to implement form validate in js
function validateForm(resource){
    showError('nameError','Resource name is required');
    isValid=false;
}
if(!resource.type){
    showError('typeError','Resource type is required');
    isValid=false;
}
if(!resource.location){
    showError('locationError','Resource location is required');
    isValid=false;
}
return isValid;


function showError(elementId,message){
    const errorElement=document.getElementById(elementId);
    errorElement.textContent=message;

}
function clearErrors(){
    document.querySelectorAll('.error').forEach(element=>{
        element.textContent='';
    });
}
