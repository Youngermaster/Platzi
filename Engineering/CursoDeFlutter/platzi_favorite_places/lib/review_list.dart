import 'package:flutter/material.dart';
import 'review.dart';

class ReviewList extends StatelessWidget {
  const ReviewList({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: <Widget>[
        Review("assets/images/people.jpg", "Varuna Yasas",
            "1 review · 5 photos", "There is an amazing place in Sri Lanka"),
        Review("assets/images/ann.jpg", "Anahí Salgado", "2 review · 5 photos",
            "There is an amazing place in Sri Lanka"),
        Review("assets/images/girl.jpg", "Gissele Thomas",
            "2 review · 2 photos", "There is an amazing place in Sri Lanka"),
      ],
    );
  }
}
