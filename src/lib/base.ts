class BaseHelper {
  getName = (name: string) => {
    const uName = name;
    return uName;
  };

  getEmail = (email: string) => {
    const uEmail = email ? email.toLowerCase() : '';
    return uEmail;
  };

  getPassword = (password: any) => {
    const uPassword = password;
    return uPassword;
  };

  trimData = (obj: any) => {
    Object.keys(obj).forEach((key: any) => {
      if (typeof (obj[key]) === 'string') {
        obj[key] = obj[key].trim();
      }
    });
    return obj;
  };
}

export default new BaseHelper;
