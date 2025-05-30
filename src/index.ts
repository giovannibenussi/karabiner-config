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
  layer("/", "symbol-mode").manipulators([
    //     / + [ 1    2    3    4    5 ] =>
    withMapper(["⌘", "⌥", "⌃", "⇧", "⇪"])((k, i) =>
      map((i + 1) as NumberKeyValue).toPaste(k),
    ),
    withMapper(["←", "→", "↑", "↓", "␣", "⏎", "⇥", "⎋", "⌫", "⌦", "⇪"])((k) =>
      map(k).toPaste(k),
    ),
  ]),
  rule("asd -> left_cmd + tab").manipulators([
    mapSimultaneous(["a", "s", "d"]).to("tab", "left_command"),
  ]),
  rule("as -> left_ctrl + left_shift + tab").manipulators([
    mapSimultaneous(["a", "s"]).to("tab", ["left_control", "left_shift"]),
  ]),
  rule("sd -> left_ctrl + tab").manipulators([
    mapSimultaneous(["s", "d"]).to("tab", "left_control"),
  ]),
  layer("caps_lock", "Caps Lock Layer").manipulators([
    // Preserve behavior for these keys
    withMapper(["d", "u", "w", "e", "s", "y"])((k) =>
      map(k).to(k, "left_control"),
    ),
    map("j").to("slash", "left_shift"),
    map("m").to("slash"),
  ]),
]);
