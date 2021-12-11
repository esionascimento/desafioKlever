export function DashboardSelectContato (contato) {
  return {
    type: 'CONTATO_SELECIONADO',
    payload: contato
  }
}

export function SalveFormContato (contato) {
  return {
    type: 'SALVE_FORM',
    payload: contato
  }
}

export function AtualizarGet (contato) {
  return {
    type: 'ATUALIZAR_GET',
    payload: contato
  }
}