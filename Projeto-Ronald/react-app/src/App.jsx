import Excel from './components/excel'

function App() {
  return (
    <>
    <header className='bg-slate-400 w- flex justify-center'>
      <div className='p-2'>
        <h2 className='text-black font-bold text-4xs'>Tabela do Excel</h2>
      </div>
    </header>
    <main className='p-20 flex col-auto justify-between'>
      <section className='bg-slate-100 w-2/4'>
        <h2> Excel Emulator</h2>
        <Excel />
      </section>
      <section className='bg-slate-100 w-1/4'>
        <h2> JSON Emulator</h2>
      </section>
    </main>
    </>
  )
}

export default App
