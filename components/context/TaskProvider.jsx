import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext()

const TASKS_STORAGE_KEY = 'fokus-tasks'

export function TasksProvider({ children }) {

    const [tasks, setTasks] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem(TASKS_STORAGE_KEY);
                const loadedData = jsonValue != null ? JSON.parse(jsonValue) : [];
                setTasks(loadedData)
                setIsLoaded(true)
            } catch (_e) {
                // error reading value
            }
        };
        getData()
    }, [])

    useEffect(() => {
        const storeData = async (value) => {
            try {
                const jsonValue = JSON.stringify(value);
                await AsyncStorage.setItem(TASKS_STORAGE_KEY, jsonValue);
            } catch (_e) {
                // saving error
            }
        };
        if (isLoaded) {
            storeData(tasks)
        }

    }, [tasks, isLoaded])

    const addTask = (description) => {
        setTasks(oldState => {
            return [
                ...oldState,
                {
                    description,
                    completed: false,
                    id: String(Date.now())
                }
            ]
        })
    }

    const toggleTaskCompleted = (id) => {
        setTasks(oldState => {
            return oldState.map(t => {
                if (String(t.id) === String(id)) {
                    return {
                        ...t,
                        completed: !t.completed
                    }
                }
                return t
            })
        })
        // chamar persistencia
    }

    const deleteTask = (id) => {
        setTasks(oldState => {
            return oldState.filter(t => String(t.id) !== String(id))
        })
    }

    const updateTask = (id, description) => {
        setTasks(oldState => {
            return oldState.map(t => {
                if (String(t.id) === String(id)) {
                    return {
                        ...t,
                        description
                    }
                }
                return t
            })
        })
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            isLoaded,
            addTask,
            toggleTaskCompleted,
            deleteTask,
            updateTask
        }}>
            {children}
        </TaskContext.Provider>
    )
}
