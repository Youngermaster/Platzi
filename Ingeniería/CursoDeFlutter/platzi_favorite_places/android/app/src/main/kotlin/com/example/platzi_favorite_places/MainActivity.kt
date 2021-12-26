package com.example.platzi_favorite_places

import io.flutter.embedding.android.FlutterActivity

import android.annotation.TargetApi
import android.os.Build
import android.os.Bundle


class MainActivity: FlutterActivity() {
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    this.getWindow().setStatusBarColor(android.graphics.Color.TRANSPARENT);
  }
}
