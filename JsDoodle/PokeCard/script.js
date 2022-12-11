const typeColor = {

}

const url = "https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getPokeData = () =>{
    let id = Math.floor(Math.random() * 150) + 1;

    const finalUrl = url + id;

    fetch(finalUrl)
        .then((response) => response.json())
        .then((data)=>{
            generateCard(data);
        });
}

let generateCard = (data) => {
    console.log(data);

    const hp = data.stats[0].base_stat;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;

    const themeColor = typeColor[data.types[0].type.name];
    console.log()
}