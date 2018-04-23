using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for ProductTypeModel
/// </summary>
public class ProductTypeModel
{
    public string InsertProductType(ProductType productType)
    {
        try
        {
            GarageDBEntities db = new GarageDBEntities();
            db.ProductTypes.Add(productType);
            db.SaveChanges();

            return productType.Name + " was successfully added.";
        }
        catch (Exception e)
        {
            return "Error" + e;
        }
    }

    public string UpdateProductType(int id, ProductType productType)
    {
        try
        {
            GarageDBEntities db = new GarageDBEntities();

            //Fetch object from db
            ProductType p = db.ProductTypes.Find(id);

            
            db.SaveChanges();
            return productType.Name + "was successfully updated.";
        }
        catch (Exception e)
        {
            return "Error" + e;
        }
    }

    public string DeleteProductType(int id)
    {
        try
        {
            GarageDBEntities db = new GarageDBEntities();
            ProductType productType = db.ProductTypes.Find(id);

            db.ProductTypes.Attach(productType);
            db.ProductTypes.Remove(productType);
            db.SaveChanges();

            return productType.Name + " was deleted";
        }
        catch (Exception e)
        {
            return "Error" + e;
        }
    }

}