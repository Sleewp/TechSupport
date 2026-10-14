import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Dashboard from '../pages/Dashboard'
import NewTicket from '../pages/NewTicket'
import TicketDetails from '../pages/TicketDetails'
export default function AppRoutes(){return <BrowserRouter><Navbar/><Routes><Route path="/" element={<Dashboard/>}/><Route path="/novo-chamado" element={<NewTicket/>}/><Route path="/chamados/:id" element={<TicketDetails/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Routes><Footer/></BrowserRouter>}
