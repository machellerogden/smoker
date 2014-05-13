module.exports = {
    create: function (req, res) {
        console.log(req.data);
        res.json({status: 'Nice Job!'});
    }
};
