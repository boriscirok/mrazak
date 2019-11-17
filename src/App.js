import React, { Component } from 'react';
import './Reset.css';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import AddForm from './components/AddForm';
import WishList from './components/WishList';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 'list' };
    this.onFooterClick = this.onFooterClick.bind(this);
  }

  onFooterClick(type) {
    this.setState({ activeTab: type })
  }

  getContent() {
    let html;
    const { activeTab } = this.state;
    if (activeTab === 'list') {
      html = <List />;
    } else if (activeTab === '+') {
      html = <AddForm />;
    } else if (activeTab === 'wish-list') {
      html = <WishList />;
    }

    return html;
  }

  render() {
    const { activeTab } = this.state;
    return (
      <div className="mrazak">
        <Header />
        {this.getContent()}
        <Footer activeTab={activeTab} onFooterClick={this.onFooterClick} />
      </div>
    );
  }
}

export default App;
