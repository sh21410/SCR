// alert("Hello World!!");

// ▼アコーディオンメニュー
$(function () {
  $('.ac-child').css("display", "none");
  $('#ac-B').on('click', function () {
    $('.ac-child').slideToggle();
  });
});

// ▼レスポンシブ表示（ナビメニュー）
var windowWidth = $(window).width();
var windowSm = 768;
if (windowWidth <= windowSm) {
//横幅768px以下（スマホ）に適用させるJavaScriptを記述
  var Mlink = document.getElementById('map-link');
  var Glink = document.getElementById('guide-link');
  Mlink.textContent = 'コースマップ';
  Glink.textContent = 'トラブルガイド';
} else {
//横幅768px以上（PC、タブレット）に適用させるJavaScriptを記述
}

// ▼レスポンシブ表示（時刻計算ボタンの説明）
var WW = $(window).width();
var wSP = 768;
if (WW <= wSP) {
//横幅768px以下（スマホ）に適用させるJavaScriptを記述
  var selectT = document.getElementById('select-text');
  selectT.textContent = '（▼タップで時刻選択）';
} else {
//横幅768px以上（PC、タブレット）に適用させるJavaScriptを記述
}


// 時刻計算ツール

// ▼史跡コース時刻シミュレーション
// スタート地点の時刻反映
$(function() {
var t = document.getElementById('sisekiTime')
var r = document.getElementById('Rtime')
t.addEventListener('input', () => {
  let [h, m] = (t.value).split(':')
  r.textContent = `${h}:${m}`;

// 時刻加算（史跡2）
  var Ymin = Number(m) + 10;
  if (Ymin < 60) {
    document.getElementById("Rtime2").textContent = `${h}:${Ymin}`;
  }else{
    var Pmin = Number(Ymin) - 60;
    var Phour = Number(h) + 1;
  // 分・時間の文字列化
  if (Pmin < 10) {
    var Rmin = '0' + Pmin;
    if (Phour < 10) {
      var Rhour = '0' + Phour;
      document.getElementById("Rtime2").textContent = `${Rhour}:${Rmin}`;
    }else{
      document.getElementById("Rtime2").textContent = `${Phour}:${Rmin}`;
    }
  }else{
    if (Phour < 10) {
      var Qhour = '0' + Phour;
      document.getElementById("Rtime2").textContent = `${Qhour}:${Pmin}`;
    }else{
      document.getElementById("Rtime2").textContent = `${Phour}:${Pmin}`;
    };
  };
  };

// 時刻加算（史跡3）
  var Y2min = Number(m) + 20;
  if (Y2min < 60) {
    document.getElementById("Rtime3").textContent = `${h}:${Y2min}`;
  }else{
    var P2min = Number(Y2min) - 60;
    var P2hour = Number(h) + 1;
  // 分・時間の文字列化
  if (P2min < 10) {
    var R2min = '0' + P2min;
    if (P2hour < 10) {
      var R2hour = '0' + P2hour;
      document.getElementById("Rtime3").textContent = `${R2hour}:${R2min}`;
    }else{
      document.getElementById("Rtime3").textContent = `${P2hour}:${R2min}`;
    }
  }else{
    if (P2hour < 10) {
      var Q2hour = '0' + P2hour;
      document.getElementById("Rtime3").textContent = `${Q2hour}:${P2min}`;
    }else{
      document.getElementById("Rtime3").textContent = `${P2hour}:${P2min}`;
    };
  };
  };

  // 時刻加算（史跡4）
  var Y3min = Number(m) + 25;
  if (Y3min < 60) {
    document.getElementById("Rtime4").textContent = `${h}:${Y3min}`;
  }else{
    var P3min = Number(Y3min) - 60;
    var P3hour = Number(h) + 1;
  // 分・時間の文字列化
  if (P3min < 10) {
    var R3min = '0' + P3min;
    if (P3hour < 10) {
      var R3hour = '0' + P3hour;
      document.getElementById("Rtime4").textContent = `${R3hour}:${R3min}`;
    }else{
      document.getElementById("Rtime4").textContent = `${P3hour}:${R3min}`;
    }
  }else{
    if (P3hour < 10) {
      var Q3hour = '0' + P3hour;
      document.getElementById("Rtime4").textContent = `${Q3hour}:${P3min}`;
    }else{
      document.getElementById("Rtime4").textContent = `${P3hour}:${P3min}`;
    };
  };
  };

  // 時刻加算（史跡5）
  var Y4min = Number(m) + 30;
  if (Y4min < 60) {
    document.getElementById("Rtime5").textContent = `${h}:${Y4min}`;
  }else{
    var P4min = Number(Y4min) - 60;
    var P4hour = Number(h) + 1;
  // 分・時間の文字列化
  if (P4min < 10) {
    var R4min = '0' + P4min;
    if (P4hour < 10) {
      var R4hour = '0' + P4hour;
      document.getElementById("Rtime5").textContent = `${R4hour}:${R4min}`;
    }else{
      document.getElementById("Rtime5").textContent = `${P4hour}:${R4min}`;
    }
  }else{
    if (P4hour < 10) {
      var Q4hour = '0' + P4hour;
      document.getElementById("Rtime5").textContent = `${Q4hour}:${P4min}`;
    }else{
      document.getElementById("Rtime5").textContent = `${P4hour}:${P4min}`;
    };
  };
  };

  // 時刻加算（史跡6）
  var Y5min = Number(m) + 35;
  if (Y5min < 60) {
    document.getElementById("Rtime6").textContent = `${h}:${Y5min}`;
  }else{
    var P5min = Number(Y5min) - 60;
    var P5hour = Number(h) + 1;
  // 分・時間の文字列化
  if (P5min < 10) {
    var R5min = '0' + P5min;
    if (P5hour < 10) {
      var R5hour = '0' + P5hour;
      document.getElementById("Rtime6").textContent = `${R5hour}:${R5min}`;
    }else{
      document.getElementById("Rtime6").textContent = `${P5hour}:${R5min}`;
    }
  }else{
    if (P5hour < 10) {
      var Q5hour = '0' + P5hour;
      document.getElementById("Rtime6").textContent = `${Q5hour}:${P5min}`;
    }else{
      document.getElementById("Rtime6").textContent = `${P5hour}:${P5min}`;
    };
  };
  };

  // 時刻加算（史跡7）
  var Y6min = Number(m) + 40;
  if (Y6min < 60) {
    document.getElementById("Rtime7").textContent = `${h}:${Y6min}`;
  }else{
    var P6min = Number(Y6min) - 60;
    var P6hour = Number(h) + 1;
  // 分・時間の文字列化
  if (P6min < 10) {
    var R6min = '0' + P6min;
    if (P6hour < 10) {
      var R6hour = '0' + P6hour;
      document.getElementById("Rtime7").textContent = `${R6hour}:${R6min}`;
    }else{
      document.getElementById("Rtime7").textContent = `${P6hour}:${R6min}`;
    }
  }else{
    if (P6hour < 10) {
      var Q6hour = '0' + P6hour;
      document.getElementById("Rtime7").textContent = `${Q6hour}:${P6min}`;
    }else{
      document.getElementById("Rtime7").textContent = `${P6hour}:${P6min}`;
    };
  };
  };

  // 時刻加算（史跡8）
  var Y7min = Number(m) + 43;
  if (Y7min < 60) {
    document.getElementById("Rtime8").textContent = `${h}:${Y7min}`;
  }else{
    var P7min = Number(Y7min) - 60;
    var P7hour = Number(h) + 1;
  // 分・時間の文字列化
  if (P7min < 10) {
    var R7min = '0' + P7min;
    if (P7hour < 10) {
      var R7hour = '0' + P7hour;
      document.getElementById("Rtime8").textContent = `${R7hour}:${R7min}`;
    }else{
      document.getElementById("Rtime8").textContent = `${P7hour}:${R7min}`;
    }
  }else{
    if (P7hour < 10) {
      var Q7hour = '0' + P7hour;
      document.getElementById("Rtime8").textContent = `${Q7hour}:${P7min}`;
    }else{
      document.getElementById("Rtime8").textContent = `${P7hour}:${P7min}`;
    };
  };
  };

  // 時刻加算（史跡9）
  var Y8min = Number(m) + 53;
  if (Y8min < 60) {
    document.getElementById("Rtime9").textContent = `${h}:${Y8min}`;
  }else{
    var P8min = Number(Y8min) - 60;
    var P8hour = Number(h) + 1;
  // 分・時間の文字列化
  if (P8min < 10) {
    var R8min = '0' + P8min;
    if (P8hour < 10) {
      var R8hour = '0' + P8hour;
      document.getElementById("Rtime9").textContent = `${R8hour}:${R8min}`;
    }else{
      document.getElementById("Rtime9").textContent = `${P8hour}:${R8min}`;
    }
  }else{
    if (P8hour < 10) {
      var Q8hour = '0' + P8hour;
      document.getElementById("Rtime9").textContent = `${Q8hour}:${P8min}`;
    }else{
      document.getElementById("Rtime9").textContent = `${P8hour}:${P8min}`;
    };
  };
  };

  // 時刻加算（史跡10）
  var Y9min = Number(m) + 61;
  if (Y9min < 60) {
    document.getElementById("Rtime10").textContent = `${h}:${Y9min}`;
  }else{
    var P9min = Number(Y9min) - 60;
    var P9hour = Number(h) + 1;
    if (P9min < 60) {
      // 分・時間の文字列化
          if (P9min < 10) {
            var R9min = '0' + P9min;
            if (P9hour < 10) {
              var R9hour = '0' + P9hour;
              document.getElementById("Rtime10").textContent = `${R9hour}:${R9min}`;
            }else{
              document.getElementById("Rtime10").textContent = `${P9hour}:${R9min}`;
            }
          }else{
            if (P9hour < 10) {
              var Q9hour = '0' + P9hour;
              document.getElementById("Rtime10").textContent = `${Q9hour}:${P9min}`;
            }else{
              document.getElementById("Rtime10").textContent = `${P9hour}:${P9min}`;
            };
          };
        // 時間加算２回目
        }else{
          var S9min = Number(P9min) - 60;
          var S9hour = Number(h) + 2;
          if (S9min < 10) {
            var R9min = '0' + S9min;
            if (S9hour < 10) {
              var R9hour = '0' + S9hour;
              document.getElementById("Rtime10").textContent = `${R9hour}:${R9min}`;
            }else{
              document.getElementById("Rtime10").textContent = `${S9hour}:${R9min}`;
            }
          }else{
            if (S9hour < 10) {
              var Q9hour = '0' + S9hour;
              document.getElementById("Rtime10").textContent = `${Q9hour}:${S9min}`;
            }else{
              document.getElementById("Rtime10").textContent = `${S9hour}:${S9min}`;
            };
          };
    
        };
      };

  // 時刻加算（史跡11）
  var Y10min = Number(m) + 71;
  if (Y10min < 60) {
    document.getElementById("Rtime11").textContent = `${h}:${Y10min}`;
  }else{
    var P10min = Number(Y10min) - 60;
    var P10hour = Number(h) + 1;

    if (P10min < 60) {
  // 分・時間の文字列化
      if (P10min < 10) {
        var R10min = '0' + P10min;
        if (P10hour < 10) {
          var R10hour = '0' + P10hour;
          document.getElementById("Rtime11").textContent = `${R10hour}:${R10min}`;
        }else{
          document.getElementById("Rtime11").textContent = `${P10hour}:${R10min}`;
        }
      }else{
        if (P10hour < 10) {
          var Q10hour = '0' + P10hour;
          document.getElementById("Rtime11").textContent = `${Q10hour}:${P10min}`;
        }else{
          document.getElementById("Rtime11").textContent = `${P10hour}:${P10min}`;
        };
      };
        // 時間加算２回目
    }else{
      var S10min = Number(P10min) - 60;
      var S10hour = Number(h) + 2;
      if (S10min < 10) {
        var R10min = '0' + S10min;
        if (S10hour < 10) {
          var R10hour = '0' + S10hour;
          document.getElementById("Rtime11").textContent = `${R10hour}:${R10min}`;
        }else{
          document.getElementById("Rtime11").textContent = `${S10hour}:${R10min}`;
        }
      }else{
        if (S10hour < 10) {
          var Q10hour = '0' + S10hour;
          document.getElementById("Rtime11").textContent = `${Q10hour}:${S10min}`;
        }else{
          document.getElementById("Rtime11").textContent = `${S10hour}:${S10min}`;
        };
      };

    };
  };

  // 時刻加算（史跡12）
  var Y11min = Number(m) + 74;
  if (Y11min < 60) {
    document.getElementById("Rtime12").textContent = `${h}:${Y11min}`;
  }else{
    var P11min = Number(Y11min) - 60;
    var P11hour = Number(h) + 1;
    
    if (P11min < 60) {
      // 分・時間の文字列化
          if (P11min < 10) {
            var R11min = '0' + P11min;
            if (P11hour < 10) {
              var R11hour = '0' + P11hour;
              document.getElementById("Rtime12").textContent = `${R11hour}:${R11min}`;
            }else{
              document.getElementById("Rtime12").textContent = `${P11hour}:${R11min}`;
            }
          }else{
            if (P11hour < 10) {
              var Q11hour = '0' + P11hour;
              document.getElementById("Rtime12").textContent = `${Q11hour}:${P11min}`;
            }else{
              document.getElementById("Rtime12").textContent = `${P11hour}:${P11min}`;
            };
          };
        // 時間加算２回目
        }else{
          var S11min = Number(P11min) - 60;
          var S11hour = Number(h) + 2;
          if (S11min < 10) {
            var R11min = '0' + S11min;
            if (S11hour < 10) {
              var R11hour = '0' + S11hour;
              document.getElementById("Rtime12").textContent = `${R11hour}:${R11min}`;
            }else{
              document.getElementById("Rtime12").textContent = `${S11hour}:${R11min}`;
            }
          }else{
            if (S11hour < 10) {
              var Q11hour = '0' + S11hour;
              document.getElementById("Rtime12").textContent = `${Q11hour}:${S11min}`;
            }else{
              document.getElementById("Rtime12").textContent = `${S11hour}:${S11min}`;
            };
          };
        };
  };
  
});
});

