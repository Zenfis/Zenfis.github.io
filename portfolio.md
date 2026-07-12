---
title: "Портфолио"
description: "Реализованные проекты: реставрация, многоэтажное и общественное строительство."
---
<div class="container">
  <p class="eyebrow">Портфолио</p>
  <h1 style="margin-top:14px;">Проекты</h1>
  <p class="hero__lead">Фильтруй список по категории объекта и по типу раздела.</p>

  <div class="filter-bar" role="group" aria-label="Фильтр проектов по категории" data-filter-group="categories">
    <button class="filter-btn is-active" data-filter="all" aria-pressed="true">Все категории</button>
    {% for cat in site.project_categories %}
      <button class="filter-btn" data-filter="{{ cat.key }}" aria-pressed="false">{{ cat.label }}</button>
    {% endfor %}
  </div>

  <div class="filter-bar" role="group" aria-label="Фильтр проектов по типу раздела" data-filter-group="types">
    <button class="filter-btn is-active" data-filter="all" aria-pressed="true">Все разделы</button>
    {% for t in site.project_types %}
      <button class="filter-btn" data-filter="{{ t.key }}" aria-pressed="false">{{ t.label }}</button>
    {% endfor %}
  </div>

  {% assign all_projects = site.projects | sort: 'year' | reverse %}
  <div class="project-grid">
    {% for project in all_projects %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>

  <p class="empty-state">По этому фильтру пока нет проектов.</p>
</div>

<script src="{{ '/assets/js/filter.js' | relative_url }}"></script>
