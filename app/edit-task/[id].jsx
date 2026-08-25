import { useEffect, useMemo, useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { IconSave } from "../../components/Icons";
import useTaskContext from "../../components/context/useTaskContext";

export default function EditTask () {

    const { id } = useLocalSearchParams()
    const taskId = Array.isArray(id) ? id[0] : id
    const { tasks, isLoaded, updateTask } = useTaskContext()
    const [description, setDescription] = useState('')

    const currentTask = useMemo(() => {
        return tasks.find(task => String(task.id) === String(taskId))
    }, [tasks, taskId])

    useEffect(() => {
        if (currentTask) {
            setDescription(currentTask.description)
        }
    }, [currentTask])

    const submitTask = () => {
        const trimmedDescription = description.trim()

        if (!trimmedDescription || !currentTask) {
            return
        }

        updateTask(taskId, trimmedDescription)
        router.navigate('/tasks')
    }

    if (isLoaded && !currentTask) {
        return (
            <View style={styles.container}>
                <View style={styles.emptyCard}>
                    <Text style={styles.title}>Tarefa nao encontrada</Text>
                    <Text style={styles.helperText}>
                        Essa tarefa pode ter sido removida da sua lista.
                    </Text>
                    <Pressable style={styles.secondaryButton} onPress={() => router.navigate('/tasks')}>
                        <Text style={styles.secondaryButtonText}>Voltar para lista</Text>
                    </Pressable>
                </View>
            </View>
        )
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.eyebrow}>Editar tarefa</Text>
                        <Text style={styles.title}>Ajuste o que precisa entrar em foco</Text>
                    </View>

                    <View style={styles.card}>
                        <Text style={styles.label}>Descricao da tarefa</Text>
                        <TextInput
                            style={styles.input}
                            multiline
                            numberOfLines={6}
                            textAlignVertical="top"
                            value={description}
                            onChangeText={setDescription}
                            placeholder="Escreva sua tarefa aqui"
                            placeholderTextColor="#546174"
                        />
                        <Text style={styles.helperText}>
                            Mantenha claro o proximo passo para facilitar na hora de executar.
                        </Text>

                        <View style={styles.actions}>
                            <Pressable style={styles.secondaryButton} onPress={() => router.navigate('/tasks')}>
                                <Text style={styles.secondaryButtonText}>Cancelar</Text>
                            </Pressable>
                            <Pressable
                                style={[
                                    styles.primaryButton,
                                    !description.trim() && styles.primaryButtonDisabled
                                ]}
                                onPress={submitTask}
                                disabled={!description.trim()}
                            >
                                <IconSave />
                                <Text style={styles.primaryButtonText}>Salvar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#021123',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    content: {
        width: '100%',
        maxWidth: 520,
        gap: 20
    },
    header: {
        gap: 8
    },
    eyebrow: {
        color: '#B872FF',
        fontSize: 14,
        fontWeight: '700',
        textTransform: 'uppercase'
    },
    title: {
        color: '#FFF',
        fontSize: 26,
        fontWeight: '700',
        lineHeight: 34
    },
    card: {
        backgroundColor: '#98A0A8',
        borderRadius: 8,
        borderColor: '#144480',
        borderWidth: 2,
        padding: 18,
        gap: 14
    },
    emptyCard: {
        width: '100%',
        maxWidth: 520,
        backgroundColor: '#14448080',
        borderColor: '#144480',
        borderWidth: 2,
        borderRadius: 8,
        padding: 20,
        gap: 16
    },
    label: {
        color: '#021123',
        fontSize: 18,
        fontWeight: '700'
    },
    input: {
        minHeight: 150,
        backgroundColor: '#FFF',
        borderRadius: 8,
        color: '#021123',
        fontSize: 18,
        padding: 16
    },
    helperText: {
        color: '#021123',
        fontSize: 14,
        lineHeight: 20
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 12,
        marginTop: 4
    },
    secondaryButton: {
        minHeight: 44,
        justifyContent: 'center',
        paddingHorizontal: 14
    },
    secondaryButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '700'
    },
    primaryButton: {
        minHeight: 44,
        backgroundColor: '#B872FF',
        borderRadius: 32,
        paddingHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8
    },
    primaryButtonDisabled: {
        opacity: 0.45
    },
    primaryButtonText: {
        color: '#021123',
        fontSize: 18,
        fontWeight: '700'
    }
})
