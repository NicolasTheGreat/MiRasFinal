using System;
using System.Collections.Generic;

namespace WebAPI.Models
{
    public partial class PaymentDetails
    {
        public int pmId { get; set; }
        public string cardOwnerName { get; set; }
        public string cardNumber { get; set; }
        public string expirationDate { get; set; }
        public string cvv { get; set; }
    }
}
