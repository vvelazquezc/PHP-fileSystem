<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FileSystem</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="src/css/main.css">
</head>
<body>
    <div class="main-container">
    <header class="wrapper-header">
        <div class="header-arrows">
            <svg width="18px" height="17px" viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="prev" transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)">
                    <polygon class="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                    <polygon class="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                    <path d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
                </g>
            </svg>
            <svg width="18px" height="17px" viewBox="-1 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g>
                    <polygon class="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                    <polygon class="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596"></polygon>
                    <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z"></path>
                </g>
            </svg>
        </div>
        <h3>Here it will be the path root</h3>
        <div class="search-box">
            <input placeholder="Search..."><span class="icon glyphicon glyphicon-search"></span>
        </div>
    </header>
    <aside class="wrapper-folders">
        <div class="folders">
            <h4>Favoritos</h4>
            <div class="folders-icon hover-folder">
                <img src="assets/img/folders.svg" alt="folder-icon">
                <h5>root</h5>
            </div>
            <div class="folders-icon">
                <img src="assets/img/trash-can.svg" alt="folder-icon">
                <h5>trash</h5>
            </div>
        </div>

        <div class="folders folders-edit">
            <h4>Edit </h4>
            <div class="folders-icon">
                <img src="assets/img/refresh.svg" alt="folder-icon">
                <h5>refresh</h5>
            </div>
            <div class="folders-icon">
                <img src="assets/img/editar.svg" alt="folder-icon">
                <h5>edit</h5>
            </div>
            <div class="folders-icon">
                <img src="assets/img/remove.svg" alt="folder-icon">
                <h5>remove</h5>
            </div>
        </div>
    </aside>
    <div class="wrapper-roots">
        <div class="folders-icon">
            <img src="assets/img/folders.svg" alt="folder-icon">
            <p class="text">root</p>
        </div>
    </div>
    </div>
</body>
</html>