export const generateStringRandom = (length, string) => {
  let result = "";
  const charactersLength = string.length;
  for (let i = 0; i < length; i++) {
    result += string.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export const isEmpty = (value) => {
  if (typeof value === "object" && value != null) {
    return Object.keys(value).length === 0;
  }
  return value == null || value == undefined || !value?.length || value == NaN;
};

export const convertVietNamese = async (text) => {
  text = text.replaceAll(/Á|À|Ả|Ã|Ạ|Ă|Ắ|Ặ|Ằ|Ẳ|Ẵ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ/g, "A");
  text = text.replaceAll(/á|à|ả|ã|ạ|ă|ắ|ặ|ằ|ẳ|ẵ|â|ấ|ầ|ẩ|ẫ|ậ/g, "a");
  text = text.replaceAll(/É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ/g, "E");
  text = text.replaceAll(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/g, "e");
  text = text.replaceAll(/Í|Ì|Ỉ|Ĩ|Ị/g, "I");
  text = text.replaceAll(/í|ì|ỉ|ĩ|ị/g, "i");
  text = text.replaceAll(/Ó|Ò|Ỏ|Õ|Ọ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ/g, "O");
  text = text.replaceAll(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/g, "o");
  text = text.replaceAll(/Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự/g, "U");
  text = text.replaceAll(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/g, "u");
  text = text.replaceAll(/Ý|Ỳ|Ỷ|Ỹ|Ỵ/g, "Y");
  text = text.replaceAll(/ý|ỳ|ỷ|ỹ|ỵ/g, "y");
  text = text.replaceAll(/ñ|ń|ņ|ŉ|ŋ/g, "n");
  text = text.replaceAll(/Ñ|Ń|Ņ|Ŋ/g, "N");
  text = text.replaceAll(/ć|ĉ|ċ|Č/g, "c");
  text = text.replaceAll(/Č|Ć|Ĉ|Ċ/g, "C");
  text = text.replaceAll(/ź|ż|ž/g, "z");
  text = text.replaceAll(/Ź|Ż|Ž/g, "Z");
  text = text.replaceAll(/ĝ|ğ|ġ|ģ/g, "g");
  text = text.replaceAll(/Ĝ|Ğ|Ġ|Ģ/g, "G");
  text = text.replaceAll(/Đ/g, "D");
  text = text.replaceAll(/đ/g, "d");
  text = text.replaceAll(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
  text = text.replaceAll(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
  return text;
};

export const validMail = async (mail) => {
  return String(mail)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

export const defaultValue = (value, defaultValue = null) => {
  return isEmpty(value) ? defaultValue : value;
};

export const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const rangeByStep = (min, max, step, getMax = true) => {
  let result = _.range(min, max, step);
  if (getMax) {
    if (result[result.length - 1] !== max) {
      result.push(max);
    }
  }
  return result;
};

export const getDuplicateValueInArrayObject = (values, key) => {
  const lookup = values.reduce((a, e) => {
    a[e[key]] = ++a[e[key]] || 0;
    return a;
  }, {});

  return values.filter((e) => lookup[e[key]]);
};
