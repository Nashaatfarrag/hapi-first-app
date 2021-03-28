
const photos = require("../data/images.json");

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            // console.log(data)
            return h.view('index', {
                title: 'Using handlebars in Hapi',
                message: 'Tutorial',
                studentArray: ['  nashaat', "mohamed"],
                photos: photos.slice(1, 20)
            });
        }
    },
    {
        method: 'GET',
        path: '/img',
        handler: (req, h) => {
            // console.log(data)
            return h.view('photo-card', {
                title: 'Using handlebars in Hapi',
                message: 'Tutorial',
                studentArray: ['  nashaat', "mohamed"],
                photos: photos.slice(1, 20)
            }, { layout: false });
        }
    }
];