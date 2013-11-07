var ApplicationAdapter = null;

if (Em.testing) {
  ApplicationAdapter = DS.FixtureAdapter.extend({});
}
else {
  ApplicationAdapter = DS.RESTAdapter.extend({host: "http://localhost:5901"});
}

export default ApplicationAdapter;
