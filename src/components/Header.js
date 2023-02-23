import '../App.css';
import Search from './Search'

function Header(onSubmit) {

  return (
    <div className="Header">
        <Search {...onSubmit}/>
    </div>
  );
}

export default Header;