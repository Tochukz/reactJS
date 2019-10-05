import React  from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import StarRating from './star-rating';

/* Class component can access context via this.context */
class Color extends React.Component
{
    // constructor(props){
    //     super(props);       
    // }
    componentWillMount(){
        this.style = {backgroundColor: '#ccc', cursor: 'pointer'};
    }
    shouldComponentUpdate(nextProps) {
        const {rating} = this.props; //Old properties
        return rating !== nextProps.rating; //New proprties
    }
    componentWillUpdate(nextProps) {
        const {title, rating} = this.props;
        this.style = null;               
        this.refs.title.style.backgroundColor = '#f00';
        this.refs.title.style.color = '#fff';        
        alert(`${title}: ${rating} -> ${nextProps.rating}`);
    }    
    componentDidUpdate(prevProps) {
        const {title, rating} = this.props;
        const status = (rating > prevProps.rating)? 'better' : 'worse';        
        console.log(`${title} is getting ${status}`);
        this.refs.title.style.backgroundColor = '#fff';
        this.refs.title.style.color = '#000';
    }
    render() {
        const { id, title, color, rating, onRate, onRemove, history } = this.props;
        return (
            <section className="color" style={this.style}  title="color details">
                <button onClick={onRemove}>x</button>
                <h3 ref="title">{title}</h3>
                <div className="color" style={{backgroundColor:color}} onClick={() => history.push(`/${id}`)}></div>
                <div>
                    <StarRating starsSelected={rating}  onRate={onRate} />
                </div>                
            </section>
        )
    }
}

Color.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func,
}

Color.defaultProp = {
    title: 'untitled',
    color:'#000',
    rating:0,
    onRemove: f => f,
    onRate: f => f
}

Color.contextTypes = {
    store: PropTypes.object
}

export default withRouter(Color);