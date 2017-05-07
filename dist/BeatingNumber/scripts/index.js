"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
$(document).ready(() => {
    let digits = 2;
    $('#btn').on('click', () => __awaiter(this, void 0, void 0, function* () {
        let nextValue = $('#next-input').val();
        // let valueArr = nextValue.split('');
        // for (let i = digits - 1; i >= 0; i--) {
        //     let number = valueArr[i];
        //     let intermArray = getIntermNumbers(parseInt($(`#num${i}`).text()), parseInt(number));
        //     await applyInterm($(`#num${i}`), intermArray);
        // }
        let currentNum = parseInt($(`#num0`).text());
        let targetNum = parseInt(nextValue);
        let diff = targetNum - currentNum;
        while (currentNum != targetNum) {
            let next = currentNum + (diff >= 0 ? 1 : -1);
            $(`#num0`).text(next);
            currentNum = parseInt($(`#num0`).text());
            $(`#num0`).parent().addClass('bounceIn');
            yield sleep(50);
            $(`#num0`).parent().removeClass('bounceIn');
            yield sleep(50);
        }
    }));
});
function applyInterm(ele, intermArray) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let intern of intermArray) {
            ele.text(intern);
            yield sleep(500);
        }
    });
}
function getIntermNumbers(start, target) {
    let diff = target - start;
    let intermArray = new Array();
    for (let i = 0; i < Math.abs(diff); i++) {
        intermArray.push(start + (diff > 0 ? 1 : -1) * (i + 1));
    }
    return intermArray;
}
function sleep(milliSec) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, milliSec);
        });
    });
}
