import { getTasks } from './actions'
import { TasksClient } from './components/tasks-client'
import { HeaderContainer } from '@/components/ui/header-container'
import { TasksHeader } from './components/tasks-header'

export default async function Tasks() {
  const tasks = await getTasks()

  return (
    <>
      <HeaderContainer>
        <TasksHeader />
      </HeaderContainer>
      <TasksClient initialTasks={tasks} />
    </>
  )
}
