"use client";
import "./sidebar.css";
import { usePathname } from "next/navigation";

export default function Sidebar() {
        const pathname = usePathname();
        return (
                <div className="sideBar">
                        <h1>Almox</h1>
                        <div className="operation">
                                <h3>OPERAÇÃO</h3>
                                <div className="buttonContainer">
                                        <div
                                                className={`sideBarButton ${pathname === "manage/stock" ? "selected" : ""}`}
                                                data-name="stockControl"
                                        >
                                                <span>Controle de estoque</span>
                                        </div>
                                        <div
                                                className={`sideBarButton ${pathname === "manage/tool" ? "selected" : ""}`}
                                                data-name="toolControl"
                                        >
                                                <span>
                                                        Controle de ferramentas
                                                </span>
                                        </div>
                                </div>
                        </div>
                        <div className="administration">
                                <h3>ADMINISTRAÇÃO</h3>
                                <div className="buttonContainer">
                                        <div
                                                className={`sideBarButton ${pathname === "/register/user" ? "selected" : ""}`}
                                                data-name="userManagement"
                                        >
                                                <span>
                                                        Cadastro de Usuários
                                                </span>
                                        </div>
                                        <div
                                                className={`sideBarButton ${pathname === "/register/tool" ? "selected" : ""}`}
                                                data-name="registerTool"
                                                onClick={() => {
                                                        window.location.href = "/register/tool";
                                                }}
                                        >
                                                <span>
                                                        Cadastro de Ferramentas
                                                </span>
                                        </div>
                                        <div
                                                className={`sideBarButton ${pathname === "/register/item" ? "selected" : ""}`}
                                                data-name="registerItem"
                                                onClick={() => {
                                                        window.location.href = "/register/item";
                                                }}
                                        >
                                                <span>Cadastro de Itens</span>
                                        </div>
                                </div>
                        </div>
                </div>
        );
}
