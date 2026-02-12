export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  return res.status(403).send(`
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Accès Restreint - FC 26</title>
        <style>
            body { 
                background-color: #050505; 
                color: #ffffff; 
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                height: 100vh; 
                margin: 0;
            }
            .container {
                background: #111;
                padding: 40px;
                border-radius: 20px;
                border: 1px solid #222;
                text-align: center;
                max-width: 450px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            }
            h1 { color: #e74c3c; font-size: 24px; margin-bottom: 20px; }
            p { color: #bbb; line-height: 1.6; font-size: 16px; }
            .flags { font-size: 40px; margin: 20px 0; }
            .highlight { color: #fff; font-weight: bold; border-bottom: 2px solid #e74c3c; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>ACCÈS RESTREINT 🚫</h1>
            <p>Désolé, ce contenu n'est pas disponible dans votre pays actuel.</p>
            <div class="flags">🇵🇹 🇪🇸 🇸🇦</div>
            <p>Pour accéder au jeu, veuillez activer un <span class="highlight">VPN</span> et vous localiser dans l'un des pays suivants :</p>
            <p><b>Portugal, Espagne ou Arabie Saoudite.</b></p>
            <p style="font-size: 12px; margin-top: 30px; color: #555;">Une fois le VPN activé, rafraîchissez la page.</p>
        </div>
    </body>
    </html>
  `);
}
