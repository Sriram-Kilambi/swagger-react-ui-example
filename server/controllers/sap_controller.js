// const fetch = require("node-fetch");

const petStore = async (req, res) => {
  // const body = req.body;
  // const response = await fetch("http://localhost:9040/auth/login", {
  //   method: "post",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(body)
  // });
  // const data = await response.json();
  res.status(response.status).json({
    swaggerUrl: 'https://petstore.swagger.io/v2/swagger.json'
  });
};

module.exports = {
  petStore
};
