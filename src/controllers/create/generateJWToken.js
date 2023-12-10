/**
 * 
 * Create token for login
 */

const express = require('express');
const jwt     = require('jsonwebtoken');

const generateToken = (req = express.request, res, next) => {
    const token = jwt.sign({
        data: {...req.body}
    }, process.env.SEED );

    if( !token ) {
        res.status(400)
        .json({
            ok:false,
            msg: 'Somenting did wrong whit authentication'
        })
    }

    res.status(200)
        .json({
            ok: true,
            data: token
        })
}

module.exports = generateToken