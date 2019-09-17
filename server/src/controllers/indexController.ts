import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        if(res.status(200)) {
            res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>OasisAPI</title>
                <style type="text/css">
                    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
                    html {
                        font-family: 'Roboto', sans-serif;
                        background-color: darkgray;
                    }
                    .container {
                        text-align: center;
                        color: white;
                        margin-top: 10%;
                    }
                    .lista {
                        list-style: none;
                        font: italic;
                        color: azure;
                        text-align: center;
                    }
                    ul li {
                        list-style: none;
                        font-style: italic;
                        font-size: 24px;
                    }
                    h1 {
                        font-size: 46px:
                        font-weight: bolder;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>BIENVENIDO A LA API OASIS</h1>
                    <h4>Indique las rutas que desee consultar</h4>
                </div>
                <div class="lista">
                    <ul>
                        <li><a href="#">api/users</a></li>
                        <li><a href="#">api/users/id</a></li>
                        <li><a href="#">api/productos</a></li>
                        <li><a href="#">api/productos/id</a></li>
                        <li><a href="#">api/pedidos</a></li>
                        <li><a href="#">api/pedidos/id</a></li>
                    </ul>
                </div>
            </body>
            </html>`);
        } else {
            res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>OasisAPI</title>
                <style type="text/css">
                    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
                    html {
                        font-family: 'Roboto', sans-serif;
                        background-color: darkgray;
                    }
                    h1 {
                        font-weight: bolder;
                        font-size: 38px;
                        color: red;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>SE HA PRODUCIDO UN ERROR</h1>
                    <h6>Verifique la ruta especificada</h6>
            </body>
            </html>`);
        }
    }

}

export const indexController = new IndexController();