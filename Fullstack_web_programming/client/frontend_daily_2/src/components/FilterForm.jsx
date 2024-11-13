import { useState, useEffect } from "react";

export default function FilterForm({ onFilterChange, options }) {
  const [filter, setFilter] = useState({
    tipo: "",
    estado: "",
    edad: "",
    genero: "",
  });

  function handleChange(event) {
    const newFilter = { ...filter, [event.target.name]: event.target.value };
    setFilter(newFilter);
    onFilterChange(newFilter);
  }

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <form>
      <label style={{margin: '10px'}}>
        Tipo:
        <select name="tipo" value={filter.tipo} onChange={handleChange}>
          <option value="">Todos</option>
          {options.tipo.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </label>
      <label style={{margin: '10px'}}>
        Estado:
        <select name="estado" value={filter.estado} onChange={handleChange}>
          <option value="">Todos</option>
          {options.estado.map((estado) => (
            <option key={estado} value={estado}>
              {estado}
            </option>
          ))}
        </select>
      </label>
      <label style={{margin: '10px'}}>
        Edad:
        <select name="edad" value={filter.edad} onChange={handleChange}>
          <option value="">Todas</option>
          {options.edad.map((edad) => (
            <option key={edad} value={edad}>
              {edad}
            </option>
          ))}
        </select>
      </label>
      <label style={{margin: '10px'}}>
        Género:
        <select name="genero" value={filter.genero} onChange={handleChange}>
          <option value="">Todos</option>
          {options.genero.map((genero) => (
            <option key={genero} value={genero}>
              {genero}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}
