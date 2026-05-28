import OverviewCards from "../OverviewCards";

export default function Cards(){
  return(
    <>
    <OverviewCards title='Abertas' 
          valueCard='42' 
          metrics='+12% vs mês anterior'
          classname='card'
        />
        <OverviewCards title='Em andamento' 
          valueCard='76' 
          metrics='7 atribuições hoje'
          classname='card'

        />
        <OverviewCards title='Concluídas' 
          valueCard='128' 
          metrics='+23% vs mês anterior'
          classname='card'
        />
        <OverviewCards title='Atrasadas' 
          valueCard='15' 
          metrics='Requer atenção'
          classname='card'
        />
    </>
  )
}