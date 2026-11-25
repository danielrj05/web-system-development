// index.js
import express from 'express';
import bookRouter from './routes/bookRoutes.js';
import { requestLogger } from './middlewares/requestLoggerMiddleware.js';
import { unknownEndpoint } from './middlewares/unknownEndpointMiddleware.js';

const app = express();

app.use(express.json());
app.use(requestLogger);


app.use(express.static('public'));

// Routes
app.use('/books', bookRouter);


app.use(unknownEndpoint);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
