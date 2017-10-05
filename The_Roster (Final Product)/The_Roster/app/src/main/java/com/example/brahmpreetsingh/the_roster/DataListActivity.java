package com.example.brahmpreetsingh.the_roster;

import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.ListView;

public class DataListActivity extends AppCompatActivity {

    ListView jListView;
    SQLiteDatabase sqLiteDatabase;
    UserDBHelper userDBHelper;
    ListDataAdapter listDataAdapter;
    Cursor c;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_data_list);

        jListView = (ListView) findViewById(R.id.xListView);

        listDataAdapter=new ListDataAdapter(getApplicationContext(),R.layout.row_layout);
        jListView.setAdapter(listDataAdapter);
        DataProvider dataProvider;

        userDBHelper=new UserDBHelper(getApplicationContext());
        sqLiteDatabase=userDBHelper.getReadableDatabase();
        c=userDBHelper.selectRow(sqLiteDatabase);

        if(c.moveToFirst())
        {
            do {
                String name=c.getString(0);
                String eyecolor=c.getString(1);
                String Birthday=c.getString(2);
                String Status=c.getString(3);
                String Size=c.getString(4);

                dataProvider=new DataProvider(name,eyecolor,Birthday,Status,Size);
                listDataAdapter.add(dataProvider);

            }while(c.moveToNext());
        }

    }
}
