using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

// Code scaffolded by EF Core assumes nullable reference types (NRTs) are not used or disabled.
// If you have enabled NRTs for your project, then un-comment the following line:
// #nullable disable

namespace eBikes1.Models
{
    public partial class inclassContext : DbContext
    {
        public inclassContext()
        {
        }

        public inclassContext(DbContextOptions<inclassContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Battery> Battery { get; set; }
        public virtual DbSet<Bikes> Bikes { get; set; }
        public virtual DbSet<CardDetails> CardDetails { get; set; }
        public virtual DbSet<Customer> Customer { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }
        public virtual DbSet<PartialCustomer> PartialCustomer { get; set; }
        public virtual DbSet<Person> Person { get; set; }
        public virtual DbSet<SavedConfiguration> SavedConfiguration { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=tcp:5510rajk.database.windows.net,1433;Initial Catalog=inclass;Persist Security Info=False; User ID=raj;Password=Sharedpass123!;MultipleActiveResultSets=False;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Battery>(entity =>
            {
                entity.HasKey(e => e.BId);

                entity.Property(e => e.BId).HasColumnName("B_id");

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(10);
            });

            modelBuilder.Entity<Bikes>(entity =>
            {
                entity.HasKey(e => e.BikeId);

                entity.Property(e => e.BikeId).HasColumnName("bike_id");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasColumnName("name")
                    .HasMaxLength(10);
            });

            modelBuilder.Entity<CardDetails>(entity =>
            {
                entity.HasKey(e => e.CardId);

                entity.Property(e => e.CardId).HasColumnName("Card_id");

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(10);
            });

            modelBuilder.Entity<Customer>(entity =>
            {
                entity.Property(e => e.Address).HasMaxLength(50);

                entity.Property(e => e.City).HasMaxLength(50);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.Property(e => e.Phone).HasMaxLength(50);

                entity.Property(e => e.Postal).HasMaxLength(50);

                entity.Property(e => e.Province).HasMaxLength(50);
            });

            modelBuilder.Entity<Orders>(entity =>
            {
                entity.HasKey(e => e.OId);

                entity.Property(e => e.OId).HasColumnName("O_id");

                entity.Property(e => e.CardId).HasColumnName("Card_id");

                entity.Property(e => e.ScId).HasColumnName("Sc_id");
            });

            modelBuilder.Entity<PartialCustomer>(entity =>
            {
                entity.Property(e => e.Address).HasMaxLength(50);

                entity.Property(e => e.City).HasMaxLength(50);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.FirstName).HasMaxLength(50);

                entity.Property(e => e.LastName).HasMaxLength(50);

                entity.Property(e => e.Phone).HasMaxLength(50);

                entity.Property(e => e.Postal).HasMaxLength(50);

                entity.Property(e => e.Province).HasMaxLength(50);
            });

            modelBuilder.Entity<Person>(entity =>
            {
                entity.HasKey(e => e.PId);

                entity.Property(e => e.PId).HasColumnName("P_id");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(15);

                entity.Property(e => e.Contact)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Country)
                    .IsRequired()
                    .HasMaxLength(15);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(15);

                entity.Property(e => e.Fname)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Lname)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Pass)
                    .IsRequired()
                    .HasMaxLength(10);

                entity.Property(e => e.Postalcode)
                    .IsRequired()
                    .HasMaxLength(8);

                entity.Property(e => e.Province)
                    .IsRequired()
                    .HasMaxLength(15);
            });

            modelBuilder.Entity<SavedConfiguration>(entity =>
            {
                entity.HasKey(e => e.ScId);

                entity.Property(e => e.ScId).HasColumnName("Sc_id");

                entity.Property(e => e.BId).HasColumnName("B_id");

                entity.Property(e => e.BikeId).HasColumnName("Bike_id");

                entity.Property(e => e.PId).HasColumnName("P_id");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
