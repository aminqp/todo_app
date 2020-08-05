import * as moment from 'moment';

export const standardDate = (date) => {
  try {
    if (!date) {
      return ' - ';
    }
    const mDate = moment(date);
    return `${mDate.format('MMMM')} ${mDate.format(
      'DD'
    )}, ${mDate.format('YYYY')}`;
  } catch (e) {
    console.log(' standardDate => e -> ', e);
    return ' - ';
  }
};
export const get12Time = (date) => {
  try {
    if (!date) {
      return ' - ';
    }
    const mDate = moment(date);
    return mDate.format('hh:mm A');
  } catch (e) {
    console.log(' getTime => e -> ', e);
    return ' - ';
  }
};
