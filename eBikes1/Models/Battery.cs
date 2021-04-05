using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace eBikes1.Models
{
    public partial class Battery
    {
        public int BId { get; set; }

        [Required(ErrorMessage = "Capacity is mandatory")]
        public int Capacity { get; set; }

        [Required(ErrorMessage = "Type is mandatory")]
        public string Type { get; set; }
    }
}
