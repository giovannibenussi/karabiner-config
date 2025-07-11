import {
  duoLayer,
  ifVar,
  layer,
  map,
  mapSimultaneous,
  NumberKeyValue,
  rule,
  withMapper,
  writeToProfile,
} from "karabiner.ts";

writeToProfile("Default profile", [
  // layer("/", "symbol-mode").manipulators([
  //   //     / + [ 1    2    3    4    5 ] =>
  //   withMapper(["⌘", "⌥", "⌃", "⇧", "⇪"])((k, i) =>
  //     map((i + 1) as NumberKeyValue).toPaste(k),
  //   ),
  //   withMapper(["←", "→", "↑", "↓", "␣", "⏎", "⇥", "⎋", "⌫", "⌦", "⇪"])((k) =>
  //     map(k).toPaste(k),
  //   ),
  // ]),
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
  // layer("caps_lock", "Caps Lock Layer").manipulators([
  //   // Preserve behavior for these keys
  //   withMapper([
  //     "d",
  //     "u",
  //     "w",
  //     "e",
  //     "s",
  //     "y",
  //     "r",
  //     "c",
  //     "p",
  //     "f",
  //     "t",
  //     "n",
  //     "o",
  //     "h",
  //     "j",
  //     "k",
  //     "l",
  //   ])((k) => map(k).to(k, "left_control")),
  //
  //   // ?
  //   map("u").to("slash", "left_shift"),
  //   // /
  //   map("i").to("slash"),
  //
  //   map(";").to("delete_or_backspace"),
  //   map("spacebar").to("return_or_enter"),
  //   map("m").to("quote"),
  //   map(",").to("quote", "left_shift"),
  // ]),
  // layer("tab", "Tab Layer").manipulators([
  //   // Vim-like navigation
  //   map("h").to("left_arrow"),
  //   map("j").to("down_arrow"),
  //   map("k").to("up_arrow"),
  //   map("l").to("right_arrow"),
  //   map("spacebar").to("return_or_enter"),
  // ]),
]);
