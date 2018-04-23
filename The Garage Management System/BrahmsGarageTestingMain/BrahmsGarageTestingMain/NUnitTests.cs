using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BrahmsGarageTestingMain
{
    class NUnitTests
    {
        IWebDriver driver = new FirefoxDriver();

        [SetUp]
        public void Initialize()
        {
            driver.Navigate().GoToUrl("http://www.brahmsgarage.com/Pages/Management/Management.aspx");
            Console.WriteLine("Opened url");
        }

        [Test]
        public void reset()
        {

        }

        [Test]
        public void AddElectricCarType()
        {
            SeleniumSetMethods.Click(driver, "ContentPlaceHolder1_LinkButton2", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtName", "Electric Car", "Id");
            SeleniumSetMethods.Click(driver, "ContentPlaceHolder1_btnSubmit", "Id");
            Assert.AreEqual("Electric Car",SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtName", "Id"));
            SeleniumSetMethods.Click(driver, "HyperLink4", "Id");
        }


        [Test]
        public void AddPetrolCarType()
        {
            SeleniumSetMethods.Click(driver, "ContentPlaceHolder1_LinkButton2", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtName", "Petrol Car", "Id");
            SeleniumSetMethods.Click(driver, "ContentPlaceHolder1_btnSubmit", "Id");
            Assert.AreEqual("Petrol Car", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtName", "Id"));
            SeleniumSetMethods.Click(driver, "HyperLink4", "Id");
        }


        [Test]
        public void AddDieselCarType()
        {
            SeleniumSetMethods.Click(driver, "ContentPlaceHolder1_LinkButton2", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtName", "Diesel Car", "Id");
            SeleniumSetMethods.Click(driver, "ContentPlaceHolder1_btnSubmit", "Id");
            Assert.AreEqual("Diesel Car", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtName", "Id"));
            SeleniumSetMethods.Click(driver, "HyperLink4", "Id");
        }

        [Test]
        public void InsertElectricCar()
        {
            SeleniumSetMethods.Click(driver, "ContentPlaceHolder1_LinkButton1", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtName", "Jumbo", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtSeller", "Brahmpreet singh", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtAddress", "Unit 205, 100 Old carriage drive", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtCity", "Kitchener", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtPrice", "2000", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtEmail", "brahmpreet.official@gmail.com", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtMake", "Bombardier - Canada", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtModel", "2011", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtYear", "2013", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtDiscription", "Almost new. No scratches. 1 year service left", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtph", "2267914571", "Id");
            SeleniumSetMethods.SelectDropDown(driver, "ContentPlaceHolder1_ddType", "Electric Car", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_ddlImage", "bombardier.jpg", "Id");
            SeleniumSetMethods.Click(driver, "ContentPlaceHolder1_btnSubmit", "Id");

            Assert.AreEqual("Jumbo", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtName","Id"));
            Assert.AreEqual("Brahmpreet singh", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtSeller","Id"));
            Assert.AreEqual("Unit 205, 100 Old carriage drive", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtAddress", "Id"));
            Assert.AreEqual("Kitchener", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtCity", "Id"));
            Assert.AreEqual("2000", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtPrice", "Id"));
            Assert.AreEqual("brahmpreet.official@gmail.com", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtEmail", "Id"));
            Assert.AreEqual("Bombardier - Canada", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtMake", "Id"));
            Assert.AreEqual("2011", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtModel","Id"));
            Assert.AreEqual("2013", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtYear", "Id"));
            Assert.AreEqual("Almost new. No scratches. 1 year service left", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtDiscription", "Id"));
            Assert.AreEqual("2267914571", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtph", "Id"));
            Assert.AreEqual("Electric Car", SeleniumGetMethods.GetTextFromDDL(driver, "ContentPlaceHolder1_ddType", "Id"));
            Assert.AreEqual("bombardier.jpg", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_ddlImage", "Id"));

            SeleniumSetMethods.Click(driver, "HyperLink4", "Id");
        }

        [Test]
        public void InsertDieselCar()
        {
            SeleniumSetMethods.Click(driver, "ContentPlaceHolder1_LinkButton1", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtName", "nano", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtSeller", "Devinder jassar", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtAddress", "Amherst drive", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtCity", "Kitchener", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtPrice", "1430", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtEmail", "devinder.jassar@gmail.com", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtMake", "Tata - Canada", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtModel", "2001", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtYear", "2005", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtDiscription", "Price negotiable. Used as training vehicle. 2000knm driven", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtph", "2289876578", "Id");
            SeleniumSetMethods.SelectDropDown(driver, "ContentPlaceHolder1_ddType", "Diesel Car", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_ddlImage", "tata.jpg", "Id");
            SeleniumSetMethods.Click(driver, "ContentPlaceHolder1_btnSubmit", "Id");


            Assert.AreEqual("nano", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtName", "Id"));
            Assert.AreEqual("Devinder jassar", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtSeller", "Id"));
            Assert.AreEqual("Amherst drive", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtAddress", "Id"));
            Assert.AreEqual("Kitchener", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtCity", "Id"));
            Assert.AreEqual("1430", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtPrice", "Id"));
            Assert.AreEqual("devinder.jassar@gmail.com", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtEmail", "Id"));
            Assert.AreEqual("Tata - Canada", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtMake", "Id"));
            Assert.AreEqual("2001", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtModel", "Id"));
            Assert.AreEqual("2005", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtYear", "Id"));
            Assert.AreEqual("Price negotiable. Used as training vehicle. 2000knm driven", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtDiscription", "Id"));
            Assert.AreEqual("2289876578", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtph", "Id"));
            Assert.AreEqual("Diesel Car", SeleniumGetMethods.GetTextFromDDL(driver, "ContentPlaceHolder1_ddType", "Id"));
            Assert.AreEqual("tata.jpg", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_ddlImage", "Id"));

            SeleniumSetMethods.Click(driver, "HyperLink4", "Id");
        }

        [Test]
        public void InsertPetrolCar()
        {
            SeleniumSetMethods.Click(driver, "ContentPlaceHolder1_LinkButton1", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtName", "Figo", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtSeller", "Baljeet bilkhu", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtAddress", "Unknown", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtCity", "Kitchener", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtPrice", "4000", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtEmail", "bbilkhu@conestogac.on.ca", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtMake", "Ford - Canada", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtModel", "2001", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtYear", "2004", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtDiscription", "Barely used. Smooth driving", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtph", "9876543210", "Id");
            SeleniumSetMethods.SelectDropDown(driver, "ContentPlaceHolder1_ddType", "Petrol Car", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_ddlImage", "ford.jpg", "Id");
            SeleniumSetMethods.Click(driver, "ContentPlaceHolder1_btnSubmit", "Id");
 

            Assert.AreEqual("Figo", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtName", "Id"));
            Assert.AreEqual("Baljeet bilkhu", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtSeller", "Id"));
            Assert.AreEqual("Unknown", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtAddress", "Id"));
            Assert.AreEqual("Kitchener", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtCity", "Id"));
            Assert.AreEqual("4000", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtPrice", "Id"));
            Assert.AreEqual("bbilkhu@conestogac.on.ca", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtEmail", "Id"));
            Assert.AreEqual("Ford - Canada", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtMake", "Id"));
            Assert.AreEqual("2001", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtModel", "Id"));
            Assert.AreEqual("2004", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtYear", "Id"));
            Assert.AreEqual("Barely used. Smooth driving", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtDiscription", "Id"));
            Assert.AreEqual("9876543210", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtph", "Id"));
            Assert.AreEqual("Petrol Car", SeleniumGetMethods.GetTextFromDDL(driver, "ContentPlaceHolder1_ddType", "Id"));
            Assert.AreEqual("ford.jpg", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_ddlImage", "Id"));

            SeleniumSetMethods.Click(driver, "HyperLink4", "Id");
        }

        [Test]
        public void AddHybridCarType()
        {
            SeleniumSetMethods.Click(driver, "ContentPlaceHolder1_LinkButton2", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtName", "Hybrid Car", "Id");
            SeleniumSetMethods.Click(driver, "ContentPlaceHolder1_btnSubmit", "Id");
            Assert.AreEqual("Hybrid Car", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtName", "Id"));
            SeleniumSetMethods.Click(driver, "HyperLink4", "Id");
        }

        [Test]
        public void InsertHybridCar()
        {
            SeleniumSetMethods.Click(driver, "ContentPlaceHolder1_LinkButton1", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtName", "XC90", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtSeller", "James McDonald", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtAddress", "Unknown", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtCity", "Kitchener", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtPrice", "14000", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtEmail", "jMcdonald@conestogac.on.ca", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtMake", "Volvo - Canada", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtModel", "2012", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtYear", "2014", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtDiscription", "Polished matte black. Smooth driving", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_txtph", "983422210", "Id");
            SeleniumSetMethods.SelectDropDown(driver, "ContentPlaceHolder1_ddType", "Hybrid Car", "Id");
            SeleniumSetMethods.EnterText(driver, "ContentPlaceHolder1_ddlImage", "volvo.jpg", "Id");
            SeleniumSetMethods.Click(driver, "ContentPlaceHolder1_btnSubmit", "Id");
 

            Assert.AreEqual("XC90", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtName", "Id"));
            Assert.AreEqual("James McDonald", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtSeller", "Id"));
            Assert.AreEqual("Unknown", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtAddress", "Id"));
            Assert.AreEqual("Kitchener", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtCity", "Id"));
            Assert.AreEqual("14000", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtPrice", "Id"));
            Assert.AreEqual("jMcdonald@conestogac.on.ca", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtEmail", "Id"));
            Assert.AreEqual("Volvo - Canada", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtMake", "Id"));
            Assert.AreEqual("2012", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtModel", "Id"));
            Assert.AreEqual("2014", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtYear", "Id"));
            Assert.AreEqual("Polished matte black. Smooth driving", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtDiscription", "Id"));
            Assert.AreEqual("983422210", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_txtph", "Id"));
            Assert.AreEqual("Hybrid Car", SeleniumGetMethods.GetTextFromDDL(driver, "ContentPlaceHolder1_ddType", "Id"));
            Assert.AreEqual("volvo.jpg", SeleniumGetMethods.GetText(driver, "ContentPlaceHolder1_ddlImage", "Id"));

            SeleniumSetMethods.Click(driver, "HyperLink4", "Id");

        }

        [TearDown]
        public void CleanUp()
        {
           //driver.Close();
            Console.WriteLine("Closed the browser");
        }
    }
}
