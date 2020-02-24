import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';

import TVShow from '../Components/TVShow'

class TVShowList extends Component {

  mapAllShows = () => {
    let filteredShows;
    let showsToShow;
    if (this.props.filterByRating !== "") {
      filteredShows = this.props.shows.filter( show => {
        let roundedShowRating = Math.round(show.rating.average)
        let foundShow;
        if (roundedShowRating === parseInt(this.props.filterByRating, 10)) {
          foundShow = show
        }
        return foundShow
      })
      if (!!this.props.searchTerm) {
        showsToShow = filteredShows.map((s) => {
          if (s.name.toLowerCase().includes(this.props.searchTerm)) {
            return <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>
          } else {
            return null
          }
        })
      } else {
        showsToShow = filteredShows.map( (s)=> <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>)
      }
    } else {
      if (!!this.props.searchTerm) {
        showsToShow = this.props.shows.map((s) => {
          if (s.name.toLowerCase().includes(this.props.searchTerm)) {
            return <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>
          } else {
            return null
          }
        })
      } else {
        showsToShow = this.props.shows.map( (s)=> <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>)
      }
    }
    return showsToShow
  }

  // mapAllShows = () => {
  //   let showsToShow;
  //   if (!!this.props.searchTerm) {
  //     showsToShow = this.props.shows.map((s) => {
  //       if (s.name.toLowerCase().includes(this.props.searchTerm)) {
  //         return <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>
  //       } else {
  //         return null
  //       }
  //     })
  //   } else {
  //     showsToShow = this.props.shows.map( (s)=> <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/>)
  //   }
  //   return showsToShow
  // }

  render() {
    return (
      <div className="TVShowList">
        <Grid>
          {this.mapAllShows()}
        </Grid>
      </div>
    )
  }

}

export default TVShowList;
