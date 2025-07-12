import {
  duoLayer,
  ifVar,
  layer,
  map,
  mapModTap,
  mapSimultaneous,
  NumberKeyValue,
  rule,
  withMapper,
  writeToProfile,
  simlayer,
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
  rule("maps_lock -> left_ctrl").manipulators([
    map("caps_lock").to("left_control"),
  ]),

  layer("v", "v Layer").manipulators([map("l", { optional: "⇧" }).to("quote")]),

  rule("Letter to Modifiers").manipulators([
    map("a").to("left_command").toIfAlone("a"),
    map("s").to("left_control").toIfAlone("s"),
    map("d").to("left_option").toIfAlone("d"),
    map("f").to("left_shift").toIfAlone("f"),

    map("j").to("left_shift").toIfAlone("j"),
    map("k").to("left_control").toIfAlone("k"),
    map("l").to("left_option").toIfAlone("l"),
    map("semicolon").toIfAlone("delete_or_backspace"),
    map({
      key_code: "semicolon",
      modifiers: { mandatory: ["left_control"] },
    }).to("semicolon"),
  ]),
]);
