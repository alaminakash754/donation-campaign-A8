import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts'
const Statistics = () => {
  const [allDonation, setAllDonation] = useState([]);
  const [noDataFound, setNoDataFound] = useState('');

  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem('donation'));
    if(getItem){
      setAllDonation(getItem);
    }
    else{
      setNoDataFound('No data found');
    }
  },[])

  const totalDonation = 12;
  const myPercentage = (allDonation.length / totalDonation) * 100;
  const myRemaining = 100 - myPercentage;

  return(
    <div>
        <div>
          {
            noDataFound ? <p className='h-[80vh] flex justify-center items-center text-2xl'>{noDataFound}</p> :
            <Chart className='h-[80vh] flex justify-center items-center' type='pie' height={500} series={[myPercentage, myRemaining]} options={{ labels: ['Your Donation', 'Total Donation']}}></Chart>
          }
        </div>
    </div>
  );
};

export default Statistics;