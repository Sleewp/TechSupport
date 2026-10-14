import type { TicketStatus } from '../models/Ticket'
export default function TicketFilter({ search, onSearch, status, onStatus }: { search: string; onSearch: (v:string)=>void; status: TicketStatus | 'TODOS'; onStatus:(v:TicketStatus|'TODOS')=>void }) {
 return <div className="filters"><label>Pesquisar por título<input value={search} onChange={e=>onSearch(e.target.value)} placeholder="Ex.: computador sem rede"/></label><label>Filtrar por status<select value={status} onChange={e=>onStatus(e.target.value as TicketStatus|'TODOS')}><option value="TODOS">Todos os status</option><option value="ABERTO">Aberto</option><option value="EM_ANDAMENTO">Em andamento</option><option value="CONCLUIDO">Concluído</option></select></label></div>
}
