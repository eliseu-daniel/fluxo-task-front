import Buttons from '@/components/Buttons'
import OverviewCards from '@/components/OverviewCards';
import '@/scss/dashboard.scss'

export default function Dashboard() {
  return (
    <div className='dashboardContainer'>
      <div className='dashboardHeader'>
        <h1>Dashboard</h1>
        <div className='dashboardHeaderButtons'>
          <Buttons text='Últimos 30 dias'
            className='dashboardHeaderButton'
           />
          <Buttons text='Exportar' 
            className='dashboardHeaderButton'
           />
        </div>
      </div>
      <div className='dashboardOverviewCards'>
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
      </div>
    </div>
  );
}