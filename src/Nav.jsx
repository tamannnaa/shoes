import logo from './assets/Logo.png'

const Nav = () => {
  return (
    <nav className="container">
      <div className="Logo">
        <img src={logo} alt="Logo"></img>
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About </li>
        <li href="#">Contact</li>
      </ul>
      <button>Login</button>
    </nav>
  )
}
export default Nav