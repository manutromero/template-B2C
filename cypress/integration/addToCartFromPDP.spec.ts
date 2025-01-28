import '../support/vtex'

describe('Add to cart from PDP', () => {
	before(() => {
		cy.setVtexIdCookie()
	})

	it('Click on a product to go to the PDP and add it to the shopping cart', () => {
		cy.visit('/')
		cy.wait(3000)
		cy.fixture('addToCartFromPDP').then((contentElement) => {
			cy.get(contentElement.productSummary)
				.filter(':visible')
				.then((content) =>
					content.eq(Math.floor(Math.random() * content.length))
				)
				.click()

			cy.wait(2000)

			cy.get('body').then(($body) => {
				if ($body.find(contentElement.colorSkuOption).length > 0) {
					cy.get(contentElement.colorSkuOption)
						.filter(':visible')
						.then((content) => cy.chooseRandomSku(content))
				}
			})

			cy.wait(1000)

			cy.get('body').then(($body) => {
				if ($body.find(contentElement.sizeSkuOption).length > 0) {
					cy.get(contentElement.sizeSkuOption)
						.filter(':visible')
						.then((content) => cy.chooseRandomSku(content))
				}
			})

			cy.wait(1000)
			cy.get(contentElement.addToCartButton).click()

			cy.get(contentElement.cartButton).wait(500).click()
		})
	})
})
