import {
	layer,
	map,
	mapSimultaneous,
	NumberKeyValue,
	rule,
	withMapper,
	writeToProfile,
	simlayer,
	toKey,
} from "karabiner.ts";

writeToProfile("Default profile", [
	rule("sdf -> left_cmd + tab").manipulators([
		mapSimultaneous(["s", "d", "f"]).to("tab", "left_command"),
	]),
	rule("sd -> left_ctrl + left_shift + tab").manipulators([
		mapSimultaneous(["s", "d"]).to("tab", ["left_control", "left_shift"]),
	]),
	rule("df -> left_ctrl + tab").manipulators([
		mapSimultaneous(["d", "f"]).to("tab", "left_control"),
	]),
	rule("jk -> enter").manipulators([
		mapSimultaneous(["j", "k"]).to("return_or_enter"),
	]),
	rule("jk held -> shift + alt").manipulators([
		mapSimultaneous(["j", "k"]).to("vk_none", ["right_shift", "right_option"]),
	]),
	rule("maps_lock -> left_ctrl").manipulators([
		map("caps_lock").to("left_control"),
	]),

	simlayer("v", "v Layer").manipulators([
		map("j").to("open_bracket", "left_shift"),
		map("k").to("close_bracket", "left_shift"),
		map("l").to("quote"),
		map("n").to("slash", "left_shift"),
		map("m").to("slash"),
	]),

	simlayer("n", "n Layer (Vim tabs)", 200).manipulators([
		map("d").to([toKey("g"), toKey("t", "left_shift")]),
		map("f").to([toKey("g"), toKey("t")]),
		map("c").to([toKey("b", "left_control"), toKey("p")]),
		map("v").to([toKey("b", "left_control"), toKey("n")]),
	]),

	// rule("Letter to Modifiers").manipulators([
	// 	map("a").to("left_command").toIfAlone("a"),
	// 	map("s").to("left_control").toIfAlone("s"),
	// 	map("d").to("left_option").toIfAlone("d"),
	// 	map("f").to("left_shift").toIfAlone("f"),
	// 	map("j").to("right_shift").toIfAlone("j"),
	// 	map("k").to("right_option").toIfAlone("k"),
	// 	map("l").to("right_control").toIfAlone("l"),
	// 	map("semicolon").to("right_command").toIfAlone("semicolon"),
	// ]),

	// rule("Letter to Modifiers").manipulators([
	//   map("j").to("left_shift").toIfAlone("j"),
	//   map("a").to("left_command").toIfAlone("a"),
	//   map("s").to("left_control").toIfAlone("s"),
	//   map("d").to("left_option").toIfAlone("d"),
	//   map("f").to("left_shift").toIfAlone("f"),
	//
	//   map("k").to("left_option").toIfAlone("k"),
	//   map("l").to("left_control").toIfAlone("l"),
	//   map("semicolon").toIfAlone("delete_or_backspace"),
	//   map({
	//     key_code: "semicolon",
	//     modifiers: { mandatory: ["left_control"] },
	//   }).to("semicolon"),
	// ]),
]);
