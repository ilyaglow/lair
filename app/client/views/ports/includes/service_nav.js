// Copyright (c) 2013 Tom Steele, Dan Kottmann, FishNet Security
// See the file license.txt for copying permission

Template.serviceNav.activeRouteClass = function() {
  var args = Array.prototype.slice.call(arguments, 0);
  args.pop();
  var active = _.any(args, function(name) {
    return name === Meteor.Router._page;
  });
  return active && 'active';
};

Template.serviceNav.projectId = function() {
  return Session.get('projectId');
};

Template.serviceNav.portId = function() {
  return Session.get('portId');
};