import { moduleFor, test } from 'ember-qunit';
import _ from 'npm:alphabet';

moduleFor('service:browserify-test', 'Unit | Service | browserify test', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(_.isObject(service));
});
