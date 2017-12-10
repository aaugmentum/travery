module.exports = function(app, db) {
    app.get('/webhook', (req, res) => {
        res.send('Hello');
    });

    

}