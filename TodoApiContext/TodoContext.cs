using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace TodoApiContext
{
    public partial class TodoContext : DbContext
    {
        public TodoContext()
        {
        }

        public TodoContext(DbContextOptions<TodoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Todo> Todos { get; set; }        

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Todo>(entity =>
            {
                entity.ToTable("Todo");

                entity.Property(e => e.Name).HasMaxLength(500);

                entity.Property(e => e.Secret).HasMaxLength(500);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
