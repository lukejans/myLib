/********************
* Helper Functions  *
********************/

const calcTimeDiff = (startDate, finishDate) => {
    let format = "minutes";
    let time = (finishDate - startDate) / 1000 / 60;
    if (time >= 60) {
      format = "hours";
      time /= 60;
      if (time >= 24) {
        format = "days";
        time /= 24;
      }
    }
    return `${time.toFixed(1)} ${format}`;
  };

export { calcTimeDiff } 