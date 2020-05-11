import { BlogList_categories as BlogCategory } from 'Generated/BlogList';
import React from 'react';
import { CurrentCategoryContext } from '../Context/CategoryContext';

export interface BlogMenuProps {
  category: BlogCategory;
}

export class BlogMenuItem extends React.Component<
  BlogMenuProps,
  { active: boolean }
> {
  constructor(props: BlogMenuProps) {
    super(props);
    this.state = {
      active: false,
    };
    this.openTopCategory = this.openTopCategory.bind(this);
  }

  openTopCategory(event: any) {
    this.setState((prevState) => {
      return { active: !prevState.active };
    });
    event.stopPropagation();
  }

  render() {
    const { category } = this.props;
    return (
      <CurrentCategoryContext.Consumer>
        {({ setCurrentCategory }) => {
          return (
            <ul
              className={`blog__category ${
                this.state.active ? 'active' : 'inactive'
              }`}
              onClick={(event) => this.openTopCategory(event)}
            >
              {category.name} &#9660;
              {category.subCategories.map((subCategory) => {
                return (
                  <li
                    key={subCategory.name}
                    className="blog__category__item"
                    onClick={(event) => {
                      event.stopPropagation();
                      setCurrentCategory(subCategory.name);
                    }}
                  >
                    {subCategory.name}
                  </li>
                );
              })}
            </ul>
          );
        }}
      </CurrentCategoryContext.Consumer>
    );
  }
}
