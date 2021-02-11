/*
东东农场互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 FruitShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
   '0787fab43daf4c469175500e873a7c1a@0787fab43daf4c469175500e873a7c1a@4603f5156f1d418c80a24b1bc13acc15@137166710cff4398a67bb092fa279768@69082ab90b4c42009407378e8bc156dd@b57e0b9027ee481f8a2f5fcdddaddd0c@137166710cff4398a67bb092fa279768@46176610056843639eba20f3ca37f127@94fc168dbaf44296a6cc73a85dab4f17@9d11ca1fe2dd48908d92919b39abdaed@7142a35676194d99bc603227344133ac@41a38fe8a71646e9860a243e80874e17@806a96a8ac6e4c6fbead87727426a4f9@42f58335913b4db9928fc3a74ae13fcb@df31e67276d04fc982b5037c41dcef95',//账号一的好友shareCode,不同好友中间用@符号隔开
  '0787fab43daf4c469175500e873a7c1a@0787fab43daf4c469175500e873a7c1a@4603f5156f1d418c80a24b1bc13acc15@137166710cff4398a67bb092fa279768@69082ab90b4c42009407378e8bc156dd@b57e0b9027ee481f8a2f5fcdddaddd0c@137166710cff4398a67bb092fa279768@46176610056843639eba20f3ca37f127@94fc168dbaf44296a6cc73a85dab4f17@9d11ca1fe2dd48908d92919b39abdaed@7142a35676194d99bc603227344133ac@41a38fe8a71646e9860a243e80874e17@806a96a8ac6e4c6fbead87727426a4f9@42f58335913b4db9928fc3a74ae13fcb@df31e67276d04fc982b5037c41dcef95',
   '0787fab43daf4c469175500e873a7c1a@0787fab43daf4c469175500e873a7c1a@4603f5156f1d418c80a24b1bc13acc15@137166710cff4398a67bb092fa279768@69082ab90b4c42009407378e8bc156dd@b57e0b9027ee481f8a2f5fcdddaddd0c@137166710cff4398a67bb092fa279768@46176610056843639eba20f3ca37f127@94fc168dbaf44296a6cc73a85dab4f17@9d11ca1fe2dd48908d92919b39abdaed@7142a35676194d99bc603227344133ac@41a38fe8a71646e9860a243e80874e17@806a96a8ac6e4c6fbead87727426a4f9@42f58335913b4db9928fc3a74ae13fcb@df31e67276d04fc982b5037c41dcef95',
    '0787fab43daf4c469175500e873a7c1a@0787fab43daf4c469175500e873a7c1a@4603f5156f1d418c80a24b1bc13acc15@137166710cff4398a67bb092fa279768@69082ab90b4c42009407378e8bc156dd@b57e0b9027ee481f8a2f5fcdddaddd0c@137166710cff4398a67bb092fa279768@46176610056843639eba20f3ca37f127@94fc168dbaf44296a6cc73a85dab4f17@9d11ca1fe2dd48908d92919b39abdaed@7142a35676194d99bc603227344133ac',
	 '0787fab43daf4c469175500e873a7c1a@0787fab43daf4c469175500e873a7c1a@4603f5156f1d418c80a24b1bc13acc15@137166710cff4398a67bb092fa279768@69082ab90b4c42009407378e8bc156dd@b57e0b9027ee481f8a2f5fcdddaddd0c@137166710cff4398a67bb092fa279768@46176610056843639eba20f3ca37f127@94fc168dbaf44296a6cc73a85dab4f17@9d11ca1fe2dd48908d92919b39abdaed@7142a35676194d99bc603227344133ac',
	  '0787fab43daf4c469175500e873a7c1a@0787fab43daf4c469175500e873a7c1a@4603f5156f1d418c80a24b1bc13acc15@137166710cff4398a67bb092fa279768@69082ab90b4c42009407378e8bc156dd@b57e0b9027ee481f8a2f5fcdddaddd0c@137166710cff4398a67bb092fa279768@46176610056843639eba20f3ca37f127@94fc168dbaf44296a6cc73a85dab4f17@9d11ca1fe2dd48908d92919b39abdaed@7142a35676194d99bc603227344133ac',
	   '0787fab43daf4c469175500e873a7c1a@0787fab43daf4c469175500e873a7c1a@4603f5156f1d418c80a24b1bc13acc15@137166710cff4398a67bb092fa279768@69082ab90b4c42009407378e8bc156dd@b57e0b9027ee481f8a2f5fcdddaddd0c@137166710cff4398a67bb092fa279768@46176610056843639eba20f3ca37f127@94fc168dbaf44296a6cc73a85dab4f17@9d11ca1fe2dd48908d92919b39abdaed@7142a35676194d99bc603227344133ac',
	    '0787fab43daf4c469175500e873a7c1a@0787fab43daf4c469175500e873a7c1a@4603f5156f1d418c80a24b1bc13acc15@137166710cff4398a67bb092fa279768@69082ab90b4c42009407378e8bc156dd@b57e0b9027ee481f8a2f5fcdddaddd0c@137166710cff4398a67bb092fa279768@46176610056843639eba20f3ca37f127@94fc168dbaf44296a6cc73a85dab4f17@9d11ca1fe2dd48908d92919b39abdaed@7142a35676194d99bc603227344133ac',
		]
// 判断github action里面是否有东东农场互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
