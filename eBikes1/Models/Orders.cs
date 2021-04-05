using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace eBikes1.Models
{
    public partial class Orders
    {
        public int OId { get; set; }
        public int ScId { get; set; }
        public int CardId { get; set; }
    }
}
