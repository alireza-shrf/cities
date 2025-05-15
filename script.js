let london=["london","London is the capital city of England.<br> It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants."];
let paris=["paris","France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré"];
let tokyo=["tokyo","Japans busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum) to a reconstructed kabuki theater"];

let desc=document.getElementById("desc");
let cityname=document.getElementById("cityname");
function getlondon(){
    cityname.innerHTML=london[0];
    desc.innerHTML=london[1]
}
getlondon();

function getparis(){
    cityname.innerHTML=paris[0];
    desc.innerHTML=paris[1]
}
function gettokyo(){
    cityname.innerHTML=tokyo[0];
    desc.innerHTML=tokyo[1]
}
