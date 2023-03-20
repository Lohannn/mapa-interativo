'use strict'

const mapa = document.querySelector('svg')

import { getEstadoInfo } from './api.js'
import { getCidades } from './api.js'

const criaCard = (estado, cidade) => {

    const stateBox = document.createElement('div')
    stateBox.classList.add('state-info-box')
    stateBox.id = 'state-info-box'

    const stateInfo = document.createElement('div')
    stateInfo.classList.add('state-info')

    const ufBox = document.createElement('div')
    ufBox.classList.add('uf')

    const sigla = document.createElement('p')
    sigla.textContent = estado.uf

    const stateNames = document.createElement('div')
    stateNames.classList.add('state_names')

    const title = document.createElement('h2')
    title.classList.add('title')
    title.textContent = estado.descricao

    const capital = document.createElement('p')
    capital.classList.add('desc')
    capital.textContent = 'Capital: ' + estado.capital

    const regiao = document.createElement('p')
    regiao.classList.add('desc')
    regiao.textContent = 'Região: ' + estado.regiao

    const listContainer = document.createElement('div')
    listContainer.classList.add('list-container')

    const cities = document.createElement('p')
    cities.classList.add('desc')
    cities.textContent = 'Cidades: '

    const cityList = document.createElement('ul')
    cityList.classList.add('cities-list')

    stateBox.append(stateInfo, listContainer)
    stateInfo.append(ufBox, stateNames)
    ufBox.append(sigla)
    stateNames.append(title, capital, regiao)
    listContainer.append(cities, cityList)

    cidade.cidades.forEach(function (cidade) {
        const city = document.createElement('li')
        city.textContent = cidade

        cityList.append(city)
    });

    return stateBox
}

const carregarCard = async (estado, cidades) => {
    const card = document.getElementById('state-info-box')
    const info = criaCard(estado, cidades)

    card.replaceWith(info)
}

const getEstado = async function(event){
    const estado = event.target.id.replace("BR-", '');

    const estadoApi = await getEstadoInfo(estado);
    const cidadesApi = await getCidades(estado);

    carregarCard(estadoApi, cidadesApi)
}

mapa.addEventListener('click', getEstado)