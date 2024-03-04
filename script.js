document.addEventListener('DOMContentLoaded', () => {
    let heroTex = document.getElementById('heroTex');
    let leftTex = document.getElementById('leftTex');
    let rightTex= document.getElementById('rightTex');
    let midS= document.getElementById('midS');
    let firstC= document.getElementById('firstC');
    let secondC= document.getElementById('secondC');
    let Earth= document.getElementById('earth');
    let gallery=document.getElementById('gallery');
    let product=document.getElementById("product");
    let sidepannel=document.getElementById('sidepannel');
 // Get the video element
// Get the video element
const video = document.querySelector('.vidCon video');

// Function to change video source
function changeVideoSource() {
    // Check if the screen width is less than or equal to 480 pixels
    if (window.innerWidth<603) {
        // Change the video source

        
        sidepannel.className='rightD'
        video.src = 'Assests/light_ver.mp4'; // Replace 'new_video_source.mp4' with your actual video source

    } else {
        
        sidepannel.className='rightC'
        // If screen width is greater than 480 pixels, revert to original source
        video.src = 'Assests/blue light.mp4';
        window.addEventListener('scroll', () => {
        
            let value = window.scrollY; // Corrected from window.screenY

                heroTex.style.marginTop = value * 0.907+ 'px';
     
            leftTex.style.top= value * -1.7 +'px';
    
            rightTex.style.right=value*-2.4+'px';
        
                firstC.style.right=value*-0.490+'px';
            
            secondC.style.left=value*-0.470+'px';
    
            Earth.style.rotate=value+0.5+'deg';
            if( parseInt(heroTex.style.marginTop) > 1719  ||heroTex.style.marginTop==='1719'+'px')
            {
                
                heroTex.innerHTML="Eleganza";
                heroTex.style.color= "#fff";
            }
            else{
                heroTex.innerHTML="ELEGANZA";
                heroTex.style.color= "transparent";
    
            }
    
            product.addEventListener("mouseenter",()=>{
    
                gallery.style.animationName="cards";
                heroTex.innerHTML="Eleganza";
                heroTex.style.color= "#fff";
                heroTex.style.marginTop = 1814+ 'px';
            });
            product.addEventListener("mouseleave",()=>{
    
                gallery.style.animationName="card";
            });
            
            
        });
    }
}

// Call the function initially
changeVideoSource();

// Listen for window resize events
window.addEventListener('resize', () => {
    // Call the function whenever the window is resized
    changeVideoSource();
});


});
function ToggleSP(){
    let sidepannel=document.getElementById('sidepannel');
    sidepannel.style.height=100+'%';
    sidepannel.childNodes[1].style.display='flex';
    sidepannel.childNodes[1].style.marginTop=100+'px';
    ham.style.display='none';
    cross.style.display='flex';
}
function CloseSidePanel(){
    let sidepannel=document.getElementById('sidepannel');
    sidepannel.style.height=0+'px';
    sidepannel.childNodes[1].style.display='none';
    sidepannel.childNodes[1].style.marginTop=-180+'px';

    ham.style.display='flex';
    cross.style.display='none';
}
function chw(){
    alert(window.innerHeight+" "+screen.width);
}