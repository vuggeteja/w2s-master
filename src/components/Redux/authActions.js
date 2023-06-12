export const login = (username, password) => (dispatch) => {
    // Perform authentication logic, e.g., API call
  
    // For simplicity, assume authentication is successful
    const user = { username, role: 'admin' };
  
    dispatch({
      type: 'LOGIN',
      payload: user,
    });
  };
  
  export const logout = () => (dispatch) => {
    dispatch({ type: 'LOGOUT' });
  };
  