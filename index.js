document.addEventListener("DOMContentLoaded", function() {
    const yesButton = document.getElementById("yesButton");
    const nextButton = document.getElementById("nextButton");
    const noButton = document.getElementById("noButton");
    const goBack = document.getElementById("backButton");



    nextButton.addEventListener("click", event => {
        document.getElementById('firstPage').style.display = 'none';
        document.getElementById('secondPage').style.display = 'flex';
        document.getElementById('secondPage').style.flexDirection = 'column';
        document.getElementById('secondPage').style.justifyContent = 'center';
        document.getElementById('secondPage').style.alignItems = 'center';
    });

    goBack.addEventListener("click", event => {
        document.getElementById('thirdPage').style.display = 'none';
        document.getElementById('secondPage').style.display = 'flex';
        document.getElementById('secondPage').style.flexDirection = 'column';
        document.getElementById('secondPage').style.justifyContent = 'center';
        document.getElementById('secondPage').style.alignItems = 'center';
    });

    noButton.addEventListener("click", event => {
        document.getElementById('secondPage').style.display = 'none';
        document.getElementById('thirdPage').style.display = 'flex';
        document.getElementById('thirdPage').style.flexDirection = 'column';
        document.getElementById('thirdPage').style.justifyContent = 'center';
        document.getElementById('thirdPage').style.alignItems = 'center';
    });
    
    yesButton.addEventListener("click", event => {
        document.getElementById('secondPage').style.display = 'none';
        document.getElementById('lastPage').style.display = 'flex';
        document.getElementById('lastPage').style.flexDirection = 'column';
        document.getElementById('lastPage').style.justifyContent = 'center';
        document.getElementById('lastPage').style.alignItems = 'center';

        function createHeart() {
            const heart = document.createElement("div");
            heart.classList.add("heart");
        
            heart.style.left = Math.random() * window.innerWidth + "px";  
        
            const size = Math.random() * 2 + 1 + "rem";
            heart.style.fontSize = size;
        
            heart.style.animationDuration = Math.random() * 4 + 3 + "s"; 
        
            heart.style.transform = `rotate(${Math.random() * 360}deg)`;
        
            heart.style.opacity = Math.random() * 0.5 + 0.5;
        
            heart.innerText = "💗";
        
            document.body.appendChild(heart);
        
            setTimeout(() => {
                heart.remove();
            }, 8000);
        }
        
        setInterval(createHeart, 300);
    });

});