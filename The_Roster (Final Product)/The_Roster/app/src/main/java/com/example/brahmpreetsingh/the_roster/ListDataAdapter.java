package com.example.brahmpreetsingh.the_roster;

import android.content.Context;
import android.support.annotation.LayoutRes;
import android.support.annotation.NonNull;
import android.support.annotation.Nullable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Brahmpreet singh on 2017-09-23.
 */

public class ListDataAdapter extends ArrayAdapter {

    List list=new ArrayList();
    public ListDataAdapter(@NonNull Context context, @LayoutRes int resource) {

        super(context, resource);
    }

    static class LayoutHandler{
        TextView name,eyecolor,birthday,status,size;
    }

    @Override
    public void add(Object object)
    {
        super.add(object);
        list.add(object);
    }

    @Override
    public int getCount() {
        return list.size();
    }

    @Nullable
    @Override
    public Object getItem(int position) {
        return list.get(position);
    }

    @NonNull
    @Override
    public View getView(int position, @Nullable View convertView, @NonNull ViewGroup parent) {

        View row=convertView;
        LayoutHandler layoutHandler;
        if(row==null)
        {
            LayoutInflater layoutInflater=(LayoutInflater) this.getContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            row = layoutInflater.inflate(R.layout.row_layout,parent,false);
            layoutHandler=new LayoutHandler();
            layoutHandler.name=row.findViewById(R.id.xTextView1_Row);
            layoutHandler.eyecolor=row.findViewById(R.id.xTextView2_Row);
            layoutHandler.birthday=row.findViewById(R.id.xTextView3_Row);
            layoutHandler.status=row.findViewById(R.id.xTextView4_Row);
            layoutHandler.size=row.findViewById(R.id.xTextView5_Row);
            row.setTag(layoutHandler);
        }
        else
        {
            layoutHandler = (LayoutHandler)row.getTag();
        }

        DataProvider dataProvider = (DataProvider) this.getItem(position);
        layoutHandler.name.setText(dataProvider.getName());
        layoutHandler.eyecolor.setText(dataProvider.getEyecolor());
        layoutHandler.birthday.setText(dataProvider.getDob());
        layoutHandler.status.setText(dataProvider.getStatus());
        layoutHandler.size.setText(dataProvider.getSize());
        return row;
    }
}
