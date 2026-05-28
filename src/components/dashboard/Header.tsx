import Buttons from "../Buttons";

export default function DashboardHeader() {
  return (
    <>
      <h1>Dashboard</h1>
      <div className='dashboardHeaderButtons'>
        <Buttons text='Últimos 30 dias'
          className='dashboardHeaderButton'
          />
        <Buttons text='Exportar' 
          className='dashboardHeaderButton'
          />
      </div>
    </>
  )
}