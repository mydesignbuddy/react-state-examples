import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// actions
//// import in the deleteItem action

// component
import TodoItems from "./TodoItems";

// map state properties to components props
const mapStateToProps = state => {
  return { items: state.todos.items };
};

// map actions to component function props
//// bind deleteItem action to props

// wraps the component with redux mappings
// this is called a high order component
export default connect(
  mapStateToProps,
  null //// pass in your mapDispatchToProps here
)(TodoItems);
