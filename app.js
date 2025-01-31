import redirectMiddleware from './middleware/redirectMiddleware.js';

// Add middleware before all other routes
app.use(redirectMiddleware);

// Apply only to specific path
app.use('/specific-path', redirectMiddleware); 