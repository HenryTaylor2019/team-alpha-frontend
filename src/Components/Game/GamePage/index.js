import { connect } from 'react-redux';
import GamePage from './GamePage';
import { increment, incrementScore } from '../../../data/actions/actions';
const mapStateToProps = (state) => {
    
    return {
        srcImage: state.images[(state.counter -1)].url,
        style: {
            top: `${state.images[(state.counter -1)].top}%`,
            bottom: `${state.images[(state.counter -1)].bottom}%`,
            left: `${state.images[(state.counter -1)].left}%`,
            right: `${state.images[(state.counter -1)].right}%`,
            position: 'absolute',
            //  backgroundColor: 'red',
        },
        counter: state.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    console.log('ahhh')
    return {
        
        handleIncrement: () => { 
            dispatch (increment())
            dispatch (incrementScore())
            
            
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GamePage);

// function actionCreator(payload) {
//     return dispatch => {
//         dispatch(action1(payload))
//         dispatch(action2(payload))
//     }
// }
// const mapDispatchToProps = dispatch => ({
//     action1: some_payload => dispatch(action1(some_payload))
//     action2: some_payload => dispatch(action2(some_payload))
//  })