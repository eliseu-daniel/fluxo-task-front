import Buttons from "../Buttons";
import Item from "../Item";
import Widget from "../Widget";

export default function Widgets() {
  return (
    <>
    <div className="widgetProdutividade">
      <Widget > 
        <div className="widgetsHeader">
          <h1>Produtividade por funcionários</h1>
            <Buttons text="Ver todos" />
        </div>
        <div className="widgetsBody">
          <Item title="Eliseu" description="18 tarefas concluidas" count={10} />
        </div>
      </Widget>
    </div>
    <div className="widgetTarefas">
      <Widget >
        <div className="widgetsHeader">
          <h1>Tarefas por setor</h1>
        </div>
        <div className="widgetsBody">
          <Item title="Desenvolvimento" count={10} />
        </div>
      </Widget>
    </div>
    </>
  )
}