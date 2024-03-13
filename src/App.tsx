import "./App.css"
import MeuComponente from "./componentes/MeuComponente"
function App() {
  let nome = "Ai bolso..."
  let sobrenome = "....naro..........goz.........bo.....naro"
  return (
    <>
      <MeuComponente></MeuComponente>
      <h1 className="nome">{nome}</h1>
      <p className="sobrenome">{sobrenome}</p>
    </>
  )// Retorna JSX - JavaScript XML
}
export default App