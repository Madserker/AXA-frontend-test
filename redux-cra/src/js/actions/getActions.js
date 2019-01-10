import {resolve} from "react-resolve"
var api = "https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json";

export function fetchGnomes(){
    return function(dispatch){
        fetch(api)
        .then(res => res.json())
        .then(gnomes =>
            dispatch({
                type:"FETCH_GNOMES",
                payload: gnomes.Brastlewark
            }));
    }
}

export function getGnomeInfo(id){
    return function(dispatch){
        fetch(api)
        .then(res => res.json())
        .then(json => json.Brastlewark)
        .then(gnomes=> gnomes.map((gnome) => {
            if(gnome.id==id){
                console.log(gnome);
                dispatch({
                    type:"GET_GNOME",
                    payload: gnome
                })
                resolve()
            }
        }))
    }
}


export function fetchGnomesFilters(hairFilters,professionFilters,gnomes){
    return function(dispatch){   
        fetchGnomesHairFilters(hairFilters,gnomes).then(
            gnomesf => {
                fetchGnomesProfessionFilters(professionFilters, gnomesf).then(
                    gnomesff=>
                        dispatch({
                            type:"FETCH_GNOMES_FILTERS",
                            payload: gnomesff
                        })
                    )
            }
        )
    }
}

export function search(input,gnomes){
    return function(dispatch){  
        console.log(input)
        searchGnomes(input,gnomes).then(
            gnomesf=>{
                dispatch({
                    type:"FETCH_GNOMES_FILTERS",
                    payload: gnomesf
                })
            }
        )

                    
            
        
    }
}

//SEARCH FILTERS ACTIONS=================================================
//Se puede aplicar mas de un filtro a la vez,
//Por eso necesitamos aplicar estos filtros a la lista que tenemos en state de store
//tambien ordenamos la lista que retornamos de los filtros, y no la lista original
function fetchGnomesHairFilters(hairFilters,gnomes){  
    if(hairFilters.length==0){return new Promise(function(resolve,reject){resolve(gnomes)})} 
    return new Promise(function (resolve, reject){ 
        var gnomesFiltered = [];        
        const promises = hairFilters.map(hair=>
            filterByHairColor(hair,gnomes)
            .then(gnomes => gnomes.map(gnome=>{gnomesFiltered.push(gnome)})));
         resolve(gnomesFiltered);
        });
    }

function fetchGnomesProfessionFilters(professionFilters,gnomes){  
    if(professionFilters.length==0){return new Promise(function(resolve,reject){resolve(gnomes)})}  
    return new Promise(function (resolve, reject){  
        var gnomesFiltered = [];        
        const promises = professionFilters.map(profession=>
            filterByProfession(profession,gnomes)
            .then(gnomes => gnomes.map(
                gnome=>{gnomesFiltered.push(gnome)}
            )));
        resolve(gnomesFiltered);
            // dispatch({
            //     type:"FETCH_GNOMES",
            //     payload: gnomesFiltered
            // })
        });      
    
}

//SEARCH FILTERS FUNCTIONS=================================================
function filterByHairColor(hairColor, gnomes){
    return new Promise(function(resolve, reject){
        var gnomesFiltered = [];
        gnomes.map((gnome =>{
            if(gnome.hair_color === hairColor){
                console.log("water")
                gnomesFiltered.push(gnome);
            }
        }));

         resolve(gnomesFiltered);
    });
}



function filterByProfession(profession, gnomes){
    return new Promise(function(resolve, reject){
    var gnomesFiltered = [];

    gnomes.map((gnome =>{
        gnome.professions.map(professionG => {
            if(professionG == profession){
                console.log("wind")
                gnomesFiltered.push(gnome);
            }
        }

            )


    }));

     resolve(gnomesFiltered);
});
    
}



function searchGnomes(input, gnomes){
    return new Promise(function(resolve, reject){
        var gnomesFiltered = [];
        gnomes.map((gnome =>{
            if(gnome.name.includes(input)){
                gnomesFiltered.push(gnome);
            }
        }));

         resolve(gnomesFiltered);
    });
}

//SEARCH SORT==============================================================================