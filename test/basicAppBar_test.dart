import 'package:flutter/material.dart';

import 'package:flutter_test/flutter_test.dart';

import 'package:hydro_sdk/runComponent/runComponent.dart';

class Choice {
  const Choice({this.title, this.icon});
  final String title;
  final IconData icon;
}

const List<Choice> choices = <Choice>[
  Choice(title: 'Car', icon: Icons.directions_car),
  Choice(title: 'Bicycle', icon: Icons.directions_bike),
  Choice(title: 'Boat', icon: Icons.directions_boat),
  Choice(title: 'Bus', icon: Icons.directions_bus),
  Choice(title: 'Train', icon: Icons.directions_railway),
  Choice(title: 'Walk', icon: Icons.directions_walk),
];

int choiceCount = choices.length;
IconData iconAt(int index) => choices[index].icon;
String titleAt(int index) => choices[index].title;

Finder findAppBarIcon(IconData icon) {
  return find.descendant(of: find.byType(AppBar), matching: find.byIcon(icon));
}

void main() {
  LiveTestWidgetsFlutterBinding();
  testWidgets('basic app bar smoke test', (WidgetTester tester) async {
    await tester.pumpWidget(const RunComponentFromFile(
      component: "basic-appbar",
      path: "../assets/ota/basic-appbar.ota",
    ));
    await tester.pumpAndSettle();

    // Tap on the two action buttons and all of the overflow menu items.
    // Verify that a Card with the expected icon appears.

    await tester.tap(find.byKey(Key(iconAt(0).toString() + "button")));
    await tester.pumpAndSettle();
    expect(find.byKey(Key(iconAt(0).toString())), findsOneWidget);

    await tester.tap(find.byKey(Key(iconAt(1).toString() + "button")));
    await tester.pumpAndSettle();
    expect(find.byKey(Key(iconAt(1).toString())), findsOneWidget);

    for (int i = 2; i < choiceCount; i += 1) {
      await tester.tap(findAppBarIcon(Icons.more_vert));
      await tester.pumpAndSettle();
      await tester.tap(find.text(titleAt(i)));
      await tester.pumpAndSettle();
      expect(find.byKey(Key(iconAt(i).toString())), findsOneWidget);
    }
  });
}
