"use strict";
exports.__esModule = true;
exports.MobileP = void 0;
var MobileP = /** @class */ (function () {
    function MobileP(name, model, trademark, sdSize, color, is5G, cameraNumber, price) {
        this.getName = function () {
            return this.name;
        };
        this.getModel = function () {
            return this.model;
        };
        this.getTrademark = function () {
            return this.trademark;
        };
        this.getSdSize = function () {
            return this.sdSize;
        };
        this.getColor = function () {
            return this.trademark;
        };
        this.getIs5G = function () {
            return this.is5G;
        };
        this.getCameraNumber = function () {
            return this.cameraNumber;
        };
        this.getPrice = function () {
            return this.price;
        };
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this.is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }
    MobileP.prototype.setName = function (name) {
        this.name = name;
    };
    MobileP.prototype.setModel = function (model) {
        this.model = model;
    };
    MobileP.prototype.setTrademark = function (trademark) {
        this.trademark = trademark;
    };
    MobileP.prototype.setIs5G = function (is5G) {
        this.is5G = is5G;
    };
    MobileP.prototype.setCameraNumber = function (cameraNumber) {
        this.cameraNumber = cameraNumber;
    };
    MobileP.prototype.setPrice = function (price) {
        this.price = price;
    };
    MobileP.prototype.printCharacteristics = function () {
        var texto = "The characteristics of the mobile " + this.name + " are:\n" + "Name: " + this.name + "\n" + "Model: " + this.model + "\n" + "Trademark: " + this.trademark + "\n" + "SD Size(GB): " + this.sdSize + "\n" + "Color: " + this.color + "\n" + "Is 5G?: " + this.is5G + "\n" + "Number of Cameras: " + this.cameraNumber + "\n" + "Price: " + this.price + "\n";
        return texto;
    };
    return MobileP;
}());
exports.MobileP = MobileP;
