"use client";
import "../../style.css";

export default function RestockItem() {
        const itemInfo = ["PAR-M10-30", "PAR-M8-25"];//puxar do banco dps

        return (
                <>
                        <h2>Reabastecer item</h2>
                        <form id="rightItemForm">
                                <div className="formContainer">
 
                                        <div className="inputContainer">
                                                <label htmlFor="itemCode">
                                                        Código do item
                                                </label>

                                                <select name="itemCode" id="itemCode">

                                                        <option>
                                                                Selecione um item
                                                        </option>

                                                        {itemInfo.map((item) => (
                                                                <option key={item} value={item}>
                                                                        {item}
                                                                </option>
                                                        ))}
                                                </select>
                                        </div>
                                </div>
                        </form>
                </>
        );
}
