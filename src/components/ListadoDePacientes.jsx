import Paciente from './Paciente'

const ListadoDePacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (
    <div className='md:w-1/2 lg:1/2 pl-20 md:h-screen overflow-y-scroll'>

      {pacientes && pacientes.length ? (
      <>
        <h2 className='font-black text-3xl text-center'>Listado De Pacientes</h2>
          <p className='text-center mb-10 mt-5 text-xl'>
            Administra tus {''}
            <span className='text-indigo-600 font-bold'>pacientes y citas</span>
          </p>

          {pacientes.map(paciente => (
            <Paciente 
            key={paciente.id}  
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
          ))};
      </>  
        ) : (
          <>
            <h2 className='font-black text-3xl text-center'>No Hay Pacientes</h2>
              <p className='text-center mb-10 mt-5 text-xl'>
                Comienza agregando pacientes {''}
                <span className='text-indigo-600 font-bold'>y apareceran en este lugar</span>
              </p>
          </>
        )}
        
    </div>
  )
}

export default ListadoDePacientes