import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import { getContacts } from '../../actions/contactActions';

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-success">Contacts</span> List
        </h1>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.myContact.contacts
  }
}

//the methode mapDispatchToProps is place we set all the action we need in contact so
//so to DRY if we need this in place else we create a sepreate actions file
//   return {
//     getContacts: () => {
//       dispatch({
//         type: 'GET_CONTACTS'
//       })
//     }
//   }
// }

export default connect(mapStateToProps, { getContacts })(Contacts);
