﻿using System;
using System.Collections.Generic;

#nullable disable

namespace TodoApiContext
{
    public partial class Todo
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool? IsComplete { get; set; }
        public string Secret { get; set; }
    }
}
