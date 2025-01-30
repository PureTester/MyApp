import React from "react";
import TodoList from "./page";

describe("<TodoList />", () => {
  it("renders", () => {
    cy.mount(<TodoList />);
    cy.get('[data-id="addTaskInput"]').type("Pidor");
    cy.get('[data-id="addTaskBtn"]').click();
    cy.get('[data-id="toDoListElement" ]').should("have.length", 1);
    cy.contains(/pidor/i);
    cy.get('[data-id="editTaskBtn"]').click();
    cy.get('[data-id="editTaskInput"]').type("NePidor");
    cy.get('[data-id="editTaskBtn"]').click();
    cy.contains(/Nepidor/i);
    cy.get('[data-id="PidorNePidor-deleteTaskBtn"]').click();
    cy.get('[data-id="toDoListElement"]').should("have.length", 0);
    cy.get('[data-id="addTaskInput"]').type("Putin");
    cy.get('[data-id="addTaskBtn"]').click();
    cy.get('[data-id="toDoListElement"]').should("have.length", 1);
    cy.contains(/putin/i);
    cy.get('[data-id="addTaskInput"]').type("Tramp");
    cy.get('[data-id="addTaskBtn"]').click();
    cy.contains(/tramp/i);
    cy.get('[data-id="toDoListElement"]').should("have.length", 2);
    cy.get('[data-id="addTaskInput"]').type("KimChenIn");
    cy.get('[data-id="addTaskBtn"]').click();
    cy.contains(/kimchenin/i);
    cy.get('[data-id="toDoListElement"]').should("have.length", 3);
    cy.get('[data-id="deleteAllTasksBtn"]').click();
    cy.get('[data-id="toDoListElement"]').should("have.length", 0);
  });
});
