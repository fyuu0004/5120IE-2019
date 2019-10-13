"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var table_service_1 = require("./table.service");
describe('TableService', function () {
    beforeEach(function () { return testing_1.TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = testing_1.TestBed.get(table_service_1.TableService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=table.service.spec.js.map