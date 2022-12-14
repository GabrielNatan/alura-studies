import './list.scss';

export const List = () => {
    const tarefa = [
        { 
            tarefa: 'React',
            tempo: '01:00:00'
        },
        { 
            tarefa: 'Flutter',
            tempo: '02:00:00'
        }]
    return (
        <aside className='listaTarefas'>
            <h2>Estudos do dia</h2>
            <ul>
              {
                tarefa.map(item=>{
                    return(
                        <li className='item{
                            ' key={`${item.tarefa}-${item.tempo}`}>
                            <h3>{item.tarefa}</h3>
                            <span>{item.tempo}</span>
                        </li>
                    )
                })
              }
            </ul>
        </aside>
    )
}