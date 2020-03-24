import { connect } from 'react-redux';
import HeaderGame from './HeaderGame';

const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}

export default connect(mapStateToProps)(HeaderGame);