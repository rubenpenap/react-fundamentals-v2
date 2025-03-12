import { createRoot } from 'react-dom/client'

function App() {
	return (
		<form>
			<label htmlFor="usernameInput">Username</label>
			<input id="usernameInput" name="username" type="text" />
			<button type="submit">submit</button>
		</form>
	)
}

const rootEl = document.createElement('div')
document.body.append(rootEl)
createRoot(rootEl).render(<App />)
