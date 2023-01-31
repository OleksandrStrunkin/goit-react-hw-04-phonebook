import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from './ContactForm.module.css';

export default function ContactForm({ addContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleName = e => {
    setName(e.currentTarget.value);
  };

  const handleNumber = e => {
    setNumber(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, number);

    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit} className={styled.form}>
      <label className={styled.name}>
        Ім'я
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleName}
        />
      </label>
      <label className={styled.number}>
        Номер
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleNumber}
        />
      </label>
      <button type="submit" className={styled.button}>
        Зберегти
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};

// class oldContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleName = e => {
//     this.setState({ name: e.currentTarget.value });
//   };

//   handleNumber = e => {
//     this.setState({ number: e.currentTarget.value });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.addContact(this.state.name, this.state.number);

//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={styled.form}>
//         <label className={styled.name}>
//           Ім'я
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             onChange={this.handleName}
//           />
//         </label>
//         <label className={styled.number}>
//           Номер
//           <input
//             type="tel"
//             name="number"
//             value={this.state.number}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             onChange={this.handleNumber}
//           />
//         </label>
//         <button type="submit" className={styled.button}>
//           Зберегти
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };
