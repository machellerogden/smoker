module.exports = {
    create: function (req, res) {
        console.log('==========LOGGER==========');
        console.log(req.body);
        console.log('========END LOGGER========');
        res.json({status: 'Nice Job!'});
    }
};
