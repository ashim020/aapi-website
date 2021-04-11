function selectTemplate() {
  var x = document.getElementById("genders");
  var y = document.getElementById("races");
  if (x.value === "male") {
    if (y.value === "white") {
      document.getElementById("whitemale").style.visibility = "visible";
    } else {
      document.getElementById("whitemale").style.visibility = "hidden";
    }
    if (y.value === "black") {
      document.getElementById("blackmale").style.visibility = "visible";
    } else {
      document.getElementById("blackmale").style.visibility = "hidden";
    }
    if (y.value === "asian") {
      document.getElementById("asianmale").style.visibility = "visible";
    } else {
      document.getElementById("asianmale").style.visibility = "hidden";
    }
    if (y.value === "hispanic") {
      document.getElementById("hispanicmale").style.visibility = "visible";
    } else {
      document.getElementById("hispanicmale").style.visibility = "hidden";
    }
  }
  else {
    if (y.value === "white") {
      document.getElementById("whitefemale").style.visibility = "visible";
    } else {
      document.getElementById("whitefemale").style.visibility = "hidden";
    }
    if (y.value === "black") {
      document.getElementById("blackfemale").style.visibility = "visible";
    } else {
      document.getElementById("blackfemale").style.visibility = "hidden";
    }
    if (y.value === "asian") {
      document.getElementById("asianfemale").style.visibility = "visible";
    } else {
      document.getElementById("asianfemale").style.visibility = "hidden";
    }
    if (y.value === "hispanic") {
      document.getElementById("hispanicfemale").style.visibility = "visible";
    } else {
      document.getElementById("hispanicfemale").style.visibility = "hidden";
    }
  }
}

function selectHair() {
    var x = document.getElementById("hairlengths");
    var y = document.getElementById("hairtypes");
    var z = document.getElementById("haircolors");
    if (x.value === "shorthair" && y.value === "straight" && z.value === "black") {
        document.getElementById("shortstraightblackhair").style.visibility = "visible"
    }
    if (x.value === "shorthair" && y.value === "straight" && z.value === "brown") {
        document.getElementById("shortstraightbrownhair").style.visibility = "visible"
    }
    if (x.value === "shorthair" && y.value === "straight" && z.value === "blonde") {
        document.getElementById("shortstraightblondehair").style.visibility = "visible"
    }
    if (x.value === "mediumhair" && y.value === "straight" && z.value === "black") {
        document.getElementById("mediumstraightblackhair").style.visibility = "visible"
    }
    if (x.value === "mediumhair" && y.value === "straight" && z.value === "brown") {
        document.getElementById("mediumstraightbrownhair").style.visibility = "visible"
    }
    if (x.value === "mediumhair" && y.value === "straight" && z.value === "blonde") {
        document.getElementById("mediumstraightblondehair").style.visibility = "visible"
    }
    if (x.value === "longhair" && y.value === "straight" && z.value === "black") {
        document.getElementById("longstraightblackhair").style.visibility = "visible"
    }
    if (x.value === "longhair" && y.value === "straight" && z.value === "brown") {
        document.getElementById("longstraightbrownhair").style.visibility = "visible"
    }
    if (x.value === "longhair" && y.value === "straight" && z.value === "blonde") {
        document.getElementById("longstraightblondehair").style.visibility = "visible"
    }
    if (x.value === "shorthair" && y.value === "curly" && z.value === "black") {
        document.getElementById("shortcurlyblackhair").style.visibility = "visible"
    }
    if (x.value === "shorthair" && y.value === "curly" && z.value === "brown") {
        document.getElementById("shortcurlybrownhair").style.visibility = "visible"
    }
    if (x.value === "shorthair" && y.value === "curly" && z.value === "blonde") {
        document.getElementById("shortcurlyblondehair").style.visibility = "visible"
    }
    if (x.value === "mediumhair" && y.value === "curly" && z.value === "black") {
        document.getElementById("mediumcurlyblackhair").style.visibility = "visible"
    }
    if (x.value === "mediumhair" && y.value === "curly" && z.value === "brown") {
        document.getElementById("mediumcurlybrownhair").style.visibility = "visible"
    }
    if (x.value === "mediumhair" && y.value === "curly" && z.value === "blonde") {
        document.getElementById("mediumcurlyblondehair").style.visibility = "visible"
    }
    if (x.value === "longhair" && y.value === "curly" && z.value === "black") {
        document.getElementById("longcurlyblackhair").style.visibility = "visible"
    }
    if (x.value === "longhair" && y.value === "curly" && z.value === "brown") {
        document.getElementById("longcurlybrownhair").style.visibility = "visible"
    }
    if (x.value === "longhair" && y.value === "curly" && z.value === "blonde") {
        document.getElementById("longcurlyblondehair").style.visibility = "visible"
    }
//   if (x.value === "shorthair") {
//     if (y.value === "straight") {
//       if (z.value === "black") {
//         document.getElementById("shortstraightblackhair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("shortstraightblackhair").style.visibility = "hidden";
//       }
//       if (z.value === "brown") {
//         document.getElementById("shortstraightbrownhair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("shortstraightbrownhair").style.visibility = "hidden";
//       }
//       if (z.value === "blonde") {
//         document.getElementById("shortstraightblondehair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("shortstraightblondehair").style.visibility = "hidden";
//       }
//     }
//     else {
//       if (z.value === "black") {
//         document.getElementById("shortcurvyblackhair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("shortcurvyblackhair").style.visibility = "hidden";
//       }
//       if (z.value === "brown") {
//         document.getElementById("shortcurvybrownhair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("shortcurvybrownhair").style.visibility = "hidden";
//       }
//       if (z.value === "blonde") {
//         document.getElementById("shortcurvyblondehair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("shortcurvyblondehair").style.visibility = "hidden";
//       }
//     }
//   }
//   else if (x.value === "mediumhair") {
//     if (y.value === "straight") {
//       if (z.value === "black") {
//         document.getElementById("mediumstraightblackhair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("mediumstraightblackhair").style.visibility = "hidden";
//       }
//       if (z.value === "brown") {
//         document.getElementById("mediumstraightbrownhair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("mediumstraightbrownhair").style.visibility = "hidden";
//       }
//       if (z.value === "blonde") {
//         document.getElementById("mediumstraightblondehair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("mediumstraightblondehair").style.visibility = "hidden";
//       }
//     }
//     else {
//       if (z.value === "black") {
//         document.getElementById("mediumcurvyblackhair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("mediumcurvyblackhair").style.visibility = "hidden";
//       }
//       if (z.value === "brown") {
//         document.getElementById("mediumcurvybrownhair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("mediumcurvybrownhair").style.visibility = "hidden";
//       }
//       if (z.value === "blonde") {
//         document.getElementById("mediumcurvyblondehair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("mediumcurvyblondehair").style.visibility = "hidden";
//       }
//     }
//   }
//   else {
//     if (y.value === "straight") {
//       if (z.value === "black") {
//         document.getElementById("longstraightblackhair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("longstraightblackhair").style.visibility = "hidden";
//       }
//       if (z.value === "brown") {
//         document.getElementById("longstraightbrownhair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("longstraightbrownhair").style.visibility = "hidden";
//       }
//       if (z.value === "blonde") {
//         document.getElementById("longstraightblondehair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("longstraightblondehair").style.visibility = "hidden";
//       }
//     }
//     else {
//       if (z.value === "black") {
//         document.getElementById("longcurvyblackhair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("longcurvyblackhair").style.visibility = "hidden";
//       }
//       if (z.value === "brown") {
//         document.getElementById("longcurvybrownhair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("longcurvybrownhair").style.visibility = "hidden";
//       }
//       if (z.value === "blonde") {
//         document.getElementById("longcurvyblondehair").style.visibility = "visible";
//       }
//       else {
//         document.getElementById("longcurvyblondehair").style.visibility = "hidden";
//       }
//     }
//   }
}

