require('http')
	.createServer()
	.on('request', (req, res) => {
		const { url } = req
		const { exec } = require('child_process')
		if (url.includes('cr')) exec('docker pull registry.cn-shanghai.aliyuncs.com/test3207/ali-cr-demo:master && docker run --name ali-cr-demo -p 7023:7023 --restart always -d registry.cn-shanghai.aliyuncs.com/test3207/ali-cr-demo:master', () => {})
		res.writeHead(200)
		res.end(`
			<html>Hello World!</html>
		`)
	})
	.listen(7023)
