/**
 * 把今天最好的表现当作明天最新的起点．．～
 * いま 最高の表現 として 明日最新の始発．．～
 * Today the best performance  as tomorrow newest starter!
 * Created by IntelliJ IDEA.
 *
 * @author: xiaomo
 * @github: https://github.com/qq83387856
 * @email: hupengbest@163.com
 * @QQ_NO: 83387856
 * @Date: 2016/4/1510:16
 * @Description:
 * @Copyright(©) 2015 by xiaomo.
 **/
import angular from "angular";

function MyController($scope) {
    $scope.clock = {
        now: new Date()
    };
    var updateClock = function() {
        $scope.clock.now = new Date()
    };
    setInterval(function() {
        $scope.$apply(updateClock);
    }, 1000);
    updateClock();
}