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
    console.log(JSON.stringify(response.data.data));
  })
  .catch((err) => console.log(err));
