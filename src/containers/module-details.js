import { connect } from 'react-redux';
import React, { Component } from 'react';

class ModuleDetails extends Component {
//  render() {
//    if (!this.props.moduleDetails) {
//      return <div>Select a book to get started.</div>;
//    }
//
//    return (
//      <div>
//        <article class ="card">{this.props.moduleDetails.module_name}</article>
//        <div>module_name: {this.props.moduleDetails.module_name}</div>
//        <div>cp_number: {this.props.moduleDetails.cp_number}</div>
//      </div>
//    );
//  }





  renderList() {
    return this.props.moduleDetails.map((module) => {
      return (
        <article
          key={module.module_name}
          onClick={() => this.props.selectBook(book)}
          className="card">
	  <header>Header_Abkuerzung</header>
          <header className="module-name">{module.module_name}</header>
	  <div class="detail">{module.cp_number}</div>
        </article>
      );
    });
  }

  render() {
    return (
      <section className="list">
        {this.renderList()}
      </section>
    )
  }
}
function mapStateToProps(state) {
  return {
    moduleDetails: state.moduleDetails
  };
}

export default connect(mapStateToProps)(ModuleDetails);
