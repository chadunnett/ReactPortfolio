import React from 'react';
import tech from '../../assets/techblog.png'
import ecommerce from '../../assets/ecommercebackend.png'
import readme from '../../assets/readmegenerator.png'
import employee from '../../assets/employeetracker.png'

function Portfolio() {
    return (
      <section>
        <h1 id="Portfolio">Portfolio</h1>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex
            condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna
            mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum.
            Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique
            justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea
            dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh.
            Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
          </p>
          <a href='https://github.com/chadunnett/tech_blog'>
          <h2>Tech Blog</h2>
            <img
                  src={tech}
                  alt='techblog'
                  
                />
         </a>
         <a href='https://github.com/chadunnett/ECommerce_BackEnd'>
         <h2>ECommerce BackEnd</h2>
            <img
                  src={ecommerce}
                  alt='ecommerce'
                  
                />
         </a>
         <a href='https://github.com/chadunnett/READMEGenerator'>
         <h2>README Generator</h2>
            <img
                  src={readme}
                  alt='readmme'
                  
                />
         </a>
         <a href='https://github.com/chadunnett/employeeTracker'>
         <h2>Employee Tracker</h2>
            <img
                  src={employee}
                  alt='employee'
                 
                />
         </a>
        </div>
      </section>
    );
  }
  
  export default Portfolio;