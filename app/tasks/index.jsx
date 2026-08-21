import { Text, View } from "react-native";
import TaskItem from "../../components/TaskItem";

export default function Tasks() {
    return (
        <View >
            <Text>
                Pagina para listar tarefas
            </Text>
            <TaskItem 
                completed 
                text="Estudar React"
            />
            <TaskItem 
                completed 
                text="Estudar React Native"
            />
        </View>
    );
}

