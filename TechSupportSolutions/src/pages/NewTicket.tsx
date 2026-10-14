import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TicketForm from '../components/TicketForm'
import { getErrorMessage, ticketService } from '../services/api'
import type { TicketInput } from '../models/Ticket'
export default function NewTicket(){
 const [loading,setLoading]=useState(false),[error,setError]=useState('');const navigate=useNavigate()
 async function create(data:TicketInput){setLoading(true);setError('');try{const ticket=await ticketService.create(data);navigate(`/chamados/${ticket.id}`,{state:{notice:'Chamado cadastrado com sucesso!'}})}catch(e){setError(getErrorMessage(e))}finally{setLoading(false)}}
 return <main className="page narrow"><Link className="back-link" to="/">← Voltar aos chamados</Link><p className="eyebrow">NOVA SOLICITAÇÃO</p><h1>Novo chamado</h1><p className="muted intro">Preencha os dados abaixo para registrar uma solicitação de suporte.</p>{error&&<p className="alert error">{error}</p>}<TicketForm onSubmit={create} loading={loading}/></main>
}