// ▼文学コース時刻シミュレーション
// スタート地点の時刻反映
$(function() {
var a = document.getElementById('bungakuTime');
var b = document.getElementById('Btime');
a.addEventListener('input', () => {
  let [h2, m2] = (a.value).split(':')
  // if (s === undefined) s = '00'
  b.textContent = `${h2}:${m2}`;
  console.log(`${h2}:${m2}`)

// 時刻加算（文学2）
var Ymin = Number(m2) + 8;
if (Ymin < 60) {
  if (Ymin < 10) {
    var Omin = '0' + Ymin;
    document.getElementById("Btime2").textContent = `${h2}:${Omin}`;
  }else{
  document.getElementById("Btime2").textContent = `${h2}:${Ymin}`};
}else{
  var Pmin = Number(Ymin) - 60;
  var Phour = Number(h2) + 1;
// 分・時間の文字列化
if (Pmin < 10) {
  var Rmin = '0' + Pmin;
  if (Phour < 10) {
    var Rhour = '0' + Phour;
    document.getElementById("Btime2").textContent = `${Rhour}:${Rmin}`;
  }else{
    document.getElementById("Btime2").textContent = `${Phour}:${Rmin}`;
  }
}else{
  if (Phour < 10) {
    var Qhour = '0' + Phour;
    document.getElementById("Btime2").textContent = `${Qhour}:${Pmin}`;
  }else{
    document.getElementById("Btime2").textContent = `${Phour}:${Pmin}`;
  };
};
};

// 時刻加算（文学3）
var Y2min = Number(m2) + 18;
if (Y2min < 60) {
  document.getElementById("Btime3").textContent = `${h2}:${Y2min}`;
}else{
  var P2min = Number(Y2min) - 60;
  var P2hour = Number(h2) + 1;
// 分・時間の文字列化
if (P2min < 10) {
  var R2min = '0' + P2min;
  if (P2hour < 10) {
    var R2hour = '0' + P2hour;
    document.getElementById("Btime3").textContent = `${R2hour}:${R2min}`;
  }else{
    document.getElementById("Btime3").textContent = `${P2hour}:${R2min}`;
  }
}else{
  if (P2hour < 10) {
    var Q2hour = '0' + P2hour;
    document.getElementById("Btime3").textContent = `${Q2hour}:${P2min}`;
  }else{
    document.getElementById("Btime3").textContent = `${P2hour}:${P2min}`;
  };
};
};

// 時刻加算（文学4）
var Y3min = Number(m2) + 24;
if (Y3min < 60) {
  document.getElementById("Btime4").textContent = `${h2}:${Y3min}`;
}else{
  var P3min = Number(Y3min) - 60;
  var P3hour = Number(h2) + 1;
// 分・時間の文字列化
if (P3min < 10) {
  var R3min = '0' + P3min;
  if (P3hour < 10) {
    var R3hour = '0' + P3hour;
    document.getElementById("Btime4").textContent = `${R3hour}:${R3min}`;
  }else{
    document.getElementById("Btime4").textContent = `${P3hour}:${R3min}`;
  }
}else{
  if (P3hour < 10) {
    var Q3hour = '0' + P3hour;
    document.getElementById("Btime4").textContent = `${Q3hour}:${P3min}`;
  }else{
    document.getElementById("Btime4").textContent = `${P3hour}:${P3min}`;
  };
};
};

// 時刻加算（文学5）
var Y4min = Number(m2) + 27;
if (Y4min < 60) {
  document.getElementById("Btime5").textContent = `${h2}:${Y4min}`;
}else{
  var P4min = Number(Y4min) - 60;
  var P4hour = Number(h2) + 1;
// 分・時間の文字列化
if (P4min < 10) {
  var R4min = '0' + P4min;
  if (P4hour < 10) {
    var R4hour = '0' + P4hour;
    document.getElementById("Btime5").textContent = `${R4hour}:${R4min}`;
  }else{
    document.getElementById("Btime5").textContent = `${P4hour}:${R4min}`;
  }
}else{
  if (P4hour < 10) {
    var Q4hour = '0' + P4hour;
    document.getElementById("Btime5").textContent = `${Q4hour}:${P4min}`;
  }else{
    document.getElementById("Btime5").textContent = `${P4hour}:${P4min}`;
  };
};
};

// 時刻加算（文学6）
var Y5min = Number(m2) + 37;
if (Y5min < 60) {
  document.getElementById("Btime6").textContent = `${h2}:${Y5min}`;
}else{
  var P5min = Number(Y5min) - 60;
  var P5hour = Number(h2) + 1;
// 分・時間の文字列化
if (P5min < 10) {
  var R5min = '0' + P5min;
  if (P5hour < 10) {
    var R5hour = '0' + P5hour;
    document.getElementById("Btime6").textContent = `${R5hour}:${R5min}`;
  }else{
    document.getElementById("Btime6").textContent = `${P5hour}:${R5min}`;
  }
}else{
  if (P5hour < 10) {
    var Q5hour = '0' + P5hour;
    document.getElementById("Btime6").textContent = `${Q5hour}:${P5min}`;
  }else{
    document.getElementById("Btime6").textContent = `${P5hour}:${P5min}`;
  };
};
};

// 時刻加算（文学7）
var Y6min = Number(m2) + 47;
if (Y6min < 60) {
  document.getElementById("Btime7").textContent = `${h2}:${Y6min}`;
}else{
  var P6min = Number(Y6min) - 60;
  var P6hour = Number(h2) + 1;
// 分・時間の文字列化
if (P6min < 10) {
  var R6min = '0' + P6min;
  if (P6hour < 10) {
    var R6hour = '0' + P6hour;
    document.getElementById("Btime7").textContent = `${R6hour}:${R6min}`;
  }else{
    document.getElementById("Btime7").textContent = `${P6hour}:${R6min}`;
  }
}else{
  if (P6hour < 10) {
    var Q6hour = '0' + P6hour;
    document.getElementById("Btime7").textContent = `${Q6hour}:${P6min}`;
  }else{
    document.getElementById("Btime7").textContent = `${P6hour}:${P6min}`;
  };
};
};

// 時刻加算（文学8）
var Y7min = Number(m2) + 52;
if (Y7min < 60) {
  document.getElementById("Btime8").textContent = `${h2}:${Y7min}`;
}else{
  var P7min = Number(Y7min) - 60;
  var P7hour = Number(h2) + 1;
// 分・時間の文字列化
if (P7min < 10) {
  var R7min = '0' + P7min;
  if (P7hour < 10) {
    var R7hour = '0' + P7hour;
    document.getElementById("Btime8").textContent = `${R7hour}:${R7min}`;
  }else{
    document.getElementById("Btime8").textContent = `${P7hour}:${R7min}`;
  }
}else{
  if (P7hour < 10) {
    var Q7hour = '0' + P7hour;
    document.getElementById("Btime8").textContent = `${Q7hour}:${P7min}`;
  }else{
    document.getElementById("Btime8").textContent = `${P7hour}:${P7min}`;
  };
};
};

// 時刻加算（文学9）
var Y8min = Number(m2) + 57;
if (Y8min < 60) {
  document.getElementById("Btime9").textContent = `${h2}:${Y8min}`;
}else{
  var P8min = Number(Y8min) - 60;
  var P8hour = Number(h2) + 1;
// 分・時間の文字列化
if (P8min < 10) {
  var R8min = '0' + P8min;
  if (P8hour < 10) {
    var R8hour = '0' + P8hour;
    document.getElementById("Btime9").textContent = `${R8hour}:${R8min}`;
  }else{
    document.getElementById("Btime9").textContent = `${P8hour}:${R8min}`;
  }
}else{
  if (P8hour < 10) {
    var Q8hour = '0' + P8hour;
    document.getElementById("Btime9").textContent = `${Q8hour}:${P8min}`;
  }else{
    document.getElementById("Btime9").textContent = `${P8hour}:${P8min}`;
  };
};
};

// 時刻加算（文学10）
var Y9min = Number(m2) + 67;
if (Y9min < 60) {
  document.getElementById("Btime10").textContent = `${h2}:${Y9min}`;
}else{
  var P9min = Number(Y9min) - 60;
  var P9hour = Number(h2) + 1;
  if (P9min < 60) {
    // 分・時間の文字列化
        if (P9min < 10) {
          var R9min = '0' + P9min;
          if (P9hour < 10) {
            var R9hour = '0' + P9hour;
            document.getElementById("Btime10").textContent = `${R9hour}:${R9min}`;
          }else{
            document.getElementById("Btime10").textContent = `${P9hour}:${R9min}`;
          }
        }else{
          if (P9hour < 10) {
            var Q9hour = '0' + P9hour;
            document.getElementById("Btime10").textContent = `${Q9hour}:${P9min}`;
          }else{
            document.getElementById("Btime10").textContent = `${P9hour}:${P9min}`;
          };
        };
      // 時間加算２回目
      }else{
        var S9min = Number(P9min) - 60;
        var S9hour = Number(h2) + 2;
        if (S9min < 10) {
          var R9min = '0' + S9min;
          if (S9hour < 10) {
            var R9hour = '0' + S9hour;
            document.getElementById("Btime10").textContent = `${R9hour}:${R9min}`;
          }else{
            document.getElementById("Btime10").textContent = `${S9hour}:${R9min}`;
          }
        }else{
          if (S9hour < 10) {
            var Q9hour = '0' + S9hour;
            document.getElementById("Btime10").textContent = `${Q9hour}:${S9min}`;
          }else{
            document.getElementById("Btime10").textContent = `${S9hour}:${S9min}`;
          };
        };
  
      };
};

// 時刻加算（文学11）
var Y10min = Number(m2) + 77;
if (Y10min < 60) {
  document.getElementById("Btime11").textContent = `${h2}:${Y10min}`;
}else{
  var P10min = Number(Y10min) - 60;
  var P10hour = Number(h2) + 1;
  if (P10min < 60) {
    // 分・時間の文字列化
        if (P10min < 10) {
          var R10min = '0' + P10min;
          if (P10hour < 10) {
            var R10hour = '0' + P10hour;
            document.getElementById("Btime11").textContent = `${R10hour}:${R10min}`;
          }else{
            document.getElementById("Btime11").textContent = `${P10hour}:${R10min}`;
          }
        }else{
          if (P10hour < 10) {
            var Q10hour = '0' + P10hour;
            document.getElementById("Btime11").textContent = `${Q10hour}:${P10min}`;
          }else{
            document.getElementById("Btime11").textContent = `${P10hour}:${P10min}`;
          };
        };
      // 時間加算２回目
      }else{
        var S10min = Number(P10min) - 60;
        var S10hour = Number(h2) + 2;
        if (S10min < 10) {
          var R10min = '0' + S10min;
          if (S10hour < 10) {
            var R10hour = '0' + S10hour;
            document.getElementById("Btime11").textContent = `${R10hour}:${R10min}`;
          }else{
            document.getElementById("Btime11").textContent = `${S10hour}:${R10min}`;
          }
        }else{
          if (S10hour < 10) {
            var Q10hour = '0' + S10hour;
            document.getElementById("Btime11").textContent = `${Q10hour}:${S10min}`;
          }else{
            document.getElementById("Btime11").textContent = `${S10hour}:${S10min}`;
          };
        };  
      };
};

// 時刻加算（文学12）
var Y11min = Number(m2) + 82;
if (Y11min < 60) {
  document.getElementById("Btime12").textContent = `${h2}:${Y11min}`;
}else{
  var P11min = Number(Y11min) - 60;
  var P11hour = Number(h2) + 1;
  if (P11min < 60) {
    // 分・時間の文字列化
        if (P11min < 10) {
          var R11min = '0' + P11min;
          if (P11hour < 10) {
            var R11hour = '0' + P11hour;
            document.getElementById("Btime12").textContent = `${R11hour}:${R11min}`;
          }else{
            document.getElementById("Btime12").textContent = `${P11hour}:${R11min}`;
          }
        }else{
          if (P11hour < 10) {
            var Q11hour = '0' + P11hour;
            document.getElementById("Btime12").textContent = `${Q11hour}:${P11min}`;
          }else{
            document.getElementById("Btime12").textContent = `${P11hour}:${P11min}`;
          };
        };
      // 時間加算２回目
      }else{
        var S11min = Number(P11min) - 60;
        var S11hour = Number(h2) + 2;
        if (S11min < 10) {
          var R11min = '0' + S11min;
          if (S11hour < 10) {
            var R11hour = '0' + S11hour;
            document.getElementById("Btime12").textContent = `${R11hour}:${R11min}`;
          }else{
            document.getElementById("Btime12").textContent = `${S11hour}:${R11min}`;
          }
        }else{
          if (S11hour < 10) {
            var Q11hour = '0' + S11hour;
            document.getElementById("Btime12").textContent = `${Q11hour}:${S11min}`;
          }else{
            document.getElementById("Btime12").textContent = `${S11hour}:${S11min}`;
          };
        };
      };
};

// 時刻加算（文学13）
var Y12min = Number(m2) + 87;
if (Y12min < 60) {
  document.getElementById("Btime13").textContent = `${h2}:${Y12min}`;
}else{
  var P12min = Number(Y12min) - 60;
  var P12hour = Number(h2) + 1;
  if (P12min < 60) {
    // 分・時間の文字列化
        if (P12min < 10) {
          var R12min = '0' + P12min;
          if (P12hour < 10) {
            var R12hour = '0' + P12hour;
            document.getElementById("Btime13").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Btime13").textContent = `${P12hour}:${R12min}`;
          }
        }else{
          if (P12hour < 10) {
            var Q12hour = '0' + P12hour;
            document.getElementById("Btime13").textContent = `${Q12hour}:${P12min}`;
          }else{
            document.getElementById("Btime13").textContent = `${P12hour}:${P12min}`;
          };
        };
      // 時間加算２回目
      }else{
        var S12min = Number(P12min) - 60;
        var S12hour = Number(h2) + 2;
        if (S12min < 10) {
          var R12min = '0' + S12min;
          if (S12hour < 10) {
            var R12hour = '0' + S12hour;
            document.getElementById("Btime13").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Btime13").textContent = `${S12hour}:${R12min}`;
          }
        }else{
          if (S12hour < 10) {
            var Q12hour = '0' + S12hour;
            document.getElementById("Btime13").textContent = `${Q12hour}:${S12min}`;
          }else{
            document.getElementById("Btime13").textContent = `${S12hour}:${S12min}`;
          };
        };
  
      };
};

});
});

