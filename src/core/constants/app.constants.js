(function (module) {
  module.constant('CATEGORIES', function (input) {
    var obj = {
      1: "Art",
      2: "Architecture",
      3: "Bars",
      4: "Biking",
      5: "Celebrity",
      6: "Clubs",
      7: "Farmer's markets",
      8: "Food",
      9: "Gardens",
      10: "Hiking",
      11: "History",
      12: "Hotspots",
      13: "Landmarks",
      14: "Meetings",
      15: "Museums",
      16: "Music",
      17: "Nature",
      18: "Nightlife",
      19: "Parks",
      20: "Parties",
      21: "Shopping",
      22: "Shows",
      23: "Sports",
      24: "Theme parks",
      25: "Urban adventuring"
    }

    function locate(arg) {
      if (arg.length) {
        return iterate(arg)
      } else {
        return obj
      }
    }

    function iterate(arg) {
      var words = []
      var last = arg.length - 2
      arg.map(function (i, idx) {
        words.push(obj[i])
        words.push(idx > last ? ' ' : ', ')
      })
      var sentence = words.join('')
      return sentence
    }
    return locate(input)
  }).constant('CATEGORY',
          {
            1: "Art",
            2: "Architecture",
            3: "Bars",
            4: "Biking",
            5: "Celebrity",
            6: "Clubs",
            7: "Farmer's markets",
            8: "Food",
            9: "Gardens",
            10: "Hiking",
            11: "History",
            12: "Hotspots",
            13: "Landmarks",
            14: "Meetings",
            15: "Museums",
            16: "Music",
            17: "Nature",
            18: "Nightlife",
            19: "Parks",
            20: "Parties",
            21: "Shopping",
            22: "Shows",
            23: "Sports",
            24: "Theme parks",
            25: "Urban adventuring"
        }).constant('LANGUAGE',
          {"en": "English",
          "es": "Español",
          "zh": "中文",
          "jp": "日本語",
          "fr": "Français",
          "ko": "한국어"
        }
).constant('LANGUAGES', function(input) {
      var obj = {
        "en": "English",
        "es": "Español",
        "zh": "中文",
        "jp": "日本語",
        "fr": "Français",
        "ko": "한국어"
      }

      function locate(arg) {
        console.log("arg recd", arg);
        if (arg.length) {
          return iterate(arg)
        } else {
          return obj
        }
      }

      function iterate(arg) {
        var words = []
        var last = arg.length - 2
        arg.map(function(i, idx) {
          words.push(obj[i])
          words.push(idx > last ?
            ' ' :
            ', ')
        })
        var sentence = words.join('')
        return sentence
      }

      return locate(input)
    });
}(angular.module('Citygyd.Constants')));
