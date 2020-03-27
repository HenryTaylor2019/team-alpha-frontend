import { connect } from 'react-redux';
import CountDown from './CountDown';
import { increment } from '../../../data/actions/actions';


const mapDispatchToProps = (dispatch) => {

    return {
        timerExpired: () => {
            dispatch(increment())
        }
    }
}

export default connect(null, mapDispatchToProps)(CountDown);
