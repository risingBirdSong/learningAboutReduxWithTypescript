import React from "react";
import { connect } from "react-redux";
import { TodoI, FetchTodos, DeleteTodo } from "../actions";
import { StoreStateI } from "../reducers";

interface AppPropsI {
  todos: TodoI[] | undefined;
  fetchTodos: Function;
  deleteTodo: typeof DeleteTodo;
}

interface AppStateI {
  fetching: boolean;
}

class _App extends React.Component<AppPropsI, AppStateI> {
  constructor(props: AppPropsI) {
    super(props);
    this.state = {
      fetching: false
    };
  }

  fetchTodos_click = (): void => {
    this.setState({ fetching: true });
    this.props.fetchTodos();
  };

  deleteTodo_click = (id: number): void => {
    this.props.deleteTodo(id);
  };

  componentDidUpdate(prevProps: AppPropsI): void {
    if (!prevProps.todos?.length && this.props.todos?.length) {
      this.setState({ fetching: false });
    }
  }

  renderList = (): JSX.Element[] => {
    if (typeof this.props.todos == "undefined") {
      return [
        <div>
          <h1>undefined</h1>
        </div>
      ];
    }

    return this.props.todos.map(todo => {
      return (
        <div onClick={() => this.deleteTodo_click(todo.id)} key={todo.id}>
          <h3>{todo.title}</h3>
          <p>{todo.completed}</p>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.fetchTodos_click}>fetch todos</button>
        <h1>hi there</h1>
        {this.state.fetching ? <h1>LOADING.........................</h1> : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreStateI) => {
  return { todos };
};

export const App = connect(mapStateToProps, {
  fetchTodos: FetchTodos,
  deleteTodo: DeleteTodo
})(_App);
