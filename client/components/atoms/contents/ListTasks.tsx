

type Props = {
  tasks?: any[]
}

const ListTasks = ({tasks}: Props) => {
  return (
    <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
    </ul>
  )
}

export default ListTasks