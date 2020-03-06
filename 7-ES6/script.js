class Element {
  constructor (name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, parkArea, treeNum) {
    super(name, buildYear);
    this.parkArea = parkArea;
    this.treeNum = treeNum;

  }

  treeDensity() {
    const density = this.treeNum / this.parkArea;
    console.log(`${this.name} has a tree density of ${density}.`);
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    classification.set(1, 'tiny');
    classification.set(2, 'small');
    classification.set(3, 'normal');
    classification.set(4, 'big');
    classification.set(5, 'huge');
    console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} size street.`);
  }
}

const allParks = [
  new Park('Green Park', 1987, 0.2, 215),
  new Park('National Park', 1894, 2.9, 3542),
  new Park('Oak Park', 1953, 0.4, 949)
];

const allStreets = [
  new Street('Broadway Street', 1832, 1.1, 4),
  new Street('24th Street', 1945, 0.9),
  new Street('54th Street', 1967, 0.75, 2),
  new Street('Fair Oak Ave', 1912, 1.2, 5)
];

function averageParkAge(parks) {
  let totalAge = 0;
  let aveAge = 0;
  for (const park of parks) {
    totalAge += (2020 - park.buildYear);
  }

  aveAge = Math.round(totalAge / allParks.length);
  console.log(`The average age of all parks is ${aveAge}`);
}

function filterPark(parks) {
  let parkName;
  for (const park of parks) {
    if (park.treeNum >= 1000) {
      parkName = park.name
    };
  }

  console.log(`${parkName} has more than 1000 trees.`);
}

function aveLength(streets) {
  let totalLen = 0, aveLen= 0;
  for (const street of streets) {
    totalLen += street.length;
  }
  aveLen = totalLen / streets.length;
  console.log(`The total length of all streets is ${totalLen}. The average length of all streets is ${aveLen}.`);
}

function report(parks, streets) {
  averageParkAge(parks);
  filterPark(parks);
  aveLength(streets);
}

report(allParks, allStreets);









