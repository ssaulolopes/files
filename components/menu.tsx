"use client"

import { Home, Shield, Users, FileText } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MenuItem } from "@/components/menu-item"

interface MenuProps {
  setCurrentPage: (page: string | null) => void
}

export function Menu({ setCurrentPage }: MenuProps) {
  const menuItems = [
    {
      id: "protecao-basica",
      title: "Proteção Social Básica",
      icon: <Shield className="h-5 w-5" />,
      subItems: [
        {
          id: "emergencia",
          title: "Emergência Socioassistencial",
          action: () => setCurrentPage("emergencia"),
        },
        {
          id: "cartao",
          title: "Cartão Protege SUAS",
          action: () => setCurrentPage("cartao-protege"),
        },
        {
          id: "demandas",
          title: "Demandas Habitacionais",
          action: () => window.open("https://www.gov.br/mds/pt-br/acoes-e-programas/assistencia-social", "_blank"),
        },
        {
          id: "documentacao",
          title: "Documentação",
          action: () => setCurrentPage("documentacao"),
        },
      ],
    },
    {
      id: "protecao-especial",
      title: "Proteção Social Especial",
      icon: <Shield className="h-5 w-5" />,
      subItems: [
        {
          id: "abordagem",
          title: "Abordagem Social",
          action: () => setCurrentPage("abordagem-social"),
        },
        {
          id: "gestao",
          title: "Gestão de Vagas",
          action: () => setCurrentPage("gestao-vagas"),
        },
        {
          id: "censo",
          title: "Censo Poprua",
          action: () =>
            window.open(
              "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/servicos-e-programas-1",
              "_blank",
            ),
        },
      ],
    },
    {
      id: "cadastro-unico",
      title: "Cadastro Único",
      icon: <Users className="h-5 w-5" />,
      subItems: [
        {
          id: "paineis",
          title: "Painéis de Monitoramento",
          action: () => window.open("https://www.gov.br/cidadania/pt-br/acoes-e-programas/cadastro-unico", "_blank"),
        },
        {
          id: "edicao",
          title: "Edição de Dados CTR",
          action: () => window.open("https://www.gov.br/cidadania/pt-br/acoes-e-programas/cadastro-unico", "_blank"),
        },
        {
          id: "formularios",
          title: "Formulários",
          action: () => setCurrentPage("formularios"),
        },
        {
          id: "download",
          title: "Download Base de dados",
          action: () =>
            window.open(
              "https://www.gov.br/cidadania/pt-br/acoes-e-programas/cadastro-unico/gestao-do-cadastro-unico-1",
              "_blank",
            ),
        },
      ],
    },
    {
      id: "vigilancia",
      title: "Vigilância Socioassistencial",
      icon: <FileText className="h-5 w-5" />,
      subItems: [
        {
          id: "edicao1",
          title: "1ª Edição Boletim Técnico",
          action: () =>
            window.open(
              "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/vigilancia-socioassistencial",
              "_blank",
            ),
        },
        {
          id: "edicao2",
          title: "2ª Edição Boletim Técnico",
          action: () =>
            window.open(
              "https://www.gov.br/cidadania/pt-br/acoes-e-programas/assistencia-social/vigilancia-socioassistencial",
              "_blank",
            ),
        },
      ],
    },
  ]

  return (
    <aside className="w-60 bg-[#0a2756] border-r border-[#1a3b6d] min-h-[calc(100vh-64px)] transition-all duration-300">
      <nav className="p-4">
        <div className="mb-6">
          <button
            onClick={() => setCurrentPage(null)}
            className="flex items-center gap-2 text-white p-3 rounded-md hover:bg-[#1a3b6d] w-full text-left text-base"
          >
            <Home className="h-5 w-5" />
            <span>Início</span>
          </button>
        </div>

        <div className="space-y-1">
          <h3 className="text-gray-400 text-sm font-medium px-2 mb-3">Serviços</h3>

          <Accordion type="multiple" className="w-full border-none">
            {menuItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-none">
                <AccordionTrigger className="py-3 px-3 text-white hover:bg-[#1a3b6d] hover:no-underline rounded-md text-base">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-0 pt-1 bg-[#0f3169]">
                  <div className="space-y-1">
                    {item.subItems.map((subItem) => (
                      <MenuItem key={subItem.id} title={subItem.title} onClick={subItem.action} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </nav>
    </aside>
  )
}
