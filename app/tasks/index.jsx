import { Text, View } from "react-native";
import TaskItem from "../../components/TaskItem";
import { FokusButton } from "../../components/FokusButton";
import { IconPlus } from "../../components/Icons";
import { StyleSheet } from "react-native";
import { router } from "expo-router";

export default function Tasks() {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.text}>
                    Lista de Tarefas:
                </Text>
                <View style={styles.inner}>
                    <TaskItem
                        completed
                        text="Estudar React"
                    />
                    <TaskItem

                        text="Estudar React Native"
                    />
                </View>
                <FokusButton
                    outline
                    title="Adicionar Nova Tarefa"
                    icon={<IconPlus />}
                    onPress={() => router.navigate('/add-task')}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#021121",
        alignItems: 'center',
        gap: 40,
    },
    wrapper:{
        gap: 40,
        width: '90%'
    },
    text: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 26
    },
    inner: {
        gap: 8
    },
    
})
