const axios = require("axios");
const hcp = require("../src/server/gds-hcp.model");

describe("small test", () => {
  test("check if the server is running", () => {
    return axios({
      url: "http://localhost:5000/gds",
      method: "post",
      data: {
        query: `
          {
            getHCPs(full_name: "test"){
              expert_id
            }
          }
            `,
      },
    }).then((response) => {
      expect(response.status).toEqual(200);
    });
  });

  test("check graphql service", () => {
    return axios({
      url: "http://localhost:5000/gds",
      method: "post",
      data: {
        query: `
        {
          getHCPs {
            expert_id
          }
        }`,
      },
    }).then((response) => {
      const hcps = response.data.data.getHCPs;
      expect(hcps.length).toBeGreaterThan(1);
    });
  });
});
