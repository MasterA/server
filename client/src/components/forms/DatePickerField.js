import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


/*source: https://github.com/Hacker0x01/react-datepicker/issues/543*/

class renderDatePicker extends React.Component {

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (date) {
    this.props.input.onChange(moment(date).format('MM-DD-YYYY'))
  }

  render () {
    const { input, placeholder, label, meta: {touched, error} } = this.props

    return (
      <div>
        <label style={{fontSize: '1em'}}>{label}</label>
        <DatePicker
          {...input}
          placeholder={placeholder}
          dateFormat="MM-DD-YYYY"
          selected={input.value ? moment(input.value, 'MM-DD-YYYY') : null}
          onChange={this.handleChange}
        />
        <div className="red-text" style={{marginBottom: '20px' }}>
          {touched && error}
        </div>
      </div>
    )
  }
}

export default renderDatePicker
