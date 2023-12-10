import css from "./ContactForm.module.css"
import { Component } from "react";

class ContactForm extends Component {

    state = {
        name: '',
        number: ''
    }
      handleChange = ({ target: {value, name}}) => {
        this.setState({
			[name]: value,
		});
  };

      handleSubmit = (e) => {
          e.preventDefault()
          this.props.createContact(this.state)
		this.setState({
            name: '',
            number: ''
          })
          
          
      };

    render() {
        const {name, number} = this.state
        return (
            <div>
                <form className={css.form} onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="nameInput">
                          <h3 className={css.title}>Name</h3>
                        </label>
                        <input className={css.input} type="text" name="name" required value={name} onChange={this.handleChange}  />
                    </div>
                    <div>
                        <label htmlFor="telInput">
                          <h3 className={css.title}>Number</h3>
                        </label>
                        <input className={css.input} type="tel" name="number" required value={number} onChange={this.handleChange}/>
                    </div>
                    <button  className={css.btn} type="submit">Add contact 📲</button>
                </form>
            </div>
        )
    }
}

export default ContactForm