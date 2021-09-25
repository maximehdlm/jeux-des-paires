// var cartesJeux = ["img/Dardevil1.jpg", "img/Dardevil2.jpg", "img/Drstrange2.jpg", "img/Drstrange2.jpg"] //, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
// var image_aleatoire = cartesJeux[Math.floor(Math.random() * 4)];
// var imgd1;
// var imgd2;
// console.log(image_aleatoire);
//     function getRandomInt() {
//         n =  Math.floor(Math.random() * 3);
//     }
  

         
//     function imageRetourne(){        
//         document.getElementById("image1").src = image_aleatoire;
//     }

//     function imageRetourne2(){
//         document.getElementById("image2").src = image_aleatoire;
           
//     }

//     function imageRetourne3(){
//         document.getElementById("image3").src = image_aleatoire;
//         //img3.src = "img/Drstrange1.jpg";
//     }
 
//     function imageRetourne4(){
//         document.getElementById("image4").src = image_aleatoire;
//         //img4.src = "img/Drstrange2.jpg";
//     }
 
//     function imageRetourne5(){
//         var img5 = document.getElementById("image5");
//         img5.src = "img/Ghost-Rider1.jpg";
//     }
 
//     function imageRetourne6(){
//         var img6 = document.getElementById("image6");
//         img6.src = "img/Ghost-Rider2.jpg";
//     }

//     function imageRetourne7(){
//         var img7 = document.getElementById("image7");
//         img7.src = "img/Hulk.jpg";
//     }   

//     function imageRetourne8(){
//         var img8 = document.getElementById("image8");
//         img8.src = "img/hulk2.jpg";
//     }    
    
//     function imageRetourne9(){
//         var img9 = document.getElementById("image9");
//         img9.src = "img/HumanTorch.jpg";
//     }   
    
//     function imageRetourne10(){
//         var img10 = document.getElementById("image10");
//         img10.src = "img/HumanTorch2.jpg";
//     }
    
//     function imageRetourne11(){
//         var img11 = document.getElementById("image11");
//         img11.src = "img/ScarletWitch1.jpg";
//     }

//     function imageRetourne12(){
//         var img14 = document.getElementById("image12");
//         img14.src = "img/ScarletWitch2.jpg";
//     }

//     function imageRetourne13(){
//         var img13 = document.getElementById("image13");
//         img13.src = "img/Spiderman.jpg";
//     }

//     function imageRetourne14(){
//         var img14 = document.getElementById("image14");
//         img14.src = "img/Spiderman2.jpg";
//     }

//     function imageRetourne15(){
//         var img15 = document.getElementById("image15");
//         img15.src = "img/Thor.jpg";
//     }

//     function imageRetourne16(){
//         var img16 = document.getElementById("image16");
//         img16.src = "img/Thor2.jpg";
//     }

//     function imageRetourne17(){
//         var img17 = document.getElementById("image17");
//         img17.src = "img/Vision.jpg";
//     }

//     function imageRetourne18(){
//         var img18 = document.getElementById("image18");
//         img18.src = "img/Vision2.jpg";
//     }

    //function paire(){    
        // imgd1 = imageRetourne();
        // imgd2 = imageRetourne2();

        //function paire(){
        


        // cartesJeux[0] = imgd1;
        // cartesJeux[1] = imgd1;

        // if(cartesJeux[0] == cartesJeux[1]){
        //     alert("roger");
        // }else{
        //     alert("eloi");
        // }
    

 
        
    

    // console.log(imgd1);

//Tentative de function qui melange les cartes et les affiches


//Declaration de la variable carteJeux, ou sont attribués comme valeurs les adresses des images
var cartesJeux = ["img/Dardevil1.jpg", "img/Dardevil2.jpg", "img/Drstrange2.jpg", "img/Drstrange2.jpg", "img/Ghost-Rider1.jpg", "img/Ghost-Rider2.jpg", "img/Hulk.jpg", "img/Hulk2.jpg", "img/HumanTorch.jpg", "img/HumanTorch2.jpg", "img/ScarletWitch1.jpg", "img/ScarletWitch2.jpg", "img/Spiderman.jpg", "img/Spiderman2.jpg", "img/Thor.jpg", "img/Thor2.jpg", "img/Vision.jpg", "img/Vision2.jpg"];

//Variable qui a comme valeur une balise html : img
var imgVerso = document.getElementsByTagName("img");

var click = 0;

//fonction qui permet d'appeler un nombre aleatoire , le .sort permet d'etre appeler dans un tableau pour le melanger comme un shaker
function melange(array){
    array.sort(()=> Math.random() - 0.5);
}

//on ajoute la variable cartesJeux à la fonction pour le melanger
melange(cartesJeux);


for(var i = 0; i < imgVerso.length; i++){
    imgVerso[i].src2 = cartesJeux[i];
    imgVerso[i].addEventListener("click", function verso(e){
        e.target.src = e.target.src2;
        click++; 
        if(click == 2){
            if(cartesJeux.value == cartesJeux.value)
            alert("coucou")
        }
        // if(click == 2){
        //     document.location.reload();
        // }
        //console.log(click)
    })
};






