import React from 'react'
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap'

const AddToDo = ({ addToDo }) => (
    <Form
      onSubmit={(e) => {
        e.preventDefault()
        let text = e.target.input.value
        addToDo(text)
      }}
      inline
    >
      <FormGroup controlId="formInlineName">
        <FormControl name="input" type="text" placeholder="Add a todo" />
      </FormGroup>
      {' '}
      <Button type="submit">
        Add Todo
      </Button>
    </Form>
)

export default AddToDo
