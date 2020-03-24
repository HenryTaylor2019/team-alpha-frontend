import { connect } from 'react-redux';
import GamePage from './GamePage';

const mapStateToProps = (state) => {
    
    return {
        srcImage: state.images[(state.counter -1)].url,
    
    }
}

// const mapDispatchToProps = (state) => {
    
//     return {
//         handleIncrement: () => { 
//             dispatch (increment())
//         }
//     }
// }

export default connect(mapStateToProps)(GamePage);