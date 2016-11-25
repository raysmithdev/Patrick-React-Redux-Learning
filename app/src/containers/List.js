import { connect } from 'react-redux'
import ListView from '../components/ListView'

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, null)(ListView)
