import { observable, action, computed } from 'mobx';
import { ajaxGet, ajaxPost, ajaxPut, ajaxDelete } from '../api/todo.api';
class TodoStore {
    @observable todos = [];

    @action fetchTodos = () => {
        ajaxGet().then(res => {
            this.todos = res.data;
        });
    };
    @action addTodos = (text) => {
        ajaxPost({ text })
            .then(res => {
                this.todos.push(res.data);
            });
    };
    @action toggle = (id) => {
        const targetIndex = this.todos.findIndex(v => v.id === id);
        const targetTodo = this.todos.filter(v => v.id === id)[0];
        const isDone = !targetTodo.isDone;
        ajaxPut({ id, isDone })
            .then(res => {
                this.todos.splice(targetIndex, 1, res.data);
            })

    };
    @action deleteTodo = (id) => {
        const targetIndex = this.todos.findIndex(v => v.id === id);
        ajaxDelete(id)
            .then(() => {
                this.todos.splice(targetIndex, 1);
            });
    };

    @action updateTodo = (payload) => {
        ajaxPut(payload)
            .then((res) => {
                const targetIndex = this.todos.findIndex(v => v.id === payload.id);
                this.todos.splice(targetIndex, 1, res.data);
            });
    };

    @computed get todoCount () {
        return this.todos.length;
    }
}

const todoStore = new TodoStore();
export default todoStore;
