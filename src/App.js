import Header from './components/Header'
import {Periodo1, Periodo2} from './components/grade'
import 'bootstrap/dist/css/bootstrap.min.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return(
      <>
        <Header></Header>
        <div className="container">
          <Periodo1></Periodo1>
          <Periodo2></Periodo2>
        </div>
     </>
    )
}