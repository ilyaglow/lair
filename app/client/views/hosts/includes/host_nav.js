// Copyright (c) 2013 Tom Steele, Dan Kottmann, FishNet Security
// See the file license.txt for copying permission

Template.hostNav.activeRouteClass = function() {
  var args = Array.prototype.slice.call(arguments, 0);
  args.pop();
  var active = _.any(args, function(name) {
    return name === Meteor.Router._page;
  });
  return active && 'active';
};

Template.hostNav.projectId = function() {
  return Session.get('projectId');
};

Template.hostNav.hostId = function() {
  return Session.get('hostId');
};