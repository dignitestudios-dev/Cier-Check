const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const stripe = require('stripe')('sk_test_51Q2yhB01C6x1l3qHOyHISN44u37Mq5RP7XNmSKHkCos9NI1jvYbebBf2TC6WNc2m1bpVwUtCxwckbl7h4iNBlfaG00p9eaxCVN');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('hello world');
});

app.post('/payment', async (req, res) => {
    try {
        // Create a product
        const product = await stripe.products.create({
            name: 'Donate'
        });

        // Create a price for the product
        const price = await stripe.prices.create({
            unit_amount: 100, // Amount in smallest currency unit (e.g., 1000 = 10.00 INR)
            currency: 'usd',
            product: product.id
        });

        // Create a checkout session
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: price.id,
                    quantity: 1
                }
            ],
            mode: 'payment',
            success_url: 'http://localhost:5173/success',
            cancel_url: 'http://localhost:5173/cancel',
            customer_email: 'demo@gmail.com',
        });

        // Send the session back to the client
        res.json(session);
    } catch (error) {
        console.error('Error creating payment:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(3000, () => {
    console.log('server running on port 3000');
});
