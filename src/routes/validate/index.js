const router = require('express').Router();
const validateToken = require('../../controllers/validate');



/**
 * @openapi
 * /token/validate:
 *   post:
 *     tags:
 *       - Validación del token de acceso
 *     parameters:
 *       - in: header
 *         name: token
 *         schema:
 *           type: string
 *         description: Token to decode
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
 *                   type: object 
 *                   properties:
 *                      name: 
 *                          type: string
 *                          example: username
 *                      lastname: 
 *                          type: string
 *                          example: user lastname
 *                      email: 
 *                          type: string
 *                          example: user email
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
 *                    exapmle: token not valid
 */
router.post('/validate', validateToken);


module.exports = router