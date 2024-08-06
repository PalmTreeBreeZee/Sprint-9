// Write your tests here
import AppFunctional from "./AppFunctional"
import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'


describe('AppFunction', () => {
  let left, right, up, down, reset, submit
  let input, coordinates, headings, links, buttons, value
  test('Coordinates work', async () => {
    render(<AppFunctional />)
    left = document.getElementById('left')
    fireEvent.click(left)
    await screen.findAllByText('Coordinates (1,2)')
  
  })

  test('Steps work', async () =>{
    render(<AppFunctional />)
    right = document.getElementById('right')
    fireEvent.click(right)
    await screen.findAllByText('You moved 1 time')
  })

  test('Input works', () =>{
    render(<AppFunctional />)
    input = screen.getByPlaceholderText("type email")
    fireEvent.change(input, {target: {value: 'azeembrown@gmail.com'}})
    expect(input).toHaveValue('azeembrown@gmail.com')
  })

  test('Message works', async () =>{
    render(<AppFunctional />)
    down = document.getElementById('down')
    fireEvent.click(down)
    fireEvent.click(down)
    await screen.findAllByText("You can't go down")
  })

  test('App buttons work', async() =>{
    render(<AppFunctional />)
    up = document.getElementById('up')
    reset = document.getElementById('reset')
    fireEvent.click(up)
    fireEvent.click(reset)
    await screen.findAllByText('You moved 0 times')
    
  })
})
