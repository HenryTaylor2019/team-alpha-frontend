import { connect } from 'react-redux';
import App from './App';
import {getData} from '../data/actions/api'

const mapDispatchToProps = (dispatch) => {
    
    return {
        getData: () => { 
            dispatch (getData())
        }
    }
}

export default connect(null,mapDispatchToProps)(App);