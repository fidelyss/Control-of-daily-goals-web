import './App.css'
import logo from '/METAAPP.svg'
import startLogo from '/start-svgrepo-com.svg'
import { Plus, X } from 'lucide-react'
import { Button } from './Components/ui/button'
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose } from './Components/ui/dialog'
function App() {
  return (
    <Dialog>
      <div className='h-screen flex flex-col items-center justify-center gap-8'>
        <img className='"w-[100px] h-[100px]' src={logo} alt="META APP" />
        <img className='"w-[150px] h-[400px]' src={startLogo} alt="Start" />
        <p className='text-zinc-300 leading-relaxed max-w-80 text-center'>
          Você ainda Não cadastrou nenhuma meta, que tal cadastrar uma agora mesmo ?
        </p>
        <DialogTrigger asChild>
          <Button>
            <Plus className='size-4' />
            Cadastrar meta
          </Button >
        </DialogTrigger>
      </div>

      <DialogContent>
        <div className='flex items-center justify-between'>
          <DialogTitle>Cadastrar meta</DialogTitle>
          <DialogClose><X className='size-5 text-zinc-600' /></DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default App
