var inherit = require( '..' )
var assert = require( 'assert' )

suite( 'native primitives', function() {

  test( 'error', function() {

    function NewError( message ) {
      Error.captureStackTrace( this, this.constructor )
      this.name = this.constructor.name
      this.message = message
    }

    inherit( NewError, Error )

    var err = new NewError( 'What' )

    assert.ok( err instanceof Error )
    assert.ok( err instanceof NewError )

  })

})
