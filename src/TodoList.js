import React from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css"

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(e){
        let itemArray = this.state.items;

        if(this._inputElement.value !== ""){
            itemArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
                items: itemArray
            });

            this._inputElement.value = "";
        }
        e.preventDefault();
    }

    deleteItem(key){
        let filteredItems = this.state.items.filter((item) => {
            return (item.key !== key);
        });

        this.setState({
            items: filteredItems
        });
    }
    render(){
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder={'enter task'}/>
                        <button type={'submit'}>ADD</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items}
                        delete={this.deleteItem}/>
            </div>
        );
    }
}

export default TodoList;