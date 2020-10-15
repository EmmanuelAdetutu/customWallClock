

function getParameterDefinitions() {
    return [
      { name: 'clockDiameter', caption: 'Diameter of clock in cm:', type: 'int', default: 30 },
      { name: 'baseThicknes', caption: 'Base Thickness:', type: 'int', default: 5 }
      ];
  }

  function generateCube(x,y){
      const clockCube =cube({size:[20,20,15], center:[true,true,false]});
      const moveToLocation = translate([x,y],clockCube);
      return moveToLocation;
  }


  function main (params) {
     const finalClock =[];
    const clockDiameter = params.clockDiameter*10;
    const baseThicknes = params.baseThicknes;
    const clockRadius = clockDiameter/2;
    var baseClock = cylinder({r:clockRadius, h:baseThicknes});
    var clockHole = cylinder({r:6, h:baseThicknes});
    //subtract hole


     finalClock.push(translate([0,0],difference(baseClock,clockHole)));

     const n = 12;
     const r = clockRadius;
    for(i=0; i <= n; i ++){

        const angle = i * (360/n);
        const radians = angle * (Math.PI/180);
        const x =  r * Math.cos(radians);
        const y = r * Math.sin(radians);
        console.log(`i:${i}`);
        console.log(`radians:${radians}`);
        console.log(`angle:${angle}`);
        console.log(`x:${x}`);
        console.log(`y:${y}`);
        finalClock.push(generateCube(x,y));
    }

    return finalClock;
  }
