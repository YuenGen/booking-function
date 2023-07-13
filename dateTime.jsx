export const padL = (num, len = 2, chr = `0`) => `${num}`.padStart(len, chr);

export const DateToString = (Date, format = "yyyy-mm-dd hh:mm:ss") => {
  if (format === "yyyy-mm-dd hh:mm:ss") {
    return `${Date.getFullYear()}-${padL(Date.getMonth() + 1)}-${padL(
      Date.getDate()
    )} ${padL(Date.getHours())}:${padL(Date.getMinutes())}:${padL(
      Date.getSeconds()
    )}`;
  }
  if (format === "yyyy-mm-dd hh:mm") {
    return `${Date.getFullYear()}-${padL(Date.getMonth() + 1)}-${padL(
      Date.getDate()
    )} ${padL(Date.getHours())}:${padL(Date.getMinutes())}:00`;
  }
  if (format === "yyyy-mm-dd hh") {
    return `${Date.getFullYear()}-${padL(Date.getMonth() + 1)}-${padL(
      Date.getDate()
    )} ${padL(Date.getHours())}:00:00`;
  }
  if (format === "yyyy-mm-dd") {
    return `${Date.getFullYear()}-${padL(Date.getMonth() + 1)}-${padL(
      Date.getDate()
    )}`;
  }
  if (format === "hh:mm:ss") {
    return `${padL(Date.getHours())}:${padL(Date.getMinutes())}:${padL(
      Date.getSeconds()
    )}`;
  }
};

export const now = (format = "yyyy-mm-dd hh:mm:ss") => {
  let d = new Date();
  if (format == "yyyy-mm-dd hh:mm:ss") {
    let dformat = `${d.getFullYear()}-${padL(d.getMonth() + 1)}-${padL(
      d.getDate()
    )} ${padL(d.getHours())}:${padL(d.getMinutes())}:${padL(d.getSeconds())}`;
    return dformat;
  }
  if (format == "yyyy-mm-dd hh:mm") {
    let dformat = `${d.getFullYear()}-${padL(d.getMonth() + 1)}-${padL(
      d.getDate()
    )} ${padL(d.getHours())}:${padL(d.getMinutes())}:00`;
    return dformat;
  }
  if (format == "yyyy-mm-dd hh") {
    let dformat = `${d.getFullYear()}-${padL(d.getMonth() + 1)}-${padL(
      d.getDate()
    )} ${padL(d.getHours())}:00:00`;
    return dformat;
  }
  if (format == "yyyy-mm-dd") {
    let dformat = `${d.getFullYear()}-${padL(d.getMonth() + 1)}-${padL(
      d.getDate()
    )}`;
    return dformat;
  }
};

export const getAge = (dateString) => {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const JSDateTime = (dateTime, option) => {
  let dt = dateTime.split(/[- :]/);
  let newdt = String(new Date(dt[0], dt[1] - 1, dt[2], dt[3], dt[4], dt[5]));
  if (option && "array" in option) {
    // [Wed, Jun, 09, 2010, 14:12:01, GMT+0100, (BST)]
    return newdt.split(" ");
  }
  // -> Wed Jun 09 2010 14:12:01 GMT+0100 (BST)
  return newdt;
};

export const dateTimeConverter = (dateTime, format) => {
  let dt = dateTime.split(/[- :]/);
  if (format == "YYYY-MM-DD HH:MM") {
    return `${dt[0]}-${dt[1]}-${dt[2]} ${dt[3]}:${dt[4]}`;
  }
};
export const dateTimeDiff = (dateTime1, dateTime2, format) => {
  let dt1 = new Date(dateTime1).getTime();
  let dt2 = new Date(dateTime2).getTime();
  if (!format) {
    return dt1 - dt2;
  }
  if (format === "d" || format === "day") {
    return (dt1 - dt2) / 1000 / 60 / 60 / 24;
  }
  if (format === "h" || format === "hour") {
    return (dt1 - dt2) / 1000 / 60 / 60;
  }
  if (format === "s" || format === "second") {
    return (dt1 - dt2) / 1000;
  }
};

export const isInTimePeriod = (time, timePeriod) => {
  if (time && timePeriod && "start" in timePeriod && "end" in timePeriod) {
    let splitTime = time.split(":");
    let splitStartTime = timePeriod.start.split(":");
    let splitEndTime = timePeriod.end.split(":");
    if (
      splitTime[0] >= splitStartTime[0] &&
      (splitTime[0] < splitEndTime[0] ||
        (splitEndTime[0] === splitTime[0] &&
          parseInt(splitEndTime[1]) === 0 &&
          parseInt(splitEndTime[2]) === 0))
    ) {
      return true;
    } else {
      return false;
    }
  }
};
