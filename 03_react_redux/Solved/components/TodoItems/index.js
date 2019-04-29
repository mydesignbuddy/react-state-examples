import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// actions
import { deleteItem } from "../../redux/actions";

// component
import TodoItems from "./TodoItems";

// map state properties to components props
const mapStateToProps = state => {
  return { items: state.todos.items };
};

// map actions to component function props
const mapDispatchToProps = dispatch =>
  bindActionCreators({ deleteItem }, dispatch);

// wraps the component with redux mappings
// this is called a high order component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItems);
