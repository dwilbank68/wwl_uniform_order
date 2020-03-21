import React from 'react';
// import _ from 'lodash';
import Select from 'react-select';

export default
({onChange, product}) => {

    const {sizes} = product;

    const options = Object
        .keys(sizes)
        .map(s => {
            const label = s.split('_')[1];
            // console.log('---------------------');
            // console.log("chosenSize", chosenSize);
            // console.log('---------------------');
            return {value:s, label};
            // return s;
        })

        const selectStyles = {
            control: (provided, state) => ({
                ...provided,
                fontSize: 12,
                height: 24,
                width: 80
            }),
            dropdownIndicator: base => ({ ...base, display: 'none' }),
            indicatorsContainer: base => ({
                ...base, display:'none'
            }),
            indicatorSeparator: base => ({
                ...base, display:'none'
            }),
            option: (provided, state) => ({
                ...provided,
                borderBottom: '1px solid gray',
                // color: state.isSelected ? 'red' : 'blue',
                fontSize: 12,
                height: 32,
                textAlign: 'center'
            }),
            placeholder: base => ({
                ...base,
                paddingBottom:'24px',
                marginLeft:'18px'
                // margin:'auto 0'
            }),
            singleValue: base => ({
                ...base,
                paddingBottom:'24px',
                marginLeft:'18px'
            }),
        }

    return (
        <div className="input-field col s2">
            <Select placeholder='Size'
                    options={options}
                    onChange={onChange}
                    styles={selectStyles}
                    defaultValue={options.length === 1 ? options[0] : null}/>
        </div>
    );
};