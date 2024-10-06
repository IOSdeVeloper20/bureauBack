const corsOptions = {
    origin: "http://your-frontend-domain.com", // Replace with your frontend domain
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Allow cookies to be sent
  };
  
  app.use(cors(corsOptions));
  