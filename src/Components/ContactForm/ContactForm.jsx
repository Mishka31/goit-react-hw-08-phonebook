import { useState } from "react";
import { connect } from "react-redux";
import contactOperations from "../../redux/contacts/contacts-operations.js";
import s from "./ContactForm.module.css";
import { useSelector, useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  const hendkeSubmit = (e) => {
    e.preventDefault();

    const nameFromArrey = contacts.map((c) => c.name.toLowerCase());

    if (nameFromArrey.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(contactOperations.addContact({ name, number }));
      reset();
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "name") {
      setName(value);
    } else if (name === "number") {
      setNumber(value);
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <div className={s.container}>
      <form className={s.imputAndButton} onSubmit={hendkeSubmit}>
        <label>
          <p className={s.name}>Name</p>
          <input
            type="text"
            className={s.imput}
            onChange={handleChange}
            value={name}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          <p className={s.name}>Number</p>
          <input
            type="tel"
            className={s.imput}
            onChange={handleChange}
            value={number}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(contactOperations.addContact(data)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
