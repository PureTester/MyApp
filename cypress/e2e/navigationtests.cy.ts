describe("Navigation tests", () => {
  it("sideBarRenderTests", () => {
    cy.visit("/");
    cy.get('[data-id="sideBarBtn"]').click();
    cy.get('[data-id="mainPageH2"]').should("not.be.exist");
    cy.get('[data-id="mainPageLink"]').should("not.be.exist");
    cy.get('[data-id="weatherLink"]').should("not.be.exist");
    cy.get('[data-id="toDoLink"]').should("not.be.exist");
    cy.get('[data-id="sideBarBtn"]').click();
    cy.get('[data-id="mainPageH2"]').should("be.exist");
    cy.get('[data-id="mainPageLink"]').should("be.exist");
    cy.get('[data-id="weatherLink"]').should("be.exist");
    cy.get('[data-id="toDoLink"]').should("be.exist");
  });
  it("Navigation", () => {
    cy.visit("/");
    cy.get('[data-id="weatherLink"]').click();
    cy.get('[data-id="wheatherInput"]').should("be.exist");
    cy.get('[data-id="searchCityBtn"]').should("be.exist");
    cy.contains(/погода/i);
    cy.contains(/сосал?/i);
    cy.get('[data-id="wheatherInput"]').type("Астана");
    cy.get('[data-id="searchCityBtn"]').click();
    cy.contains(/Текущя температура: /i);
    cy.contains(/Ощущается как :/i);
    cy.contains(/Скорость ветра :/i);
    cy.contains(/Последнее обновление/i);
    cy.get('[data-id="mainPageLink"]').click();
    cy.get('[data-id="toDoLink"]').click();
    cy.get('[data-id="addTaskInput"]').should("be.exist");
    cy.get('[data-id="addTaskBtn"]').should("be.exist");
    cy.get('[data-id="deleteAllTasksBtn"]').should("be.exist");
    cy.contains(/todolist/i);
    cy.contains(/задачи/i);
    cy.get('[data-id="mainPageLink"]').click();
    cy.get('[data-id="mainPageImage"]').should("be.exist");
  });
});
