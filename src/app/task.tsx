import { Button } from '@/components/ui/button'
import { TaskType } from './Types/task-type'
import { Trash } from 'lucide-react'

interface Props {
    task: TaskType
    toggle: () => void
    delete: () => void
}

export default function Task(props: Props) {
    return (
        <div
            key={props.task.id}
            className="bg-green-300 rounded-lg p-2 flex justify-between items-center"
        >
            <div>
                <h1>{props.task.title}</h1>

                <div className="flex gap-2">
                    <input
                        onChange={props.toggle}
                        checked={props.task.didComplete}
                        type="checkbox"
                    />

                    <h2
                        className={`text-sm ${
                            props.task.didComplete
                                ? 'text-green-700'
                                : 'text-red-500'
                        }`}
                    >
                        {props.task.didComplete ? 'Completed' : 'Not completed'}
                    </h2>
                </div>
            </div>
            <Button onClick={props.delete} >
                <Trash />
            </Button>
        </div>
    )
}