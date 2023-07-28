import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '.'

it('Teste de jest', () => {
  render(<Home />)

  const text = screen.getByText(/crie seu currículo online/i)
  expect(text).toBeInTheDocument()
})
