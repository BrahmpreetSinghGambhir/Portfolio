using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ProductModel
/// </summary>
public class ProductModel
{
    public string InsertProduct(Product_Car product)
    {
        try
        {
            GarageDBEntities db = new GarageDBEntities();
            db.Product_Car.Add(product);
            db.SaveChanges();

            return product.Name + " was successfully added.";
        }
        catch(Exception e)
        {
            return "Error"+e;
        }
    }

    public string UpdateProduct(int id,Product_Car product)
    {
        try
        {
            GarageDBEntities db = new GarageDBEntities();

            //Fetch object from db
            Product_Car p = db.Product_Car.Find(id);

            p.Name = product.Name;
            p.Price = product.Price;
            p.TypeId = product.TypeId;
            p.Discription = product.Discription;
            p.Image = product.Image;
            p.SellerName = product.SellerName;
            p.Address = product.Address;
            p.City = product.City;
            p.PhoneNumber = product.PhoneNumber;
            p.EmailAddress = product.EmailAddress;
            p.VehicleMake = product.VehicleMake;
            p.VehicleModel = product.VehicleModel;
            p.VehicleYear = product.VehicleYear;
            
            db.SaveChanges();
            return product.Name + "was successfully updated.";
        }
        catch (Exception e)
        {
            return "Error"+e;
        }
    }

    public string DeleteProduct(int id)
    {
        try
        {
            GarageDBEntities db = new GarageDBEntities();
            Product_Car product = db.Product_Car.Find(id);

            db.Product_Car.Attach(product);
            db.Product_Car.Remove(product);
            db.SaveChanges();

            return product.Name + " was deleted";
        }
        catch (Exception e)
        {
            return "Error"+e;
        }
    }

    public Product_Car GetProduct(int id)
    {
        try
        {
            using (GarageDBEntities db = new GarageDBEntities())
            {
                Product_Car product = db.Product_Car.Find(id);
                return product;
            }
        }
        catch (Exception)
        {
            return null;
        }
    }

    public List<Product_Car> GetAllProducts()
    {
        try
        {
            using (GarageDBEntities db = new GarageDBEntities())
            {
                List<Product_Car> products = (from x in db.Product_Car select x).ToList();
                return products;
            }
        }
        catch (Exception)
        {

            return null;
        }
    }

    public List<ProductType> GetProductsByType(int typeId)
    {
        try
        {
            using (GarageDBEntities db = new GarageDBEntities())
            {
                List<ProductType> products = (from x in db.ProductTypes
                                          where x.Id == typeId
                                          select x).ToList();
                return products;
            }
        }
        catch (Exception)
        {

            return null;
        }
    }


}