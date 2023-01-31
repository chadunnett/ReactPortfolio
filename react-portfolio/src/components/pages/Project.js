import React from 'react';

const ProjectList = () => {
    

    const [projects] = [
        {
            name: 'Tech Blog',
            description:
              'This is a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers posts as well. It uses express-handlebars, MySQL2, Sequelize, dotenv, bcrypt, express-session, and connect-session-sequelize.',
              image: 'techblog'
          },
          {
            name: 'Ecommerce Backend',
            description:
              'Ecommerce backend',
              image: 'ecommercebackend'
          },
          {
            name: 'employee tracker',
            description:
              'An app to view and manage the departments, roles, and employees in my company',
              image: 'employeetracker'
          },
          {
            name: 'README Generator',
            description:
              'Generates a README.md file using whatever is input',
              image: 'readmegenerator'
          }
        ];

        return (
          <div>
            <img
                  src={require(`../../assets/techblog.png`).default}
                  alt='techblog'
                />
         </div>
        );
}

export default ProjectList();