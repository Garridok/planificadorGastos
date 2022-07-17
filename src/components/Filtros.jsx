import {useState, useEffect} from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className="campo">
                <label htmlFor="">Filtrar Gastos</label>
                <select 
                    value={filtro}
                    onChange = {e => setFiltro(e.target.value)}
                    >
                      <option value="">--- Seleccione una Categoria ---</option>
                      <option value="ahorro">Ahorro</option>
                      <option value="comida">Comida</option>
                      <option value="casa">casa</option>
                      <option value="gastos">Gastos Varios</option>
                      <option value="ocio">Ocio</option>
                      <option value="salud">Salud</option>
                      <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
        </form>

    </div>
  )
}

export default Filtros