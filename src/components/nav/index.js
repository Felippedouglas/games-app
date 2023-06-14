import { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { ContainerNav } from './style';

export default function Nav() {
    
    const [ name, setName] = useState();

    function searchGame() {

        if (name.length >= 3) {
            window.location.href = `/#/search/game=${name.replace(/ /ig, '-')}`;
        } else {
            alert("Digite um valor maior que 2 caracteres")
        }
    };

    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 1) {
            document.getElementById('Container-nav').style.background = 'linear-gradient(to bottom, #181818 90%, #18181800)';
        } else if ($(window).scrollTop() == 0){
            document.getElementById('Container-nav').style.background = 'transparent';
        }
    })

    return(
        <nav>
            <ContainerNav id='Container-nav'>
                <button className='bt-show-aside'>
                    <label htmlFor='checkbox-aside'><i className="fa-solid fa-bars"></i></label>
                </button>
                <Link to='/' className='link-home'>GAMES</Link>
                <label className='label-input-search' htmlFor='input-search'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type='text' id='input-search' spellCheck="false" placeholder='Pesquisar...' autoComplete="off" minLength={3} maxLength={40} value={name || ''} onChange={(e)=>setName(e.target.value)}/>
                    {name &&
                        <>
                            {name.length >= 1 &&
                                <button className='bt-clear-search' onClick={()=>setName('')}><i className="fa-solid fa-xmark"></i></button>
                            }
                        </>
                    }
                    <button className='bt-search-game' onClick={()=>searchGame()}><i className="fa-solid fa-magnifying-glass"></i></button>
                </label>
            </ContainerNav>
        </nav>
    )
}