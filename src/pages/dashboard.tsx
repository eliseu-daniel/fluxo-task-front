import Buttons from '@/components/Buttons'
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
    </div>
  );
}