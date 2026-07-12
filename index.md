---
title: "Главная"
layout: default
---
<section class="hero container">
  <p class="eyebrow">{{ site.data.contacts.city }} · доступен для проектов удалённо</p>
  <h1>{{ site.data.contacts.name }}<br>{{ site.data.contacts.role }}</h1>
  <p class="hero__lead">
    Разрабатываю конструктивные решения (КР) и конструкции железобетонные (КЖ)
    для реставрации, многоэтажного и общественного строительства —
    от эскиза до полного комплекта чертежей стадии Р.
  </p>
  <div class="hero__actions">
    <a class="btn btn--accent" href="{{ '/portfolio/' | relative_url }}">Смотреть портфолио</a>
    <a class="btn" href="{{ '/about-me/' | relative_url }}">О себе</a>
  </div>

  <div class="stat-row">
    <div class="stat"><b>{{ site.data.contacts.experience_years }}+</b><span>лет практики</span></div>
    <div class="stat"><b>{{ site.data.contacts.projects_count }}+</b><span>реализованных проектов</span></div>
    <div class="stat"><b>КЖ / КР</b><span>стадии П и Р</span></div>
  </div>
</section>
<!--
<div class="container">
  <div class="dim-divider"><span class="tick"></span>Разделы сайта<span class="tick"></span></div>

  <div class="summary-grid">
    <div class="summary-card">
      <p class="eyebrow">01 · Услуга</p>
      <h3>Разработка КЖ</h3>
      <p>Конструкции железобетонные: расчётные модели, армирование, чертежи стадии КЖ с примером в PDF.</p>
      <a class="summary-card__link" href="{{ '/razrabotka-kzh/' | relative_url }}">Подробнее →</a>
    </div>
    <div class="summary-card">
      <p class="eyebrow">02 · Услуга</p>
      <h3>Разработка КР</h3>
      <p>Конструктивные решения объекта на стадии проектирования: компоновка, сечения, узлы.</p>
      <a class="summary-card__link" href="{{ '/razrabotka-kr/' | relative_url }}">Подробнее →</a>
    </div>
    <div class="summary-card">
      <p class="eyebrow">03 · О себе</p>
      <h3>О себе</h3>
      <p>Образование, опыт, инструменты проектирования и контакты для связи.</p>
      <a class="summary-card__link" href="{{ '/about-me/' | relative_url }}">Подробнее →</a>
    </div>
  </div>
</div>
-->
<div class="container">
  <div class="dim-divider"><span class="tick"></span>Последние проекты<span class="tick"></span></div>

  {% assign featured = site.projects | sort: 'year' | reverse %}
  {% assign featured = featured | slice: 0, 3 %}
  <div class="project-grid">
    {% for project in featured %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>

  <p style="margin-top:28px;">
    <a class="btn" href="{{ '/portfolio/' | relative_url }}">Все проекты с фильтром по типу →</a>
  </p>
</div>
