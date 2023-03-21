import React from 'react';
import { ReactComponent as SearchMenu} from '../assets/002-search.svg';
import { ReactComponent as BudgetMenu} from '../assets/001-budget.svg';
import { ReactComponent as RevenueMenu} from '../assets/003-revenue.svg';
import { ReactComponent as SettingMenu} from '../assets/004-setting.svg';
import { ReactComponent as TaxMenu} from '../assets/005-tax.svg';
import { ReactComponent as StatisticMenu} from '../assets/006-statistics.svg';

const Services = () => {
    return (
  <div className='container'>
            
      <div className='services' id="services">
                <h2 className='service-header header-text'>Services</h2>
                <div className='service-cards'>
                    <div className='card'>
                        <SearchMenu />
                        <h3 className='service-card-title font-22 font-w700'>Audit & Account</h3>
                        <p className='service-card-desc font-16 font-w400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className='card'>
                        <BudgetMenu />
                        <h3 className='service-card-title font-22 font-w700'>Budget & Projections</h3>
                        <p className='service-card-desc font-16 font-w400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className='card'>
                        <RevenueMenu />
                        <h3 className='service-card-title font-22 font-w700'>Payroll & Bookkeeping</h3>
                        <p className='service-card-desc font-16 font-w400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className='card'>
                        <SettingMenu />
                        <h3 className='service-card-title font-22 font-w700'>Software Training & IT</h3>
                        <p className='service-card-desc font-16 font-w400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className='card'>
                        <TaxMenu />
                        <h3 className='service-card-title font-22 font-w700'>Tax planning & Returns</h3>
                        <p className='service-card-desc font-16 font-w400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                    <div className='card'>
                        <StatisticMenu />
                        <h3 className='service-card-title font-22 font-w700'>Management Information</h3>
                        <p className='service-card-desc font-16 font-w400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    </div>
                </div>
    </div>
  </div>
  )
}

export default Services