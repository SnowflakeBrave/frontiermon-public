{
	name: "lilligite",
	spritenum: -999,
	megaStone: "Lilligant-Mega",
	megaEvolves: ["Lilligant"],
	itemUser: ["Lilligant"],
	onTakeItem(item, source) {
		const name = source.species.name;
		const base = source.baseSpecies.baseSpecies;
		if (name === base) return false;
		if (item.megaEvolves?.includes(name)) return false;
		if (item.megaStone === name) return false;
		return true;
	},
	num: -999,
	gen: 5,
	isNonstandard: "Past"
}