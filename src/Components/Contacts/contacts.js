import { connect } from "react-redux";
import React, { Component } from "react";
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import Filter from "../Filter/Filter.jsx";
import s from "./contacts.module.css";
import operations from "../../redux/contacts/contacts-operations.js";
import contactsSelectors from "../../redux/contacts/contacts-selector.js";
import AppBar from "../AppBar/AppBar.js";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    this.props.fetchContacts();
  }
  // logout = () => {
  //   console.log("logout");
  // };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <AppBar />
        <div className={s.container}>
          <h1 className={s.titleH1}>Phonebook</h1>
          <ContactForm listArrey={contacts} />
          <h2 className={s.titleH2}>Contacts</h2>
          <Filter />
          <ContactList />
          {/* {this.props.isLoading && <h1>Download...</h1>} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
