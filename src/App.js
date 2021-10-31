import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import AddContactForm from './components/AddContactForm/AddContactForm'
import Filter from './components/Filter/Filter'
import ContactBook from './components/ContactBook/ContactBook'

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
      // console.log(this.state.contacts);
  }
  componentDidMount() { 
    const parsContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsContacts) {
      this.setState({contacts: parsContacts})
    };
    // console.log(parsContacts);
  }

  formSubmit = (data) => {

    const searchContact = this.state.contacts.map(e => e.name).includes(data.name);


    if (searchContact) {
      alert(`${data.name} is already in contacts`);
    } else {
      const newContact = {
        ...data, id: nanoid(),
      };
      this.setState(old => ({
        contacts: old.contacts.concat(newContact),
      }))
    }

  };

  filterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(i =>
      i.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  reshapeFilter = (e) => {
    this.setState({ filter: e });
  };

  deleteContact = (deleteId) => {
    this.setState(old => ({
      contacts: old.contacts.filter(e => e.id !== deleteId),
    }));
  }
  
  render() {
    const filtered = this.filterContacts();

    return (
      <>
      <AddContactForm submit={this.formSubmit} />
      <Filter value={this.state.filter} onFilter={this.reshapeFilter}/>
      {filtered.length >= 0 ? 
          <ContactBook data={filtered} onDelete={this.deleteContact}/>
         : <ContactBook data={this.state.contacts} onDelete={this.deleteContact}/>
      }
      </>
    );
  }
}

export default App;
