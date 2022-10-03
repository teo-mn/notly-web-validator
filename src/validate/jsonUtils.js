export const jsonWrap = (data) => {
  if (data === undefined || data === null) {
    return 'null';
  } else if (typeof data === 'string') {
    return '"' + data.toLowerCase() + '"';
  } else if (data instanceof Array) {
    let res = '[';
    data.forEach((item, index) => {
      const temp = jsonWrap(item);
      res += (index > 0 ? ',' : '') + temp;
    });
    res += ']';
    return res;
  } else if (typeof data === 'number') {
    return data.toString().toLowerCase();
  } else if (typeof data === 'object') {
    const keys = Object.keys(data).sort();
    let res = '{';
    keys.forEach((key, index) => {
      if (index) {
        res += ',';
      }
      res += '"' + key + '":';
      res += jsonWrap(data[key]);
    })
    res += '}'
    return res.toLowerCase();
  }
  return data.toString().toLowerCase();

}
