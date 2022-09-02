import "./styles.css";
import Button from "../Button";
import { useState } from "react";

const Form = ({ listTransactions, setListTransactions }) => {
  const [descricao, setDescricao] = useState("")
  const [valor, setValor] = useState("")
  const [tipo, setTipo] = useState("")
  const [maxId, setMaxId] = useState(
    listTransactions.reduce(
      (prev, cur) => (prev.maxId > cur.maxId ? prev.maxId : cur.maxId),
      0
    )
  )

  const gerarId = () => {
    setMaxId(maxId + 1)
    return maxId
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    gerarId()
    if (tipo !== "-------" && descricao !== "") {
      setListTransactions([
        ...listTransactions,
        { descricao, valor, tipo, maxId },
      ])
    }
  }

  return (
    <form onSubmit={handleSubmit} className="container-form">
      <label htmlFor="descricao">Descrição</label>
      <input
        type="text"
        placeholder="Digite aqui sua descrição"
        onChange={(e) => setDescricao(e.target.value)}
      />
      <span>Ex.: Compra de roupas</span>

      <div className="inputs">
        <div className="filho">
          <label htmlFor="valor">Valor</label>
          <input
            step={0.01}
            type="number"
            placeholder="R$ 1.50"
            onChange={(e) => {
              e.target.value.includes(",") ? 
                 setValor(Number(e.target.value.replace(",", ".")))
                : 
                 setValor(Number(e.target.value))
            }}
          />
        </div>
        <div className="tipo filho">
          <label>
            Tipo de valor
            <select
              name="tipo"
              className="ls-select"
              onChange={(e) => {
                setTipo(e.target.value);
              }}
            >
              <option value={"-------"}>-------</option>
              <option value="Entrada">Entrada</option>
              <option value="Despesa">Despesa</option>
            </select>
          </label>
        </div>
      </div>
      <Button className={"form-button"} children={"Inserir valor"} />
    </form>
  )
}

export default Form;
