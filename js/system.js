/*
 * 网络请求相关的配置
 * 18672340812  612820
 * 2742668612
 */ 
// 测试服务器
//var BASE_URL = "http://192.168.65.78:8000/webapp/api/v1/";
// 正式服务器
var BASE_URL = "http://g.justfruit.cn/webapp/api/v1/"
//var BASE_URL = "../../json/"; 
// http://g.justfruit.cn/webapp/api/v1/print_order_ticket
// 登录接口 username=baiyang01&pw=123456
var LOGIN = "login";
// 商品列表 order_id=00000004
var ORDER_ITEMS_DEILE = "order_items_daile";
// 订单类型列表
var ORDER_TYPE = "ordertype";
// 分单 报错
var CHANGE_SHIPMAN = "change_shipman";
// 改变订单状态
var CHANGE_ORDER_STATUS = "change_order_status";
// 计算原料
var MERGER_MATERIALS = "merger_materials"
// 打印订单
var PRINT_ORDER_TICKET = "print_order_ticket";
// 个人结算
var PAYMENT_STATUS = "payment_status";
// 超级管理员
var SUPERMAN = "superman";

// 本地存储的key

// 是否登录
var IS_LOGIN = "isLogin";

// 输入的用户名
var USER_NAME = "username";
// 输入的密码
var PASS_WORD = "password";
// 是否是管理员  true：是 false:不是
var IS_SUPER = "is_super";

// 登录用户的用户信息
var USER = "user";  
//	user{
//		username: "baiyang01",
//		building: "洪山区",
//		zone: "洪山区",
//		userid: 15,
//		regions: "武昌",
//		id: 15，
//      tel_phone: "15221061921"
//	}
// 员工列表
var EMPLOYEES = "employees";
// 订单列表
var ORDERS = "orders";
// 选中的订单数据集合
var ORDER_LIST = "oreder_list";
// 管理员-员工列表
var EMPLOYEES_NEW = "employees_new";
// 管理员-全部订单
var TOTAL_NUM = "total_num";

// 服务器返回数据类型
var DATA_TYPE = "json";
// 接口请求时间
var TIME_OUT = 10000;
// 接口请求类型
var REQUEST_TYPE = "get";
/*
 * toast 提示语
 */
// 请求网络异常
var NET_ERROR = "网络异常,请稍候再试";
// 登录中...
var LOGIN_ING = "登录中...";
// 登录成功
var LOGIN_SUCCESS = "登录成功!";
// 登录失败
var LOGIN_FAILE = "登录失败!";
// 用户名不能为空
var USERNAME_EMPTY = "用户名不能为空!";
// 密码不能为空
var PASSWORD_EMPTY = "密码名不能为空!";
// 刷新中...
var REFRESH_ING= "刷新中...";
// 刷新成功
var REFRESH_SUCCESS= "刷新成功!";
// 刷新失败
var REFRESH_FAILE= "刷新失败!";


function goHome(){
	var views = plus.webview.all();
	mui.each(views, function(index, view) {
		if (view != plus.webview.getLaunchWebview()) {
			if (view.id != 'template/home/homelist.html' && view.id != 'template/order/index.html' && view.id != 'template/admin/index.html' && view.id != 'template/me/index.html') {
				view.close();
			}
		}
	});
}
//返回到首页
function toHomePage() {
	console.log("返回到首页......");
	var allPage = plus.webview.all();
	console.log("plus.webview 是空的？");
	for (var i = 0; i < allPage.length; i++) {
//		plus.webview.hide(allPage[i]);
		if (allPage[i] != plus.webview.getLaunchWebview()) {
			plus.webview.close(allPage[i]);
		}
		console.log("3--关闭页面：" + allPage[i].getURL());
	}
	//返回首页
	mui.openWindow({
		url: "/index.html",
		id: "index.html",
		waiting: {
			autoShow: true,
			title: "回首页..."
		}
	});
}
function addDate(date, days) {
	if (days == undefined || days == '') {
	    days = 1;
	}
	var date = new Date(date);
	date.setDate(date.getDate() + days);
	var month = date.getMonth() + 1;
	var day = date.getDate();
	return date.getFullYear() + '-' + getFormatDate(month) + '-' + getFormatDate(day);
}
// 日期月份/天的显示，如果是1位数，则在前面加上'0'
function getFormatDate(arg) {
    if (arg == undefined || arg == '') {
        return '';
    }

    var re = arg + '';
    if (re.length < 2) {
        re = '0' + re;
    }

    return re;
}