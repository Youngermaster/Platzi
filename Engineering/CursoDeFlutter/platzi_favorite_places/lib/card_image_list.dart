import 'package:flutter/material.dart';
import 'card_image.dart';

class CardImageList extends StatelessWidget {
  const CardImageList({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 350.0,
      child: ListView(
        padding: const EdgeInsets.all(25.0),
        scrollDirection: Axis.horizontal,
        children: <Widget>[
          CardImage("assets/images/beach_palm.jpeg"),
          CardImage("assets/images/mountain.jpeg"),
          CardImage("assets/images/mountain_stars.jpeg"),
          CardImage("assets/images/river.jpeg"),
          CardImage("assets/images/sunset.jpeg"),
        ],
      ),
    );
  }
}
