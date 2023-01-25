// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
// btn.addEventListener('click', function(e){
// e.currentTarget.parentElement.parentElement.classList.toggle('show-text');
// });
// });

const questions = document.querySelectorAll('.question');

questions.forEach(function(q){
const btn = q.querySelector('.question-btn');
btn.addEventListener('click',function(){
    
    questions.forEach(function(i){
if (i !== q){
    i.classList.remove('show-text');
}
    });
    
    q.classList.toggle('show-text');
});
});