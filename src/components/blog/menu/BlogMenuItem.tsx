import React from 'react';
import { BlogList_categories as BlogCategory } from 'Generated/BlogList';
import { render } from 'react-dom';
import { CurrentCategoryContext } from '../context/CategoryContext';

export interface BlogMenuProps {
  category: BlogCategory,
}


export class BlogMenuItem extends React.Component<BlogMenuProps, { active: boolean}>  {
  constructor(props: BlogMenuProps) {
    super(props);
    this.state = {
      active: false,
    };
    this.openTopCategory = this.openTopCategory.bind(this);
  }
  
  openTopCategory() {
    this.setState((prevState) => {
      return { active: !prevState.active };
    });
  }

  render() {
    const { category } = this.props;
    return (
      <CurrentCategoryContext.Consumer>
        {
            ({ setCurrentCategory }) => {
              return (
                <ul className={`blog__category ${this.state.active ? 'active' : ''}`} onClick={() => this.openTopCategory()}>{category.name} &#9660;
                  {
                      category.subCategories.map((subCategory) => { 
                        return (
                          <li key={subCategory.name} className="blog__category__item" onClick={() => setCurrentCategory(category.name)}>
                            {subCategory.name}
                          </li>
                        );
                      })
                  }
                </ul>
              );
            }
          }
      </CurrentCategoryContext.Consumer>
    );
  }
}