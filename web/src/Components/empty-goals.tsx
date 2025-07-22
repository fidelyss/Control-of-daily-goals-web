import React from 'react'
import { DialogTrigger } from './ui/dialog'
import { Button } from './ui/button'
import { Plus } from 'lucide-react'
import logo from '/METAAPP.svg'
import startLogo from '/start-svgrepo-com.svg'

const EmptyGoal = () => {
  return (
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
  )
}
export {EmptyGoal}