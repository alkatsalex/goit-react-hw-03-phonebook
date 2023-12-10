import { Component } from "react"
import { nanoid } from 'nanoid'
import ContactList from "./ContactList/ContactList.jsx"
import ContactForm from "./ContactForm/ContactForm.jsx";
import Filter from "./Filter/Filter.jsx"

export class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }


  componentDidMount() {
    
    const localData = localStorage.getItem('contacts')

    if (localData) {
      this.setState({
        contacts: JSON.parse(localData)
      })
    }
    console.log(localData);
    
  }
  

  componentDidUpdate(prevProps, prevState) {

    if(this.state.contacts !== prevState.contacts)
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
  








      handleChange = ({ target: {value, name}}) => {
        this.setState({
			[name]: value,
		});
  };

  handleChangeFilter = value => {
        this.setState({
			filter: value,
		});
  };

    deleteContact = (id) => {
      this.setState((p) => ({
  contacts: p.contacts.filter((e)=> e.id!==id)
}))
  }
  

  createContact = (data) => {
    const contact = {
      ...data,
      id: nanoid(),
    }

    const isDublicated = this.state.contacts.find((e) => e.name.toLowerCase() === data.name.toLowerCase())
    if (isDublicated) {
      alert("This contact is already added")
      return
    } else {
this.setState((prev) => ({
			contacts: [...prev.contacts, contact],
		}))
    }

    
  }


  render() {
     const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    return (
      <div
        style={{
          width: '370px',
          fontSize: 34,
          color: '#010101',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
<h1>Phone<span style={{color: 'rgb(54, 96, 212)'}}>book</span></h1>
        <ContactForm createContact={this.createContact}
          onChange={this.handleChange} />
        <div style={{
          border: "solid 2px rgb(11, 26, 68)",
          borderRadius: "24px",
          padding: "20px 16px",
          marginTop: "24px"
        }}>
          <Filter
          onChange={this.handleChangeFilter} />
        <ContactList
          contactsArr={filteredContacts}
          deleteContact={this.deleteContact}/>
        </div>
      </div>
    );
  }
};
