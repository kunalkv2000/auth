require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to the Authentication API Application',
        endpoints: {
            register: 'POST /api/auth/register',
            login: 'POST /api/auth/login',
            profile: 'GET /api/users/me (requires Bearer token)'
        },
        instructions: {
            register: 'Send { username, email, password } to /register',
            login: 'Send { email, password } to /login to get JWT token',
            profile: 'Include Authorization header with "Bearer <token>" to access profile'
        }
    });
});