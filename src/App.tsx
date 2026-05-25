import './scss/App.scss'

function App() {

  return (
    <>
      <main>
          <h1>Fluxo Task</h1>
          <section>
            <p>Gestão inteligente de tarefas</p>
          </section>
          <section>
            <label>Email</label>
            <input type="email" />
            <label>Senha</label>
            <input type="password" />
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Lembrar de mim</label>
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
