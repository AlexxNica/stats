
var React = require('react');
var colors = require('colors.css');
var brewer = require('colorbrewer');
var StackedBar = require('./StackedBar.jsx');

var spectral = brewer.Spectral[11];

var PropertiesBar = React.createClass({

  render: function() {
    var latest = this.props.stats[this.props.stats.length-1];
    var colorArr = Object.keys(colors)
      .filter(function(key){
        return key !== 'white';
      })
      .map(function(key) {
        return colors[key];
      });
    var data = latest.propertiesBreakdown.map(function(p, i) {
      var color;
      //if (i < colorArr.length) {
      //  color = colorArr[i];
      //} else {
      //  color = colorArr[i%colorArr.length];
      //}
      if (i < spectral.length) {
        color = spectral[i];
      } else {
        color = spectral[i%spectral.length];
      }
      return {
        label: p.property,
        value: p.total,
        color: color
      }
    });
    return (
      <div className="mb2">
        <h3>Properties Breakdown</h3>
        <StackedBar data={data} />
      </div>
    )
  }

});

module.exports = PropertiesBar;

