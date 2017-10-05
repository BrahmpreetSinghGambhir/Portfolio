package com.example.brahmpreetsingh.the_roster;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;
import android.util.Log;
import android.util.Size;

/**
 * Created by Brahmpreet singh on 2017-09-20.
 */


//Class created to perform operations on the table
public class UserDBHelper extends SQLiteOpenHelper {

    //Variables initialized to refer to Database name and Database version
    private static final String DATABASE_NAME = "USERINFO5.DB";
    private static final int DATABASE_VERSION = 1;
    private static final String Delete_Query = "Delete table "+ UserContract.NewUserInfo.Table_name + ";";
    private static final String Create_Query = "Create table "+ UserContract.NewUserInfo.Table_name + " ("
            +UserContract.NewUserInfo.Girl_name+" Text,"+UserContract.NewUserInfo.Girl_Eyecolor+" Text,"+
            UserContract.NewUserInfo.Birth_date+" Text, "+UserContract.NewUserInfo.Status+" Text,"+UserContract.NewUserInfo.Size+" Text);" ;


    //Constructor defined as 'SQLiteOpenHelper' does'nt have a public constructor.
    public UserDBHelper(Context context)
    {

        /* This statement will help us create database.
          4 Parameter's to be passed to 'super()' constructor -->
          1. Context object 2. Database-name 3. Any Cursor factory used 4. Database version*/
        super(context,DATABASE_NAME,null,DATABASE_VERSION);
        Log.e("Database Operations","database created/opened..");
    }


    /*This method will be called when the table doesnt exist and the database is created for the first time.
     i.e when we will create a table*/

    @Override
    public void onCreate(SQLiteDatabase db)
    {
        db.execSQL(Create_Query);
        Log.e("Databse Operations","Table created...");
    }

    //Method to add rows (information) to table
    public void addRow(String name, String Eyecolor, String BirthDate, String Status,String Size, SQLiteDatabase db)
    {

        //onCreate(db);

        //In SqlLiteDatabase, data is inserted in the form of Map values, where keys are represented by column names.
        ContentValues contentValues = new ContentValues();
        contentValues.put(UserContract.NewUserInfo.Girl_name, name);
        contentValues.put(UserContract.NewUserInfo.Girl_Eyecolor, Eyecolor);
        contentValues.put(UserContract.NewUserInfo.Birth_date, BirthDate);
        contentValues.put(UserContract.NewUserInfo.Status, Status);
        contentValues.put(UserContract.NewUserInfo.Size, Size);
        db.insert(UserContract.NewUserInfo.Table_name, null, contentValues);
        Log.e("Database operation", "Row added");
    }

    //When we retrieve data from database we get information in the form of cursor
    public Cursor selectRow(SQLiteDatabase db)
    {
        Cursor cursor;

        //We are creating projections here (needed column names)
        String[] Projections = {UserContract.NewUserInfo.Girl_name, UserContract.NewUserInfo.Girl_Eyecolor,UserContract.NewUserInfo.Birth_date,
                UserContract.NewUserInfo.Status,UserContract.NewUserInfo.Size};

        //To retrieve any data fromm SQLitedatabse, we can use 'query()' via SQLiteDatabase object
        Cursor cursr = db.query(UserContract.NewUserInfo.Table_name,Projections,null,null,null,null,null);
        return cursr;
    }

    //On further operation on table this method will be called (db already exists)
    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int i, int i1) {

    }
}
