import React from "react";
import PropTypes from "prop-types";
import ContactItem from "../ContactItem/ContactItem";
import cs from "./ContactBook.module.css";

const ContactBook = ({ data, onDelete }) => {
  return (
    <>
      <h2 className={cs.title}>Contacts</h2>
      <ul className={cs.list}>
        {data.map(({ name, number, id }) => (
          <>
            <li className={cs.item} key={id}>
              <ContactItem
                name={name}
                number={number}
                onDelete={onDelete}
                id={id}
              />
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

ContactBook.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactBook;
