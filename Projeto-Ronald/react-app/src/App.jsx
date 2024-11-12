import Excel from './components/googleseets'
import Json from './components/json'

function App() {
  return (
    <>
    <header className='bg-slate-400 w- flex justify-center'>
      <div className='p-'>
        <h2 className='text-black font-bold text-4xs'>Tabela do Excel</h2>
      </div>
    </header>
    <main className='p-20 flex col-auto justify-between'>
      <section className='bg-slate-100 w-2/4'>
        <h2> Excel Emulator</h2>
        <Excel />
      </section>
      <section className='bg-black text-white w-3/3 text-sm p-10 m-4'>
        <h2> JSON Emulator</h2>
        <Json/>
      </section>
    </main>
    </>
  )
}

export default App