function selectEyeColor() {
  var x = document.getElementById("eyecolors");
  if (x.value === "blackbrown") {
    document.getElementById("blackbrowneyes").style.visibility = "visible";
  } else {
    document.getElementById("blackbrowneyes").style.visibility = "hidden";
  }
  if (x.value === "blue") {
    document.getElementById("blueeyes").style.visibility = "visible";
  } else {
    document.getElementById("blueeyes").style.visibility = "hidden";
  }
  if (x.value === "green") {
    document.getElementById("greeneyes").style.visibility = "visible";
  } else {
    document.getElementById("greeneyes").style.visibility = "hidden";
  }
}

function selectEyebrow() {
  var x = document.getElementById("eyebrows");
  if (x.value === "curved") {
    document.getElementById("curvedeyebrows").style.visibility = "visible";
  } else {
    document.getElementById("curvedeyebrows").style.visibility = "hidden";
  }
  if (x.value === "straight") {
    document.getElementById("straighteyebrows").style.visibility = "visible";
  } else {
    document.getElementById("straighteyebrows").style.visibility = "hidden";
  }
  if (x.value === "angled") {
    document.getElementById("angledeyebrows").style.visibility = "visible";
  } else {
    document.getElementById("angledeyebrows").style.visibility = "hidden";
  }
}

function selectNose() {
  var x = document.getElementById("noses");
  if (x.value === "round") {
    document.getElementById("roundnose").style.visibility = "visible";
  } else {
    document.getElementById("roundnose").style.visibility = "hidden";
  }
  if (x.value === "pointy") {
    document.getElementById("pointynose").style.visibility = "visible";
  } else {
    document.getElementById("pointynose").style.visibility = "hidden";
  }
}

function selectMouth() {
  var x = document.getElementById("mouths");
  if (x.value === "full") {
    document.getElementById("fullmouth").style.visibility = "visible";
  } else {
    document.getElementById("fullmouth").style.visibility = "hidden";
  }
  if (x.value === "thin") {
    document.getElementById("thinmouth").style.visibility = "visible";
  } else {
    document.getElementById("thinmouth").style.visibility = "hidden";
  }
}

function selectGlasses() {
  var x = document.getElementById("glasses");
  if (x.value === "yesglasses") {
    document.getElementById("glassespic").style.visibility = "visible";
  } else {
    document.getElementById("glassespic").style.visibility = "hidden";
  }
}
