import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

const Timer = () => {
  const [segundos, setSegundos] = useState(0);
  const [activo, setActivo] = useState(false);
  const [tipo, setTipo] = useState('Contador');

  const myRef = useRef(null);

  function toggle() {
    setActivo(!activo);
  }

  function reset() {
    const ref = myRef.current;
    setSegundos(0);
    setActivo(false);
    ref.value = '';
  }

  function cambioTipo() {
    if (tipo === 'Contador') setTipo('Cuenta Regresiva');
    if (tipo === 'Cuenta Regresiva') setTipo('Contador');
  }

  function agregaSegundos() {
    // `current` apunta al input
    const ref = myRef.current.value;
    setSegundos(ref);
  }

  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos + 1);
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);
    }

    if (activo && tipo === 'Cuenta Regresiva') {
      intervalo = setInterval(() => {
        setSegundos(segundos - 1);
      }, 1000);
    }
    if (segundos === 0 && tipo === 'Cuenta Regresiva') {
      reset();
      clearInterval(intervalo);
    }

    return () => clearInterval(intervalo);
  }, [activo, segundos, tipo]);

  return (
    <div className="app">
      <div className="time">{segundos}</div>
      <div className="row">
        <button
          type="button"
          className={`button button-primary button-primary-${activo ? 'active' : 'inactive'}`}
          onClick={toggle}
        >
          {activo ? 'Pausa' : 'Inicio'}
        </button>
        <button type="button" className="button" onClick={reset}>
          Reset
        </button>
      </div>
      <button type="button" className="button" onClick={cambioTipo}>
        {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && (
        <input
          ref={myRef}
          onChange={agregaSegundos}
          type="number"
          placeholder="Ingresa Segundos"
          autoComplete="off"
        />
      )}
    </div>
  );
};

export default Timer;
