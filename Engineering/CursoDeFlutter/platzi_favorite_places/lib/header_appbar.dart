import 'package:flutter/material.dart';
import 'gradient_back.dart';
import 'card_image_list.dart';

class HeaderAppBar extends StatelessWidget {
  const HeaderAppBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: <Widget>[
        GradientBack("Bienvenido"),
        const CardImageList(),
      ],
    );
  }
}
