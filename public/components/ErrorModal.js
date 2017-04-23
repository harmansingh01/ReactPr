import React, {Component} from "react";
import * as PropTypes from "react/lib/ReactPropTypes";


export default class  ErrorModal extends Component{
  constructor(props){
    super(props);

  }

  componentDidMount(){
    console.log('inside error modal');
    let modal =new Foundation.Reveal($('#error-modal'));
    modal.open();
  }
  render(){
    return (<div id="error-modal" className="reveal tiny text-center" data-reveal="">
      <h5>{this.props.title}</h5>
      <p>{this.props.message}</p>
      <p>
        <button className="button hollow" data-close="">Okay</button>
      </p>
    </div>);
  }
};

ErrorModal.defaultProps={
  title:'Error'
}
ErrorModal.propTypes={
  title:PropTypes.string,
  message:PropTypes.string.isRequired
};

