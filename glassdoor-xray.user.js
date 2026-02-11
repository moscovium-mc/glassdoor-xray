// ==UserScript==
// @name         Glassdoor X-Ray
// @namespace    https://github.com/moscovium-mc
// @version      1.0
// @description  See through the blur - reveals hidden company reviews on Glassdoor
// @author       moscovium-mc
// @homepage     https://github.com/moscovium-mc/glassdoor-xray
// @supportURL   https://github.com/moscovium-mc/glassdoor-xray/issues
// @updateURL    https://github.com/moscovium-mc/glassdoor-xray/raw/main/glassdoor-xray.user.js
// @downloadURL  https://github.com/moscovium-mc/glassdoor-xray/raw/main/glassdoor-xray.user.js
// @match        https://www.glassdoor.com/Reviews/*
// @match        https://www.glassdoor.co.uk/Reviews/*
// @match        https://www.glassdoor.ca/Reviews/*
// @match        https://www.glassdoor.com.au/Reviews/*
// @match        https://www.glassdoor.ie/Reviews/*
// @match        https://www.glassdoor.co.in/Reviews/*
// @match        https://www.glassdoor.co.nz/Reviews/*
// @match        https://www.glassdoor.sg/Reviews/*
// @match        https://www.glassdoor.com.hk/Reviews/*
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  const reviewCSS = `
    /* Hide content lock overlay backdrop */
    [data-test="overlay-backdrop"],
    #ContentHardsellOverlay {
      display: none !important;
    }

    /* Hide content lock container */
    [data-test="content-lock-container"],
    .Zlhvw6J_O_2eDhaqKVAg {
      display: none !important;
    }

    /* Hide lock icon container */
    [data-test="content-lock-icon-container"],
    .aU8FfGcqKhg9IvE7DE0k {
      display: none !important;
    }

    /* Hide lock icon SVG */
    [data-test="content-lock-icon"] {
      display: none !important;
    }

    /* Hide content hardsell element */
    #ContentHardsell {
      display: none !important;
    }

    /* Hide hardsell title and CTA */
    [data-test="content-hardsell-title"],
    [data-test="content-hardsell-cta"] {
      display: none !important;
    }

    /* Reveal hidden review text - remove blur/opacity */
    .ReviewText_isCollapsed__UW3By,
    .review-text-collapsed,
    [data-test="review-text-PROS"],
    [data-test="review-text-CONS"] {
      opacity: 1 !important;
      filter: none !important;
      -webkit-filter: none !important;
      color: inherit !important;
      background: transparent !important;
    }

    /* Ensure expand buttons don't hide content */
    .expand-button_ExpandButton__Zmz69,
    .ReviewTextContainer_wrapper__HBdRQ {
      display: none !important;
    }

    /* Make all review content visible */
    .ReviewDetail_content__VNwQf,
    .ReviewDetail_contentContainer__1DWov {
      filter: none !important;
      opacity: 1 !important;
      pointer-events: auto !important;
    }

    /* Remove any masking on review sections */
    .ReviewTextContainer,
    .ReviewTextContainer_wrapper {
      mask: none !important;
      -webkit-mask: none !important;
    }

    /* Ensure helpful buttons and actions are visible */
    .ContentActions_contentActionsContainer__ELAOR {
      opacity: 1 !important;
      filter: none !important;
    }

    /* Remove any overlay that might block interaction */
    .ReviewDetail_reviewContentWrapper {
      pointer-events: auto !important;
    }
  `;

  GM_addStyle(reviewCSS);
})();
