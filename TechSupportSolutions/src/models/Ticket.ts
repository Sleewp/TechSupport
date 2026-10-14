export type TicketCategory = 'HARDWARE' | 'SOFTWARE' | 'REDE' | 'OUTROS'
export type TicketPriority = 'BAIXA' | 'MEDIA' | 'ALTA'
export type TicketStatus = 'ABERTO' | 'EM_ANDAMENTO' | 'CONCLUIDO'

export interface Ticket {
  id: number | string
  title: string
  description: string
  category: TicketCategory
  priority: TicketPriority
  status: TicketStatus
}
export type TicketInput = Omit<Ticket, 'id' | 'status'> & { status?: TicketStatus }
