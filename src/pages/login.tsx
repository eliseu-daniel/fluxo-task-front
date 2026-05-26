import '@/scss/login.scss'

export default function Login() {
  return (
    <>
      <main className='homePage'>
        <div className='backgroundImage'></div>
          <div className='titleSubtitle'>
            <h1>Fluxo Task</h1>
            <p>Gestão inteligente de tarefas</p>
          </div>
          <section className='loginForm'>
            <label>Email</label>
            <input type="email" placeholder="seu@email.com" />
            <label>Senha</label>
            <input type="password" placeholder="••••••••" />
            <div className='rememberForgot'>
              <div className='remember'>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Lembrar de mim</label>
              </div>
              <a href="#">Esqueci minha senha</a>
            </div>
            <button>Entrar</button>
          </section>
          <section className='register'>
            <p>Não tem uma conta? <a href="#">Fale com o administrador</a></p>
          </section>
      </main>
    </>
  )
}


