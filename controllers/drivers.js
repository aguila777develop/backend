/*
const { response } = require('express');
const Driver = require('../models/driver');

const getDrivers = async (req, res= response) =>{


    // traemos la lista de usuariso desde la base de datos con paginacion
    const desde = Number( req.query.desde) || 0;

    const drivers = await Driver
    .find({ _id: { $ne: req.uid}})
    .sort('-online')
    .skip(desde)
    .limit(20)


    // { ok: true, msg: 'getUsuario'}
    res.json({
        ok:true,
        msg: 'getUsuarios'
        // usuarios: drivers
    })
}

module.exports ={
    getUsuarios: getDrivers
}
*/