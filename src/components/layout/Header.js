/* eslint-disable import/prefer-default-export */
import React from 'react'

import { FaPizzaSlice } from 'react-icons/fa'

export const Header = () => (
  <header className="header" data-testid="header">
    <nav>
      <div className="logo">
        <img src="logo.svg" alt="todoist" />
      </div>
      <div className="settings">
        <ul>
          <li>+</li>
          <li>
            <FaPizzaSlice />
          </li>
        </ul>
      </div>
    </nav>
  </header>
)
