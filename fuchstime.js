      google.charts.load('current', {
        'packages': ['corechart']
      });
      google.charts.setOnLoadCallback(drawChart);

      function hours() {
        const today = new Date();
        let h = today.getHours();
        setTimeout(hours, 1000);
        return h
      }

      function minutes() {
        const today = new Date();
        let m = today.getMinutes();
        setTimeout(minutes, 1000);
        return m
      }

      function seconds() {
        const today = new Date();
        let s = today.getSeconds();
        setTimeout(seconds, 1000);
        return s
      }

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Hours', hours()],
          ['Minutes', minutes()],
          ['Seconds', seconds()]
        ]);

        var options = {
          title: 'Donut Time',
          pieHole: 0.5,
          pieSliceTextStyle: {
            color: 'black',
          },
          legend: 'true',
          //pieSliceText: 'value',
        };

        var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
        chart.draw(data, options);
      }

      var intervalId = window.setInterval(function() {
        drawChart()
      }, 1000);
