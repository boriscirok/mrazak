import React, { Component } from 'react';

import {CATEGORIES} from '../data/Categories';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openCategories: CATEGORIES.map(_ => false)
    };

    this.toggleCategory = this.toggleCategory.bind(this);
  }

  getItems() {
    let items = localStorage.getItem('listItems') ? JSON.parse(localStorage.getItem('listItems')) : [];
    items = items.filter(item => item.addTo === 'list');
    return items;
  }

  getItemsForCategory(category) {
    return this.getItems().filter(item => item.category === category);
  }

  isOpen(categoryToFind) {
    return this.state.openCategories[this.getIndexOfCategory(categoryToFind)];
  }

  getIndexOfCategory(categoryToFind) {
    return CATEGORIES.indexOf(categoryToFind);
  }

  toggleCategory(category) {
    const openCategories = [...this.state.openCategories];
    const originalValue = openCategories[this.getIndexOfCategory(category)];
    openCategories[this.getIndexOfCategory(category)] = !originalValue;
    this.setState({ openCategories });
  }

  render() {
    return (
      <React.Fragment>
        <h2>V mrazáku máme:</h2>
        <ul>
          {CATEGORIES.map(category => {
            const itemsInCategory = this.getItemsForCategory(category);
            return (
              <li key={category}>
                <h3 className="list-category-title" onClick={() => this.toggleCategory(category)}>{category}</h3>
                {itemsInCategory && (
                  <ul className={`list-category-items ${this.isOpen(category) ? 'open' : 'closed'}`}>
                    {itemsInCategory.map((item, index) => {
                      return (
                        <li key={index}>{item.name}</li>
                      );
                    })}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default List;
