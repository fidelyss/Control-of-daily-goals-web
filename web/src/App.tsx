import './App.css'
import logo from '/METAAPP.svg'
import startLogo from '/start-svgrepo-com.svg'
import { Plus, X } from 'lucide-react'
import { Button } from './Components/ui/button'
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogClose, DialogDescription } from './Components/ui/dialog'
import { Input } from './Components/ui/input'
import { Label } from './Components/ui/label'
import { RadioGroup, RadioGroupIndicator, RadioGroupItem } from './Components/ui/radio-group'
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
        <div className='flex flex-col gap-6 h-full'>
          <div className='flex flex-col gap-3'>
            <div className='flex items-center justify-between'>
              <DialogTitle>Cadastrar meta</DialogTitle>
              <DialogClose>
                <X className='size-5 text-zinc-600' />
              </DialogClose>
            </div>
            <DialogDescription>
              Adcione atividades que te fazem bem e que voce quer continuar praticando toda a semana
            </DialogDescription>
          </div>
          <form action="" className='flex flex-1 flex-col justify-between'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <Label htmlFor="title">Qual a atividade?</Label>
                <Input id='title' autoFocus placeholder='praticar exercicios, meditar, etc...' />
              </div>
              <div className='flex flex-col gap-2'>
                <Label htmlFor='title'>Quantas vezes na semana?</Label>
                <RadioGroup>
                  <RadioGroupItem value='1'>
                    <RadioGroupIndicator />
                    <span className='text-zinc-300 text-sm font-medium leading-none'>1x na semana</span>
                    <span className='text-lg leading-none'>😆</span>
                  </RadioGroupItem>

                    <RadioGroupItem value='2'>
                    <RadioGroupIndicator />
                    <span className='text-zinc-300 text-sm font-medium leading-none'>2x na semana</span>
                    <span className='text-lg leading-none'>😋</span>
                  </RadioGroupItem>

                    <RadioGroupItem value='3'>
                    <RadioGroupIndicator />
                    <span className='text-zinc-300 text-sm font-medium leading-none'>3x na semana</span>
                    <span className='text-lg leading-none'>😀</span>
                  </RadioGroupItem>

                    <RadioGroupItem value='4'>
                    <RadioGroupIndicator />
                    <span className='text-zinc-300 text-sm font-medium leading-none'>4x na semana</span>
                    <span className='text-lg leading-none'>😯</span>
                  </RadioGroupItem>

                    <RadioGroupItem value='5'>
                    <RadioGroupIndicator />
                    <span className='text-zinc-300 text-sm font-medium leading-none'>5x na semana</span>
                    <span className='text-lg leading-none'>😎</span>
                  </RadioGroupItem>

                    <RadioGroupItem value='6'>
                    <RadioGroupIndicator />
                    <span className='text-zinc-300 text-sm font-medium leading-none'>6x na semana</span>
                    <span className='text-lg leading-none'>😡</span>
                  </RadioGroupItem>

                    <RadioGroupItem value='7'>
                    <RadioGroupIndicator />
                    <span className='text-zinc-300 text-sm font-medium leading-none'>7x na semana</span>
                    <span className='text-lg leading-none'>🔥</span>
                  </RadioGroupItem>
                </RadioGroup>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <DialogClose asChild>
                <Button type='button' variant='secundary' className='flex-1'>Fechar</Button>
              </DialogClose>
              <Button type='button' className='flex-1'>Salvar</Button>
            </div>

          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default App
