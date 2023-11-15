import PropTypes from 'prop-types';


export const Contact = ({ contact, onDelete }) => {
  const {id, name, number} = contact;
  return <>
     <li>
      <div>
        <p>{name}</p>
        <p
          name={name}>
          {number}
        </p>
      </div>
      <button 
        type="button" 
        onClick={() => onDelete(id)}
      >
        delete
      </button>
    </li>
  </>
}



// const showDetail = (evt) => {
//   // console.log(evt.currentTarget);
//   const liRef = evt.currentTarget;
//   const btnRef = liRef.childNodes[1];
//   const contactRef = liRef.childNodes[0];
//   const numberRef = contactRef.childNodes[1];

//   numberRef.classList.toggle(`${css.visually_hidden}`)
//   btnRef.classList.toggle(`${css.visually_hidden}`)
// }

Contact.propTypes = {
  contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
}