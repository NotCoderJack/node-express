'use strict'
exports.confirmSend = (req, res, next) => {
    res.json({status: 0, message: 'OK',
        parta: req.query.parta,
        partb: req.query.partb,
        content: req.query.content,
        email: req.query.email
    });
}
