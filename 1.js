
(function (){var test_address, test_leftNum;
window.$ = null;
window.layer = null;
layui.use(['jquery', 'layer'], function () {
    var layer = layui.layer,
        $ = layui.$;
    window.$ = $;
    window.layer = layer;
    test_address = $('#test_address');
    test_leftNum = $('#test_leftNum');

});

//事件:按键弹起
function onKeyUp() {
    var tmp = test_address.val();
    tmp = tmp.replace(/\r/gi, "");
    tmp = tmp.split("\n");
    var lin = "";
    for (var i = 1; i <= tmp.length; i++) {
        if (document.all) {
            lin += i + "\r\n";//判断浏览器是否是IE
        } else {
            lin += i + "\n";
        }
    }
    test_leftNum.val(lin);
    onScroll();
}
//事件:滚动
function onScroll() {
    test_leftNum.scrollTop(test_address.scrollTop());
}



var mTransfer = {
    Addres: null,
    ABI: [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "pList", "type": "address[]" }, { "internalType": "uint256", "name": "pAmount", "type": "uint256" }], "name": "TransferETH", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "addres", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "internalType": "struct XTransfer.transfer[]", "name": "pList", "type": "tuple[]" }, { "internalType": "uint256", "name": "pAmount", "type": "uint256" }], "name": "TransferETH2", "outputs": [], "stateMutability": "payable", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "pList", "type": "address[]" }, { "internalType": "address", "name": "pToken", "type": "address" }, { "internalType": "uint256", "name": "pAmount", "type": "uint256" }], "name": "TransferToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "components": [{ "internalType": "address", "name": "addres", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "internalType": "struct XTransfer.transfer[]", "name": "pList", "type": "tuple[]" }, { "internalType": "address", "name": "pToken", "type": "address" }, { "internalType": "uint256", "name": "pAmount", "type": "uint256" }], "name": "TransferToken2", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "uint256", "name": "pAmount", "type": "uint256" }], "name": "withdrawETH", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "pToken", "type": "address" }, { "internalType": "uint256", "name": "pAmount", "type": "uint256" }], "name": "withdrawToken", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }, { "internalType": "address", "name": "token", "type": "address" }], "name": "getBalance", "outputs": [{ "internalType": "uint256", "name": "amount_eth", "type": "uint256" }, { "internalType": "uint256", "name": "amount_token", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "addr", "type": "address" }], "name": "getBalance_ETH", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }, { "internalType": "address", "name": "owner", "type": "address" }], "name": "getBalance_Token", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address[]", "name": "addrs", "type": "address[]" }, { "internalType": "address", "name": "token", "type": "address" }], "name": "getBalances", "outputs": [{ "components": [{ "internalType": "address", "name": "addres", "type": "address" }, { "internalType": "uint256", "name": "amount_eth", "type": "uint256" }, { "internalType": "uint256", "name": "amount_token", "type": "uint256" }], "internalType": "struct XTransfer.Balance[]", "name": "", "type": "tuple[]" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "token", "type": "address" }], "name": "getERC20", "outputs": [{ "components": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint8", "name": "decimals", "type": "uint8" }], "internalType": "struct XTransfer.ERC20", "name": "", "type": "tuple" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "pToken", "type": "address" }, { "internalType": "address", "name": "pOwner", "type": "address" }, { "internalType": "address", "name": "pSpender", "type": "address" }], "name": "getWalletInfo", "outputs": [{ "components": [{ "components": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }, { "internalType": "uint8", "name": "decimals", "type": "uint8" }], "internalType": "struct XTransfer.ERC20", "name": "erc", "type": "tuple" }, { "internalType": "uint256", "name": "balance", "type": "uint256" }, { "internalType": "uint256", "name": "allowance", "type": "uint256" }], "internalType": "struct XTransfer.WalletInfo", "name": "info", "type": "tuple" }], "stateMutability": "view", "type": "function" }],
    Contract: null,
    InPutToken: null,
}
var mWallet = {
    Addres: null,
    Signer: null,
    Name: null,
    ChainId: null,
}
var mList = {
    128: '0x0B0eE36A04084b7f04e06112dDfc687585360902',
    56: '0xBF13a5A687fEe115AD14EC5cB000877243f3e027',
    66: '0x5E1e869C68e29d0861C4f89F7e2B0145Fe2dBA7c'
}



//检查钱包是否连接
async function checkWallet() {
    mWallet.Signer = parent.mSigner;
    if (mWallet.Signer == null) {
        Msg('请先连接钱包!')
        return false;
    };
    mWallet.Name = mWallet.Signer.provider.connection.url.toLocaleLowerCase();
    mWallet.ChainId = mWallet.Signer.provider._network.chainId;
    mWallet.Addres = parent.mAddres;
    if (mWallet.Name != 'metamask') {
        Msg('请使用小狐狸钱包!')
        return false;
    }
    mTransfer.Addres = mList[mWallet.ChainId];
    if (mTransfer.Addres == null || mTransfer.Addres.length != 42) {
        Msg('暂不支持该链!')
        return false;
    }
    //$('#Wallet_info').val("当前处于"+)
    return true;
}
//事件:连接合约
async function onContract() {
    if (!checkWallet()) return;
    mTransfer.Contract = new ethers.Contract(mTransfer.Addres, mTransfer.ABI, mWallet.Signer);
}
//检查合约是否连接
function checkContract() {
    if (mTransfer.Contract == null) onContract();
    return mTransfer.Contract != null;
}
//事件:获取代币信息
async function onGetInfo() {
    var token = $('#test_token').val();
    if (token.length != 42) {
        Msg("合约地址错误");
        return;
    };
    if (!checkContract()) return;

    var info = await mTransfer.Contract.getWalletInfo(token, mWallet.Addres, mTransfer.Addres).then(v => v, err => err);
    if (info.allowance == null) {
        Msg("获取异常");
        return;
    };
    mTransfer.InPutToken = { erc: info.erc, address: token, balance: 0 };
    mTransfer.InPutToken.balance = Hex2int(info.balance._hex, mTransfer.InPutToken.erc.decimals);
    var tag = Hex2int(info.allowance._hex, mTransfer.InPutToken.erc.decimals) > 0 ? '[已授权]' : '[未授权]';
    window.$('#info_input').text('[' + mTransfer.InPutToken.erc.symbol + ']' + mTransfer.InPutToken.balance + tag)
}
//事件:授权
async function onApprove() {
    if (mTransfer.InPutToken == null) {
        Msg('请先获取代币信息!')
        return;
    }
    var Contract = new ethers.Contract(mTransfer.InPutToken.address, mTransfer.ABI, mWallet.Signer);
    tx = await Contract.approve(mTransfer.Addres, '115792089237316195423570985008687907853269984665640564039457584007913129639935').then(v => v, err => err);
}

//事件:转账
async function onTransfer() {
    if (!checkContract()) return;
    var token = $('#test_token').val();
    if (mTransfer.InPutToken == null && token.length > 0) {
        Msg("请先获取代币信息");
        return;
    };
    var amount = $('#test_amount').val();
    var arr = GetList(amount);
    //var value = amount * arr.length;
    // if (amount <= 0) {
    //     Msg("请正确填写转账数量!");
    //     return;
    // }
    if (arr.length <= 0) {
        Msg("请正确填写接收地址!");
        return;
    }
    mLog = new Log('批量发送Token', LogClose);
    var func = token.length == 0 ? TransferETH : TransferToken;
    LogMsg("开始转账,请记得提高gasPrice与gasLimit防止gas不足");
    while (arr.length > 0) {
        var list = arr.splice(0, 200);
        value = amount * list.length;
        tx = await func(list, amount, value).then(v => v, err => err);
        stringify_Log('转账', 0, tx);
        console.log(tx);
        //LogMsg
    }
    LogMsg("转账完毕");
}

async function TransferToken(list, amount, value) {
    if (amount > 0) {
        return mTransfer.Contract.TransferToken(list, mTransfer.InPutToken.address, int2hex(amount, mTransfer.InPutToken.erc.decimals))
    } else {
        var _amount = 0;
        //转换每一个发送数量,并计算总的发送量
        for (var i = 0; i < list.length; i++) {
            _amount = _amount + parseFloat(list[i].amount);
            list[i].amount = int2hex(list[i].amount, mTransfer.InPutToken.erc.decimals);
        }
        return mTransfer.Contract.TransferToken2(list, mTransfer.InPutToken.address, int2hex(_amount.toFixed(4), mTransfer.InPutToken.erc.decimals))
    }
}
async function TransferETH(list, amount, value) {
    if (amount > 0) {
        return mTransfer.Contract.TransferETH(list, int2hex(amount, "18"), { value: int2hex(value, "18") })
    } else {
        var _amount = 0;
        //转换每一个发送数量,并计算总的发送量
        for (var i = 0; i < list.length; i++) {
            _amount = _amount + parseFloat(list[i].amount);
            list[i].amount = int2hex(list[i].amount, "18");
        }
        return mTransfer.Contract.TransferETH2(list, int2hex(_amount.toFixed(4), "18"), { value: int2hex(_amount.toFixed(4), "18") })
    }

}
//事件:查询余额
async function onGetBalance() {
    if (!checkContract()) return;
    var token = $('#test_token').val();
    if (mTransfer.InPutToken == null && token.length > 0) {
        Msg("请先获取代币信息");
        return;
    };
    var list = GetList(1, true);
    if (list.length <= 0) {
        Msg("地址格式错误");
        return;
    }
    if (token.length == 0) token = "0x0000000000000000000000000000000000000000";
    var r = await mTransfer.Contract.getBalances(list, token);
    if (r == null || r.length < 0) {
        Msg("查询失败");
        return;
    }
    var tmp = [];
    for (var i = 0; i < r.length; i++) {
        var eth = Hex2int(r[i].amount_eth._hex, "18");
        if (parseInt(token) <= 0) {
            tmp.push(r[i].addres + '-(主网币:' + eth + ')');
        } else {
            tmp.push(r[i].addres + '-(主网币:' + eth + ' ' + mTransfer.InPutToken.erc.symbol + ":" + Hex2int(r[i].amount_token._hex, mTransfer.InPutToken.erc.decimals) + ')');
        }
    }
    $('#test_address').val(tmp.join('\n'));
    console.log(tmp);
}
function GetList(amount, isBalance) {
    var str = document.getElementById("test_address").value;
    var list = str.split(/[(\r\n)\r\n]+/);
    var tmp = [];
    for (var i = 0; i < list.length; i++) {
        var s = list[i]
        if (isBalance != null && isBalance) {
            if (s.slice(0, 42).length == 42) tmp.push(s.slice(0, 42));
            continue;
        }
        if (amount > 0 && s.length == 42) {
            tmp.push(s);
        } else {
            var a = s.split('-');
            if (a.length !== 2 || a[0].length !== 42 || a[1] <= 0) {
                continue;
            }
            tmp.push({ addres: a[0], amount: a[1] });
        }
    }
    return tmp
}
var fun = {
    onApprove: { func: onApprove, params: null, disabled: false },
    onGetInfo: { func: onGetInfo, params: null, disabled: false },
    onTransfer: { func: onTransfer, params: null, disabled: false },
    onGetBalance: { func: onGetBalance, params: null, disabled: false },
}
async function actionmiddle(id) {
    var loadix = layer.load(2, {
        shade: [0.3, '#393D49']
    });
    if (!fun[id].disabled) {
        if (fun[id].params == null) {
            await fun[id].func();
        } else {
            await fun[id].func(fun[id].params[0]);
        }
        layer.close(loadix);
        return
    }
    //eval(fun[i])

    await fun[id].func();
    layer.close(loadix);
}})()