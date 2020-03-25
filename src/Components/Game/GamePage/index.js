import { connect } from 'react-redux';
import GamePage from './GamePage';
<<<<<<< HEAD
import { increment } from '../../../data/actions/actions';

=======
import { increment } from '../../../data/actions';
>>>>>>> c97aeb50ed7acfd7ff00d8505cbb64f413df9dc1
const mapStateToProps = (state) => {
    
    return {
        srcImage: state.images[(state.counter -1)].url,
    
    }
}
<<<<<<< HEAD

=======
>>>>>>> c97aeb50ed7acfd7ff00d8505cbb64f413df9dc1
const mapDispatchToProps = (dispatch) => {
    
    return {
        handleIncrement: () => { 
            dispatch (increment())
        }
    }
}
<<<<<<< HEAD

=======
>>>>>>> c97aeb50ed7acfd7ff00d8505cbb64f413df9dc1
export default connect(mapStateToProps,mapDispatchToProps)(GamePage);