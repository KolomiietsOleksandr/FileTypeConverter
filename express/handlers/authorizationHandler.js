function loginRef(req, res) {
    res.render('login');
}

function refisterRef(req, res) {
    res.render('register');
}

module.exports = {
    loginRef,
    refisterRef,
};