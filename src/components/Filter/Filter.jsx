import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/actions';
import { getFilter } from 'redux/selectors';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label>
      Filter contacts by name or number
      <input
        type="text"
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder="Search..."
      />
    </label>
  );
}
