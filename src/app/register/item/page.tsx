'use client'
import "../style.css";
import Chart from "../../components/chart";
import ChartSwitch from "@/app/components/chartSwitch";
import { useState } from "react";

export default function RegisterItem() {
        let item: number = 0; //puxar do banco dps
        let criticalItem: number = 0; //puxar do banco dps
        const [currentChart, setChart] = useState("left");


        return (
                <>
                        <title>Cadastro de Itens</title>
                        <div className="registerItem">
                                <h1>Gerenciar itens</h1>
                                <Chart
                                        props={{
                                                title: `${item}`,
                                                subtitle: "Itens cadastrados",
                                                secondaryTitle: `${criticalItem}`,
                                                secondarySubtitle:
                                                        "itens críticos",
                                        }}
                                />
                                <div className="secondaryChart">
                                        <label htmlFor="newItem">
                                                Cadastrar novo item
                                        </label>
                                        <input
                                                defaultChecked
                                                type="radio"
                                                name="itemAction"
                                                value="newItem"
                                                onChange={() => setChart("right")}
                                        />

                                        <label htmlFor="restockItem">
                                                Reabastecer item
                                        </label>
                                        <input
                                                type="radio"
                                                name="itemAction"
                                                value="restockItem"
                                                onChange={() => setChart("left")}
                                        />

                                        <ChartSwitch
                                                chartCurrent={currentChart}

                                                chartLeftContent={
                                                        <>
                                                                <h2>
                                                                        Adicionar
                                                                        item
                                                                </h2>
                                                                <form>
                                                                        <div className="formContainer">
                                                                                <div className="inputContainer">
                                                                                        <label htmlFor="itemCode">
                                                                                                Código
                                                                                                do
                                                                                                item
                                                                                        </label>
                                                                                        <input
                                                                                                type="text"
                                                                                                name="itemCode"
                                                                                                id="itemCode"
                                                                                                placeholder="Ex: PAR-M10-30"
                                                                                        />
                                                                                </div>

                                                                                <div className="inputContainer">
                                                                                        <label htmlFor="itemDescription">
                                                                                                Descrição
                                                                                                do
                                                                                                item
                                                                                        </label>
                                                                                        <input
                                                                                                type="text"
                                                                                                name="itemDescription"
                                                                                                id="itemDescription"
                                                                                                placeholder="Ex: Parafuso M10 x 30"
                                                                                        />
                                                                                </div>

                                                                                <div className="inputContainer">
                                                                                        <label htmlFor="itemCategory">
                                                                                                Categoria
                                                                                        </label>
                                                                                        <select
                                                                                                name="itemCategory"
                                                                                                id="itemCategory">
                                                                                                <option
                                                                                                        defaultChecked
                                                                                                        value="0">
                                                                                                        Selecione
                                                                                                        uma
                                                                                                        categoria
                                                                                                </option>
                                                                                                <option value="1">
                                                                                                        Fixadores
                                                                                                </option>
                                                                                                <option value="2">
                                                                                                        Rolamentos
                                                                                                </option>

                                                                                                F
                                                                                                <option value="3">
                                                                                                        Lubrificantes
                                                                                                </option>
                                                                                        </select>
                                                                                </div>

                                                                                <div className="inputContainer">
                                                                                        <label htmlFor="itemQuantity">
                                                                                                Quantidade
                                                                                                recebida
                                                                                        </label>
                                                                                        <input
                                                                                                type="number"
                                                                                                name="itemQuantity"
                                                                                                id="itemQuantity"
                                                                                                placeholder="Ex: 150"
                                                                                                min="0"
                                                                                        />
                                                                                </div>

                                                                                <div className="inputContainer">
                                                                                        <label htmlFor="itemCritical">
                                                                                                Estoque
                                                                                                mínimo
                                                                                        </label>
                                                                                        <input
                                                                                                type="number"
                                                                                                name="itemCritical"
                                                                                                id="itemCritical"
                                                                                                placeholder="Ex: 20"
                                                                                                min="0"
                                                                                        />
                                                                                </div>

                                                                                <div className="inputContainer">
                                                                                        <label htmlFor="itemLocalization">
                                                                                                Localização
                                                                                        </label>
                                                                                        <input
                                                                                                placeholder="Ex: Prateleira 1, Gaveta 2"
                                                                                                type="text"
                                                                                                name="itemLocalization"
                                                                                                id="itemLocalization"
                                                                                        />
                                                                                </div>
                                                                        </div>
                                                                </form>
                                                        </>
                                                }
                                                chartRightContent={
                                                        <form>
                                                                <div className="formContainer"></div>
                                                        </form>
                                                }
                                        />
                                </div>
                        </div>
                </>
        );
}
