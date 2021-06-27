// Create new Clear All Action
class ClearAll extends Monogatari.Action {
  static setup () {
    monogatari.history ('clear');
    return Promise.resolve ();
  }

  static matchString ([ action ]) {
    return action === 'clearall';
  }

  apply () {
    monogatari.action ('Dialog').reset ({ keepNVL: true, saveNVL: true });
    monogatari.distractionFree();
    return Promise.resolve ();
  }

  didApply () {
    const textBox = $_('[data-component="text-box"]').get (0);
    monogatari.history ('clear').push (textBox.props.mode);
    return Promise.resolve ({ advance: true });
  }
}

ClearAll.id = 'ClearAll';
monogatari.registerAction (ClearAll);