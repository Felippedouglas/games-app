import { useEffect, useState } from "react"
import { ContainerRequirementsGame } from "./style";

export default function RequirementsGame(props) {

    const [ selectPlataforma, setSelectPlataforma ] = useState();
    const [ numeroPlataformas, setNumeroPlataformas ] = useState();

    useEffect(()=> {

        console.log(props.platforms)

        setTimeout(()=>{
            var numeroPlataformas = document.getElementById("select-plataforma");
            setNumeroPlataformas(numeroPlataformas.childElementCount);
        }, 1000)
    }, [selectPlataforma])

    return(
        <ContainerRequirementsGame numeroPlataformas={numeroPlataformas || 0}>

            <header>
                <h2>Requisitos do sistema</h2>
                {props.platforms &&
                    <select onChange={(e)=>setSelectPlataforma(e.target.value || 'selecione')} onClick={(e)=>setSelectPlataforma(e.target.value || 'selecione')} id="select-plataforma">
                        {numeroPlataformas >= 1 && <option value=''>Selecione</option>}
                        {props.platforms.map((plataforma)=> {
                            return (
                                <>
                                    {plataforma.requirements.minimum || plataforma.requirements.recommended ?
                                        <option value={plataforma.platform.slug} key={`${plataforma.platform.slug}`}>{plataforma.platform.name}</option>
                                        : ''
                                    }
                                </>
                            )
                        })}
                    </select>
                }
            </header>

            {props.platforms &&
                <>
                    {selectPlataforma ?
                        <>
                            {props.platforms.map((plataforma)=> {
                                return (
                                    <>
                                        {plataforma.platform.slug == selectPlataforma &&
                                            <div className="div-requirements" key={`${plataforma.platform.slug}`}>
                                                <div className="requirements-minimun">
                                                    <h3>Mínimo</h3>
                                                    {plataforma.requirements.minimum ?
                                                        <p>{plataforma.requirements.minimum}</p>
                                                        : <p>Indisponível!</p>
                                                    }
                                                </div>
                                                <div className="requirements-recommended">
                                                    <h3>Recomendado</h3>
                                                    {plataforma.requirements.recommended ?
                                                        <p>{plataforma.requirements.recommended}</p>
                                                        : <p>Indisponível!</p>
                                                    }
                                                </div>
                                            </div>
                                        }
                                    </>
                                )
                            })}
                        </>
                        : 
                        <>
                            {props.platforms.slice(0,1).map((plataforma)=> {
                                return (
                                    <div className="div-requirements" key={`${plataforma.requirements.minimun}/${plataforma.requirements.recommended}`}>
                                        <div className="requirements-minimun">
                                            <h3>Mínimo</h3>
                                            {plataforma.requirements.minimum ?
                                                <p>{plataforma.requirements.minimum}</p>
                                                : <p>Indisponível!</p>
                                            }
                                        </div>
                                        <div className="requirements-recommended">
                                            <h3>Recomendado</h3>
                                            {plataforma.requirements.recommended ?
                                                <p>{plataforma.requirements.recommended}</p>
                                                : <p>Indisponível!</p>
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </>
                    }
                </>
            }
        </ContainerRequirementsGame>
    )
}