import React from 'react'

const AuthContext = React.createContext({
    search: '',
    sendRequest: ()=>{}
}) 

export default AuthContext