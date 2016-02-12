import { test } from 'qunit';
import moduleForAcceptance from 'embertiesto/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | task list');

test('visiting /task-list', function(assert) {
  visit('/task-list');

  andThen(function() {
    assert.equal(currentURL(), '/task-list');
  });
});

test('Count the number of tasks', function(assert) {
  visit('/');
  andThen(function() {
    var tasks = find('.task-list .task');
    assert.equal(tasks.length, 3);
  });
});
