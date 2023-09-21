import PropTypes from 'prop-types';
import Features from '../Features/Features';

const PriceOption = ({option}) => {
    const {name,price, features} = option;
    return (
        <div className='bg-green-600 gap-5 m-5 p-8 text-white rounded-xl space-y-4 flex flex-col'>
           <div>
            
            <h2><span className='text-5xl font-extrabold'>{price} $/m</span></h2>
            <h2 className='text-3xl font-bold'>{name}</h2>
           </div>
           <p className='flex-grow'>
            {
                features.map((feature,idx) => <Features key={idx} feature={feature}></Features>)
            }
           </p>
           <button className='bg-white w-full text-green-600 p-3 font-bold rounded-2xl text-xl hover:bg-green-900 hover:text-white'>Purchase</button>
        </div>
    );
};


PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;