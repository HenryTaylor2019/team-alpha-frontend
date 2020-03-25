import { connect } from 'react-redux';
import GamePage from './GamePage';
import { increment } from '../../../data/actions';
const mapStateToProps = (state) => {
    
    return {
        srcImage: state.images[(state.counter -1)].url,
    
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        handleIncrement: () => { 
            dispatch (increment())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GamePage);