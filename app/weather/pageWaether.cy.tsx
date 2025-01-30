import React from "react";
import Waether from "./page";

describe("<Waether />", () => {
  it("renders", () => {
    cy.mount(<Waether />);
    cy.request(
      "GET",
      `https://api.weatherapi.com/v1/current.json?key=928d66b312824ca588273244251601&q=Белград&aqi=no`
    ).should((response) => {
      expect(response.status).to.eq(200);
    });

    cy.get('[data-id="wheatherInput"]').type("Ереван");
    cy.get('[data-id="searchCityBtn"]').click();
    cy.screenshot();
    cy.contains(/ереван/i);
    cy.get('[data-id="wheatherInput"]').clear();
    cy.get('[data-id="searchCityByGeoBtn"]').click();
  });
});
