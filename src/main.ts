import * as uuidv4 from 'uuid/v4';

class App {
  public static run(): number {
    const text = 'uuidv4: ' + uuidv4();

    alert('It Works');

    return 0;
  }
}

App.run();
