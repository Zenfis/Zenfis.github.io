---
title: "Разработка КЖ"
description: "Разработка раздела КЖ (конструкции железобетонные): расчётная модель, армирование, чертежи."
---
<div class="container project-hero" style="border-bottom:none;">
  <p class="eyebrow">Раздел проекта · КЖ</p>
  <h1>Разработка КЖ</h1>
  <p class="hero__lead">
    Конструкции железобетонные — расчёт и оформление чертежей монолитных и сборных
    железобетонных конструкций: фундаменты, перекрытия, каркас здания, лестницы.
    Ниже — этапы работы и пример готового комплекта.
  </p>
</div>

<div class="container">

  <div class="method-step">
    <div class="method-step__num">01</div>
    <div>
      <h3>Расчётная модель</h3>
      <p>
        Строю пространственную расчётную модель здания, собираю нагрузки
        (постоянные, временные, снеговые, ветровые) и выполняю расчёт
        в специализированном ПО.
      </p>
      <!-- Замени изображения на скрины своей 3D-модели -->
      <div class="figure-pair">
        <figure>
          <img src="{{ '/assets/img/kzh/model-1.jpg' | relative_url }}" alt="3D-модель конструкции">
          <figcaption>3D-модель — общий вид каркаса</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/img/kzh/model-2.jpg' | relative_url }}" alt="Эпюры усилий расчётной модели">
          <figcaption>Результаты расчёта — эпюры усилий</figcaption>
        </figure>
      </div>
    </div>
  </div>

  <div class="method-step">
    <div class="method-step__num">02</div>
    <div>
      <h3>Армирование и сечения</h3>
      <p>
        По результатам расчёта подбираю армирование элементов, конструирую узлы
        сопряжения, проверяю конструкции по предельным состояниям первой и второй группы.
      </p>
      <div class="figure-pair">
        <figure>
          <img src="{{ '/assets/img/kzh/reinforcement-1.jpg' | relative_url }}" alt="Схема армирования">
          <figcaption>Схема армирования плиты перекрытия</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/img/kzh/reinforcement-2.jpg' | relative_url }}" alt="Узел армирования">
          <figcaption>Узел армирования — разрез</figcaption>
        </figure>
      </div>
    </div>
  </div>

  <div class="method-step">
    <div class="method-step__num">03</div>
    <div>
      <h3>Оформление чертежей</h3>
      <p>
        Финальный этап — вычерчивание полного комплекта листов КЖ по ГОСТ:
        планы, разрезы, спецификации арматуры, ведомости расхода стали.
      </p>
      <div class="figure-pair">
        <figure>
          <img src="{{ '/assets/img/kzh/drawing-1.jpg' | relative_url }}" alt="Лист чертежа КЖ — план">
          <figcaption>Лист КЖ — план армирования</figcaption>
        </figure>
        <figure>
          <img src="{{ '/assets/img/kzh/drawing-2.jpg' | relative_url }}" alt="Лист чертежа КЖ — спецификация">
          <figcaption>Спецификация и ведомость расхода стали</figcaption>
        </figure>
      </div>
    </div>
  </div>

  <div class="download-card">
    <div class="download-card__text">
      Пример полного комплекта чертежей КЖ
      <span>PDF · демонстрационный проект</span>
    </div>
    <!-- Положи свой файл в assets/files/example-kzh.pdf -->
    <a class="btn btn--accent" href="{{ '/assets/files/example-kzh.pdf' | relative_url }}" download>Скачать пример PDF</a>
  </div>

</div>
