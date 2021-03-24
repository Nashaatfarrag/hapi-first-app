
'use strict';

const Hapi = require('@hapi/hapi');
const Vision = require('vision');
const hbs = require('hbs');
const Path = require('path');
const Inert = require('@hapi/inert'); //this is a hapi module / plugin 

const photos = require("./data/images.json")

const server = Hapi.server({
    // routes: {
    //     files: {
    //         relativeTo: Path.join(__dirname, 'css')
    //     }  
    // },
    port: process.env.PORT || 3000,
    host: 'localhost'
});

const init = async () => {
    await server.register(Inert);  // Static file and directory handlers for hapi.js.
    await server.register(Vision); // Template rendering support for hapi.js.

    server.views({
        engines: {
            hbs: require('hbs')
        },
        relativeTo: __dirname,
        partialsPath: "./templates/partials",
        layoutPath: './templates/layout',
        helpersPath: './templates/helpers',
        path: './templates',
        layout: "default-layout",

    });



    server.route({
        method: 'GET',
        path: '/hello',
        handler: (req) => {
            // console.log(data)
            return "hello world"
        }
    });

    server.route({
        method: 'GET',
        path: '/public/{param*}',
        handler: {

            directory: {
                path: Path.join(__dirname, 'public')
            }
        }
    })

    // h.view  
    server.route({
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
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();