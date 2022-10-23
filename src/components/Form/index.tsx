import { Button } from "../Button"

export const Form = ()=>{
    return(
        <form>
            <div>
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input 
                    type="text" 
                    name="tarefa" 
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required
                />
            </div>
            <div>
                <label htmlFor="tempo">Tempo</label>
                <input
                type="time"
                step="1"
                id="tempo"
                name="tempo"
                min="00:00:00"
                max="01:30:00"
                required
                />
            </div>
            <Button/>
        </form>
    )
}