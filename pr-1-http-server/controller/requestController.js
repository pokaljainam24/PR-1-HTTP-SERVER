const fs = require('fs');

const handleRequest = (req, res) => {
    let filename = '';

    switch (req.url) {
        case '/':
            filename = './index.html'
            break;
        case '/about':
            filename = './about.html'
            break;
        case '/blog':
            filename = './blog.html'
            break;
        case '/contact':
            filename = './contact.html'
            break;
        default:
            filename = './error.html'
            break;
    }

    fs.readFile(filename, (err, result) => {
        if (!err) {
            res.end(result);
        }
    })
}

module.exports = handleRequest;