import 'package:hydro_sdk/runComponent/runComponent.dart';
import 'package:flutter/material.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const RunComponent(
      project: "example-project", component: "basic-appbar"));
}
