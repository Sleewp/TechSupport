import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import TicketCard from '../components/TicketCard'
import TicketFilter from '../components/TicketFilter'
import { getErrorMessage, ticketService } from '../services/api'
import type { Ticket, TicketStatus } from '../models/Ticket'
export default function Dashboard() {
 const [tickets,setTickets]=useState<Ticket[]>([]),[loading,setLoading]=useState(true),[busy,setBusy]=useState(false),[error,setError]=useState(''),[notice,setNotice]=useState('')
 const [search,setSearch]=useState(''),[status,setStatus]=useState<TicketStatus|'TODOS'>('TODOS')
 async function load(){setLoading(true);setError('');try{setTickets(await ticketService.list())}catch(e){setError(getErrorMessage(e))}finally{setLoading(false)}}
 useEffect(()=>{void load()},[])
 const filtered=useMemo(()=>tickets.filter(t=>t.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())&&(status==='TODOS'||t.status===status)),[tickets,search,status])
 async function changeStatus(id:string,next:TicketStatus){setBusy(true);setError('');setNotice('');try{const updated=await ticketService.updateStatus(id,next);setTickets(prev=>prev.map(t=>String(t.id)===id?updated:t));setNotice('Status atualizado com sucesso.')}catch(e){setError(getErrorMessage(e))}finally{setBusy(false)}}
 async function remove(id:string){if(!window.confirm('Deseja realmente excluir este chamado?'))return;setBusy(true);setError('');setNotice('');try{await ticketService.remove(id);setTickets(prev=>prev.filter(t=>String(t.id)!==id));setNotice('Chamado excluído com sucesso.')}catch(e){setError(getErrorMessage(e))}finally{setBusy(false)}}
 return <main className="page"><div className="page-heading"><div><p className="eyebrow">VISÃO GERAL</p><h1>Central de chamados</h1><p className="muted">Acompanhe e gerencie as solicitações de suporte técnico.</p></div><Link className="button button-primary" to="/novo-chamado">＋ Novo chamado</Link></div>
 <div className="stats"><div><span>Total de chamados</span><strong>{tickets.length}</strong></div><div><span>Abertos</span><strong>{tickets.filter(t=>t.status==='ABERTO').length}</strong></div><div><span>Em andamento</span><strong>{tickets.filter(t=>t.status==='EM_ANDAMENTO').length}</strong></div><div><span>Concluídos</span><strong>{tickets.filter(t=>t.status==='CONCLUIDO').length}</strong></div></div>
 <section className="section-panel"><div className="section-title"><div><h2>Chamados técnicos</h2><p className="muted">{filtered.length} resultado(s)</p></div><button className="button button-light" onClick={()=>void load()}>Atualizar lista</button></div>
 <TicketFilter search={search} onSearch={setSearch} status={status} onStatus={setStatus}/>
 {notice&&<p className="alert success">{notice}</p>}{error&&<div className="alert error">{error} <button onClick={()=>void load()}>Tentar novamente</button></div>}
 {loading?<p className="state-message">Carregando chamados…</p>:filtered.length===0?<div className="empty-state"><h3>Nenhum chamado encontrado</h3><p>Tente alterar os filtros ou cadastre um novo chamado.</p><Link to="/novo-chamado" className="button button-primary">Criar chamado</Link></div>:<div className="ticket-grid">{filtered.map(ticket=><TicketCard key={ticket.id} ticket={ticket} onDelete={remove} onStatusChange={changeStatus} busy={busy}/>)}</div>}
 </section></main>
}
