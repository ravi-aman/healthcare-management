import React from "react";

const Theme = () => {
  return (
    <div className="sidebar-right">
      <div className="bg-overlay" />
      <a
        className="sidebar-right-trigger wave-effect wave-effect-x"
        href="javascript:void(0);"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-original-title="Change Layout"
      >
        <span>
          <i className="fa fa-spin">
            {" "}
            <img src="logo.png" alt="" className="new-setting" />
          </i>
        </span>
      </a>
      <a className="sidebar-close-trigger" href="javascript:void(0);">
        <span>
          <i className="">✕</i>
        </span>
      </a>
      <div className="sidebar-right-inner">
        <h4>
          Pick your style
          <a
            className="btn btn-primary btn-sm pull-right"
            href="javascript:void(0);"
            onclick="deleteAllCookie()"
          >
            Delete All Cookie
          </a>
        </h4>
        <div className="card-tabs">
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" href="#tab1" data-bs-toggle="tab">
                Theme
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tab2" data-bs-toggle="tab">
                Header
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tab3" data-bs-toggle="tab">
                Content
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#tab4" data-bs-toggle="tab">
                Navigation
              </a>
            </li>
          </ul>
        </div>
        <div className="tab-content tab-content-default tabcontent-border">
          <div className="fade tab-pane active show" id="tab1">
            <div className="admin-settings">
              <div className="row">
                <div className="col-sm-12">
                  <p>Background</p>
                  <select
                    className="default-select form-control wide"
                    id="theme_version"
                    name="theme_version"
                  >
                    <option value="disabled selected hidden">
                      Choose Mode
                    </option>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <p>Primary Color</p>
                  <div>
                    <span
                      data-bs-toggle="tooltip"
                      title="Color 1"
                      data-bs-placement="top"
                    >
                      <input
                        className="chk-col-primary filled-in"
                        id="primary_color_1"
                        name="primary_bg"
                        type="radio"
                        defaultValue="color_1"
                      />
                      <label
                        htmlFor="primary_color_1"
                        className="bg-label-pattern"
                      />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="primary_color_2"
                        name="primary_bg"
                        type="radio"
                        defaultValue="color_2"
                      />
                      <label htmlFor="primary_color_2" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="primary_color_3"
                        name="primary_bg"
                        type="radio"
                        defaultValue="color_3"
                      />
                      <label htmlFor="primary_color_3" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="primary_color_4"
                        name="primary_bg"
                        type="radio"
                        defaultValue="color_4"
                      />
                      <label htmlFor="primary_color_4" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="primary_color_5"
                        name="primary_bg"
                        type="radio"
                        defaultValue="color_5"
                      />
                      <label htmlFor="primary_color_5" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="primary_color_6"
                        name="primary_bg"
                        type="radio"
                        defaultValue="color_6"
                      />
                      <label htmlFor="primary_color_6" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="primary_color_7"
                        name="primary_bg"
                        type="radio"
                        defaultValue="color_7"
                      />
                      <label htmlFor="primary_color_7" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="primary_color_9"
                        name="primary_bg"
                        type="radio"
                        defaultValue="color_9"
                      />
                      <label htmlFor="primary_color_9" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="primary_color_10"
                        name="primary_bg"
                        type="radio"
                        defaultValue="color_10"
                      />
                      <label htmlFor="primary_color_10" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="primary_color_11"
                        name="primary_bg"
                        type="radio"
                        defaultValue="color_11"
                      />
                      <label htmlFor="primary_color_11" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="primary_color_12"
                        name="primary_bg"
                        type="radio"
                        defaultValue="color_12"
                      />
                      <label htmlFor="primary_color_12" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="primary_color_13"
                        name="primary_bg"
                        type="radio"
                        defaultValue="color_13"
                      />
                      <label htmlFor="primary_color_13" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="primary_color_14"
                        name="primary_bg"
                        type="radio"
                        defaultValue="color_14"
                      />
                      <label htmlFor="primary_color_14" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="primary_color_15"
                        name="primary_bg"
                        type="radio"
                        defaultValue="color_15"
                      />
                      <label htmlFor="primary_color_15" />
                    </span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <p>Navigation Header</p>
                  <div>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="nav_header_color_1"
                        name="navigation_header"
                        type="radio"
                        defaultValue="color_1"
                      />
                      <label
                        htmlFor="nav_header_color_1"
                        className="bg-label-pattern"
                      />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="nav_header_color_2"
                        name="navigation_header"
                        type="radio"
                        defaultValue="color_2"
                      />
                      <label htmlFor="nav_header_color_2" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="nav_header_color_3"
                        name="navigation_header"
                        type="radio"
                        defaultValue="color_3"
                      />
                      <label htmlFor="nav_header_color_3" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="nav_header_color_4"
                        name="navigation_header"
                        type="radio"
                        defaultValue="color_4"
                      />
                      <label htmlFor="nav_header_color_4" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="nav_header_color_5"
                        name="navigation_header"
                        type="radio"
                        defaultValue="color_5"
                      />
                      <label htmlFor="nav_header_color_5" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="nav_header_color_6"
                        name="navigation_header"
                        type="radio"
                        defaultValue="color_6"
                      />
                      <label htmlFor="nav_header_color_6" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="nav_header_color_7"
                        name="navigation_header"
                        type="radio"
                        defaultValue="color_7"
                      />
                      <label htmlFor="nav_header_color_7" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="nav_header_color_8"
                        name="navigation_header"
                        type="radio"
                        defaultValue="color_8"
                      />
                      <label htmlFor="nav_header_color_8" className="border" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="nav_header_color_9"
                        name="navigation_header"
                        type="radio"
                        defaultValue="color_9"
                      />
                      <label htmlFor="nav_header_color_9" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="nav_header_color_10"
                        name="navigation_header"
                        type="radio"
                        defaultValue="color_10"
                      />
                      <label htmlFor="nav_header_color_10" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="nav_header_color_11"
                        name="navigation_header"
                        type="radio"
                        defaultValue="color_11"
                      />
                      <label htmlFor="nav_header_color_11" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="nav_header_color_12"
                        name="navigation_header"
                        type="radio"
                        defaultValue="color_12"
                      />
                      <label htmlFor="nav_header_color_12" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="nav_header_color_13"
                        name="navigation_header"
                        type="radio"
                        defaultValue="color_13"
                      />
                      <label htmlFor="nav_header_color_13" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="nav_header_color_14"
                        name="navigation_header"
                        type="radio"
                        defaultValue="color_14"
                      />
                      <label htmlFor="nav_header_color_14" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="nav_header_color_15"
                        name="navigation_header"
                        type="radio"
                        defaultValue="color_15"
                      />
                      <label htmlFor="nav_header_color_15" />
                    </span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <p>Header</p>
                  <div>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="header_color_1"
                        name="header_bg"
                        type="radio"
                        defaultValue="color_1"
                      />
                      <label
                        htmlFor="header_color_1"
                        className="bg-label-pattern"
                      />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="header_color_2"
                        name="header_bg"
                        type="radio"
                        defaultValue="color_2"
                      />
                      <label htmlFor="header_color_2" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="header_color_3"
                        name="header_bg"
                        type="radio"
                        defaultValue="color_3"
                      />
                      <label htmlFor="header_color_3" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="header_color_4"
                        name="header_bg"
                        type="radio"
                        defaultValue="color_4"
                      />
                      <label htmlFor="header_color_4" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="header_color_5"
                        name="header_bg"
                        type="radio"
                        defaultValue="color_5"
                      />
                      <label htmlFor="header_color_5" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="header_color_6"
                        name="header_bg"
                        type="radio"
                        defaultValue="color_6"
                      />
                      <label htmlFor="header_color_6" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="header_color_7"
                        name="header_bg"
                        type="radio"
                        defaultValue="color_7"
                      />
                      <label htmlFor="header_color_7" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="header_color_8"
                        name="header_bg"
                        type="radio"
                        defaultValue="color_8"
                      />
                      <label htmlFor="header_color_8" className="border" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="header_color_9"
                        name="header_bg"
                        type="radio"
                        defaultValue="color_9"
                      />
                      <label htmlFor="header_color_9" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="header_color_10"
                        name="header_bg"
                        type="radio"
                        defaultValue="color_10"
                      />
                      <label htmlFor="header_color_10" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="header_color_11"
                        name="header_bg"
                        type="radio"
                        defaultValue="color_11"
                      />
                      <label htmlFor="header_color_11" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="header_color_12"
                        name="header_bg"
                        type="radio"
                        defaultValue="color_12"
                      />
                      <label htmlFor="header_color_12" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="header_color_13"
                        name="header_bg"
                        type="radio"
                        defaultValue="color_13"
                      />
                      <label htmlFor="header_color_13" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="header_color_14"
                        name="header_bg"
                        type="radio"
                        defaultValue="color_14"
                      />
                      <label htmlFor="header_color_14" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="header_color_15"
                        name="header_bg"
                        type="radio"
                        defaultValue="color_15"
                      />
                      <label htmlFor="header_color_15" />
                    </span>
                  </div>
                </div>
                <div className="col-sm-6">
                  <p>Sidebar</p>
                  <div>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_color_1"
                        name="sidebar_bg"
                        type="radio"
                        defaultValue="color_1"
                      />
                      <label
                        htmlFor="sidebar_color_1"
                        className="bg-label-pattern"
                      />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_color_2"
                        name="sidebar_bg"
                        type="radio"
                        defaultValue="color_2"
                      />
                      <label htmlFor="sidebar_color_2" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_color_3"
                        name="sidebar_bg"
                        type="radio"
                        defaultValue="color_3"
                      />
                      <label htmlFor="sidebar_color_3" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_color_4"
                        name="sidebar_bg"
                        type="radio"
                        defaultValue="color_4"
                      />
                      <label htmlFor="sidebar_color_4" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_color_5"
                        name="sidebar_bg"
                        type="radio"
                        defaultValue="color_5"
                      />
                      <label htmlFor="sidebar_color_5" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_color_6"
                        name="sidebar_bg"
                        type="radio"
                        defaultValue="color_6"
                      />
                      <label htmlFor="sidebar_color_6" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_color_7"
                        name="sidebar_bg"
                        type="radio"
                        defaultValue="color_7"
                      />
                      <label htmlFor="sidebar_color_7" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_color_8"
                        name="sidebar_bg"
                        type="radio"
                        defaultValue="color_8"
                      />
                      <label htmlFor="sidebar_color_8" className="border" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_color_9"
                        name="sidebar_bg"
                        type="radio"
                        defaultValue="color_9"
                      />
                      <label htmlFor="sidebar_color_9" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_color_10"
                        name="sidebar_bg"
                        type="radio"
                        defaultValue="color_10"
                      />
                      <label htmlFor="sidebar_color_10" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_color_11"
                        name="sidebar_bg"
                        type="radio"
                        defaultValue="color_11"
                      />
                      <label htmlFor="sidebar_color_11" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_color_12"
                        name="sidebar_bg"
                        type="radio"
                        defaultValue="color_12"
                      />
                      <label htmlFor="sidebar_color_1" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_color_13"
                        name="sidebar_bg"
                        type="radio"
                        defaultValue="color_13"
                      />
                      <label htmlFor="sidebar_color_13" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_color_14"
                        name="sidebar_bg"
                        type="radio"
                        defaultValue="color_14"
                      />
                      <label htmlFor="sidebar_color_14" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_color_15"
                        name="sidebar_bg"
                        type="radio"
                        defaultValue="color_15"
                      />
                      <label htmlFor="sidebar_color_15" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fade tab-pane" id="tab2">
            <div className="admin-settings">
              <div className="row">
                <div className="col-sm-6">
                  <p>Layout</p>
                  <select
                    className="default-select form-control wide"
                    id="theme_layout"
                    name="theme_layout"
                  >
                    <option value="disabled selected hidden">
                      Choose Layout
                    </option>
                    <option value="vertical">Vertical</option>
                    <option value="horizontal">Horizontal</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <p>Header position</p>
                  <select
                    className="default-select form-control wide"
                    id="header_position"
                    name="header_position"
                  >
                    <option value="disabled selected hidden">
                      Choose Header Positon
                    </option>
                    <option value="static">Static</option>
                    <option value="fixed">Fixed</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <p>Sidebar</p>
                  <select
                    className="default-select form-control wide"
                    id="sidebar_style"
                    name="sidebar_style"
                  >
                    <option value="disabled selected hidden">
                      Choose Sidebar
                    </option>
                    <option value="full">Full</option>
                    <option value="mini">Mini</option>
                    <option value="compact">Compact</option>
                    <option value="overlay">Overlay</option>
                    <option value="icon-hover">Icon-hover</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <p>Sidebar position</p>
                  <select
                    className="default-select form-control wide"
                    id="sidebar_position"
                    name="sidebar_position"
                  >
                    <option value="disabled selected hidden">
                      Choose Sidebar Position
                    </option>
                    <option value="static">Static</option>
                    <option value="fixed">Fixed</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="fade tab-pane" id="tab3">
            <div className="admin-settings">
              <div className="row">
                <div className="col-sm-6">
                  <p>Container</p>
                  <select
                    className="default-select form-control wide"
                    id="container_layout"
                    name="container_layout"
                  >
                    <option value="disabled selected hidden">
                      Choose Container
                    </option>
                    <option value="wide">Wide</option>
                    <option value="boxed">Boxed</option>
                    <option value="wide-boxed">Wide Boxed</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <p>Body Font</p>
                  <select
                    className="default-select form-control wide"
                    id="typography"
                    name="typography"
                  >
                    <option value="disabled selected hidden">
                      Choose Font
                    </option>
                    <option value="roboto">Roboto</option>
                    <option value="poppins">Poppins</option>
                    <option value="opensans">Open Sans</option>
                    <option value="HelveticaNeue">HelveticaNeue</option>
                  </select>
                </div>
                <div className="col-sm-6">
                  <p>Direction</p>
                  <select
                    className="default-select form-control"
                    id="theme_direction"
                    name="theme_direction"
                  >
                    <option value="disabled selected hidden">
                      Choose Direction
                    </option>
                    <option value="ltr">LTR</option>
                    <option value="rtl">RTL</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="fade tab-pane" id="tab4">
            <div className="admin-settings">
              <div className="row">
                <div className="col-sm-12">
                  <p>Sidebar Menu Color</p>
                  <div>
                    <span
                      data-bs-toggle="tooltip"
                      title="Color 1"
                      data-placement="top"
                    >
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_text_color_1"
                        name="sidebar_text"
                        type="radio"
                        defaultValue="color_1"
                      />
                      <label
                        htmlFor="sidebar_text_color_1"
                        className="bg-label-pattern"
                      />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_text_color_2"
                        name="sidebar_text"
                        type="radio"
                        defaultValue="color_2"
                      />
                      <label htmlFor="sidebar_text_color_2" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_text_color_3"
                        name="sidebar_text"
                        type="radio"
                        defaultValue="color_3"
                      />
                      <label htmlFor="sidebar_text_color_3" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_text_color_4"
                        name="sidebar_text"
                        type="radio"
                        defaultValue="color_4"
                      />
                      <label htmlFor="sidebar_text_color_4" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_text_color_5"
                        name="sidebar_text"
                        type="radio"
                        defaultValue="color_5"
                      />
                      <label htmlFor="sidebar_text_color_5" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_text_color_6"
                        name="sidebar_text"
                        type="radio"
                        defaultValue="color_6"
                      />
                      <label htmlFor="sidebar_text_color_6" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_text_color_7"
                        name="sidebar_text"
                        type="radio"
                        defaultValue="color_7"
                      />
                      <label htmlFor="sidebar_text_color_7" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_text_color_8"
                        name="sidebar_text"
                        type="radio"
                        defaultValue="color_8"
                      />
                      <label htmlFor="sidebar_text_color_8" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_text_color_9"
                        name="sidebar_text"
                        type="radio"
                        defaultValue="color_9"
                      />
                      <label htmlFor="sidebar_text_color_9" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_text_color_10"
                        name="sidebar_text"
                        type="radio"
                        defaultValue="color_10"
                      />
                      <label htmlFor="sidebar_text_color_10" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_text_color_11"
                        name="sidebar_text"
                        type="radio"
                        defaultValue="color_11"
                      />
                      <label htmlFor="sidebar_text_color_11" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_text_color_12"
                        name="sidebar_text"
                        type="radio"
                        defaultValue="color_12"
                      />
                      <label htmlFor="sidebar_text_color_12" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_text_color_13"
                        name="sidebar_text"
                        type="radio"
                        defaultValue="color_13"
                      />
                      <label htmlFor="sidebar_text_color_13" />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_text_color_14"
                        name="sidebar_text"
                        type="radio"
                        defaultValue="color_14"
                      />
                      <label htmlFor="sidebar_text_color_14" />
                    </span>
                  </div>
                </div>
                <div className="col-sm-12">
                  <p>Set Sidebar Image</p>
                  <div className="navigation-bg">
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_img_1"
                        name="sidebar_img_bg"
                        type="radio"
                        defaultValue="images/sidebar-img/1.jpg"
                      />
                      <label
                        htmlFor="sidebar_img_1"
                        className="bg-image-sidebar"
                        style={{
                          backgroundImage: "url(images/sidebar-img/1.jpg)",
                        }}
                      />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_img_2"
                        name="sidebar_img_bg"
                        type="radio"
                        defaultValue="images/sidebar-img/2.jpg"
                      />
                      <label
                        htmlFor="sidebar_img_2"
                        className="bg-image-sidebar"
                        style={{
                          backgroundImage: "url(images/sidebar-img/2.jpg)",
                        }}
                      />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_img_3"
                        name="sidebar_img_bg"
                        type="radio"
                        defaultValue="images/sidebar-img/3.jpg"
                      />
                      <label
                        htmlFor="sidebar_img_3"
                        className="bg-image-sidebar"
                        style={{
                          backgroundImage: "url(images/sidebar-img/3.jpg)",
                        }}
                      />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_img_4"
                        name="sidebar_img_bg"
                        type="radio"
                        defaultValue="images/sidebar-img/4.jpg"
                      />
                      <label
                        htmlFor="sidebar_img_4"
                        className="bg-image-sidebar"
                        style={{
                          backgroundImage: "url(images/sidebar-img/4.jpg)",
                        }}
                      />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_img_5"
                        name="sidebar_img_bg"
                        type="radio"
                        defaultValue="images/sidebar-img/5.jpg"
                      />
                      <label
                        htmlFor="sidebar_img_5"
                        className="bg-image-sidebar"
                        style={{
                          backgroundImage: "url(images/sidebar-img/5.jpg)",
                        }}
                      />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_img_6"
                        name="sidebar_img_bg"
                        type="radio"
                        defaultValue="images/sidebar-img/6.jpg"
                      />
                      <label
                        htmlFor="sidebar_img_6"
                        className="bg-image-sidebar"
                        style={{
                          backgroundImage: "url(images/sidebar-img/6.jpg)",
                        }}
                      />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_img_7"
                        name="sidebar_img_bg"
                        type="radio"
                        defaultValue="images/sidebar-img/7.jpg"
                      />
                      <label
                        htmlFor="sidebar_img_7"
                        className="bg-image-sidebar"
                        style={{
                          backgroundImage: "url(images/sidebar-img/7.jpg)",
                        }}
                      />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_img_8"
                        name="sidebar_img_bg"
                        type="radio"
                        defaultValue="images/sidebar-img/8.jpg"
                      />
                      <label
                        htmlFor="sidebar_img_8"
                        className="bg-image-sidebar"
                        style={{
                          backgroundImage: "url(images/sidebar-img/8.jpg)",
                        }}
                      />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_img_9"
                        name="sidebar_img_bg"
                        type="radio"
                        defaultValue="images/sidebar-img/9.jpg"
                      />
                      <label
                        htmlFor="sidebar_img_9"
                        className="bg-image-sidebar"
                        style={{
                          backgroundImage: "url(images/sidebar-img/9.jpg)",
                        }}
                      />
                    </span>
                    <span>
                      <input
                        className="chk-col-primary filled-in"
                        id="sidebar_img_10"
                        name="sidebar_img_bg"
                        type="radio"
                        defaultValue="images/sidebar-img/10.jpg"
                      />
                      <label
                        htmlFor="sidebar_img_10"
                        className="bg-image-sidebar"
                        style={{
                          backgroundImage: "url(images/sidebar-img/10.jpg)",
                        }}
                      />
                    </span>
                  </div>
                  <span>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-primary btn-sm remove-img"
                    >
                      Remove Image
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="note-text">
          <span className="text-danger">*Note :</span>This theme switcher is not
          part of product. It is only for demo. you will get all guideline in
          documentation. please check{" "}
          <a
            className="doc text-primary"
            href="/doc/index.html"
            target="_blank"
          >
            documentation.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Theme;
