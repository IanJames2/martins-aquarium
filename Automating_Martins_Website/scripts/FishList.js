import React from 'react';
import {database} from './database.js';
import PropTypes from 'prop-types';

const HTMLrep = database(fish) => {
    const htmlString = '<article class="fishList">'
    for (const fish of fishes) {

        htmlString += `<section class="fish card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length}</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    const FishList = () => {


    return (
        <div>
            <HTMLrep></HTMLrep>
        </div>
    );
};
    
FishList.propTypes = {};

export default FishList;

