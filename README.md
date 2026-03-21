Práctica de Craps - Payout Trainer

Práctica de Craps es un simulador de entrenamiento diseñado para dealers y entusiastas del Craps que buscan perfeccionar sus cálculos de pagos bajo presión. La aplicación utiliza una estética de "High Roller Casino" y lógica matemática real de mesa.

Características Principales
   Lógica de Casino Real: Cálculos basados en una ficha mínima de 1.000 unidades.
   Fórmulas de Proposición: Entrenamiento específico usando las reglas mentales de los dealers:
       Craps 2-12: Regla de x10 - 1/3 (Pago 30 a 1).
       Craps 3: Regla de x4 + 1/3 (Pago 15 a 1).
    Redondeo Inteligente: Sistema de validación que redondea automáticamente al múltiplo de 1000 más cercano, simulando la resolución de disputas en una mesa real.
    Estadísticas en Tiempo Real: Seguimiento de intentos y aciertos con persistencia de datos vía LocalStorage.
    Diseño Premium: Interfaz Glassmorphism en verde esmeralda y oro, optimizada para dispositivos móviles.

Stack Tecnológico
    React 18 + Vite (Velocidad de desarrollo ultra rápida).
    CSS3 (Variables personalizadas, Flexbox/Grid y efectos de desenfoque de fondo).
    Git (Control de versiones profesional).

La Matemática detrás de la Práctica de Craps
A diferencia de una calculadora común, la Práctica de Craps obliga al cerebro a pensar en "unidades de mil".
Para los pagos fraccionarios, el motor de la app utiliza multiplicadores precisos (29/3 y 13/3) y luego aplica un filtro de redondeo.
Esto garantiza que si apuestas $4.000$ al Craps 2-12, la respuesta correcta sea $39.000$, entrenando al usuario en el manejo de restos y fracciones de ficha.

Instalación y Uso
Podés probar el proyecto en Vercel: https://practica-craps.vercel.app
Si querés correr este proyecto localmente:
    Cloná el repositorio: $ git clone https://github.com/GeCirou/Practica_Craps.git
    Instalá las dependencias: $ npm install
    Corré el servidor de desarrollo: $ npm run dev

Autor: Alfredo Gerardo Cirou – Desarrollo y Lógica de Juego – https://github.com/GeCirou