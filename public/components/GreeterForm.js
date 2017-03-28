import * as React from "react";

let GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();
    let updates = {};
    var name = this.refs.name;
    var message=this.refs.message;
    var nameValue = name.value;
    var messageValue=message.value;

    if (nameValue.length > 0) {
      name.value = '';
      updates.name=nameValue;
    }
    if(messageValue.length>0){
      message.value='';
      updates.message=messageValue;
    }

    this.props.onNewData(updates);
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>  <input type="text" ref="name"/> </div>
          <div><textarea ref="message"/></div>
          <button type="submit">Set Name</button>
        </form>
      </div>
    );
  }
});

export default GreeterForm;
