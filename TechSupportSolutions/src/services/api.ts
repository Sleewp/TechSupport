import axios from 'axios'
import type { Ticket, TicketInput, TicketStatus } from '../models/Ticket'

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000', timeout: 10000 })
export const ticketService = {
  async list(): Promise<Ticket[]> { const { data } = await api.get<Ticket[]>('/tickets'); return data },
  async get(id: string): Promise<Ticket> { const { data } = await api.get<Ticket>(`/tickets/${id}`); return data },
  async create(ticket: TicketInput): Promise<Ticket> { const { data } = await api.post<Ticket>('/tickets', { ...ticket, status: ticket.status || 'ABERTO' }); return data },
  async updateStatus(id: string, status: TicketStatus): Promise<Ticket> { const { data } = await api.patch<Ticket>(`/tickets/${id}`, { status }); return data },
  async remove(id: string): Promise<void> { await api.delete(`/tickets/${id}`) },
}
export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    if (error.code === 'ECONNABORTED' || error.code === 'ERR_NETWORK') return 'Não foi possível conectar à API. Verifique se o servidor está iniciado.'
    return error.response?.status === 404 ? 'Chamado não encontrado.' : 'Ocorreu um erro ao comunicar com a API.'
  }
  return 'Ocorreu um erro inesperado.'
}
