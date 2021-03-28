
'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert'); //this is a hapi module / plugin 
const Vision = require('vision');
const Path = require('path');

const routes = require("./routes")

const server = Hapi.server({
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
        // context: { hellomsg: "hello kjkj"  }

    });

    server.route(routes);
    server.route({
        method: 'GET',
        path: '/public/{param*}',
        handler: {

            directory: {
                path: Path.join(__dirname, 'public')
            }
        }
    })
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();