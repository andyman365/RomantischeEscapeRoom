document.querySelector('.btn').addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#start').scrollIntoView({ behavior: 'smooth' });
});
