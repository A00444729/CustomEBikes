using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace eBikes1.Models
{
    public partial class CardDetails
    {
        public int CardId { get; set; }
        public string Type { get; set; }
        public int Digits { get; set; }
        public int Expirationmonth { get; set; }
        public int Expirationyear { get; set; }
    }
}
