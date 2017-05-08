"use strict";
$(document).ready(() => {
    let digits = 2;
    $('#btn').on('click', async () => {
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
            await sleep(50);
            $(`#num0`).parent().removeClass('bounceIn');
            await sleep(50);
        }
    });
});
async function applyInterm(ele, intermArray) {
    for (let intern of intermArray) {
        ele.text(intern);
        await sleep(500);
    }
}
function getIntermNumbers(start, target) {
    let diff = target - start;
    let intermArray = new Array();
    for (let i = 0; i < Math.abs(diff); i++) {
        intermArray.push(start + (diff > 0 ? 1 : -1) * (i + 1));
    }
    return intermArray;
}
async function sleep(milliSec) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, milliSec);
    });
}
