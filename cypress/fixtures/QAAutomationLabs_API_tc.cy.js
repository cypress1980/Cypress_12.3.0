it("GET API : Get the Data", () => {
  cy.request("GET", "https://reqres.in/api/users?page=2").should((response) => {
    expect(response.status).to.eq(200);
  });
});

it("POST API : POST the data ", () => {
  cy.request("POST", "https://reqres.in/api/users", {
    name: "morpheus",
    job: "leader",
  }).should((response) => {
    expect(response.status).to.eq(201);
  });
});

it("PUT API : Update the data by provide new data", () => {
  cy.request("PUT", "https://reqres.in/api/users/2", {
    name: "morpheus",
    job: "zion resident",
  }).should((response) => {
    expect(response.status).to.eq(200);
  });
});

it("DELETE API : Delete the data providing the id", () => {
  cy.request("DELETE", "https://reqres.in/api/users/2").should((response) => {
    expect(response.status).to.eq(204);
  });
});
