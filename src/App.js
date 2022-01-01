import React from 'react'
import Header from './components/Header'
import Trip from './components/Trip'
import data from './data'
import './App.css'

export default function App() {

  const trips = data;

  return (
    <div className='app-container'>
      <Header />
      <main>
        {trips.map(trip => {
          return (
            <>
              <Trip key={trip.id} {...trip}/>
              <hr />
            </>
          )
        })}
      </main>
    </div>
  )
}