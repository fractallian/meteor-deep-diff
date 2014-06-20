if (Meteor.isClient) {
  DeepDiff = window.DeepDiff;
}
if (Meteor.isServer) {
  DeepDiff = global.DeepDiff;
}