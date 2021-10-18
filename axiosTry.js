const axios = require("axios");

axios({
  url: "http://localhost:5000/gds",
  method: "post",
  data: {
    query: `
    {
      getHCPs(first_name: "Silvio"){
        expert_id
        full_name
        first_name
        publication {
          id
        }
        conference {
          id
        }
        guideline {
          id
        }
        clinicalTrial {
          id
        }
      }
    }
      `,
  },
})
  .then((response) => {
    console.log(response.status);
  })
  .catch((err) => {
    console.log({ ...err });
  });

// const http = require("http");

// http.get({ host: "localhost", port: 5000, path: "/gds" }, (res) => {
//   if (res.statusCode == 200) {
//     console.log("server is running");
//   } else {
//     console.log("server is down:", res.statusCode);
//   }
// });
