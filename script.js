window.onload = function () {
  // Сначала создаём объект с курсами валют по отношению к рублю
  // Здесь числа — это сколько одной единицы валюты стоит в рублях
  let rates = {
    USD: 82.22, // 1 USD = 82.22 RUB
    EUR: 95.0, // 1 EUR = 95.00 RUB
    RUB: 1, // 1 RUB = 1 RUB
  };

  // Получаем элементы со страницы, куда пользователь вводит данные
  let inputAmount = document.getElementById('val'); // поле ввода суммы
  let fromCurrency = document.getElementById('cur1'); // валюта, из которой переводим
  let toCurrency = document.getElementById('cur2'); // валюта, в которую переводим
  let output = document.getElementsByClassName('convert_result')[0]; // где показываем результат

  // Функция, которая будет считать и показывать результат
  function convertCurrency() {
    // Получаем число из поля ввода и преобразуем в число с плавающей точкой
    let amount = parseFloat(inputAmount.value);

    // Проверяем, что введено число и оно больше нуля
    if (isNaN(amount) || amount <= 0) {
      output.innerText = '= 0.00'; // Если нет — показываем 0
      return; // Выходим из функции
    }

    // Если валюты одинаковые, просто показываем введённую сумму
    if (fromCurrency.value === toCurrency.value) {
      output.innerText = '= ' + amount.toFixed(2); // .toFixed(2) — оставляет 2 знака после запятой
      return;
    }

    // Переводим сумму в рубли
    let amountInRub = amount * rates[fromCurrency.value];

    // Переводим из рублей в нужную валюту
    let convertedAmount = amountInRub / rates[toCurrency.value];

    // Показываем результат с 2 знаками после запятой
    output.innerText = '= ' + convertedAmount.toFixed(2);
  }

  // Добавляем "слушатели" событий — когда пользователь вводит число или меняет валюты, вызываем convertCurrency
  inputAmount.oninput = convertCurrency;
  fromCurrency.onchange = convertCurrency;
  toCurrency.onchange = convertCurrency;
};
