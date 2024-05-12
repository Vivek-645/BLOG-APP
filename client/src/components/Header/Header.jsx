import { NavLink, Link, useNavigate } from 'react-router-dom'
import logo from '../../Assets/logo.jpg'
import { useState, useEffect } from 'react'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import { resetState, userAuthorLoginThunk } from '../../redux/slices/userAuthorSlice'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentUser, loginUserStatus } = useSelector((state) => state.userAuthoruserAuthorLoginReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      const userCred = JSON.parse(localStorage.getItem("userCred"));
      dispatch(userAuthorLoginThunk(userCred));
    }
  }, []);

  function signOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('userCred');
    dispatch(resetState());
  }

  function navigateToProfile() {
    if (currentUser.userType === 'user')
      navigate('/user-profile/articles');
    else if (currentUser.userType === 'author')
      navigate(`/author-profile/articles-by-author/${currentUser.username}`);
  }

  return (
    <nav className='shadow rounded'>
      <Link to='' className='logo ms-2'>
        <img className='rounded-circle' src={logo} alt="logo" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ''}>
        {!loginUserStatus ? (
          <>
            <li>
              <NavLink to=''>Home</NavLink>
            </li>
            <li>
              <NavLink to='/signup'>Signup</NavLink>
            </li>
            <li>
              <NavLink to='/signin'>Signin</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <div onClick={navigateToProfile} className='user-info-container mt-2'>
                <span className="username">{currentUser.username}</span>
                <span className='user-type'>({currentUser.userType})</span>
              </div>
            </li>
            <li>
              <NavLink to='/signin' onClick={signOut}>
                Signout
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Header;
