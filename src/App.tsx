import './scss/App.scss'

function App() {

  return (
    <>
      <main className='homePage'>
          <h1>Fluxo Task</h1>
          <section>
            <p>Gestão inteligente de tarefas</p>
          </section>
          <section className='loginForm'>
            <label>Email</label>
            <input type="email" />
            <label>Senha</label>
            <input type="password" />
            <div className='rememberForgot'>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Lembrar de mim</label>
            </div>
            <a href="#">Esqueci minha senha</a>
            <button>Entrar</button>
          </section>
          <section>
            <p>Não tem uma conta? <a href="#">Fale com o administrador</a></p>
          </section>
      </main>
    </>
  )
}

export default App
