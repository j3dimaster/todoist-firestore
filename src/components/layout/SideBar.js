/* eslint-disable import/prefer-default-export */
import React from 'react'
import {
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt,
  FaChevronDown
} from 'react-icons/fa'

export const SideBar = () => (
    <div className="sidebar" data-test-id="sidebar">
      <ul className="sidebar__generic">
        <li>
          <span>
            <FaInbox />
          </span>
          <span>Inbox</span>
        </li>
        <li>
          <span>
            <FaRegCalendar />
          </span>
          <span>Today</span>
        </li>
        <li>
          <span>
            <FaRegCalendarAlt />
          </span>
          <span>Next 7 days</span>
        </li>
      </ul>

      <div className="sidebar__middle">
        <span>
          <FaChevronDown />
        </span>
        <h2>Projets</h2>
      </div>

      <ul className="sidebar__projects">Add projects here Compoent Here !</ul>
    </div>
  )
