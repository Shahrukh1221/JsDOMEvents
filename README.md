# JsDOMEvents

This projects consists of DOM Events 
Like 
addEventListener ----> performing click events to open and close the popup
classList ---> used three concrete parts of it (add , remove and contains ) as per the name we can add remove the class on an element and also can check whether an element contains a class

Function Expressions ----> Don't Repeat Yourself

Remember

// A function to hide the popup
const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', hideModal);   //calling the hideModal within the eventListener dont require parenthesis

but 
//Keyboard key clicking
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('closing model');                   
    hideModal();                                      //Here we've to provide can we have to call a function not performing an event directly              
  }
});
