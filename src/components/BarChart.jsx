import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip
)


const BarChart = ({inDarkMode}) => {
    const options = {
        responsive: true,
        
        maintainAspectRatio: false,

        scales: {
            y: {
                beginAtZero: true,
                border: {
                    display: false, //false removes the borderline adjacent to the y-axis labels, leaving only the gridlines
                    dash: [2, 2]
                },
                grid: {
                    // color: 'blue',
                    drawTicks:  false,
                    color: (ctx)=> {
                        // console.log(ctx)
                        const lineValue = ctx?.tick?.value; //checking for the value of the last tick and making it transparent so as to match the design. Source: https://www.youtube.com/watch?v=-oeBcm3FlFg
                        return typeof lineValue !== undefined && lineValue === 1000? 
                        'transparent': inDarkMode? '#fcf7ff8c' :'rgba(102, 102, 102, 0.2)';
                    }
                },
                ticks: {
                    padding: 15,  //to sort of push the numbers away from the ticks by that amount.
                    color: inDarkMode? '#FCF7FF' : '#64748B', //color of the labels
                    stepSize: 200,
                }
            },

            x: {
                beginAtZero: true,
                border: {
                    // display: false,
                    dash: [2, 2]
                },
                grid: {
                    // color: 'blue',
                    drawTicks: false,
                    color: ()=> {
                       return inDarkMode? '#fcf7ff8c': 'rgba(102, 102, 102, 0.2)';
                    }
                },
                ticks: {
                    padding: 15,
                    color: inDarkMode? '#FCF7FF' : '#64748B'
                }
            },
            // x: {
            //     offset: false
            // }
        },

        // scales: {
        // x: {
        //   grid: {
        //     color: 'blue',
        //     backdropColor: 'rgba(255, 255, 255, 0.75)'
        //   }
        // },
        // y: {
        //   min: 60,
        //   max: 180,
        //   // beginAtZero: false,
        //   grid: {
        //     lineWidth: 2,
        //     backdropColor: 'rgba(255, 255, 255, 0.75)'
        //   },
        //   ticks: {
        //     stepSize: 20,
        //   }
        // },
    
        // }
      }
      
  return (
    <Bar
        options={options}
        data={{
            labels : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] ,  //these data are meant to come from an API actually.

            datasets : [
                {
                    label: 'Registrations',
                    data:  ['650', '900', '750', '420', '1000', '580', '850', '350', '830', '650', '950', '600'],
                    backgroundColor: [
                        '#8576FF'
                    ]
                }
            ]
        }}
    />
  )
}

export default BarChart