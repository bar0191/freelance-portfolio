import React from 'react';
import ScrollArea from 'react-scrollbar';
import {Link} from 'react-router';
import Slider from 'react-slick';
import ExitIcon from 'react-icons/lib/ti/delete-outline';
import UserIcon from 'react-icons/lib/fa/user';
import GlobeIcon from 'react-icons/lib/fa/globe';
import CalIcon from 'react-icons/lib/fa/calendar';

import PokedexPic from '../../../../images/pokedex-main.png';
import PokedexPokePic from '../../../../images/pokedex-poke.png';
import PokedexMovePic from '../../../../images/pokedex-moves.png';

const settings = {
  dots: true
};

const imgStyle = {
  height: '25%',
  width: '100%'
};


export default () => (
  <div className="page-container">
    <div className="sub-page">
      <section className="card-page">
        <ScrollArea className="scroll-container" horizontal={false} verticalScrollbarStyle={{width: '4px', marginLeft: '10px'}}>
          <div className="page-exit">
            <Link to="/portfolio">
              <ExitIcon size='32'/>
            </Link>
          </div>
          <div className="inner-container">
            <div className="card-title-section">
              <div className="card-title-wrap clearfix">
                <h1 className="title-project">Pokedex</h1>
              </div>
            </div>
            <div className="row">
              <div className="pad-col-project">
                <div className="block-title"><h3>Description</h3></div>
                <ul className="project-info">
                  <li><p><UserIcon className="icon"/>Brandon Reid</p></li>
                  <li><p><GlobeIcon className="icon"/><a href="http://dev-pokedeck.pantheonsite.io/">dev-pokedeck.pantheonsite.io</a></p></li>
                  <li><p><CalIcon className="icon"/>Summer 2017</p></li>
                </ul>
                <p className="text-justify">This project was done in conjuction with Level Ten Interactive during an Internship program. The interns and I were required to build a complex Drupal site. The requirements included advanced drupal development methods, such as module and theme development. I created a script for this project that would migrate 250+ pokemon into a drupal database. The style of the site was built using drupals site building components, and the bootstrap 3 framework.</p>
                <div className="tags-section">
                  <div className="block-title"><h3>Technology</h3></div>
                  <ul className="tags">
                    <li><a>Drupal</a></li>
                    <li><a>PHP</a></li>
                    <li><a>MySQL</a></li>
                    <li><a>Pantheon</a></li>
                    <li><a>HTML</a></li>
                    <li><a>CSS</a></li>
                    <li><a>Bootstrap</a></li>
                  </ul>
                </div>
              </div>
              <div className="pad-col-project-slider">
                <Slider {...settings}>
                  <div><img style={imgStyle} src={PokedexPic} alt=""/></div>
                  <div><img style={imgStyle} src={PokedexPokePic} alt=""/></div>
                  <div><img style={imgStyle} src={PokedexMovePic} alt=""/></div>
                </Slider>
              </div>
            </div>
          </div>
        </ScrollArea>
      </section>
    </div>
  </div>
);