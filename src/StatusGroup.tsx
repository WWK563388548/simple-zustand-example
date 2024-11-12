import { useTodoStore } from "../stores/todoStore"
import { Label } from "../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group"

const StatusGroup = () => {
  const { status, setStatus } = useTodoStore()
  return (
    <RadioGroup onValueChange={setStatus} value={status}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="all" id="r1" />
        <Label htmlFor="r1">All</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="completed" id="r2" />
        <Label htmlFor="r2">Completed</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="incompleted" id="r3" />
        <Label htmlFor="r3">Incompleted</Label>
      </div>
    </RadioGroup>
  )
}

export default StatusGroup;
  