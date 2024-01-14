export interface Create {
  name: string, 
  description: string, 
  startDate: Date | string
}

export interface Update {
  name?: string, 
  description?: string, 
  startdate?: Date 
}

export interface CompleteTask {
  completed: boolean
}

export interface ProjectObj {
  id: string,
  name: string, 
  description: string, 
  startdate: Date 
  tasks?: any[]
}