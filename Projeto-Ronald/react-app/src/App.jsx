import Excel from './components/excel'

function App() {
  return (
    <>
    <header className='bg-slate-400 w- flex justify-center'>
      <div className='p-2'>
        <h2 className='text-black font-bold text-4xs'>Tabela do Excel</h2>
      </div>
    </header>
    <main className='p-20'>
      <Excel />
    </main>
    </>
  )
}

export default App
