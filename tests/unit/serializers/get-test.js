import { moduleForModel, test } from 'ember-qunit';

moduleForModel('get', 'Unit | Serializer | get', {
  // Specify the other units that are required for this test.
  needs: ['serializer:get']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
