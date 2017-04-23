"use strict";
var TaskManager = (function () {
    function TaskManager() {
    }
    TaskManager.prototype.processTasks = function (data, task) {
        var results = [];
        return data.reduce(function (p, item) {
            return p.then(function () {
                return task(item).then(function (data) {
                    results.push(data);
                    return results;
                });
            });
        }, Promise.resolve());
    };
    return TaskManager;
}());
exports.TaskManager = TaskManager;
//# sourceMappingURL=TaskManager.js.map