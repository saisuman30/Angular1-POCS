namespace SmartMobileStore.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using SmartMobileStore.Model;

    internal sealed class Configuration : DbMigrationsConfiguration<SmartMobileStore.Model.MobileDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(SmartMobileStore.Model.MobileDb context)
        {
        }
    }
}
