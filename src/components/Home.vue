<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Braille Writer Monitor</h1>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h3>Objetos más reconocidos </h3>
        <chart :options="word"></chart>
      </v-flex>
      <v-flex xs12 class="text-xs-center" mt-3>
        <h3>Usuarios registrados semanalmente </h3>
        <chart :options="polar"></chart>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
.echarts {
  min-width:100%;
  min-height:400px;
}
</style>


<script>
import Vue from 'vue'
import ECharts from 'vue-echarts/components/ECharts'
import firebase from 'firebase'
var echarts = require('echarts')
require('echarts-wordcloud')

// import ECharts modules manually to reduce bundle size
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import { keys, sortBy, filter, values, mapValues, pick, map, zipObject, compact, includes, reduce } from 'lodash'


// register component to use
Vue.component('chart', ECharts)

//TODO: Add new graph, and fix auth
// Create (Maybe) firebase cloud function to check and trigger a confirmation from me to let a new user to be admin
export default {
  data: function () {
    let data = []

    for (let i = 0; i <= 360; i++) {
        let t = i / 180 * Math.PI
        let r = Math.sin(2 * t) * Math.cos(2 * t)
        data.push([r, i])
    }
    var totaltotal = []
    let dataFromdb = []
    var objetos = []
    firebase.database().ref('objects').on('value', function(snapshot) {
      //alert(JSON.stringify(snapshot.val()))
     
      var total = snapshot.val()

      for(let t in total){
        objetos.push({
          name: total[t].title,
          value: total[t].times
        })
      }
      // alert(JSON.stringify(objetos))
      
    })

    return {
      polar: { 
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo', 'Lunes']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [0, 0, 0, 1, 1, 2, 0],
        type: 'line',
        areaStyle: {}
    }]
      },

      word:{
        series: [{
        type: 'wordCloud',

        // The shape of the "cloud" to draw. Can be any polar equation represented as a
        // callback function, or a keyword present. Available presents are circle (default),
        // cardioid (apple or heart shape curve, the most known polar equation), diamond (
        // alias of square), triangle-forward, triangle, (alias of triangle-upright, pentagon, and star.

        shape: 'circle',

        // A silhouette image which the white area will be excluded from drawing texts.
        // The shape option will continue to apply as the shape of the cloud to grow.

        //maskImage: maskImage,

        // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
        // Default to be put in the center and has 75% x 80% size.

        left: 'center',
        top: 'center',
        width: '70%',
        height: '80%',
        right: null,
        bottom: null,

        // Text size range which the value in data will be mapped to.
        // Default to have minimum 12px and maximum 60px size.

        sizeRange: [12, 60],

        // Text rotation range and step in degree. Text will be rotated randomly in range [-90, 90] by rotationStep 45

        rotationRange: [-90, 90],
        rotationStep: 45,

        // size of the grid in pixels for marking the availability of the canvas
        // the larger the grid size, the bigger the gap between words.

        gridSize: 8,

        // set to true to allow word being draw partly outside of the canvas.
        // Allow word bigger than the size of the canvas to be drawn
        drawOutOfBound: false,

        // Global text style
        textStyle: {
            normal: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                // Color can be a callback function or a color string
                color: function () {
                    // Random color
                    return 'rgb(' + [
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160),
                        Math.round(Math.random() * 160)
                    ].join(',') + ')';
                }
            },
            emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
            }
        },

        
        // Data is an array. Each array item must have name and value property.
        data: objetos
    }]

      },

      responsive: {
        
      }
    }


  }
}
</script>
