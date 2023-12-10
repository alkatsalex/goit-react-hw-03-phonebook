import ContactItem from "components/ContactItem/ContactItem.jsx"
import css from './ContactList.module.css'

export default function ContactList({contactsArr, deleteContact}) {
    return (
        <div>
            <h2 className={css.title}>Contacts:</h2>
        <ul>
            {
             contactsArr.map(({name, number, id}) => {

                 return <ContactItem
                     key={id}
                     id={id}
                     name={name}
                     tel={number}
                     deleteContact={deleteContact} />
              })  
            }
            
        </ul>
        </div>
    )
}