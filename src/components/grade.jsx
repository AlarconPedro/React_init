import periodo1 from "./periodo1.js";
import periodo2 from "./periodo2.js";

export const Periodo1 = () => {
    function getPrimeiro () {
        return periodo1.map(dados=> {
            return <div className="col-12 col-md-4 text-center container">
                <div class="rounded w-100 margin_null">
                    <div class="row">
                        <h3 className="background_h3 rounded-pill mx-auto margin_null">{dados.Nome}</h3>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-6 background rounded-bottom">
                            <p>{dados.CH} Horas</p>
                        </div>
                    </div>
                </div>
            </div>
        })
    }

    return(
        <>
            <h1 className="text-center rounded-pill">Grade de Aulas 1° Período:</h1>
            <div className="w-100 row col-md-4 mx-auto">
                {getPrimeiro()}
            </div>
        </>
    )
}

export const Periodo2 = () => {
    function getSegundo () {
        return periodo2.map(dados=> {
            return <div className="col-12 col-md-4 text-center container">
             <div class="rounded w-100 margin_null">
                <div class="row">
                    <h3 className="background_h3 rounded-pill mx-auto margin_null">{dados.Nome}</h3>
                </div>
                <div class="row justify-content-center">
                    <div class="col-6 background rounded-bottom">
                        <p>{dados.CH} Horas</p>
                    </div>
                </div>
            </div>      
        </div>
        })
    }

    return(
        <>
            <h1 className="text-center rounded-pill">Grade de Aulas 2° Período:</h1>
            <div className="w-100 row col-md-4 mx-auto">
                {getSegundo()}
            </div>
        </>
    )
}