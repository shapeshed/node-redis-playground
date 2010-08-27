var sys = require("sys");
var client = require("redis-node-client/lib/redis-client").createClient();

// Set a value
client.set('foo', '42', function (err, success) {
	if (err) throw new Error(err);
	sys.puts(success);
});
// Get a value
client.get('foo', function (err, value) {
	if (err) throw new Error(err);
	sys.puts("The value of foo is" + value);
});

// Increment a value
client.incrby('bar', 42, function (err, newValue) {
	if (err) throw new Error(err);
	sys.puts("The new value of bar is" + newValue);
	client.close();
});

