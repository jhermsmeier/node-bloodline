var inherit = require( '..' )
var assert = require( 'assert' )

suite( 'inherit()', function() {

  function SuperConstructor() {
    this.isTheSuper = true
    this.fromTheSuper = true
  }

  SuperConstructor.prototype.superMethod = function() {
    return this
  }

  function Constructor() {
    SuperConstructor.call( this )
    this.isTheSuper = false
  }

  Constructor.prototype.method = function() {
    return this
  }

  inherit( Constructor, SuperConstructor )

  var instance = new Constructor()

  test( 'instance instanceof Constructor', function() {
    assert.ok( instance instanceof Constructor )
  })

  test( 'instance instanceof SuperConstructor', function() {
    assert.ok( instance instanceof SuperConstructor )
  })

  test( 'correct method context', function() {
    assert.ok( instance.method() === instance )
    assert.ok( instance.superMethod() === instance )
  })

  test( 'correct own properties', function() {
    assert.ok( instance.isTheSuper === false )
    assert.ok( instance.fromTheSuper === true )
  })

  test( 'Object.getPrototypeOf( instance ) === Constructor.prototype', function() {
    assert.ok( Object.getPrototypeOf( instance ) === Constructor.prototype )
  })

  test( 'Object.getPrototypeOf( Constructor.prototype ) === SuperConstructor.prototype', function() {
    assert.ok( Object.getPrototypeOf( Constructor.prototype ) === SuperConstructor.prototype )
  })

})
