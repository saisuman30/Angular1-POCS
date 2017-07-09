using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SmartMobileStore.Model
{
   
    public class Mobile
    {
        public string mobileName { get; set; }
        public int modelId { get; set; }
        public decimal price { get; set; }
        public string processor { get; set; }
        public string[] features { get; set; }
        public bool approved { get; set; }
    }
}