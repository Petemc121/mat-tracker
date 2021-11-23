"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const MatTrackerData_1 = require("./MatTrackerData");
require("@testing-library/jest-dom");
describe("MatTrackerData", () => {
    it("getMembers() with no argument should return a list of members", () => __awaiter(void 0, void 0, void 0, function* () {
        const member = "";
        expect(yield (0, MatTrackerData_1.getMembers)({ name: member })).toEqual([
            {
                member_id: 14,
                member_name: "james",
                member_image: null,
                member_phone: "fdsvd",
                member_belt: "white",
                member_joined_at: "2021-11-18",
                member_paid: null,
                member_frozen: null,
            },
            {
                member_id: 18,
                member_name: "bob",
                member_image: null,
                member_phone: "07734392094",
                member_belt: "purple",
                member_joined_at: "2021-11-18",
                member_paid: null,
                member_frozen: null,
            },
            {
                member_id: 19,
                member_name: "James",
                member_image: null,
                member_phone: "07734392094",
                member_belt: "brown",
                member_joined_at: "2021-11-18",
                member_paid: null,
                member_frozen: null,
            },
            {
                member_id: 21,
                member_name: "bob",
                member_image: null,
                member_phone: "1234567890",
                member_belt: "white",
                member_joined_at: "2021-11-19",
                member_paid: null,
                member_frozen: null,
            },
        ]);
    }));
    it.each([
        {
            name: "bob",
            expected: [
                {
                    member_id: 18,
                    member_name: "bob",
                    member_image: null,
                    member_phone: "07734392094",
                    member_belt: "purple",
                    member_joined_at: "2021-11-18",
                    member_paid: null,
                    member_frozen: null,
                },
                {
                    member_id: 21,
                    member_name: "bob",
                    member_image: null,
                    member_phone: "1234567890",
                    member_belt: "white",
                    member_joined_at: "2021-11-19",
                    member_paid: null,
                    member_frozen: null,
                },
            ],
        },
        {
            name: "b",
            expected: [
                {
                    member_id: 18,
                    member_name: "bob",
                    member_image: null,
                    member_phone: "07734392094",
                    member_belt: "purple",
                    member_joined_at: "2021-11-18",
                    member_paid: null,
                    member_frozen: null,
                },
                {
                    member_id: 21,
                    member_name: "bob",
                    member_image: null,
                    member_phone: "1234567890",
                    member_belt: "white",
                    member_joined_at: "2021-11-19",
                    member_paid: null,
                    member_frozen: null,
                },
            ],
        },
    ])("should return a list of members related to search field", ({ name, expected }) => __awaiter(void 0, void 0, void 0, function* () {
        expect(yield (0, MatTrackerData_1.getMembers)({ name })).toEqual(expected);
    }));
});
//# sourceMappingURL=MatTrackerData.test.js.map