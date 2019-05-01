import React from 'react';


// потребитель => Consumer

const {
  Provider: BookServiceProvider,
  Consumer: BookServiceConsumer
} = React.createContext();


export {
  BookServiceProvider,
  BookServiceConsumer
}