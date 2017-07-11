namespace testcapstone.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class ChangingfromNewHike : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.NewHikes", newName: "Hikes");
        }
        
        public override void Down()
        {
            RenameTable(name: "dbo.Hikes", newName: "NewHikes");
        }
    }
}
