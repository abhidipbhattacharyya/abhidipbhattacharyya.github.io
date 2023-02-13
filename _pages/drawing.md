---
layout: page
title: Art Works
permalink: /drawings/
description: A growing collection of my cool art works.
nav: false
nav_order:
display_categories: [watercolor, charcoal, pastel]
horizontal: false
---
In a parallel universe my doppelganger must be a painter. I love painting. It is one of my favorite hobby. I presented my art work at Computer Science [Cross Cultural Celebration, 2022](https://www.colorado.edu/cs/cross-cultural-celebration-2022). As a part of [Boulder Art Association](https://boulderartassociation.org/) my drawings have been displayed at member shows at [R gallery and Wine Bar](https://rgallery.art/collections/boulder-arts-association-winter-member-exhibit).
<!-- pages/drawings.md -->
<div class="drawings">
{%- if site.enable_drawing_categories and page.display_categories %}
  <!-- Display categorized drawings -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_drawings = site.drawings | where: "category", category -%}
  {%- assign sorted_drawings = categorized_drawings | sort: "importance" %}
  <!-- Generate cards for each drawing -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_drawings -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_drawings -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
  {% endfor %}

{%- else -%}
<!-- Display drawings without categories -->
  {%- assign sorted_drawings = site.drawings | sort: "importance" -%}
  <!-- Generate cards for each drawing -->
  {% if page.horizontal -%}
  <div class="container">
    <div class="row row-cols-2">
    {%- for project in sorted_drawings -%}
      {% include projects_horizontal.html %}
    {%- endfor %}
    </div>
  </div>
  {%- else -%}
  <div class="grid">
    {%- for project in sorted_drawings -%}
      {% include projects.html %}
    {%- endfor %}
  </div>
  {%- endif -%}
{%- endif -%}
</div>
