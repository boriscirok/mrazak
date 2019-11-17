import React, { Component } from 'react';

import {CATEGORIES} from '../data/Categories';

class AddForm extends Component {
  constructor(props) {
    super(props);

    this.state = { unit: 'g', addTo: 'list' };

    this.submit = this.submit.bind(this);
    this.changeUnit = this.changeUnit.bind(this);
    this.changeAddTo = this.changeAddTo.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  submit(e) {
    e.preventDefault();
    const item = {
      category: this.category.value,
      name: this.name.value,
      amount: this.amount.value,
      unit: this.state.unit,
      date: this.date.value,
      drawer: this.drawer.value,
      addTo: this.state.addTo
    };

    const items = localStorage.getItem('listItems') ? JSON.parse(localStorage.getItem('listItems')) : [];
    items.push(item);
    localStorage.setItem('listItems', JSON.stringify(items));

    this.resetForm();
  }

  resetForm() {
    this.category.value = 'Maso';
    this.name.value = '';
    this.amount.value = '';
    this.drawer.value = 1;

    this.setState({unit: 'g', addTo: 'list'});
  }

  changeUnit(e) {
    this.setState({ unit: e.target.value });
  }

  changeAddTo(e) {
    this.setState({ addTo: e.target.value });
  }

  render() {
    const date = new Date();
    const today = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const { unit, addTo } = this.state;
    return (
        <form className="add-form">
          <table>
            <tbody>
            <tr>
              <td>Kategorie</td>
              <td>
                <select name="category" ref={ref => {this.category = ref;}}>
                  {CATEGORIES.map(category => {
                    return (
                      <option key={category} value={category}>{category}</option>
                    );
                  })}
                </select>
              </td>
            </tr>
            <tr>
              <td>Název</td>
              <td>
                <input type="text" name="name" ref={ref => {this.name = ref;}} />
              </td>
            </tr>
            <tr>
              <td>Množství</td>
              <td>
                <input type="text" name="ammount" ref={ref => {this.amount = ref;}} />
              </td>
            </tr>
            <tr>
              <td>Jednotka</td>
              <td>
                <label>
                  g
                  <input type="radio" value="g" name="unit" onChange={this.changeUnit} checked={unit === 'g'} />
                </label>
                <label>
                  ks
                  <input type="radio" value="ks" name="unit" onChange={this.changeUnit} checked={unit === 'ks'} />
                </label>
              </td>
            </tr>
            <tr>
              <td>Datum</td>
              <td>
                <input type="date" name="date" defaultValue={today} ref={ref => {this.date = ref;}} />
              </td>
            </tr>
            <tr>
              <td>Šuplík</td>
              <td>
                <select name="category" ref={ref => {this.drawer = ref;}}>
                  {[1, 2, 3].map(drawer => {
                    return (
                      <option key={drawer} value={drawer}>Šuplík {drawer}</option>
                    );
                  })}
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <label>
                  Přidat do listu
                  <input type="radio" value="list" name="addTo" onChange={this.changeAddTo} checked={addTo === 'list'} />
                </label>
                <label>
                  Přidat do wish-listu
                  <input type="radio" value="wish-list" name="addTo" onChange={this.changeAddTo} checked={addTo === 'wish-list'} />
                </label>
              </td>
            </tr>

            <tr>
              <td colSpan="2">
                <input type="submit" onClick={this.submit} />
              </td>
            </tr>

            </tbody>
          </table>
        </form>
    );
  }
}

export default AddForm;
