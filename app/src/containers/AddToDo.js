import { connect } from 'react-redux'
import AddToDoView from '../components/AddToDoView'
import { addTodo } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(addTodo(text))
  }
}

export default connect(null, mapDispatchToProps)(AddToDoView)
