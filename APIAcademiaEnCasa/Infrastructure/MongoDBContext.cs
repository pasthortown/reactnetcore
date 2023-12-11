using APIAcademiaEnCasa.Domain.Entities;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;

public class MongoDBContext
{
    private readonly IMongoDatabase _database;

    public MongoDBContext(IConfiguration configuration)
    {
        var connectionString = configuration.GetSection("MongoDBSettings:ConnectionString").Value;
        var databaseName = configuration.GetSection("MongoDBSettings:DatabaseName").Value;

        var client = new MongoClient(connectionString);
        _database = client.GetDatabase(databaseName);
    }

    public IMongoCollection<Course> Courses => _database.GetCollection<Course>("Courses");
    public IMongoCollection<Schedule> Schedules => _database.GetCollection<Schedule>("Schedules");
    public IMongoCollection<User> Users => _database.GetCollection<User>("Users");
    public IMongoCollection<Student> Students => _database.GetCollection<Student>("Students");
    public IMongoCollection<Teacher> Teachers => _database.GetCollection<Teacher>("Teachers");
}
