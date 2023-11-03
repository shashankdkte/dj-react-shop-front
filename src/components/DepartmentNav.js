import React from 'react'

function DepartmentNav() {
  return (
   <div class="navbar_department-section">
          <div class="navbar_department-section_icons">
            <div class="navbar_department-section_icon"></div>
            <div class="navbar_department-section_icon"></div>
            <div class="navbar_department-section_icon"></div>
            <div class="navbar_department-section_icon"></div>
          </div>
          <div class="navbar_department-section_content">
            <div class="navbar_department-section_content-heading">
              <p>DEPARTMENT</p>
            </div>
            <div class="navbar_department-section_content-sub-heading">
              <p>24 Categories</p>
            </div>
            <div class="navbar_department-section_content-view">
              <p class="icon">View All <i class="fa fa-arrow-circle-right" aria-hidden="true"></i></p>
            </div>
          </div>
        </div>
  )
}

export default DepartmentNav