'use strict'

export const getEstadoInfo = async function(sigla){
    const url = `http://localhost:8080/senai/estado/sigla/${sigla}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}

export const getCidades = async function(sigla){
    const url = `http://localhost:8080/v1/senai/cidades/estado/sigla/${sigla}`
    const response = await fetch(url)
    const data = await response.json()

    return data
}