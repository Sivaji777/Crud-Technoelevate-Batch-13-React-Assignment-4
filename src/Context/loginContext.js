import  React from 'react'
const LoginContext = React.createContext();
const LoginProvider = LoginContext.Provider
const LoginConsumer      = LoginContext.Consumer 
export {LoginProvider,LoginConsumer}
export default LoginContext;