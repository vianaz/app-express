import { expect, test } from "vitest"

test("just test", () => {
	test("should be 4", () => {
		const sum = 2 + 2
		expect(sum).toBe(4)
	})
})
