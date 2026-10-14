import { useState, type FormEvent } from 'react'
import type { TicketInput, TicketCategory, TicketPriority } from '../models/Ticket'
export default function TicketForm({ onSubmit, loading = false }: { onSubmit:(data:TicketInput)=>Promise<void>; loading?:boolean }) {
 const [title,setTitle]=useState(''), [description,setDescription]=useState(''), [category,setCategory]=useState<TicketCategory|''>(''), [priority,setPriority]=useState<TicketPriority|''>('')
 async function submit(e:FormEvent){e.preventDefault(); if(!category||!priority)return; await onSubmit({title:title.trim(),description:description.trim(),category,priority});}
 return <form className="form-card" onSubmit={submit}>
  <label>Título<input required minLength={3} maxLength={100} value={title} onChange={e=>setTitle(e.target.value)} placeholder="Descreva o problema em poucas palavras"/></label>
  <div className="form-grid"><label>Categoria<select required value={category} onChange={e=>setCategory(e.target.value as TicketCategory|'')}><option value="">Selecione uma categoria</option><option value="HARDWARE">Hardware</option><option value="SOFTWARE">Software</option><option value="REDE">Rede</option><option value="OUTROS">Outros</option></select></label>
  <label>Prioridade<select required value={priority} onChange={e=>setPriority(e.target.value as TicketPriority|'')}><option value="">Selecione a prioridade</option><option value="BAIXA">Baixa</option><option value="MEDIA">Média</option><option value="ALTA">Alta</option></select></label></div>
  <label>Descrição<textarea required minLength={5} rows={5} value={description} onChange={e=>setDescription(e.target.value)} placeholder="Informe os detalhes do problema"/></label>
  <button className="button button-primary" disabled={loading}>{loading?'Cadastrando…':'Cadastrar chamado'}</button>
 </form>
}
