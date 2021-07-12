import { render } from '@testing-library/react'
import App from './App'

test('Renders app', () => {
  const app = render(<App />)
  const sectionTop = app.container.querySelector('#Top')
  const sectionDex = app.container.querySelector('#Dex')
  const sectionBottom = app.container.querySelector('#Bottom')
  expect(sectionTop).toBeInTheDocument()
  expect(sectionDex).toBeInTheDocument()
  expect(sectionBottom).toBeInTheDocument()
})
