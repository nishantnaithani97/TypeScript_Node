/* RESPONSE HELPERS FILE
This file helps in sending response as success or error from service to the UI.
And response can be handled properly with the help of this file. */

const response = {
  error: (err: any) => {
    if (!err) {
    // eslint-disable-next-line no-console
      err = new Error('Unknown error');
    }
    const formatted: any = {
      message: err.message,
    };

    if (err.errors) {
      formatted.errors = {};
      const errors = err.errors;
      Object.keys(errors).forEach((type) => {
        if (errors.hasOwnProperty(type)) {
          formatted.errors[type] = errors[type].message;
        }
      });
    }
    return { status: 'error', error: formatted };
  }, 

  success: (data: any) => {
    return { status: 'success', data: data };
  }
}

export default response;