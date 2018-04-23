using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Collections;

public partial class Pages_Management_ManageProducts : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        //To avoid images from loading again and again when we refresh the page
        if (!IsPostBack)
            GetImages();
    }

    private void GetImages()
    {
        try
        {
            //Get all filepaths
            string[] images = Directory.GetFiles(Server.MapPath("~/Images/Products/"));

            //Get all filenames and add them to an arraylist
            ArrayList imageList = new ArrayList();
            foreach (string image in images)
            {
                string imageName = image.Substring(image.LastIndexOf(@"\", StringComparison.Ordinal) + 1);
                imageList.Add(imageName);
            }

            //Set the arrayList as the dropdownview's datasource and refresh
            ddlImage.DataSource = imageList;
            ddlImage.AppendDataBoundItems = true;
            ddlImage.DataBind();
        }
        catch(Exception e)
        {
            lblResult.Text = e.ToString();
        }
    }


    private Product_Car CreateProduct()
    {
        Product_Car product = new Product_Car();

        product.Name = txtName.Text;
        product.Price = Convert.ToInt32(txtPrice.Text);
        product.Id = Convert.ToInt32(ddType.SelectedValue);
        product.TypeId= Convert.ToInt32(ddType.Text);
        product.Discription = txtDiscription.Text;
        product.Image = ddlImage.SelectedValue;
        product.SellerName=txtSeller.Text;
        product.Address=txtAddress.Text;
        product.City=txtCity.Text;
        product.EmailAddress=txtEmail.Text;
        product.PhoneNumber=txtph.Text;
        product.VehicleMake=txtMake.Text;
        product.VehicleModel=txtModel.Text;
        product.VehicleYear=txtYear.Text;

        return product;
    }



    protected void btnSubmit_Click(object sender, EventArgs e)
    {
        ProductModel productModel = new ProductModel();
        Product_Car product = CreateProduct();

        //Check if the url contains an id parameter
        if (!String.IsNullOrWhiteSpace(Request.QueryString["id"]))
        {
            //ID exists -> Update existing row
            int id = Convert.ToInt32(Request.QueryString["id"]);
            lblResult.Text = productModel.UpdateProduct(id, product);
        }
        else
        {
            //ID does not exist -> Create a new row
            lblResult.Text = productModel.InsertProduct(product);
        }
    }
}