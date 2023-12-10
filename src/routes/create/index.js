const router = require('express').Router();
const generateToken = require('../../controllers/create/generateJWToken');


/**
 * @openapi
 * /token/create:
 *   post:
 *     tags:
 *       - Creacion del token de acceso
 *     parameters:
 *       - in: body
 *         name: userData
 *         schema:
 *           type: object
 *           properties: 
 *              name: 
 *                  type: string
 *                  example: username
 *              lastname: 
 *                  type: string
 *                  example: user lastname
 *              email: 
 *                  type: string
 *                  example: user email
 *         description: Data to be tokenization
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: string 
 *                   exapmle: token
 *       400:
 *         description: FAILED
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 ok:
 *                    type: boolean
 *                    example: false
 *                 msg:
 *                    type: string 
 *                    exapmle: token
 */
router.post('/create', generateToken);


module.exports = router