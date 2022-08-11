const app = require("../app");

const { DB_HOST, PORT = 4000 } = process.env;

// mongoose
//   .connect(DB_HOST)
//   .then(() => app.listen(PORT))
//   .catch((error) => {
//     console.log(error.message);
//     process.exit(1);
//   });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
