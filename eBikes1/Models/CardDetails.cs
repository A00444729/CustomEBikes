using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace eBikes1.Models
{
    public partial class CardDetails
    {
        public int CardId { get; set; }

        [Required(ErrorMessage = "Card type is mandatory")]
        public string Type { get; set; }

        [Required(ErrorMessage = "Card Number is mandatory")]
        [RegularExpression("^((4[0-9]{15})|(5[1-5][0-9]{14})|(3[4,7][0-9]{13}))", ErrorMessage = "Please enter valid credit card number!")]
        public int Digits { get; set; }

        [Required(ErrorMessage = "Expiry month is mandatory")]
        [RegularExpression("(0[1-9]|1[012])", ErrorMessage = "Please enter valid month")]
        public int Expirationmonth { get; set; }
        
        [Required(ErrorMessage ="Expiry year is mandatory")]
        [RegularExpression("(20[1][6-9]|20[2][0-9]|20[3][0-1])", ErrorMessage = "Please enter valid year")]
        public int Expirationyear { get; set; }
    }
}
