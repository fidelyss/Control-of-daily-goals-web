import './App.css'
import { Dialog } from './Components/ui/dialog'
import { CreateGoal } from './Components/create-goal'
import { Summary } from './Components/summary'
// import { EmptyGoal } from './Components/empty-goals'
function App() {
  return (
    <Dialog>
      <CreateGoal />
      {/* <EmptyGoal /> */}
      <Summary />
    </Dialog>
  )
}

export default App
