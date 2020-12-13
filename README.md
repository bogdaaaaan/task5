# task5
Задание курса #5. Сборка проекта. Тестирование.

**Срок отправки ~~13.12.2020~~ 16.12.2020**

**Срок защиты ~~22.12.2020~~ 24.12.2020**

1. В случае если не использовали es6 модули в предыдущей лабораторной - перевести существующие файлы к стандарту.
Шаги по рефакторингу вашего приложения описаны в  [Лекция #13. Webpack configuration. Linters: ESLint. [02.12.2020]](https://www.notion.so/13-Webpack-configuration-Linters-ESLint-02-12-2020-19b6437d87ef4e04a3586209befac226) . (Страница Рефакторинг в слайдах [https://docs.google.com/presentation/d/1Hr1O2YmAusjHoyZJJPDLA6P5mqAlLA5NSQb52Fvli8k/edit?usp=sharing](https://docs.google.com/presentation/d/1Hr1O2YmAusjHoyZJJPDLA6P5mqAlLA5NSQb52Fvli8k/edit?usp=sharing))
2. Добавить в проект (из четвертой лабораторной) Webpack (dev/prod config). Использовать Babel. (Можно использовать приаттаченный конфиг внизу)
3. Покрыть код unit тестами ([Лекция #12. Unit testing. Babel. [25.11.2020]](https://www.notion.so/12-Unit-testing-Babel-25-11-2020-295cc32776e24439bca9654de3f9f4fc)). Можно выбрать любую комбинацию тест библиотек из jest/jasmine/karma/mocha+chai+sinon. **Рекомендую использовать Jest**. Минимальное покрытие кода тестами должно составлять: **65%/60/60/60 (statements/branches/functions/lines)**.
Coverage скриншот прикрепить в [README.md](http://readme.md) файле.
4. Код лабораторной залить в отдельный репозиторий (отдельно от 4 лабораторной).
5. Добавить также npm скрипт c eslint. Скриншот прохождения вашего кода линтером тоже прикрепить в md файле. ESLint конфиг на выбор: [standard](https://github.com/standard/eslint-config-standard) либо [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb), либо приаттаченный в лабораторной.
6. Задеплоить приложение (по аналогии с 4й лабораторной) на Github Pages (либо другой хостинг). **В GIthub Pages теперь должен подключаться index.html из папки 'dist'.** После всех предыдущих шагов (1-5) ваше приложение из четвертой лабораторной по-прежнему должно работать. (Сможем сравнить с задеплоенной 4й лабой)

### Архив с конфигами (jest, babel, eslint, webpack, npm scripts) и примерами unit тестов тут:

[lab5.zip](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bd673c0d-b5fb-4177-b0c5-8c55dfa0b1a8/lab5.zip)
