import  { useCallback, useState } from 'react'
import { auth, db } from '../firebase/Firebase'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');  
  const [error, setError] = useState(null)
  const [esRegistro, setEsRegistro] = useState(true)
  const navigate = useNavigate();

  // Retornar errores del formulariio
  const procesarDatos = e => {
    e.preventDefault()
    if(!email.trim()){
      setError("Ingrese Email")
      return

    }
    if(!pass.trim()){
      setError("Ingrese Contraseña")
      return

    }
    if(pass.length < 6 ){
      setError('Password menor a 6 caracteres' )
      return
    }
    setError(null)
    console.log('Correcto')

    if(esRegistro){
      registrar()
    }else{
      login()
    }
  }


  // Funcion Login / navegar a ruta deseada !
  const login = useCallback(async () => {
    try{
      const res = await auth.signInWithEmailAndPassword(email, pass)
      console.log(res.user)
      setEmail('')
      setPass('')
      setError(null)
      navigate("/tienda")

    } catch (error){
      console.log(error)
      if(error.code === 'auth/user-not-found'){
      setError('Usuario no encontrado')
    }
    if(error.code === 'auth/wrong-password'){
      setError('Contraseña incorrecta')
    }
  }
  }, [email, pass])
  
  // Funcion registro
  const registrar = useCallback(async() => {
     try {
      const res = await auth.createUserWithEmailAndPassword(email, pass)
      console.log(res.user)
      await db.collection('usuarios').doc(res.user.email).set({
        email: res.user.email,
        uid: res.user.uid
      })
      setEmail('')
      setPass('')
      setError(null)

      
     } catch (error) {
      console.log(error)
      if(error.code === 'auth/invalid-email'){
        setError('Email no valido')
      }
      if(error.code === 'auth/email-already-in-use'){
        setError('Email ya utilizado')
      }
     }
  }, [email, pass])


  // Retornar view LOGIN :D

    return (
      
    
      <div className='sm:grid sm:grid-cols-1 sm:grid-rows-2   md:h-96  md:my-12 md:grid md:grid-cols-2 md:grid-rows-1  md:place-content-center  flex-wrap '>
        
        <div className="order-2 md:order-1 md:rounded  md:items-center  md:justify-center md:ml-4 md:mt-3  md:border border-black bg-[url('https://firebasestorage.googleapis.com/v0/b/marketplace-b3a91.appspot.com/o/puros.jpg?alt=media&token=3f23eeda-05ce-431d-b24c-f5883669e6e2')] bg-cover bg-center hover:grayscale ">
            
        </div>
        <div className='order-1 md:order-2 md:rounded  sm-flex sm:flex-col sm:items-center sm:justify-center sm:p-3 bg-black  md:flex md:items-center md:justify-center  md:mr-4 md:mt-3 md:bg-black  '>
            <form  onSubmit={procesarDatos} className=' sm:flex sm:flex-col   sm:border-none    md:flex flex-col   bg-black shadow-2xl border-white-800 '>
                <h1 className=' sm:p-3 sm:m-2 md:m-1 md:p-4  text-white text-2xl'> 
                {
                  esRegistro ? 'Registro de Usuarios' : 'Login de acceso'
                }
                </h1>
                {
                  error && (
                    <div 
                    className=' text-center bg-red-100 border rounded border-red-400 text-red-700'
                    role="alert"
                    >
                    {error}

                    </div>
                  )
                }
                <input 
                type="email" 
                value={email} 
                placeholder='Correo Electronico' 
                className='sm:mx-5 sm:my-2 border sm:py-1 border-amber-600 md:m-1 md:py-1 rounded-md md:h-10 ' 
                onChange={e => setEmail(e.target.value)}  />

                <input 
                type="password" 
                value={pass} 
                placeholder='Contraseña'  
                className='sm:mx-5 border sm:py-1 border-amber-600 md:m-1  md:py-1 rounded-md md:h-10'  
                onChange={e => setPass(e.target.value)}/>

                <hr  className='m-3'/>

                <button 
                type='submit'
                className='sm:m-3 sm:p-2 sm:hover:bg-amber-800  rounded text-white border-white bg-amber-600 hover:bg-amber-800 md:mt-1 md:mb-1'>
                     {
                      esRegistro ? 'Registrarse' : 'Acceder'
                     }
                </button>

                <button 
                onClick={() => setEsRegistro(!esRegistro)}
                type="button"
                className='sm:m-3 sm:p-2 sm:hover:bg-indigo-600    rounded text-white border-white bg-indigo-600 hover:bg-amber-800 md:mb-5'>
                     {
                      esRegistro ? '¿Estas registrado?' : '¿No tienes Cuenta?'
                     }
                </button>
            </form>
        </div>
      </div>

      
    )
  }
  
  export default Login