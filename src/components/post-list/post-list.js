import React from 'react';

import PostListItem from '../post-list-item';
import './post-list.css'
import { ListGroup } from 'reactstrap';

const PostList = ({ posts, onDelete, onLiked, onImportant }) => {

    const elements = posts.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <ListGroup key={id} className='list-group-item'>
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onImportant={() => onImportant(id)}
                    onLiked={() => onLiked(id)} />
            </ListGroup>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;