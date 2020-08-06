"use strict";
exports.__esModule = true;
exports.MobileLibrary = void 0;
var MobileLibrary = /** @class */ (function () {
    function MobileLibrary(name, location, mobiles) {
        this.getName = function () {
            return this.name;
        };
        this.getLocation = function () {
            return this.location;
        };
        this.getMobiles = function () {
            return this.mobiles;
        };
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileLibrary.prototype.setName = function (name) {
        this.name = name;
    };
    MobileLibrary.prototype.setLocation = function (location) {
        this.location = location;
    };
    MobileLibrary.prototype.setMobiles = function (mobiles) {
        this.mobiles = mobiles;
    };
    MobileLibrary.prototype.totalPriceCalculation = function () {
        this.totalPrice = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            this.totalPrice += this.mobiles[i].getPrice();
        }
        return this.totalPrice;
    };
    MobileLibrary.prototype.printLibrary = function () {
        var a = "This is all my mobiles:\n";
        var b = "Price overall: " + this.totalPrice;
        var repository = "";
        for (var i = 0; i < this.mobiles.length; i++) {
            repository = repository + this.mobiles[i].printCharacteristics();
        }
        console.log(a + repository + b);
    };
    return MobileLibrary;
}());
exports.MobileLibrary = MobileLibrary;
