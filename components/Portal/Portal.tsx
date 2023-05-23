import React from 'react'

export const Portal = () => {
    return (
        <div className="">
            <div id="main-box" className="p-6 bg-zinc-900 rounded-lg mb-4">
                <header id="navbar" className="text-zinc-100">
                    navbar
                </header>
            </div>
            <div
                id="box"
                className="p-6 bg-zinc-300 rounded-lg grid gap-5 grid-cols-4"
            >
                <div id="import-file" className="bg-zinc-200 p-2 rounded-md">
                    <h1 id="import-tag" className="mb-1 p-3">
                        Importe XML
                    </h1>
                    <input
                        type="file"
                        aria-label="File"
                        accept=".xml"
                        className="border-[1px] border-zinc-500 box-border p-[5px] font-light mx-2 mb-2 text-zinc-500"
                    />
                </div>
                <div
                    id="file"
                    className="bg-zinc-200 p-2 rounded-md col-span-3"
                >
                    <div
                        id="cabecalho"
                        className="mb-3 bg-zinc-100 p-3 rounded"
                    >
                        <h1
                            id="file-header"
                            className="p-3 bg-zinc-900 w-fit text-zinc-100 rounded mb-3"
                        >
                            Cabeçalho
                        </h1>
                        <div id="parceiro" className="mb-3">
                            <h2>Cód. Parc.</h2>
                            <input
                                type="number"
                                className=" text-zinc-500 border-[1px] border-zinc-400 rounded-md p-1"
                            />
                        </div>
                        <span className="border-b-[1px] border-zinc-400 mb-[2px] w-full block">
                            {' '}
                        </span>
                        <div className="flex justify-between p-1">
                            <div id="nome-parceiro" className="mb-3">
                                <h2>Nome Parceiro</h2>
                                <input
                                    type="text"
                                    className=" text-zinc-500 border-[1px] border-zinc-400 rounded-md p-1"
                                />
                            </div>
                            <div id="inscricao-estadual" className="mb-3">
                                <h2>Inscrição estadual</h2>
                                <input
                                    type="number"
                                    className=" text-zinc-500 border-[1px] border-zinc-400 rounded-md p-1"
                                />
                            </div>
                            <div id="endereco" className="mb-3">
                                <h2>Endereço</h2>
                                <input
                                    type="text"
                                    className=" text-zinc-500 border-[1px] border-zinc-400 rounded-md p-1"
                                />
                            </div>
                            <div id="numero-endereco" className="mb-3">
                                <h2>Número</h2>
                                <input
                                    type="number"
                                    className=" text-zinc-500 border-[1px] border-zinc-400 rounded-md p-1"
                                />
                            </div>
                            <div id="bairro" className="mb-3">
                                <h2>Bairro</h2>
                                <input
                                    type="text"
                                    className=" text-zinc-500 border-[1px] border-zinc-400 rounded-md p-1"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between p-1">
                            <div id="cidade" className="mb-3">
                                <h2>Cidade</h2>
                                <input
                                    type="text"
                                    className=" text-zinc-500 border-[1px] border-zinc-400 rounded-md p-1"
                                />
                            </div>
                            <div id="uf" className="mb-3">
                                <h2>UF</h2>
                                <input
                                    type="text"
                                    className=" text-zinc-500 border-[1px] border-zinc-400 rounded-md p-1"
                                />
                            </div>
                            <div id="cep" className="mb-3">
                                <h2>CEP</h2>
                                <input
                                    type="number"
                                    className=" text-zinc-500 border-[1px] border-zinc-400 rounded-md p-1"
                                />
                            </div>
                            <div id="pais" className="mb-3">
                                <h2>País</h2>
                                <input
                                    type="number"
                                    className=" text-zinc-500 border-[1px] border-zinc-400 rounded-md p-1"
                                />
                            </div>
                            <div id="telefone" className="mb-3">
                                <h2>Telefone</h2>
                                <input
                                    type="tel"
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                    className=" text-zinc-500 border-[1px] border-zinc-400 rounded-md p-1"
                                />
                            </div>
                        </div>
                    </div>

                    <button
                        id="send-info"
                        className="p-3 text-green-100 bg-green-400 rounded font-semibold"
                    >
                        Enviar nota Sankhya
                    </button>
                </div>
            </div>
        </div>
    )
}
