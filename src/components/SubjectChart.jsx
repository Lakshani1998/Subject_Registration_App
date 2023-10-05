import React, { useEffect, useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import './SubjectChart.css'; 

const SubjectChart = ({ registrations }) => {
  // Create a reference for the chart
  const chartRef = useRef(null);
  
  // Define state to hold the chart option
  const [option, setOption] = useState(null);

  useEffect(() => {
    // Calculate the number of registrations for each subject
    const subjectCounts = registrations.reduce((count, registration) => {
      count[registration.selectedSubject] =
        (count[registration.selectedSubject] || 0) + 1;
      return count;
    }, {});

    // Prepare data for ECharts
    const subjectNames = Object.keys(subjectCounts);
    const registrationCounts = Object.values(subjectCounts);

    // Define the chart options
    const chartOption = {
      // Chart title (commented out)
      // title: {
      //   text: 'Subject Registration Chart',
      // },
      // Tooltip configuration
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      // Legend configuration
      legend: {
        orient: 'vertical',
        left: 'left',
        data: subjectNames,
      },
      // Series configuration (a pie chart)
      series: [
        {
          name: 'Subjects',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: subjectNames.map((subject, index) => ({
            value: registrationCounts[index],
            name: subject,
          })),
          // Emphasis style when hovering
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };

    // Set the chart option state
    setOption(chartOption);

  }, [registrations]);

  return (
    <div className="subject-chart-container">
      {/* Chart heading */}
      <h2 className="chart-heading">Subject Registration Chart</h2>
      {/* Render the chart if the option is available */}
      {option && <ReactECharts option={option} ref={chartRef} className="chart" />}
    </div>
  );
};

export default SubjectChart;
