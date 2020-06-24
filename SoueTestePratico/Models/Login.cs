using System;
using System.Collections.Generic;

namespace SoueTestePratico.Models
{
    public partial class Login
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Cpf { get; set; }
        public string Phone { get; set; }
        public string Adress { get; set; }
        public string Name { get; set; }
    }
}
