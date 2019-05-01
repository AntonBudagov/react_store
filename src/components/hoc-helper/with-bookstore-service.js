import React from 'react';
import {BookServiceConsumer} from '../bookstore-service-context'


const withBookServices = () => (Wrapped) => {

  return (props) => {
    return (<BookServiceConsumer>
      {
        (service) => {
          return (
            <Wrapped {...props} service={service} />
          )

        }
      }

      </BookServiceConsumer>
    )
  }

};

export default withBookServices;
