using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace eBikes1.Models
{
    public partial class Bikes
    {
        public int BikeId { get; set; }

        [Required(ErrorMessage = "Bike Name is mandatory")]
        [RegularExpression("^[a-zA-Z//s]+$", ErrorMessage ="Please enter valid characters")]
        public string Name { get; set; }
    }
}
