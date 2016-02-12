export default function() {
  this.get('/minions', function() {
    return {
      minions: [{
        type: 'minion',
        id: 1,
        name: 'Mickturr Fanchez',
        race: 'Squashling',
        spell: 'scare',
        hometown: 'Gardenville',
        class: 'vagrant',
        image: 'https://ipfs.pics/ipfs/QmedFrFd4Yr7RLCboo8KqyN4LkrSsADTckm6XoGzxGrG9t'
      }, {
        type: 'minion',
        id: 2,
        name: 'Jozzland The Minus',
        race: 'GMO Rapeseed',
        spell: 'taunt',
        hometown: 'Gardenville',
        class: 'Buyer',
        image: 'https://ipfs.pics/ipfs/QmV9NkLXi9w7a7pXTqksAVfHNmBrJypDzrk6zCJWYbmxeP'
      }, {
        type: 'minion',
        id: 3,
        name: 'Niagra Sorinson',
        race: 'Tree based plant',
        spell: 'harden',
        hometown: 'Forestville',
        class: 'Platformer-San',
        image: 'https://ipfs.pics/ipfs/QmNNG4CcgZd8WX2J6iZry1Nao5LmtkmXAowJxNunRg3ypE'
      }]
    };
  });
  // These comments are here to help you get started. Feel free to delete them.

  /*
   * Config (with defaults).
   *
   *   Note: these only affect routes defined *after* them!
   */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
