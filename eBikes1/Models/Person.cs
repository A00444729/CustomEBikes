﻿using System;
using System.Collections.Generic;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace eBikes1.Models
{
    public partial class Person
    {
        public int PId { get; set; }
        public string Fname { get; set; }
        public string Lname { get; set; }
        public string Pass { get; set; }
        public string Contact { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public string Province { get; set; }
        public string Postalcode { get; set; }
        public string Country { get; set; }
        public bool? Isadmin { get; set; }
    }
}
