export const validatePassword = (rule, value, callback) => {
  if (value.length <= 6) {
    callback(new Error('密码长度至少6位以上~'));
  } else {
    callback();
  }
};
