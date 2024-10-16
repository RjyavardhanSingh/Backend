const cors = require('cors');
app.use(cors({
  origin: 'https://rjyavardhansingh.github.io/my-portfolio/',
  methods: ['GET', 'POST'],
  credentials: true,
}));
