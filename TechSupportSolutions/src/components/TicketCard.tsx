import { Link } from 'react-router-dom'
import type { Ticket } from '../models/Ticket'
const statusLabel = { ABERTO: 'Aberto', EM_ANDAMENTO: 'Em andamento', CONCLUIDO: 'Concluído' }
export default function TicketCard({ ticket, onDelete, onStatusChange, busy = false }: {
  ticket: Ticket; onDelete?: (id: string) => void; onStatusChange?: (id: string, status: Ticket['status']) => void; busy?: boolean
}) {
  return <article className="ticket-card">
    <div className="ticket-top"><span className={`pill status-${ticket.status.toLowerCase()}`}>{statusLabel[ticket.status]}</span><span className={`pill priority-${ticket.priority.toLowerCase()}`}>{ticket.priority}</span></div>
    <h3>{ticket.title}</h3><p className="muted">{ticket.category}</p><p className="description">{ticket.description}</p>
    <div className="ticket-actions"><Link className="button button-light" to={`/chamados/${ticket.id}`}>Ver detalhes</Link>
      {onStatusChange && <select aria-label="Atualizar status" value={ticket.status} disabled={busy} onChange={e => onStatusChange(String(ticket.id), e.target.value as Ticket['status'])}>
        <option value="ABERTO">Aberto</option><option value="EM_ANDAMENTO">Em andamento</option><option value="CONCLUIDO">Concluído</option>
      </select>}
      {onDelete && <button className="button button-danger" disabled={busy} onClick={() => onDelete(String(ticket.id))}>Excluir</button>}
    </div>
  </article>
}
