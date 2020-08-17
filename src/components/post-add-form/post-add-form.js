import React from 'react';
import './post-add-form.css';
import { Button } from 'reactstrap';


export default class PostAddFrom extends React.Component {
    state = {
        text: ""
    }
    inputChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    addPost = (e) => {
        e.preventDefault();
        this.props.addPost(this.state.text);
        this.setState({
            text: ""
        })
    }
    render() {
        return (
            <form onSubmit={this.addPost} className="bottom-panel d-flex">
                <input
                    type="text"
                    placeholder=" О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    value={this.state.text}
                    onChange={this.inputChange}
                />
                <Button>Добавить</Button>
            </form>
        )
    }

}