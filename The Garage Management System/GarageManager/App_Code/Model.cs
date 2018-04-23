﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;

public partial class Cart
{
    public int ID { get; set; }
    public string ClientID { get; set; }
    public int ProductID { get; set; }
    public int Amount { get; set; }
    public Nullable<System.DateTime> DatePurchased { get; set; }
    public bool IsInCart { get; set; }

    public virtual Product_Car Product_Car { get; set; }
}

public partial class Product_Car
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public Product_Car()
    {
        this.Carts = new HashSet<Cart>();
    }

    public int Id { get; set; }
    public int TypeId { get; set; }
    public string Name { get; set; }
    public Nullable<int> Price { get; set; }
    public string Discription { get; set; }
    public string Image { get; set; }
    public string SellerName { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string PhoneNumber { get; set; }
    public string EmailAddress { get; set; }
    public string VehicleMake { get; set; }
    public string VehicleModel { get; set; }
    public string VehicleYear { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<Cart> Carts { get; set; }
    public virtual ProductType ProductType { get; set; }
}

public partial class ProductType
{
    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
    public ProductType()
    {
        this.Product_Car = new HashSet<Product_Car>();
    }

    public int Id { get; set; }
    public string Name { get; set; }

    [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
    public virtual ICollection<Product_Car> Product_Car { get; set; }
}
