/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade Pré Cadastro', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
    });
    it('Devo criar pré cadastro', () => {

        let nomeFaker = faker.name.firstName()
        let lastNameFaker = faker.name.lastName()
        let email = faker.internet.email()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(lastNameFaker)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    it.only('Deve completar o pré cadastro com sucesso usando custom commands', () => {
        let email2 = faker.internet.email()

        cy.preCadastro(email2, 'senha@forte', 'Marcos', 'Policeno')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')

    });
});