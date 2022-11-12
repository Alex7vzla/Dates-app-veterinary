import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({setPacientes, pacientes, setPaciente, paciente}) => {

  const [nombreMascota, setNombreMascota] = useState('');
  const [nombrePropietario, setNombrePropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [syntoms, setSyntoms] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length > 0){
      setNombreMascota(paciente.nombreMascota)
      setNombrePropietario(paciente.nombrePropietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSyntoms(paciente.syntoms)
    }
  }, [paciente])

  const generateId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    
    return random + fecha
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if([nombreMascota, nombrePropietario, email, fecha, syntoms].includes('')){
      
      console.log('Hay al menos un campo vacío');

      setError(true);
      return;
    }

    setError(false);

    const objetoPaciente = {
      nombreMascota,
      nombrePropietario,
      email,
      fecha,
      syntoms
    };

    if(paciente.id){
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})

    }else{
      objetoPaciente.id = generateId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    setNombreMascota('');
    setNombrePropietario('');
    setEmail('');
    setFecha('');
    setSyntoms('');

  };

return (
  <div className="md:w-1/2 lg:w-1/2 mx-5 text-center">

    <h3 className="text-center text-3xl font-black">
      Seguimientos de pacientes
    </h3>
    <p className="text-lg mt-5 text-center mb-10">
      Añade pacientes {""}
      <span className="text-indigo-600 font-bold">Administralos</span>
    </p>

    <form className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10" onSubmit={handleSubmit}>
      
      { error && <Error mensaje='Todos los campos son obligatorios' /> }

      <div className="mb-5">
        <label className="block text-gray-700 uppercase" htmlFor="mascota">
          Nombre de la Mascota
        </label>
        <input
          type="text"
          id="mascota"
          placeholder="Escribe el nombre de la mascota"
          className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md text-center"
          value={nombreMascota}
          onChange={e => setNombreMascota(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label className="block text-gray-700 uppercase" htmlFor="propietario">
          Nombre del propietario
        </label>
        <input
          type="text"
          id="propietario"
          placeholder="Escribe el nombre del propiertario de la mascota"
          className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md text-center"
          value={nombrePropietario}
          onChange={e => setNombrePropietario(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label className="block text-gray-700 uppercase" htmlFor="email">
          Email del propietario
        </label>
        <input
          type="email"
          id="email"
          placeholder="Escribe el email del propiertario de la mascota"
          className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md text-center"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label className="block text-gray-700 uppercase" htmlFor="alta">
          Fecha de alta
        </label>
        <input
          type="date"
          id="alta"
          placeholder="Escribe la fecha de alta de la mascota"
          className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md text-center"
          value={fecha}
          onChange={e => setFecha(e.target.value)}
        />
      </div>
      <div className="mb-5">
        <label className="block text-gray-700 uppercase" htmlFor="alta">
          Sintomas
        </label>
        <textarea
          id="sintomas"
          placeholder="Escribe los sintomas de la mascota"
          className="border-2 w-full p-2 mt-2 placeholder-gray-500 rounded-md text-center"
          value={syntoms}
          onChange={e => setSyntoms(e.target.value)}
        />
      </div>
      <input
        type="submit"
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
        value={paciente.id ? "Editar paciente":"Agregar paciente"}
      />
    </form>
  </div>
);
}

export default Formulario