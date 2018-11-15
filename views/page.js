const tempView  = require('./helper');

function page() {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <link rel="stylesheet" href="/publics/index.css">
    <title>Document</title>
</head>

<body>
    <section class='main'>
        <div class='headerbar'>
            <header>
                GeoMindr
            </header>
        </div>
    </section>
</body>
</html>
    `;
}

module.exports = page;