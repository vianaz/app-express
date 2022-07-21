import { App } from "app";

const { app } = new App();

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`),
);
