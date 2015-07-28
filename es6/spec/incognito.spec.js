import privateData from "../../";

class Cup {
	constructor() {
		privateData(this).content = "water";
	}

	getContent() {
		return privateData(this).content;
	}
}

describe("Incognito", () => {
	let cup;

	before(() => {
		cup = new Cup();
	});

	it("should provide a private context for a Cup example class that has private content", () => {
		cup.getContent().should.equal("water");
	});
});
