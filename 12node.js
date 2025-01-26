let div = document.createElement("div")
 let image=document.createElement('img')
 let h2=document.createElement("h1")
 let h1=document.createElement("h2")
 let h3=document.createElement("h3")
 let text=document.createElement("h4")
 let text1=document.createElement("h4")
 let text2=document.createElement("h4")
 let text3=document.createElement("h4")
 let text4=document.createElement("h4")
 let text5=document.createElement("h4")
 let text6=document.createElement("h4")
 let text7=document.createElement("h4")
 let text8=document.createElement("h4")
 let text9=document.createElement("h4")
 let para =document.createElement("h5")
function card(){
    div.style.height = "fit-content";
    div.style.width = "300px";
    div.style.border = "3px solid black";
    div.style.margin = "50px auto"
    div.style.backgroundColor="aqua"
    document.body.append(div);
    h2.innerHTML="INDIAN ACADAMY";
    h2.style.textAlign="center";
    h2.style.backgroundColor="pink";
    h2.style.marginTop="-1px"
    div.append(h2)
    image.setAttribute("src","https://seattletalentbuying.com/wp-content/uploads/220px-Virat_Kohli_in_PMO_New_Delhi.jpg");
    image.style.height ="30%";
    image.style.width="50%";
    image.style.padding="20px";
    image.style.borderRadius="50px";
    image.style.marginLeft="45px";
    div.append(image)
     h1.innerHTML="VIRAT. KOHLI";
    h1.style.textAlign="center";
    h1.style.color="maroon"
    div.append(h1)
    h3.innerHTML="Cricketer";
    h3.style.textAlign="center";
    h3.style.marginTop="-20px";
    div.append(h3)
    text.innerHTML="ID NO:-"
    text.style.marginLeft="25px"
    text.style.color="red"
    div.append(text)
    text1.innerHTML="DOB :-"
    text1.style.marginLeft="25px"
    text1.style.color="red"
    div.append(text1)
    text2.innerHTML="BLOOD  :-"
    text2.style.marginLeft="25px"
    text2.style.color="red"
    div.append(text2)
    text3.innerHTML="PHONE :-"
     text3.style.marginLeft="25px"
    text3.style.color="red"
    div.append(text3)
    text4.innerHTML="EMAIL :-"
     text4.style.marginLeft="25px"
    text4.style.color="red"
    div.append(text4)
    text5.innerHTML="123456789"
    text5.style.marginLeft="100px"
    text5.style.marginTop="-195px"
    text5.style.color="black"
    div.append(text5)
    text6.innerHTML="05/11/1988"
    text6.style.marginLeft="100px"
    text6.style.marginTop="5px"
    text6.style.color="black"
    div.append(text6)
    text7.innerHTML="A+"
    text7.style.marginLeft="100px"
    text7.style.marginTop="5px"
    text7.style.color="black"
    div.append(text7)
    text8.innerHTML="9618550127"
    text8.style.marginLeft="100px"
    text8.style.marginTop="5px"
    text8.style.color="black"
    div.append(text8)
    text9.innerHTML="virat@gmail.com"
    text9.style.marginLeft="100px"
    text9.style.marginTop="5px"
    text9.style.color="black"
    div.append(text9)
    para.innerHTML="Meera Bagh, Paschim Vihar, Delhi metro green line DLF City, Phase -1, Block-C, Gurgaon 35th floor, Omkar '1973', Worli, Mumbai	"
    para.style.textAlign="center"
    div.append(para)
}
function remove(){
    div.remove(div)
}