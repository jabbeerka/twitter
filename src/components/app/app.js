import React, { Component } from 'react';
import SearchPanel from '../search-panel';
import AppHeader from '../app-header';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
    state = {
        data: [
            { label: "Going learn React", important: true, like: false, id: 1 },
            { label: "That is so good", important: false, like: false, id: 2 },
            { label: "I neeed a break...", important: false, like: false, id: 3 }
        ],
        searchInput: "",
        filter: "all"

    }
    maxId = 4;
    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            like: false,
            id: this.maxId++
        };
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }
    deleteItem = (id) => {
        this.setState(({ data }) => {
            const index = data.findIndex((elem) => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    }
    searchPost = (items, value) => {
        if (value.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label.indexOf(value) > -1
        });
    }
    filterPost = (items, filter) => {
        if (filter === "like") {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }
    onUpdateSearch = (value) => {
        this.setState({
            searchInput: value
        })
    }
    onFilterSelect = (filter) => {
        this.setState({ filter })
    }
    onToggle = (id, item) => {
        this.setState(({ data }) => {
            const index = data.findIndex(item => item.id === id);
            const old = data[index];
            const newItem = { ...old, [item]: !old[item] };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }
    onToggleImportant = (id) => {
        this.onToggle(id, "important")
    }
    onToggleLiked = (id) => {
        this.onToggle(id, "like")
    }
    render() {
        const { data, searchInput, filter } = this.state

        const allPosts = data.length;
        const likedPosts = data.filter(item => item.like).length;
        const visiblePosts = this.filterPost(this.searchPost(data, searchInput), filter);
        return (
            <div className="app">
                <AppHeader
                    allPosts={allPosts}
                    likedPosts={likedPosts} />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>
                <PostList posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onLiked={this.onToggleLiked}
                    onImportant={this.onToggleImportant} />
                <PostAddForm addPost={this.addItem} />
            </div>
        )
    }
}