// ▼温泉コース時刻シミュレーション
// スタート地点の時刻反映
$(function() {
var a = document.getElementById('onsenTime');
var b = document.getElementById('Otime');
a.addEventListener('input', () => {
  let [h2, m2] = (a.value).split(':')
  // if (s === undefined) s = '00'
  b.textContent = `${h2}:${m2}`;
  console.log(`${h2}:${m2}`)

// 時刻加算（温泉2）
var Ymin = Number(m2) + 10;
if (Ymin < 60) {
  if (Ymin < 10) {
    var Omin = '0' + Ymin;
    document.getElementById("Otime2").textContent = `${h2}:${Omin}`;
  }else{
  document.getElementById("Otime2").textContent = `${h2}:${Ymin}`};
}else{
  var Pmin = Number(Ymin) - 60;
  var Phour = Number(h2) + 1;
// 分・時間の文字列化
if (Pmin < 10) {
  var Rmin = '0' + Pmin;
  if (Phour < 10) {
    var Rhour = '0' + Phour;
    document.getElementById("Otime2").textContent = `${Rhour}:${Rmin}`;
  }else{
    document.getElementById("Otime2").textContent = `${Phour}:${Rmin}`;
  }
}else{
  if (Phour < 10) {
    var Qhour = '0' + Phour;
    document.getElementById("Otime2").textContent = `${Qhour}:${Pmin}`;
  }else{
    document.getElementById("Otime2").textContent = `${Phour}:${Pmin}`;
  };
};
};

// 時刻加算（温泉3）
var Y2min = Number(m2) + 20;
if (Y2min < 60) {
  document.getElementById("Otime3").textContent = `${h2}:${Y2min}`;
}else{
  var P2min = Number(Y2min) - 60;
  var P2hour = Number(h2) + 1;
// 分・時間の文字列化
if (P2min < 10) {
  var R2min = '0' + P2min;
  if (P2hour < 10) {
    var R2hour = '0' + P2hour;
    document.getElementById("Otime3").textContent = `${R2hour}:${R2min}`;
  }else{
    document.getElementById("Otime3").textContent = `${P2hour}:${R2min}`;
  }
}else{
  if (P2hour < 10) {
    var Q2hour = '0' + P2hour;
    document.getElementById("Otime3").textContent = `${Q2hour}:${P2min}`;
  }else{
    document.getElementById("Otime3").textContent = `${P2hour}:${P2min}`;
  };
};
};

// 時刻加算（温泉4）
var Y3min = Number(m2) + 30;
if (Y3min < 60) {
  document.getElementById("Otime4").textContent = `${h2}:${Y3min}`;
}else{
  var P3min = Number(Y3min) - 60;
  var P3hour = Number(h2) + 1;
// 分・時間の文字列化
if (P3min < 10) {
  var R3min = '0' + P3min;
  if (P3hour < 10) {
    var R3hour = '0' + P3hour;
    document.getElementById("Otime4").textContent = `${R3hour}:${R3min}`;
  }else{
    document.getElementById("Otime4").textContent = `${P3hour}:${R3min}`;
  }
}else{
  if (P3hour < 10) {
    var Q3hour = '0' + P3hour;
    document.getElementById("Otime4").textContent = `${Q3hour}:${P3min}`;
  }else{
    document.getElementById("Otime4").textContent = `${P3hour}:${P3min}`;
  };
};
};

// 時刻加算（温泉5）
var Y4min = Number(m2) + 42;
if (Y4min < 60) {
  document.getElementById("Otime5").textContent = `${h2}:${Y4min}`;
}else{
  var P4min = Number(Y4min) - 60;
  var P4hour = Number(h2) + 1;
// 分・時間の文字列化
if (P4min < 10) {
  var R4min = '0' + P4min;
  if (P4hour < 10) {
    var R4hour = '0' + P4hour;
    document.getElementById("Otime5").textContent = `${R4hour}:${R4min}`;
  }else{
    document.getElementById("Otime5").textContent = `${P4hour}:${R4min}`;
  }
}else{
  if (P4hour < 10) {
    var Q4hour = '0' + P4hour;
    document.getElementById("Otime5").textContent = `${Q4hour}:${P4min}`;
  }else{
    document.getElementById("Otime5").textContent = `${P4hour}:${P4min}`;
  };
};
};

// 時刻加算（温泉6）
var Y5min = Number(m2) + 50;
if (Y5min < 60) {
  document.getElementById("Otime6").textContent = `${h2}:${Y5min}`;
}else{
  var P5min = Number(Y5min) - 60;
  var P5hour = Number(h2) + 1;
// 分・時間の文字列化
if (P5min < 10) {
  var R5min = '0' + P5min;
  if (P5hour < 10) {
    var R5hour = '0' + P5hour;
    document.getElementById("Otime6").textContent = `${R5hour}:${R5min}`;
  }else{
    document.getElementById("Otime6").textContent = `${P5hour}:${R5min}`;
  }
}else{
  if (P5hour < 10) {
    var Q5hour = '0' + P5hour;
    document.getElementById("Otime6").textContent = `${Q5hour}:${P5min}`;
  }else{
    document.getElementById("Otime6").textContent = `${P5hour}:${P5min}`;
  };
};
};

// 時刻加算（温泉7）
var Y6min = Number(m2) + 55;
if (Y6min < 60) {
  document.getElementById("Otime7").textContent = `${h2}:${Y6min}`;
}else{
  var P6min = Number(Y6min) - 60;
  var P6hour = Number(h2) + 1;
// 分・時間の文字列化
if (P6min < 10) {
  var R6min = '0' + P6min;
  if (P6hour < 10) {
    var R6hour = '0' + P6hour;
    document.getElementById("Otime7").textContent = `${R6hour}:${R6min}`;
  }else{
    document.getElementById("Otime7").textContent = `${P6hour}:${R6min}`;
  }
}else{
  if (P6hour < 10) {
    var Q6hour = '0' + P6hour;
    document.getElementById("Otime7").textContent = `${Q6hour}:${P6min}`;
  }else{
    document.getElementById("Otime7").textContent = `${P6hour}:${P6min}`;
  };
};
};

// 時刻加算（温泉8）
var Y7min = Number(m2) + 58;
if (Y7min < 60) {
  document.getElementById("Otime8").textContent = `${h2}:${Y7min}`;
}else{
  var P7min = Number(Y7min) - 60;
  var P7hour = Number(h2) + 1;
// 分・時間の文字列化
if (P7min < 10) {
  var R7min = '0' + P7min;
  if (P7hour < 10) {
    var R7hour = '0' + P7hour;
    document.getElementById("Otime8").textContent = `${R7hour}:${R7min}`;
  }else{
    document.getElementById("Otime8").textContent = `${P7hour}:${R7min}`;
  }
}else{
  if (P7hour < 10) {
    var Q7hour = '0' + P7hour;
    document.getElementById("Otime8").textContent = `${Q7hour}:${P7min}`;
  }else{
    document.getElementById("Otime8").textContent = `${P7hour}:${P7min}`;
  };
};
};

// 時刻加算（温泉9）
var Y8min = Number(m2) + 68;
if (Y8min < 60) {
  document.getElementById("Otime9").textContent = `${h2}:${Y8min}`;
}else{
  var P8min = Number(Y8min) - 60;
  var P8hour = Number(h2) + 1;
// 分・時間の文字列化
if (P8min < 10) {
  var R8min = '0' + P8min;
  if (P8hour < 10) {
    var R8hour = '0' + P8hour;
    document.getElementById("Otime9").textContent = `${R8hour}:${R8min}`;
  }else{
    document.getElementById("Otime9").textContent = `${P8hour}:${R8min}`;
  }
}else{
  if (P8hour < 10) {
    var Q8hour = '0' + P8hour;
    document.getElementById("Otime9").textContent = `${Q8hour}:${P8min}`;
  }else{
    document.getElementById("Otime9").textContent = `${P8hour}:${P8min}`;
  };
};
};

// 時刻加算（温泉10）
var Y9min = Number(m2) + 73;
if (Y9min < 60) {
  document.getElementById("Otime10").textContent = `${h2}:${Y9min}`;
}else{
  var P9min = Number(Y9min) - 60;
  var P9hour = Number(h2) + 1;
  if (P9min < 60) {
    // 分・時間の文字列化
        if (P9min < 10) {
          var R9min = '0' + P9min;
          if (P9hour < 10) {
            var R9hour = '0' + P9hour;
            document.getElementById("Otime10").textContent = `${R9hour}:${R9min}`;
          }else{
            document.getElementById("Otime10").textContent = `${P9hour}:${R9min}`;
          }
        }else{
          if (P9hour < 10) {
            var Q9hour = '0' + P9hour;
            document.getElementById("Otime10").textContent = `${Q9hour}:${P9min}`;
          }else{
            document.getElementById("Otime10").textContent = `${P9hour}:${P9min}`;
          };
        };
      // 時間加算２回目
      }else{
        var S9min = Number(P9min) - 60;
        var S9hour = Number(h2) + 2;
        if (S9min < 10) {
          var R9min = '0' + S9min;
          if (S9hour < 10) {
            var R9hour = '0' + S9hour;
            document.getElementById("Otime10").textContent = `${R9hour}:${R9min}`;
          }else{
            document.getElementById("Otime10").textContent = `${S9hour}:${R9min}`;
          }
        }else{
          if (S9hour < 10) {
            var Q9hour = '0' + S9hour;
            document.getElementById("Otime10").textContent = `${Q9hour}:${S9min}`;
          }else{
            document.getElementById("Otime10").textContent = `${S9hour}:${S9min}`;
          };
        };
  
      };
};

// 時刻加算（温泉11）
var Y10min = Number(m2) + 78;
if (Y10min < 60) {
  document.getElementById("Otime11").textContent = `${h2}:${Y10min}`;
}else{
  var P10min = Number(Y10min) - 60;
  var P10hour = Number(h2) + 1;
  if (P10min < 60) {
    // 分・時間の文字列化
        if (P10min < 10) {
          var R10min = '0' + P10min;
          if (P10hour < 10) {
            var R10hour = '0' + P10hour;
            document.getElementById("Otime11").textContent = `${R10hour}:${R10min}`;
          }else{
            document.getElementById("Otime11").textContent = `${P10hour}:${R10min}`;
          }
        }else{
          if (P10hour < 10) {
            var Q10hour = '0' + P10hour;
            document.getElementById("Otime11").textContent = `${Q10hour}:${P10min}`;
          }else{
            document.getElementById("Otime11").textContent = `${P10hour}:${P10min}`;
          };
        };
      // 時間加算２回目
      }else{
        var S10min = Number(P10min) - 60;
        var S10hour = Number(h2) + 2;
        if (S10min < 10) {
          var R10min = '0' + S10min;
          if (S10hour < 10) {
            var R10hour = '0' + S10hour;
            document.getElementById("Otime11").textContent = `${R10hour}:${R10min}`;
          }else{
            document.getElementById("Otime11").textContent = `${S10hour}:${R10min}`;
          }
        }else{
          if (S10hour < 10) {
            var Q10hour = '0' + S10hour;
            document.getElementById("Otime11").textContent = `${Q10hour}:${S10min}`;
          }else{
            document.getElementById("Otime11").textContent = `${S10hour}:${S10min}`;
          };
        };  
      };
};

// 時刻加算（温泉12）
var Y11min = Number(m2) + 83;
if (Y11min < 60) {
  document.getElementById("Otime12").textContent = `${h2}:${Y11min}`;
}else{
  var P11min = Number(Y11min) - 60;
  var P11hour = Number(h2) + 1;
  if (P11min < 60) {
    // 分・時間の文字列化
        if (P11min < 10) {
          var R11min = '0' + P11min;
          if (P11hour < 10) {
            var R11hour = '0' + P11hour;
            document.getElementById("Otime12").textContent = `${R11hour}:${R11min}`;
          }else{
            document.getElementById("Otime12").textContent = `${P11hour}:${R11min}`;
          }
        }else{
          if (P11hour < 10) {
            var Q11hour = '0' + P11hour;
            document.getElementById("Otime12").textContent = `${Q11hour}:${P11min}`;
          }else{
            document.getElementById("Otime12").textContent = `${P11hour}:${P11min}`;
          };
        };
      // 時間加算２回目
      }else{
        var S11min = Number(P11min) - 60;
        var S11hour = Number(h2) + 2;
        if (S11min < 10) {
          var R11min = '0' + S11min;
          if (S11hour < 10) {
            var R11hour = '0' + S11hour;
            document.getElementById("Otime12").textContent = `${R11hour}:${R11min}`;
          }else{
            document.getElementById("Otime12").textContent = `${S11hour}:${R11min}`;
          }
        }else{
          if (S11hour < 10) {
            var Q11hour = '0' + S11hour;
            document.getElementById("Otime12").textContent = `${Q11hour}:${S11min}`;
          }else{
            document.getElementById("Otime12").textContent = `${S11hour}:${S11min}`;
          };
        };
      };
};

// 時刻加算（温泉13）
var Y12min = Number(m2) + 88;
if (Y12min < 60) {
  document.getElementById("Otime13").textContent = `${h2}:${Y12min}`;
}else{
  var P12min = Number(Y12min) - 60;
  var P12hour = Number(h2) + 1;
  if (P12min < 60) {
    // 分・時間の文字列化
        if (P12min < 10) {
          var R12min = '0' + P12min;
          if (P12hour < 10) {
            var R12hour = '0' + P12hour;
            document.getElementById("Otime13").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Otime13").textContent = `${P12hour}:${R12min}`;
          }
        }else{
          if (P12hour < 10) {
            var Q12hour = '0' + P12hour;
            document.getElementById("Otime13").textContent = `${Q12hour}:${P12min}`;
          }else{
            document.getElementById("Otime13").textContent = `${P12hour}:${P12min}`;
          };
        };
      // 時間加算２回目
      }else{
        var S12min = Number(P12min) - 60;
        var S12hour = Number(h2) + 2;
        if (S12min < 10) {
          var R12min = '0' + S12min;
          if (S12hour < 10) {
            var R12hour = '0' + S12hour;
            document.getElementById("Otime13").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Otime13").textContent = `${S12hour}:${R12min}`;
          }
        }else{
          if (S12hour < 10) {
            var Q12hour = '0' + S12hour;
            document.getElementById("Otime13").textContent = `${Q12hour}:${S12min}`;
          }else{
            document.getElementById("Otime13").textContent = `${S12hour}:${S12min}`;
          };
        };
  
      };
};


// 時刻加算（温泉14）
var Y12min = Number(m2) + 93;
if (Y12min < 60) {
  document.getElementById("Otime14").textContent = `${h2}:${Y12min}`;
}else{
  var P12min = Number(Y12min) - 60;
  var P12hour = Number(h2) + 1;
  if (P12min < 60) {
    // 分・時間の文字列化
        if (P12min < 10) {
          var R12min = '0' + P12min;
          if (P12hour < 10) {
            var R12hour = '0' + P12hour;
            document.getElementById("Otime14").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Otime14").textContent = `${P12hour}:${R12min}`;
          }
        }else{
          if (P12hour < 10) {
            var Q12hour = '0' + P12hour;
            document.getElementById("Otime14").textContent = `${Q12hour}:${P12min}`;
          }else{
            document.getElementById("Otime14").textContent = `${P12hour}:${P12min}`;
          };
        };
      // 時間加算２回目
      }else{
        var S12min = Number(P12min) - 60;
        var S12hour = Number(h2) + 2;
        if (S12min < 10) {
          var R12min = '0' + S12min;
          if (S12hour < 10) {
            var R12hour = '0' + S12hour;
            document.getElementById("Otime14").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Otime14").textContent = `${S12hour}:${R12min}`;
          }
        }else{
          if (S12hour < 10) {
            var Q12hour = '0' + S12hour;
            document.getElementById("Otime14").textContent = `${Q12hour}:${S12min}`;
          }else{
            document.getElementById("Otime14").textContent = `${S12hour}:${S12min}`;
          };
        };
  
      };
};

// 時刻加算（温泉15）
var Y12min = Number(m2) + 98;
if (Y12min < 60) {
  document.getElementById("Otime15").textContent = `${h2}:${Y12min}`;
}else{
  var P12min = Number(Y12min) - 60;
  var P12hour = Number(h2) + 1;
  if (P12min < 60) {
    // 分・時間の文字列化
        if (P12min < 10) {
          var R12min = '0' + P12min;
          if (P12hour < 10) {
            var R12hour = '0' + P12hour;
            document.getElementById("Otime15").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Otime15").textContent = `${P12hour}:${R12min}`;
          }
        }else{
          if (P12hour < 10) {
            var Q12hour = '0' + P12hour;
            document.getElementById("Otime15").textContent = `${Q12hour}:${P12min}`;
          }else{
            document.getElementById("Otime15").textContent = `${P12hour}:${P12min}`;
          };
        };
      // 時間加算２回目
      }else{
        var S12min = Number(P12min) - 60;
        var S12hour = Number(h2) + 2;
        if (S12min < 10) {
          var R12min = '0' + S12min;
          if (S12hour < 10) {
            var R12hour = '0' + S12hour;
            document.getElementById("Otime15").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Otime15").textContent = `${S12hour}:${R12min}`;
          }
        }else{
          if (S12hour < 10) {
            var Q12hour = '0' + S12hour;
            document.getElementById("Otime15").textContent = `${Q12hour}:${S12min}`;
          }else{
            document.getElementById("Otime15").textContent = `${S12hour}:${S12min}`;
          };
        };
  
      };
};

// 時刻加算（温泉16）
var Y12min = Number(m2) + 103;
if (Y12min < 60) {
  document.getElementById("Otime16").textContent = `${h2}:${Y12min}`;
}else{
  var P12min = Number(Y12min) - 60;
  var P12hour = Number(h2) + 1;
  if (P12min < 60) {
    // 分・時間の文字列化
        if (P12min < 10) {
          var R12min = '0' + P12min;
          if (P12hour < 10) {
            var R12hour = '0' + P12hour;
            document.getElementById("Otime16").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Otime16").textContent = `${P12hour}:${R12min}`;
          }
        }else{
          if (P12hour < 10) {
            var Q12hour = '0' + P12hour;
            document.getElementById("Otime16").textContent = `${Q12hour}:${P12min}`;
          }else{
            document.getElementById("Otime16").textContent = `${P12hour}:${P12min}`;
          };
        };
      // 時間加算２回目
      }else{
        var S12min = Number(P12min) - 60;
        var S12hour = Number(h2) + 2;
        if (S12min < 10) {
          var R12min = '0' + S12min;
          if (S12hour < 10) {
            var R12hour = '0' + S12hour;
            document.getElementById("Otime16").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Otime16").textContent = `${S12hour}:${R12min}`;
          }
        }else{
          if (S12hour < 10) {
            var Q12hour = '0' + S12hour;
            document.getElementById("Otime16").textContent = `${Q12hour}:${S12min}`;
          }else{
            document.getElementById("Otime16").textContent = `${S12hour}:${S12min}`;
          };
        };
  
      };
};

// 時刻加算（温泉17）
var Y12min = Number(m2) + 113;
if (Y12min < 60) {
  document.getElementById("Otime17").textContent = `${h2}:${Y12min}`;
}else{
  var P12min = Number(Y12min) - 60;
  var P12hour = Number(h2) + 1;
  if (P12min < 60) {
    // 分・時間の文字列化
        if (P12min < 10) {
          var R12min = '0' + P12min;
          if (P12hour < 10) {
            var R12hour = '0' + P12hour;
            document.getElementById("Otime17").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Otime17").textContent = `${P12hour}:${R12min}`;
          }
        }else{
          if (P12hour < 10) {
            var Q12hour = '0' + P12hour;
            document.getElementById("Otime17").textContent = `${Q12hour}:${P12min}`;
          }else{
            document.getElementById("Otime17").textContent = `${P12hour}:${P12min}`;
          };
        };
      // 時間加算２回目
      }else{
        var S12min = Number(P12min) - 60;
        var S12hour = Number(h2) + 2;
        if (S12min < 10) {
          var R12min = '0' + S12min;
          if (S12hour < 10) {
            var R12hour = '0' + S12hour;
            document.getElementById("Otime17").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Otime17").textContent = `${S12hour}:${R12min}`;
          }
        }else{
          if (S12hour < 10) {
            var Q12hour = '0' + S12hour;
            document.getElementById("Otime17").textContent = `${Q12hour}:${S12min}`;
          }else{
            document.getElementById("Otime17").textContent = `${S12hour}:${S12min}`;
          };
        };
  
      };
};

// 時刻加算（温泉18）
var Y12min = Number(m2) + 118;
if (Y12min < 60) {
  document.getElementById("Otime18").textContent = `${h2}:${Y12min}`;
}else{
  var P12min = Number(Y12min) - 60;
  var P12hour = Number(h2) + 1;
  if (P12min < 60) {
    // 分・時間の文字列化
        if (P12min < 10) {
          var R12min = '0' + P12min;
          if (P12hour < 10) {
            var R12hour = '0' + P12hour;
            document.getElementById("Otime18").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Otime18").textContent = `${P12hour}:${R12min}`;
          }
        }else{
          if (P12hour < 10) {
            var Q12hour = '0' + P12hour;
            document.getElementById("Otime18").textContent = `${Q12hour}:${P12min}`;
          }else{
            document.getElementById("Otime18").textContent = `${P12hour}:${P12min}`;
          };
        };
      // 時間加算２回目
      }else{
        var S12min = Number(P12min) - 60;
        var S12hour = Number(h2) + 2;
        if (S12min < 10) {
          var R12min = '0' + S12min;
          if (S12hour < 10) {
            var R12hour = '0' + S12hour;
            document.getElementById("Otime18").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Otime18").textContent = `${S12hour}:${R12min}`;
          }
        }else{
          if (S12hour < 10) {
            var Q12hour = '0' + S12hour;
            document.getElementById("Otime18").textContent = `${Q12hour}:${S12min}`;
          }else{
            document.getElementById("Otime18").textContent = `${S12hour}:${S12min}`;
          };
        };
  
      };
};

// 時刻加算（温泉19）
var Y12min = Number(m2) + 128;
if (Y12min < 60) {
  document.getElementById("Otime19").textContent = `${h2}:${Y12min}`;
}else{
  var P12min = Number(Y12min) - 60;
  var P12hour = Number(h2) + 1;
  if (P12min < 60) {
    // 分・時間の文字列化
        if (P12min < 10) {
          var R12min = '0' + P12min;
          if (P12hour < 10) {
            var R12hour = '0' + P12hour;
            document.getElementById("Otime19").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Otime19").textContent = `${P12hour}:${R12min}`;
          }
        }else{
          if (P12hour < 10) {
            var Q12hour = '0' + P12hour;
            document.getElementById("Otime19").textContent = `${Q12hour}:${P12min}`;
          }else{
            document.getElementById("Otime19").textContent = `${P12hour}:${P12min}`;
          };
        };
      // 時間加算２回目
      }else{
        var S12min = Number(P12min) - 60;
        var S12hour = Number(h2) + 2;
        if (S12min < 10) {
          var R12min = '0' + S12min;
          if (S12hour < 10) {
            var R12hour = '0' + S12hour;
            document.getElementById("Otime19").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Otime19").textContent = `${S12hour}:${R12min}`;
          }
        }else{
          if (S12hour < 10) {
            var Q12hour = '0' + S12hour;
            document.getElementById("Otime19").textContent = `${Q12hour}:${S12min}`;
          }else{
            document.getElementById("Otime19").textContent = `${S12hour}:${S12min}`;
          };
        };
  
      };
};

// 時刻加算（温泉20）
var Y12min = Number(m2) + 131;
if (Y12min < 60) {
  document.getElementById("Otime20").textContent = `${h2}:${Y12min}`;
}else{
  var P12min = Number(Y12min) - 60;
  var P12hour = Number(h2) + 1;
  if (P12min < 60) {
    // 分・時間の文字列化
        if (P12min < 10) {
          var R12min = '0' + P12min;
          if (P12hour < 10) {
            var R12hour = '0' + P12hour;
            document.getElementById("Otime20").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Otime20").textContent = `${P12hour}:${R12min}`;
          }
        }else{
          if (P12hour < 10) {
            var Q12hour = '0' + P12hour;
            document.getElementById("Otime20").textContent = `${Q12hour}:${P12min}`;
          }else{
            document.getElementById("Otime20").textContent = `${P12hour}:${P12min}`;
          };
        };
      // 時間加算２回目
      }else{
        var S12min = Number(P12min) - 60;
        var S12hour = Number(h2) + 2;
        if (S12min < 10) {
          var R12min = '0' + S12min;
          if (S12hour < 10) {
            var R12hour = '0' + S12hour;
            document.getElementById("Otime20").textContent = `${R12hour}:${R12min}`;
          }else{
            document.getElementById("Otime20").textContent = `${S12hour}:${R12min}`;
          }
        }else{
          if (S12hour < 10) {
            var Q12hour = '0' + S12hour;
            document.getElementById("Otime20").textContent = `${Q12hour}:${S12min}`;
          }else{
            document.getElementById("Otime20").textContent = `${S12hour}:${S12min}`;
          };
        };
  
      };
};

});
});