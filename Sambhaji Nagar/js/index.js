window.onload=function()
{   var images=[
    '/img/Aurangabad,_Bibi_Ka_Maqbara.jpg','Biki Ka Maqbara',
    '/img/Aurangabad___Daulatabad_Fort.jpg','Daultabad Fort',
    '/img/Cave_26,_Ajanta.jpg','Ajanta Caves',
    '/img/BAMU_gate.jpg','BAMU Gate',
    '/img/Bhadkal_Gate.jpg','Bhadkal Gate',
    '/img/Kranti_Chowk_01.jpg','Kranti Chowk',
    '/img/Kailasa_temple_overview,_Ellora.jpg','Kailasa Temple',
    '/img/Hinayana_style.jpg','Hinayana Style',
    '/img/Bibi_ka_Maqbara_-_Birds_eye_view.jpg','Maqbara Birds eye view',
    '/img/AJANTA_CAVES.jpg','AJANTA_CAVES',
    '/img/Salim_Ali_Lake.jpg','Salim_Ali_Lake',
    '/img/Siddharth_Garden_and_Zoo.jpg','Sidharth Garden'    
];
    var index=0;
    card=document.getElementById("pic").src=images[index];
    document.getElementById("info").innerHTML=images[index+1];

    document.querySelector("#next").addEventListener("click",next_img);
    function next_img(){
        if (index>=((images.length/2)-1)*2){
            index=0;
            document.getElementById("pic").src=images[index];
            document.getElementById("info").innerHTML=images[index+1];
        }
        else{
        index=index+2;
        card=document.getElementById("pic").src=images[index];
        document.getElementById("info").innerHTML=images[index+1];

        }
    }

    document.querySelector("#previous").addEventListener("click",previous);
    function previous(){
        if (index==0){
            index=images.length-2;
            card=document.getElementById("pic").src=images[index];
            document.getElementById("info").innerHTML=images[index+1];
        }
        else{
        index=index-2;
        card=document.getElementById("pic").src=images[index];
        document.getElementById("info").innerHTML=images[index+1];

        }
    }


}