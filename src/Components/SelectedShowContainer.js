import React, { Component } from 'react';
import Episode from '../Components/Episode';

class SelectedShowContainer extends Component {

  state = {
    selectedShow: this.props.selectedShow,
    selectedSeason: 1,
    episodes: []
  }

  mapSeasons = () => {
    if (!!this.props.allEpisodes){
      let seasons = this.props.allEpisodes.map((e)=> e.season).unique()

      return seasons.map((s) => {
        return (<option value={s} key={s}>Season {s}</option>)
      });
    }
  }

  componentDidMount() {
    this.mapEpisodes()
  }

  mapEpisodes = () => {
    let newEpisodeArr = []
    this.props.allEpisodes.map((e)=>{
      if (e.season === this.state.selectedSeason){
        return newEpisodeArr = [...newEpisodeArr, <Episode eachEpisode={e} key={e.id}/>]
      } else {
        return null
      }
    })
    this.setState({
      episodes: newEpisodeArr
    }) 
  }

  handleSelectionChange = (e) => {
    let newSeason = parseInt(e.target.value, 10)
    let newEpisodeArr = []
    this.props.allEpisodes.map( ep => {
      if (ep.season === newSeason){
        return newEpisodeArr = [...newEpisodeArr, <Episode eachEpisode={ep} key={ep.id}/>]
      } else {
        return null
      }
    })
    this.setState({
      episodes: newEpisodeArr,
      selectedSeason: newSeason
    }) 
  }


  render() {

    const { selectedShow } = this.props

    return (
      <div style={{position: "static"}}>
        <h2>{selectedShow.name}</h2>
        <img src={selectedShow.image.medium} alt=""/>
        <p dangerouslySetInnerHTML={{__html: selectedShow.summary}}></p>
        <p>Premiered: {selectedShow.premiered}</p>
        <p>Status: {selectedShow.status}</p>
        <p>Average Rating: {selectedShow.rating.average}</p>
        <select style={{display: 'block'}} onChange={(e) => this.handleSelectionChange(e)}>
          {this.mapSeasons()}
        </select>
        {this.state.episodes}
      </div>
    );
  }

}

export default SelectedShowContainer;


Array.prototype.unique = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
    if(!arr.includes(this[i])) {
        arr.push(this[i]);
    }
  }
  return arr;
}
