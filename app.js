import express from "express";
import session from "express-session";
import exphbs from "express-handlebars";
import userRoutes from "./routes/users.js";
import taskRoutes from "./routes/tasks.js";
import homeRoutes from "./routes/index.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: "supersecrettaskflow",
  resave: false,
  saveUninitialized: false
}));

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.use("/", homeRoutes);
app.use("/tasks", taskRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
