<template>
  <div>
    <div id="header">
      <nav id="header__nav">
        <div class="start">
          <div id="header__menu-toggle-wrap">
            <div id="header__menu-toggle">
              <input type="chechbox">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div class="logo">
            <router-link to="/">
              <div class="logo-icon">
                <img src="../assets/YouTube_Logo.svg"></img>
              </div>
            </router-link>  
            <span class="logo__country-code">RU</span>
          </div>
        </div>
        <div class="center">
          <form action="#" id="search-form">
            <div id="searchbox">
              <input type="text" id="search__input" placeholder="Введите запрос">
              <div id="onscreen-keyboard-wrap">
                <a id="onscreen-keyboard">
                  <span>
                    <img src="//www.gstatic.com/inputtools/images/tia.png">
                  </span>
                </a>
              </div>
            </div>
            <button id="search-button">
              <img src="../assets/Search_Icon.svg">
            </button>
          </form>
        </div>
        <div class="end">
          <div id="topbar-menu-buttons">
            <div class="topbar-menu-button">
              <a class="icon-button-wrap">
                <button class="icon-button" aria-label="Создать">
                  <!-- <img src="../assets/Create_Icon.svg"> -->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" class="style-scope yt-icon"></path></g></svg>
                </button>
              </a>
            </div>
            <div class="topbar-menu-button">
              <a class="icon-button-wrap">
                <button class="icon-button" aria-label="Приложения YouTube">
                  <!-- <img src="../assets/Apps_Icon.svg"> -->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z" class="style-scope yt-icon"></path></g></svg>
                </button>
              </a>
            </div>
            <div class="topbar-menu-button">
              <a class="icon-button-wrap">
                <button class="icon-button" aria-label="Уведомления">
                  <!-- <img src="../assets/Notifications.svg"> -->
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" class="style-scope yt-icon"></path></g></svg>
                </button>
              </a>
            </div>
            <div class="topbar-menu-button avatar">
              <button class="avatar-button">
                <img class="avatar-img" src="../assets/Avatar.jpg">
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>

<!--     <div class="sidebar">
      <nav class="sidebar__nav">
        
      </nav>
    </div> -->

    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'MainLayout'
  }
</script>


<style lang="less">
@main-grey: #606060;
@border-grey: #d3d3d3;
@bg-grey: #f8f8f8;
@searchbox-button-icon-color: #333;
@searchbox-border-shadow-color: #eee;
@searchbox-button-hover-border-color: #c6c6c6;
@searchbox-button-hover-color: #f0f0f0;
@searchbox-text-color: #111;

#header {
  height: 56px;
  padding: 0 16px;
}

#header__nav {
  height: inherit;

  display: flex;
  justify-content: space-between;
}

#header__nav .start,
#header__nav .center,
#header__nav .end {
  display: flex;
  align-items: center;
  align-self: center;
  height: fit-content;
}

#header__nav .center {
  flex: 0 1 728px;
  justify-content: center;
}

#header__nav .end {
  justify-content: flex-end;
}

#header__menu-toggle-wrap {
  padding: 8px;
  margin-right: 16px;
}

#header__menu-toggle {
  position: relative;

  height: 24px;
  width: 24px;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 3px;
}

#header__menu-toggle input {
  display: block;
  position: absolute;

  width: inherit;
  height: inherit;

  cursor: pointer;
  opacity: 0;
  z-index: 2;
}

#header__menu-toggle span {
  display: block;

  height: 2px;
  width: 18px;
  margin-bottom: 3px;

  background: @main-grey;
}

.logo {
  display: flex;
}

.logo-icon {
  display: flex;
}

.logo-icon img {
  height: 24px;
  width: 80px;  
}

.logo__country-code {
  font-size: 10px;
  margin-left: 2px;
}

#search-form {
  display: flex;
  height: 30px;
}

#searchbox {
  width: 575px;
  padding: 2px 6px;

  border: 1px solid @border-grey;
  border-radius: 2px 0 0 2px;
  box-sizing: border-box;

  box-shadow: inset 0 1px 2px @searchbox-border-shadow-color;  

  display: flex;
}

#search__input {
  width: 100%;
  height: 100%;
  margin-top: -2px;
  color: @searchbox-text-color;
}

#search__input::placeholder {
  color: #757575;
}

#search__input:focus .searchbox {
  // outline and deeper shadow
}

#onscreen-keyboard-wrap {
  padding: 0 2px;
  display: flex;
  align-items: center;
}

#onscreen-keyboard {
  padding: 0 4px;
  cursor: pointer;
}

#onscreen-keyboard:hover span {
  opacity: 1;
}

#onscreen-keyboard span {
  opacity: 0.6;

  background: url(data:image/gif;base64,R0lGODlhEwALAKECAAAAABISEv///////yH5BAEKAAIALAAAAAATAAsAAAIdDI6pZ+suQJyy0ocV3bbm33EcCArmiUYk1qxAUAAAOw==) no-repeat center;
  display: inline-block;
  height: 11px;
  line-height: 0;
  width: 19px;
}

#onscreen-keyboard img {
  opacity: 0;
}

#search-button {
  width: 65px;

  background: @bg-grey;
  border: 1px solid @border-grey;
  border-left: none;
  border-radius: 0 2px 2px 0;

  cursor: pointer;

  display: flex;
}

#search-button:hover {
  border-color: @searchbox-button-hover-border-color;
  background-color: @searchbox-button-hover-color;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
}

#search-button img {
  width: 20px;
  height: 20px;
  margin: auto;

  color: @searchbox-button-icon-color;
  opacity: 0.5;
}

#search-button:hover img {
  opacity: 1;
}

#topbar-menu-buttons {
  min-width: 225px;
  display: flex;
  justify-content: flex-end;
}

.topbar-menu-button {
  height: 40px;
  width: 40px;
  margin-right: 8px;

  display: flex;
  align-items: center;
}

.icon-button-wrap,
.icon-button {
  height: inherit;
  width: inherit;
}

.icon-button-wrap {
  display: inline-block;
}

.icon-button {
  padding: 8px;
}

.icon-button img {
  height: 24px;
  width: 24px;
}

.icon-button svg path {
  fill: @main-grey;
}

.avatar {
  width: 60px;
  height: 40px;
  
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0;
}

.avatar-button {
  width: inherit;
  height: inherit;
  padding: 0 8px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-img {
  height: 32px;
  width: 32px;
  border-radius: 50%;
}

@media (min-width: 876px) {
  .logo {
    width: 129px;
  }
}

</style>
