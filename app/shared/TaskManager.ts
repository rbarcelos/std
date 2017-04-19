export class TaskManager {

public processTasks(data, task) {
    var results = [];
    return data.reduce(function(p, item) {
        return p.then(function() {
            return task(item).then(function(data) {
                results.push(data);
                return results;
            });
        });
    }, Promise.resolve());
}
}

