import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ImgAcao from './images/acao.png';
import ImgEstrategia from './images/estrategia.png';
import ImgCorrida from './images/corrida.png';
import ImgRpg from './images/rpg.png';
import { ContainerAside } from './style';

export default function Aside() {

    const [ showAside, setShowAside ] = useState(false);

    return(
        <ContainerAside showAside={showAside} setShowAside={setShowAside}>
            <input type='checkbox' id='checkbox-aside' onChange={()=>setShowAside(!showAside)}/>
            <aside className='aside'>
                <section className='section-aside'>
                    <Link className='link-aside' to='/'><i className="fa-solid fa-house-chimney-crack"></i> Inicio</Link>
                </section>
                <section className='section-aside'>
                    <h2>Gênero</h2>
                    <Link className='link-aside' to='/search/genre=action&4'><img loading="lazy" src={ImgAcao} alt=""/> Ação</Link>
                    <Link className='link-aside' to='/search/genre=strategy&10'><img loading="lazy" src={ImgEstrategia} alt=""/> Estratégia</Link>
                    <Link className='link-aside' to='/search/genre=rpg&5'><img loading="lazy" src={ImgRpg} alt=""/> RPG</Link>
                    <Link className='link-aside' to='/search/genre=racing&1'><img loading="lazy" src={ImgCorrida} alt=""/> Corrida</Link>
                </section>
                <section className='section-aside'>
                    <h2>Plataforma</h2>
                    <Link className='link-aside' to='/'><i className="fa-brands fa-windows"></i> PC</Link>
                    <Link className='link-aside' to='/'><i className="fa-brands fa-playstation"></i> PlayStation</Link>
                    <Link className='link-aside' to='/'><i className="fa-brands fa-xbox"></i> Xbox</Link>
                    <Link className='link-aside' to='/'><i className="fa-solid fa-gamepad"></i> Nintendo Switch</Link>
                    <Link className='link-aside' to='/'><i className="fa-brands fa-android"></i> Android</Link>
                    <Link className='link-aside' to='/'><i className="fa-brands fa-apple"></i> ios</Link>
                </section>
            
            </aside>
        </ContainerAside>
    )
}