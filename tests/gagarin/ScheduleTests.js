describe('clinical:hl7-resources-schedules', function () {
  var server = meteor();
  var client = browser(server);

  it('Schedules should exist on the client', function () {
    return client.execute(function () {
      expect(Schedules).to.exist;
    });
  });

  it('Schedules should exist on the server', function () {
    return server.execute(function () {
      expect(Schedules).to.exist;
    });
  });
});
