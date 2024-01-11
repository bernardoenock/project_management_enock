export interface Create {
  name: string, 
  description: string, 
  startDate: Date 
}

export interface Update {
  name?: string, 
  description?: string, 
  startDate?: Date 
}

export interface CompleteTask {
  completed: boolean
}
