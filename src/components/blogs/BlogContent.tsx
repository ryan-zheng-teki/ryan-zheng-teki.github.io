import React from 'react';

export class BlogContent extends React.Component<{},{}> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className='blog-content'>
                The content will be content of the blog file displayed by markdown displayer
            </div>
        );
    }
}