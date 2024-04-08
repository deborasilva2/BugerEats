/// <reference types="cypress" /> 

// Códificação Direta

describe ('CodDireto_BugerEats', () => {
    it ('String', () => {

        cy.visit("https://buger-eats.vercel.app/")
        cy.contains("Cadastre-se para fazer entregas").click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type("Mario Reis")
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type("11007578050")
        cy.get(':nth-child(3) > :nth-child(1) > input').type("mario@teste.com")
        cy.get(':nth-child(3) > :nth-child(2) > input').type("12931319090")
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type("12501-030")
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(2) > input').click()
        cy.get(':nth-child(4) > :nth-child(1) > input').type("0")
        cy.get('.delivery-method > :nth-child(2)').click()
        cy.get("[type=file]").selectFile("CNH.jpg", {force:true})
        cy.get('.button-success').should("have.text", "Cadastre-se para fazer entregas").click()
       

}); }); 

// Codificação utilizando 'function'

function automacaoBugerEats(nome, cpf, email, wpp, cep) {
        cy.contains("Cadastre-se para fazer entregas").click()
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > input').type(nome)
        cy.get(':nth-child(2) > :nth-child(2) > :nth-child(2) > input').type(cpf)
        cy.get(':nth-child(3) > :nth-child(1) > input').type(email)
        cy.get(':nth-child(3) > :nth-child(2) > input').type(wpp)
        cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > input').type(cep)
        cy.get('.delivery-method > :nth-child(2)').click()
        cy.get("[type=file]").selectFile("CNH.jpg", {force:true})
        cy.get('.button-success').click() 
        cy.contains("Fechar").click()
} 

beforeEach (() => {
 cy.visit("https://buger-eats.vercel.app/") });

 it ('FunctionBurgerEats', () => {
    automacaoBugerEats("João Pereira", "25801600191", "jooao@teste.com.br", "63957483920", "77001-006")
    automacaoBugerEats("Soraia Silva", "21201664713", "soraya@teste.com.br", "21957483920","22410060")
    automacaoBugerEats("Gabriel Oliveira", "80737250020", "gabriel@teste.com.br", "11957483920", "01310-930")

  }); 