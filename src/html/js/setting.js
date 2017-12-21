//////////////////////////////////////////////////////////////////////
// call contract method
// https://guide.blockchain.conoha.jp/ja/docs/dapp/dev/call/
//////////////////////////////////////////////////////////////////////

const CNSADDRESS = "0xa199a36e35849729eb08a2743af71d8290e01ba8"
const BASEURL = 'http://beta.blockchain.z.com'
const PASSWD  = "gmo0"
const CONTRACTNAME = 'ProxyController'
const ABI     = [
[{"constant":true,"inputs":[{"name":"_vc","type":"bytes32"},{"name":"_x","type":"address"}],"name":"voters","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"provider","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_vc","type":"bytes32"}],"name":"generator","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_vc","type":"bytes32"},{"name":"_endUserAddr","type":"address"},{"name":"_pubkey","type":"uint256"},{"name":"_zkp_g","type":"uint256"},{"name":"_zkp_s","type":"uint256"},{"name":"_clientsign","type":"bytes"}],"name":"setPubKey","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isVersionContract","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"anevehandler","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_vc","type":"bytes32"},{"name":"_x","type":"uint256"}],"name":"addrList","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isVersionLogic","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_vc","type":"bytes32"},{"name":"_clientsign","type":"bytes"}],"name":"resetAddrList","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_vc","type":"bytes32"}],"name":"modulo","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_vc","type":"bytes32"}],"name":"participants","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_vc","type":"bytes32"}],"name":"count","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_vc","type":"bytes32"},{"name":"_endUserAddr","type":"address"},{"name":"_bal","type":"uint256"},{"name":"a1","type":"uint256"},{"name":"a2","type":"uint256"},{"name":"b1","type":"uint256"},{"name":"b2","type":"uint256"},{"name":"d1","type":"uint256"},{"name":"d2","type":"uint256"},{"name":"r1","type":"uint256"},{"name":"r2","type":"uint256"},{"name":"_clientsign","type":"bytes"}],"name":"vote","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_sign","type":"bytes"},{"name":"_vc","type":"bytes32"},{"name":"_clientsign","type":"bytes"}],"name":"createAneve","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_vc","type":"bytes32"}],"name":"aneveAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isVersionContractOrLogic","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"cns","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getContractName","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getCns","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_vc","type":"bytes32"},{"name":"_endUserAddr","type":"address"}],"name":"calcMagicKey","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"_cns","type":"address"},{"name":"_anevehandler","type":"address"}],"payable":false,"type":"constructor"}]
][0]

