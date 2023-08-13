import diasFertirrigacao from "../../bancoDeDias"

export default (req: any, res: any) => {
    const diaSelecionado = +req.query.dia
    const mesSelecionado = +req.query.mes

    const diasSelecionados = diasFertirrigacao.filter((item: any) => item.dia === diaSelecionado && item.mes === mesSelecionado)

    if(diasSelecionados.length === 1) {
        const diaHoje = diasSelecionados[0]
        res.status(200).json(diaHoje)
    } else {
        res.status(204).send()
    }
}