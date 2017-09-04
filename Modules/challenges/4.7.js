//Add two dependencies to our package.json file, connect and underscore.
//We'll want to use version 2.1.1 of connect and version 1.3.3 of underscore.
//Semantic Verioning Major.Minor.Patch
//We want to make sure we are always up-to-date with the most recent patch-level
 changes to our dependencies when we run npm install.
{
  "name": "My Awesome Node App",
  "version": "1",
  "dependencies": {
    "underscore":"~1.3.3",
    "connect":"~2.1.1"

  }
}
