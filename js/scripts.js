let progressBar = document.querySelector('.progress-bar');
let hauteurTot  = (document.body.scrollHeight)-window.innerHeight;

window.addEventListener('scroll', function() {
  let alreadyScrolled = window.pageYOffset;
  let largeurPB = (alreadyScrolled / hauteurTot)*100;
  progressBar.style.width= largeurPB+'%';
});