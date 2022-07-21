const express = require('express');
const app = express();
const dbConnect = require('./dbConfig/mongoose');
const tasks = require('./routers/task');
const notFound = require('./middleware/notfound');
const errorHandleMiddleware = require('./middleware/errorHandle');



//middlware
app.use(express.json())


//routers
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandleMiddleware);


dbConnect();
const PORT = 3000;
app.listen(PORT, console.log(`Server is listening on ${PORT}...`));


