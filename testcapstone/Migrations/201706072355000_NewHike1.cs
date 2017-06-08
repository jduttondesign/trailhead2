namespace testcapstone.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class NewHike1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.NewHikes",
                c => new
                    {
                        id = c.Int(nullable: false, identity: true),
                        Trail = c.String(),
                        Miles = c.Int(nullable: false),
                        Terrain = c.String(),
                        Safety = c.String(),
                    })
                .PrimaryKey(t => t.id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.NewHikes");
        }
    }
}
