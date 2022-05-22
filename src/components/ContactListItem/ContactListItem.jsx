import { useDeleteContactMutation } from '../../redux/services';
import Loader from 'components/Loader';

import { FaUserAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import PropTypes from 'prop-types';
import s from './ContactListItem.module.css';

const ContactListItem = ({ createdAt, id, name, phone }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const removeContact = () => {
    deleteContact(id);
    Notify.info(`Contact ${name} deleted from phone book`);
  };
  return (
    <li className={s.item}>
      <div>
        <p className={s.text}>
          <FaUserAlt size={14} /> {name}
        </p>
        <p className={s.text}>
          <FaPhoneAlt size={14} /> {phone}
        </p>
        <p className={s.text}>
          <FaClock size={14} /> {createdAt}
        </p>
      </div>

      <button
        type="submit"
        onClick={removeContact}
        className={s.deleteButton}
        disabled={isLoading}
      >
        {isLoading ? 'Deleting...' : 'Delete'}
        {isLoading && <Loader />}
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactListItem;
