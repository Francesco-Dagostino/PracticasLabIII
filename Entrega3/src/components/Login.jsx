import { useState } from "react";


const Login = () => {
  const [username, setUsername] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleInputChange = (event) => {
    const inputUsername = event.target.value;
    setUsername(inputUsername);
    if (inputUsername.toLowerCase().includes('o')) 
    {
      alert('Por Favor ¡Nombres de usuario sin la letra o!');
    }
  };

  const handleRegistration = () => {
    if (username.trim() === '' || username.toLowerCase().includes('o')) 
    {
      alert('Usuario inválido para registrarse || Verifique que su Username no contenga ninguna letra "o"');
    } 
    else {
      alert('¡Usuario registrado correctamente!');
      setRegistered(true); 
    }
  };


  return (
    <div>
      <input type="text" placeholder="Ingrese nombre de usuario" value={username} onChange={handleInputChange}/>
      <button onClick={handleRegistration}> Registrarse</button>
      {registered && <p>{username}</p>}
    </div>
  );
};


export default Login;


