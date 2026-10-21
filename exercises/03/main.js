// every expense is stored as { name, amount }
const expenses = []

const form = document.querySelector('#expense-form')
const nameInput = document.querySelector('[name="expense-name"]')
const amountInput = document.querySelector('[name="expense-amount"]')
const list = document.querySelector('#expense-list')
const total = document.querySelector('#total')
const error = document.querySelector('#error')

// draws the list of expenses and the total from the expenses array
function render() {
	list.innerHTML = ''

	for (const expense of expenses) {
		const li = document.createElement('li')
		li.textContent = `${expense.name}: ${expense.amount.toFixed(2)} €`
		list.appendChild(li)
	}

	const sum = expenses.reduce((acc, expense) => acc + expense.amount, 0)
	total.textContent = sum.toFixed(2)
}

form.addEventListener('submit', (event) => {
	event.preventDefault()

	const name = nameInput.value.trim()
	const amount = Number(amountInput.value)

	// validation for the field
	if (name === '') {
		error.textContent = 'The expense name cannot be empty.'
		return
	}
	if (amountInput.value === '') {
		error.textContent = 'You must enter an amount.'
		return
	}
	if (!Number.isFinite(amount) || amount <= 0) {
		error.textContent = 'The amount must be a positive number.'
		return
	}

	error.textContent = ''
	expenses.push({ name, amount })
	form.reset()
	nameInput.focus()
	render()
})

render()
