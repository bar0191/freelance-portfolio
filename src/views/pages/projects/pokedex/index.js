import React from 'react';
import ScrollArea from 'react-scrollbar';
import {Link} from 'react-router';
import ExitIcon from 'react-icons/lib/ti/delete-outline';
import UserIcon from 'react-icons/lib/fa/user';
import GlobeIcon from 'react-icons/lib/fa/globe';
import CalIcon from 'react-icons/lib/fa/calendar';

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
              <div className="col-sm-7 col-md-7 pad-col-project">

              </div>
              <div className="col-sm-5 col-md-5 pad-col-project">
                <div className="block-title"><h3>Description</h3></div>
                <ul className="project-info">
                  <li><p><UserIcon className="icon"/>Brandon Reid</p></li>
                  <li><p><GlobeIcon className="icon"/><a href="http://dev-pokedeck.pantheonsite.io/">dev-pokedeck.pantheonsite.io</a></p></li>
                  <li><p><CalIcon className="icon"/>Summer 2017</p></li>
                </ul>
                <p className="text-justify">Aliquam euismod aliquam massa, quis eleifend dui sodales vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                <div className="tags-section">
                  <div className="block-title"><h3>Technology</h3></div>
                  <ul className="tags">
                    <li><a>Drupal</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </section>
    </div>
  </div>
);