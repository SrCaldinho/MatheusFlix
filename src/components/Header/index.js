import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header>
            <Link className='logo' to="/">Matheus Flix</Link>
            <Link className='favoritos' to='/favoritos'>Meus filmes</Link>
        </header>
    )
}

export default Header;