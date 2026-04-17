{
	name: "vanatite",
	spritenum: -999,
	megaStone: "Vaniterror-Mega",
	megaEvolves: ["Vaniterror"],
	itemUser: ["Vaniterror"],
	onTakeItem(item, source) {
		const name = source.species.name;
		const base = source.baseSpecies.baseSpecies;
		if (name === base) return false;
		if (item.megaEvolves?.includes(name)) return false;
		if (item.megaStone === name) return false;
		return true;
	},
	num: -999,
	gen: 10,
	isNonstandard: "Past"
}