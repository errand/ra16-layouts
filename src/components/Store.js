import React from 'react';
import products from "../data/Products";
import Toolbar from "./Toolbar";
import ProjectList from './ProjectList'

export default class Store extends React.Component {

  state = {
    products: products
  }

  filters = ["All", "Websites", "Flayers", "Business Cards"];

  onFilterToggle = item => {
    const filter = item.target.innerText;
    const portfolio = filter === 'All' ? products : products.filter(item => item.category === filter);
    this.setState({selected: filter, projects: portfolio})
  }

  render () {
    const {selected, projects} = this.state;
    return (
      <div className="main-content">
        <Toolbar
          filters={this.filters}
          selected={selected}
          onSelectFilter={this.onFilterToggle}/>
          <ProjectList props={projects} />
      </div>
    )
  }
}
