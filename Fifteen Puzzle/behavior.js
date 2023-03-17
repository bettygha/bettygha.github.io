var xValue = 300;
var yValue = 300;

$(document).ready(function () {
  loadData();
  $("#puzzlearea div").each(function () {
    $(this).click(function () {
      if (canMove(this)) {
        let tempx = parseInt($(this).attr("x"));
        let tempy = parseInt($(this).attr("y"));
        setPiece(this, xValue, yValue);
        xValue = tempx;
        yValue = tempy;
      }
    });

    $(this)
      .mouseover(function () {
        var b = canMove(this);
        if (b) {
          $(this).addClass("movablepiece");
        }
      })
      .mouseout(function () {
        $(this).removeClass("movablepiece");
      });
  });

  $("#shufflebutton").click(function () {
    for (let i = 0; i < 200; i++) {
      let xRandom = Math.floor(Math.random() * 4);
      let yRandom = Math.floor(Math.random() * 4);
      xRandom *= 100;
      yRandom *= 100;
      $("#puzzlearea div").each(function () {
        let tempx = parseInt($(this).attr("x"));
        let tempy = parseInt($(this).attr("y"));
        if (tempx === xRandom && tempy === yRandom) {
          setPiece(this, xValue, yValue);
          xValue = tempx;
          yValue = tempy;
        }
      });
    }
  });
});

function loadData() {
  $("#puzzlearea div").each(function (i) {
    var x = (i % 4) * 100;
    var y = Math.floor(i / 4) * 100;
    setPiece(this, x, y);
    $(this).css({
      backgroundPosition: -x + "px " + -y + "px",
    });
  });
}

function setPiece(obj, x, y) {
  $(obj).addClass("puzzlepiece");
  $(obj).css({
    left: x + "px",
    top: y + "px",
  });

  $(obj).attr("x", x);
  $(obj).attr("y", y);
}


function canMove(obj) {
  let tempx= parseInt($(obj).attr("x"));
  let tempy = parseInt($(obj).attr("y"));
  let left = moveLeft(tempx, tempy);
  let right = moveRight(tempx, tempy);
  let top = moveTop(tempx, tempy);
  let down = moveDown(tempx, tempy);
  return (
    (left !== null && isEmpty(left[0], left[1])) ||
    (right !== null && isEmpty(right[0], right[1])) ||
    (top !== null && isEmpty(top[0], top[1])) ||
    (down !== null && isEmpty(down[0], down[1]))
  );
}


function moveLeft(x, y) {
  let rs = x - 100;
  let rsArry = new Array();
  if (rs >= 0) {
    rsArry[0] = rs;
    rsArry[1] = y;
    return rsArry;
  } else {
    return null;
  }
}

function moveRight(x, y) {
  let rs = x + 100;
  let rsArry = new Array();
  if (rs <= 300) {
    rsArry[0] = rs;
    rsArry[1] = y;
    return rsArry;
  } else {
    return null;
  }
}

function moveTop(x, y) {
  let rs = y - 100;
  let rsArry = new Array();
  if (rs >= 0) {
    rsArry[0] = x;
    rsArry[1] = rs;
    return rsArry;
  } else {
    return null;
  }
}

function moveDown(x, y) {
  let rs = y + 100;
  let rsArry = new Array();
  if (rs <= 300) {
    rsArry[0] = x;
    rsArry[1] = rs;
    return rsArry;
  } else {
    return null;
  }
}


function isEmpty(x, y) {
    return x === xValue && y === yValue;
  }
  
  function getRandom(num) {
    for (let i = 0; i < 1000; i++) {
      let r = Math.floor(Math.random() * arrayObj.length);
    }
  }