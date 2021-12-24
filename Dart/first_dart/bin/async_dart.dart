const oneSecond = Duration(seconds: 1);

Future<void> printWithDelay(String message) async {
  await Future.delayed(oneSecond);
  print(message);
}

Future<void> printWithDelay1(String message) {
  return Future.delayed(oneSecond).then((_) => print(message));
}

void main(List<String> args) {}
