export function EmailLogin (email) {
  return {
    type: 'EMAIL_LOGIN',
    payload: [ email ]
  }
}
