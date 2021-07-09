
const photos = require("../data/images.json");

module.exports = [

    // this method loads the home page with default layout 
    {
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            // console.log(data)
            return h.view('index', {
                title: 'Using handlebars in Hapi',
                message: 'Tutorial',
                studentArray: ['  nashaat', "mohamed"],
                photos: photos.slice(1, 24)
            });
        }
    },

    // this method is to get compiled template with from with server dynamically with the context 
    {
        method: 'POST',
        path: '/template/{template}',
        handler: (req, h) => {
            return h.view(req.params.template, req.payload, { layout: false });
        }
    },


    // this method to get n number of new Imgs 
    {
        method: 'GET',
        path: '/img',
        handler: (req, h) => {
            let x = new Array(parseInt(req.query.amount)).fill(1)
            return h.view('photo-card', { amount: x, }, { layout: false });
        }
    }
];