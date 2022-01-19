import {useState} from 'react'

function Condicional(){

    const[email, setEmail] = useState()
    const[userEmail, setUserEmail] =useState() //para validacao, por exemplo

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre seu email</h2>
            <form>
                <input type="email" placeholder="Digite seu email..." onChange={(e)=> setEmail(e.target.value)} />
                <button type="submit" onClick={enviarEmail}>Enviar e-mail</button>
                {userEmail && ( //'{' é o condicional e o '&&' concatena, se tem email do user, cria a div abaixo}
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar E-mail</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional