using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SmartMobileStore.Model
{
    public class MobileDb:DbContext
    {
        public DbSet<Mobile> Mobiles { get; set; }
    }
}