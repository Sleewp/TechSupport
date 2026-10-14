import { NavLink, Link } from 'react-router-dom'
export default function Navbar(){return <header className="navbar"><div className="nav-inner"><Link className="brand" to="/"><span className="brand-mark">TS</span><span>TechSupport<small> SOLUTIONS</small></span></Link><nav><NavLink to="/" end>Dashboard</NavLink><NavLink to="/novo-chamado">Novo chamado</NavLink></nav></div></header>}
