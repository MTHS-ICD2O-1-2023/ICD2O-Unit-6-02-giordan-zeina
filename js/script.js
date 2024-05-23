// Copyright (c) 2024 Giordan Zeina All rights reserved
//
// Created by: Giordan Zeina
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

function myCookies() {
  if (localStorage.clicks) {
    localStorage.clicks = Number(localStorage.clicks)
  } else {
    localStorage.clicks = 1
  }
  document.getElementById("clicks").innerHTML = localStorage.clicks
}

function myButtonClicked() {
  localStorage.clicks = Number(localStorage.clicks) + 1

  document.getElementById("clicks").innerHTML = localStorage.clicks
}
