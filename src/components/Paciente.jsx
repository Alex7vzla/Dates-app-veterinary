import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const {nombreMascota, nombrePropietario, email, fecha, syntoms, id} = paciente;

  const handleDelete = () => {
    const respuesta = confirm('¿Deseas eliminar el registro del paciente?');

    if(respuesta) eliminarPaciente(id)
  };

  return (
  <section className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Nombre: {''}
      <span className='font-normal normal-case text-center'> {nombreMascota}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Propietario: {''}
      <span className='font-normal normal-case text-center'> {nombrePropietario}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Email: {''}
      <span className='font-normal normal-case text-center'> {email}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Fecha de Alta: {''}
      <span className='font-normal normal-case text-center'> {fecha}</span>
    </p>
    <p className='font-bold mb-3 text-gray-700 uppercase'>
      Sintomas: {''}
      <span className='font-normal normal-case text-center'> {syntoms}</span>
    </p>

    <div className='flex justify-between'>
      <button
        type='button'
        className='py-2
                    px-10
                    bg-indigo-600
                    hover:bg-indigo-700
                    text-white
                    text-bold
                    uppercase
                    rounded-lg
                    mt-10'
        onClick={() => setPaciente(paciente)}
      >
        Editar
      </button>

      <button
        type='button'
        className='py-2
                    px-10
                    bg-red-600
                    hover:bg-red-700
                    text-white
                    text-bold
                    uppercase
                    rounded-lg
                    mt-10'
        onClick={handleDelete}
      >
        Eliminar
      </button>
    </div>

  </section>
  )
}

export default Paciente