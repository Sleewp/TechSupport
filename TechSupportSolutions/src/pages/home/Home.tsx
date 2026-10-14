function Home() {
    return (
        <main
            id="inicio"
            className="bg-gray-100 min-h-screen py-12 px-6">
            <section className="text-center mb-10">
                <h1 className="text-4xl font-bold text-blue-900 mb-3">
                    Central de Atendimento
                </h1>
                <p className="text-gray-600">
                    Cadastre seu chamado técnico de forma rápida e simples.
                </p>
            </section>

            <section
                id="novo-chamado"
                className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">
                    Novo Chamado
                </h2>
                <p className="text-gray-500 mb-6">
                    Preencha as informações abaixo.
                </p>
                <form className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">
                            Título
                        </label>
                        <input
                            type="text"
                            placeholder="Digite o título do chamado"
                            className="border border-gray-300 rounded-lg p-3"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">
                            Categoria
                        </label>
                        <select className="border border-gray-300 rounded-lg p-3">
                            <option>Selecione uma categoria</option>
                            <option>HARDWARE</option>
                            <option>SOFTWARE</option>
                            <option>REDE</option>
                            <option>OUTROS</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">
                            Prioridade
                        </label>
                        <select className="border border-gray-300 rounded-lg p-3">
                            <option>Selecione a prioridade</option>
                            <option>BAIXA</option>
                            <option>MEDIA</option>
                            <option>ALTA</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">
                            Descrição
                        </label>
                        <textarea
                            rows={4}
                            placeholder="Descreva o problema"
                            className="border border-gray-300 rounded-lg p-3">
                        </textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800">
                        Cadastrar Chamado
                    </button>
                </form>
            </section>
        </main>
    )
}
export default Home
