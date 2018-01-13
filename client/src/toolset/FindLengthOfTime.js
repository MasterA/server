/*eslint eqeqeq: "off"*/
import React, { Component } from 'react';

// I created: January 02, 2018
//surce: https://stackoverflow.com/questions/26159269/convert-number-of-days-into-years-months-days

/*
NOTE: Today is not counted as a day, its all days expect today shown in length
if Today is the actual result of the function will display as 0, since Today
is exept from calculation. I think its 0 because this day has not ended thus
to be a 1 instead a 0, a lapse of 24 hrs has to be taken place.
*/

class FindLengthOfTime extends Component {

  daysInMonth(date2_UTC) {
    let monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
    let monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
    let monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
    return monthLength;
  }


  renderCalculation(date) {

    let yText = "";
    let mText = "";
    let dText = "";
    let yAppendix = "";
    let mAppendix = "";
    let dAppendix = "";
    let finalString = "";

    const oldDate = new Date(date);
    const currentDate = new Date();

    // convert to UTC
    const date2_UTC = new Date(Date.UTC(currentDate.getUTCFullYear(), currentDate.getUTCMonth(), currentDate.getUTCDate()));
    const date1_UTC = new Date(Date.UTC(oldDate.getUTCFullYear(), oldDate.getUTCMonth(), oldDate.getUTCDate()));


    // days
    let days = date2_UTC.getDate() - date1_UTC.getDate();
    if (days < 0)
    {

        date2_UTC.setMonth(date2_UTC.getMonth() - 1);
        days += this.daysInMonth(date2_UTC);
    }

    // months
    let months = date2_UTC.getMonth() - date1_UTC.getMonth();
    if (months < 0)
    {
        date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
        months += 12;
    }

    // years
    let years = date2_UTC.getFullYear() - date1_UTC.getFullYear();

    // CONSTRUCTING RETURN STRING LOGIC:

    if (years > 1) yAppendix = " years";
      else yAppendix = " year";
    if (months > 1) mAppendix = " months";
      else mAppendix = " month";
    if (days > 1) dAppendix = " days";
      else dAppendix = " day";

    // if year is present then months must be present and days but not in reverse
    // e.g. if you have days dont mean you have a month or year length necessarily.
    if (!years == 0) {
      yText = years + yAppendix + ", "
    }

    if (!months == 0) {
      mText = months + mAppendix + ", and "
    }

    if(!days == 0){
      dText = days + dAppendix
    }

    // setting finalString
    if (years == 0 && months == 0 && days == 0 ) {
      finalString = "Today";
    } else {
      finalString = yText + mText + dText
    }

    return finalString;

  }

  render() {
    const { date } = this.props;


    return(
      <div>
        {this.renderCalculation(date)}
      </div>
    )
  };
};

export default FindLengthOfTime;
