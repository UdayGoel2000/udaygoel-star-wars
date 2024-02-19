import { useDispatch, useSelector } from 'react-redux';
import {
  setAuthorisationError,
  setPassword,
  setUserName,
} from '../slices/Slice1';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.data);
  console.log(data);
  const handleChange = (type, value) => {
    if (type === 'Name') dispatch(setUserName(value));
    else dispatch(setPassword(value));
  };
  const handleClick = () => {
    if (data.userName !== '' && data.password !== '') {
      if (data.userName.length > 3 && data.password.length > 3)
        navigate('/Planet');
      else
        dispatch(
          setAuthorisationError('Ambigous Username, more then one result')
        );
    }
  };
  console.log(data);
  return (
    <form className="flex-container" onSubmit={(e) => e.preventDefault()}>
      {data.AuthorisationError !== 'No Error' && (
        <div>
          <p>{data.AuthorisationError}</p>
        </div>
      )}
      <div className="flex">
        <label className="label-login" htmlFor="username">
          Name{' '}
        </label>

        <input
          id="username"
          type="text"
          value={data.userName}
          onChange={(e) => handleChange('Name', e.currentTarget.value)}
          required
        />
      </div>
      <br />
      <div className="flex">
        <label className="label-password" htmlFor="password">
          Password{' '}
        </label>

        <input
          id="password"
          type="password"
          value={data.password}
          onChange={(e) => handleChange('Password', e.currentTarget.value)}
          required
        />
      </div>
      <br />
      <div>
        <button onClick={() => handleClick()}>Submit</button>
      </div>
    </form>
  );
};

export default Login;
