function formatTime(time) {
	if (typeof time !== 'number' || time < 0) {
		return time
	}

	var hour = parseInt(time / 3600)
	time = time % 3600
	var minute = parseInt(time / 60)
	time = time % 60
	var second = time

	return ([hour, minute, second]).map(function(n) {
		n = n.toString()
		return n[1] ? n : '0' + n
	}).join(':')
}

function randomWord(randomFlag, min, max) {
	let str = "",
		range = min,
		arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
			'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
			'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
			'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
			'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-'
		];

	//'-','.','~','!','@','#','$','%','^','&','*','(',')','_',':','<','>','?'

	if (randomFlag) {
		range = Math.round(Math.random() * (max - min)) + min; // 任意长度
	}
	for (let i = 0; i < range; i++) {
		var pos = Math.round(Math.random() * (arr.length - 1));
		str += arr[pos];
	}
	return str;
}

function randomOption(array, num) {

	let temp = array
	let return_array = []

	for (let i = 0; i < num; i++) {

		if (temp.length > 0) {

			let arrIndex = Math.floor(Math.random() * temp.length);

			return_array[i] = temp[arrIndex];

			temp.splice(arrIndex, 1);

		} else {

			break;

		}

	}

	return return_array
}

//函数调用传参格式为 2018-6-6或者2018.6.6//如：startUnix(2018-6-6) 返回的时间戳格式‘1528300799’
function startUnix($date) {
	return (new Date(Date.parse($date.replace(/-/g, "/")))).getTime() / 1000;
}

function endUnix($date) {
	return new Date().setTime(Date.parse($date.replace(/-/g, "/")) / 1000 + 24 * 60 * 60 - 1);
}

function formatLocation(longitude, latitude) {
	if (typeof longitude === 'string' && typeof latitude === 'string') {
		longitude = parseFloat(longitude)
		latitude = parseFloat(latitude)
	}

	longitude = longitude.toFixed(2)
	latitude = latitude.toFixed(2)

	return {
		longitude: longitude.toString().split('.'),
		latitude: latitude.toString().split('.')
	}
}
var dateUtils = {
	UNITS: {
		'年': 31557600000,
		'月': 2629800000,
		'天': 86400000,
		'小时': 3600000,
		'分钟': 60000,
		'秒': 1000
	},
	humanize: function(milliseconds) {
		var humanize = '';
		for (var key in this.UNITS) {
			if (milliseconds >= this.UNITS[key]) {
				humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
				break;
			}
		}
		return humanize || '刚刚';
	},
	format: function(dateStr) {
		var date = this.parse(dateStr)
		var diff = Date.now() - date.getTime();
		if (diff < this.UNITS['天']) {
			return this.humanize(diff);
		}
		var _format = function(number) {
			return (number < 10 ? ('0' + number) : number);
		};
		return date.getFullYear() + '/' + _format(date.getMonth() + 1) + '/' + _format(date.getDate()) + '-' +
			_format(date.getHours()) + ':' + _format(date.getMinutes());
	},
	parse: function(str) { //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
		var a = str.split(/[^0-9]/);
		return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
	}
}

function getKey() {
	var date = new Date();
	var year = date.getUTCFullYear().toString().substr(2, 2);
	var month = String(date.getUTCMonth() + 1);
	if (month.length == 1)
		month = '0' + month;

	var day = String(date.getUTCDate());
	if (day.length == 1)
		day = '0' + day;
	return `${year}-${month}-${day}`
}

function encryptByDES(message, key) {
	var keyHex = CryptoJS.enc.Utf8.parse(key);
	encrypted = CryptoJS.DES.encrypt(message, keyHex, {
		iv: keyHex,
		mode: CryptoJS.mode.CBC
	});
	return CryptoJS.enc.Base64.stringify(encrypted.ciphertext);
}

module.exports = {
	formatTime: formatTime,
	formatLocation: formatLocation,
	dateUtils: dateUtils,
	randomWord: randomWord,
	randomOption: randomOption,
	startUnix: startUnix,
	endUnix: endUnix,
	getKey:getKey,
	encryptByDES:encryptByDES,
}
