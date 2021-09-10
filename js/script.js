/*Взять массив и подставить его элементы в таблицу*/
function takeData(){
  document.querySelector('#table tbody').innerHTML += dataBase.map(n => `
    <tr>
      
      <td class="table-string string-name" >${n.name.firstName}</td>
      <td class="table-string string-lastName">${n.name.lastName}</td>
      <td class="table-string string-about">${n.about}</td>
      <td class="table-string string-colorEyes" style="color:${n.eyeColor}"><span class="string-colorEyes-hidden">${n.eyeColor}</span> <i class="fas fa-eye"></td>
    </tr>
  `).join('');

}

/*function editColor() {
	const eyes = document.
}*/

takeData();


function editTable() {
	/*Переменная для сбора всех td элементов таблицы*/
const tdElements = document.querySelectorAll('td');

for (let i = 0; i < tdElements.length; i++) {
	/*Запуск функции редактирования при клике на элемент*/
	tdElements[i].addEventListener('click' , function func() {
		const input = document.createElement('input');
		input.value = this.innerHTML
		;
		/*Удаление значений в td*/
		this.innerHTML = '';

		/*Добавление input для редактирования*/
		this.appendChild(input);

		/*Переменная для переноса контекста во внутренню функцию*/
		let td = this;
		/*Изменить значение td при событии change*/
		input.addEventListener('change', function(){

			td.innerHTML = this.value;
			td.addEventListener('click', func);
		});

		this.removeEventListener('click', func);
	});
};

 }

editTable();
































/*сгенерирован файл json проверку на валидаторе не прошёл, поэтому вынужден отказаться идеи взять данные асинхронно с сервера и вставать код, и буду просто перебрать массив */
/*async function getUser () {
	Мой хост запрещает получать данные напрямую, поэтому Proxy
	const proxyUrl = 'https://whispering-tor-04671.herokuapp.com/';
	const dataUrl = 'http://yarkirs.ru/test_json/test.json';

	try {
		const response = await fetch(proxyUrl + dataUrl);
		const data = await response.json();

		console.log(data);
	} catch (error) {
		console.log('Ошибка! ' + error);
	};
		
};
getUser();
*/

