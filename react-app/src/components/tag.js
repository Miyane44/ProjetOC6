import React from 'react';

import '../styles/components/tag.scss';

function Tag(props) {
    return (
        <div className='tag'>
            <span className="tag-title">
                {props.label}
            </span>
        </div>
    )
}

export default Tag;