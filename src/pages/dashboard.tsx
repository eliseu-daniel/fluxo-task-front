import Cards from '@/components/dashboard/Cards';
import DashboardHeader from '@/components/dashboard/Header';
import Widgets from '@/components/dashboard/Widgets';
import '@/scss/dashboard.scss'

export default function Dashboard() {
  return (
    <div className='dashboardContainer'>
      <div className='dashboardHeader'>
        <DashboardHeader />
      </div>
      <div className='dashboardOverviewCards'>
        <Cards />
      </div>
      <div className='dashboardWidgets'>
        <Widgets  />
      </div>
    </div>
  );
}