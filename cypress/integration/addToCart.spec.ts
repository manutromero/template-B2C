import '../support/vtex'

describe('Add to cart', () => {
	before(() => {
		cy.setVtexIdCookie()
	})

	it('Randomly select a visible product-summary and click the visible add-to-cart-button', () => {
		cy.visit('/')
		cy.wait(3000)
		cy.fixture('addToCart').then((contextElement) => {
			cy.get(contextElement.productSummary)
				.filter(':visible')
				.find(contextElement.addToCartButton)
				.filter(':visible')
				.then((content) =>
					content.eq(Math.floor(Math.random() * content.length))
				)
				.click()
		})
	})
})
