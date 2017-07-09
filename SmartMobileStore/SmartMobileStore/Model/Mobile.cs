using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SmartMobileStore.Model
{
   
    public class Mobile
    {
        [Key]
        public int modelId { get; set; }
        public string mobileName { get; set; }
        public decimal price { get; set; }
        public string processor { get; set; }
        public bool approved { get; set; }
    }
}