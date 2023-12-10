/**
 * 
 * Validate token
 */

const express = require('express');
const jwt     = require('jsonwebtoken');


// PROCESS TO VALIDATE TOKEN
const validateToken = ( req = express.request, res, next ) => {
    const { token } = req.body;
    try {
        const tokenDecode = jwt.verify(token, process.env.SEED);
        res.status(200)
        .json({
            ok: true,
            data: tokenDecode.data
        })
    } catch (error) {
        console.log('[Error]', error);
        res.status(400)
        .json({
            ok: false,
            msg: 'Token not valid'
        })
    }
}

module.exports = validateToken