import { connect } from 'react-redux';
import React, { Component } from 'react';
import { selectModule } from '../actions/index';
import { bindActionCreators } from 'redux';

class ModuleDetails extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
    };
	  
  };


  //Return the className to visualize card element 
  isBestanden(module){
    var bestanden = this.props.student.Bestanden;
    if (bestanden.includes(module)){
	return "bestanden";
    }
    else return "card";
  }


  //Return the className to visualize list element 
  isBestandenList(module){
    var bestanden = this.props.student.Bestanden;
    console.log(bestanden);
    if (bestanden.includes(module)){
	return "list";
    }
    else return "list";
  }

  //Render each module as an object of class  card
  renderList() {
    return this.props.moduleDetails.map((module) => {
      return (
        <article
          key={module.module_name}
          onClick={() => this.props.selectModule(module)}
          className= {this.isBestanden(module.moduleID)}>
          <span className="glyphicon glyphicon-info-sign module-icon module-reference aria-hidden"></span>
          <span data-toggle="tooltip" title="Bereits bestanden !" className="glyphicon glyphicon-ok-circle module-icon"></span>
	  <header>{module.moduleID}</header>
          <header className="module-name">{module.module_name}</header>
	  <div className="detail">{module.cp_number} CPs</div>
        </article>
      );
    });
  }

  //Insert the generated cards into a section
  render() {

    if (!this.props.selectedModules) {
      console.log("No module was selected")
    }

    return (
      <section className={this.isBestandenList(module.modlueID)}>
        {this.renderList()}
      </section>
    )
  }
}

//Function from react-redux lib to map states from redux as props in ModuleDetails 
function mapStateToProps(state) {
  //Result is shown as props of ModuleDetails
  return {
    moduleDetails: state.moduleDetails,
    selectedModules: state.selectedModules,
    student: state.student
  };
}

function mapDispatchToProps (dispatch) {
   //Whenever the action 'selectModule' is called, the result should be updated
   //to all reducers
   return bindActionCreators ({selectModule: selectModule}, dispatch);

}

//export the ModuleDetails class which is connected to the states in redux store
export default connect(mapStateToProps, bindActionCreators)(ModuleDetails);
