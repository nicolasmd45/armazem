import "../style.css";
import Chart from "../../components/chart";

export default function RegisterItem() {
        let item: number = 0; //puxar do banco dps
        let criticalItem: number = 0; //puxar do banco dps

        return (
                <>
                        <title>Cadastro de Itens</title>
                        <div className="registerItem">
                                <h1>Cadastro de Itens</h1>
                                <Chart
                                        props={{
                                                title: `${item}`,
                                                subtitle: "Itens cadastrados",
                                                secondaryTitle: `${criticalItem}`,
                                                secondarySubtitle: "itens críticos",
                                        }}
                                />
                                <div className="secondaryChart">
                                        <h2>Cadastrar novo item</h2>
                                        <form>

                                        </form>
                                </div>
                        </div>
                </>
        )
}