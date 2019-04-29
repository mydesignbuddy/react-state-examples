import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// actions
import { addItem, setAddForm, clearAddForm } from "../../redux/actions";

// component
import TodoForm from "./TodoForm";

// map state properties to components props
const mapStateToProps = state => {
  return { currentItem: state.form.currentItem };
};

// map actions to component function props
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addItem,
      setAddForm,
      clearAddForm
    },
    dispatch
  );

// wraps the component with redux mappings
// this is called a high order component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoForm);
