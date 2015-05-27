/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
function link() {
  window.open("http://www.google.com", "_self");
    
}
$("a").hover(function(e) {
    $($(this).data("tooltip")).css({
        left: e.pageX + 1,
        top: e.pageY + 1
    }).stop().show(100);
}, function() {
    $($(this).data("tooltip")).hide();
});

 $('.search').hover(function () {
            $('.search_bar', this).stop(true, true).slideDown("normal");
        }, function () {
            $('.search_bar', this).stop(true, true).hide();
 });
//Collapse code
  $('.content').hide();
  $('.listelement').on('click', function(){
    if(!($(this).children('.content').is(':visible'))){
      $('.content').slideUp();
      $(this).children('.content').slideDown();
    } else {
      $('.content').slideUp();
    }
  });

  // Tree view code

  // Add this to the onload event of the BODY element
    function addEvents() {
      activateTree(document.getElementById("LinkedList1"));
    }

    // This function traverses the list and add links 
    // to nested list items
    function activateTree(oList) {
      // Collapse the tree
      for (var i=0; i < oList.getElementsByTagName("ul").length; i++) {
        oList.getElementsByTagName("ul")[i].style.display="none";            
      }                                                                  
      // Add the click-event handler to the list items
      if (oList.addEventListener) {
        oList.addEventListener("click", toggleBranch, false);
      } else if (oList.attachEvent) { // For IE
        oList.attachEvent("onclick", toggleBranch);
      }
      // Make the nested items look like links
      addLinksToBranches(oList);
    }

    // This is the click-event handler
    function toggleBranch(event) {
      var oBranch, cSubBranches;
      if (event.target) {
        oBranch = event.target;
      } else if (event.srcElement) { // For IE
        oBranch = event.srcElement;
      }
      cSubBranches = oBranch.getElementsByTagName("ul");
      if (cSubBranches.length > 0) {
        if (cSubBranches[0].style.display == "block") {
          cSubBranches[0].style.display = "none";
        } else {
          cSubBranches[0].style.display = "block";
        }
      }
    }

    // This function makes nested list items look like links
    function addLinksToBranches(oList) {
      var cBranches = oList.getElementsByTagName("li");
      var i, n, cSubBranches;
      if (cBranches.length > 0) {
        for (i=0, n = cBranches.length; i < n; i++) {
          cSubBranches = cBranches[i].getElementsByTagName("ul");
          if (cSubBranches.length > 0) {
            addLinksToBranches(cSubBranches[0]);
            cBranches[i].className = "HandCursorStyle";
            cBranches[i].style.color = "blue";
            cSubBranches[0].style.color = "black";
            cSubBranches[0].style.cursor = "auto";
          }
        }
      }
    }