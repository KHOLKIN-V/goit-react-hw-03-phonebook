import React, { Component } from "react";
import PropTypes from "prop-types";
import cs from "./AddContactForm.module.css";

class AddContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  addInputContact = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  submitContact = (e) => {
    e.preventDefault();
    this.props.submit({
      name: this.state.name,
      number: this.state.number,
    });
    this.reset();
  };

  reset = (e) => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <>
        <h1 className={cs.title}>Phonebook</h1>
        <form className={cs.form} onSubmit={this.submitContact}>
          <label className={cs.inputTitle}>
            Name
            <br />
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.addInputContact}
            />
            <br />
            Number
            <br />
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              value={this.state.number}
              onChange={this.addInputContact}
            />
          </label>
          <br />
          <button type="submit" className={cs.addBtn}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}

AddContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default AddContactForm;
