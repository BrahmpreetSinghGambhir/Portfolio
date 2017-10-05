package com.example.brahmpreetsingh.the_roster;

import android.app.DatePickerDialog;
import android.content.Context;
import android.content.Intent;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.icu.text.DateFormat;
import android.icu.text.TimeZoneFormat;
import android.icu.util.Calendar;
import android.icu.util.ULocale;
import android.os.AsyncTask;
import android.os.Build;
import android.support.annotation.IdRes;
import android.support.annotation.RequiresApi;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.CheckBox;
import android.widget.DatePicker;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;
import android.widget.SeekBar;
import android.widget.Spinner;
import android.widget.TextView;
import android.widget.Toast;

import java.util.Date;
import java.util.Locale;

@RequiresApi(api = Build.VERSION_CODES.N)
public class MainActivity extends AppCompatActivity implements AdapterView.OnItemSelectedListener {

    TextView jTextView;
    EditText jEditText;
    CheckBox jCheckBox;
    Spinner jSpinner;
    ArrayAdapter<CharSequence> jAdapter;
    TextView myText;

    Context context = this;
    UserDBHelper baseUserDbHelper;             //Object reference initialized
    SQLiteDatabase baseSqLiteDatabase;

    Calendar calendar;
    Button jBirthdayButton;
    String radioValue;
    boolean b;
    String status;
    RadioGroup j_RG1;
    RadioButton j_RB_XS;
    RadioButton j_RB_S;
    RadioButton j_RB_M;
    RadioButton j_RB_L;
    RadioButton j_RB_XL;
    RadioButton j_RB_XXL;
    DateFormat formatDateTime = DateFormat.getDateTimeInstance();

    SeekBar jSeekBar1;
    TextView jTextViewSeek1;

    SeekBar jSeekBar2;
    TextView jTextViewSeek2;

    SeekBar jSeekBar3;
    TextView jTextViewSeek3;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        jTextView = (TextView) findViewById(R.id.xLabel);
        jEditText = (EditText) findViewById(R.id.xEditText);
        jCheckBox = (CheckBox) findViewById(R.id.xCheckBox);
        jSpinner = (Spinner) findViewById(R.id.xSpinner);

        jBirthdayButton = (Button) findViewById(R.id.xBirthdayButton);


        jAdapter = ArrayAdapter.createFromResource(this, R.array.EyeColor, android.R.layout.simple_spinner_item);
        jAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        jSpinner.setAdapter(jAdapter);
        jSpinner.setOnItemSelectedListener(this);

        j_RG1 = (RadioGroup) findViewById(R.id.x_rg1);
        j_RB_XS = (RadioButton) findViewById(R.id.x_XS);
        j_RB_S = (RadioButton) findViewById(R.id.x_S);
        j_RB_M = (RadioButton) findViewById(R.id.x_M);
        j_RB_L = (RadioButton) findViewById(R.id.x_L);
        j_RB_XL = (RadioButton) findViewById(R.id.x_XL);
        j_RB_XXL = (RadioButton) findViewById(R.id.x_XXL);

        j_RG1.setOnCheckedChangeListener(new RadioGroup.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(RadioGroup radioGroup, @IdRes int i) {
                if (j_RB_XS.isChecked()) {
                    radioValue = "XS";
                } else if (j_RB_S.isChecked()) {
                    radioValue = "S";
                } else if (j_RB_M.isChecked()) {
                    radioValue = "M";
                } else if (j_RB_L.isChecked()) {
                    radioValue = "L";
                } else if (j_RB_XL.isChecked()) {
                    radioValue = "XL";
                } else if (j_RB_XXL.isChecked()) {
                    radioValue = "XXL";
                }
            }
        });

        jBirthdayButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                calendar = Calendar.getInstance();
                dialogAppear();
                updateTextViewDate();
            }
        });


        jSeekBar1=(SeekBar)findViewById(R.id.xSeekBar1);
        jTextViewSeek1=(TextView)findViewById(R.id.xTextViewSeek1);
        jSeekBar2=(SeekBar)findViewById(R.id.xSeekBar2);
        jTextViewSeek2=(TextView)findViewById(R.id.xTextViewSeek2);
        jSeekBar3=(SeekBar)findViewById(R.id.xSeekBar3);
        jTextViewSeek3=(TextView)findViewById(R.id.xTextViewSeek3);

        jSeekBar1.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int i, boolean b) {
                jTextViewSeek1.setText(jSeekBar1.getProgress()+"");
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {
                jTextViewSeek1.setText(jSeekBar1.getProgress()+"");
            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {
                jTextViewSeek1.setText(jSeekBar1.getProgress()+"");
            }
        });



        jSeekBar2.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int i, boolean b) {
                jTextViewSeek2.setText(jSeekBar2.getProgress()+"");
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {
                jTextViewSeek2.setText(jSeekBar2.getProgress()+"");
            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {
                jTextViewSeek2.setText(jSeekBar2.getProgress()+"");
            }
        });


        jSeekBar3.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener() {
            @Override
            public void onProgressChanged(SeekBar seekBar, int i, boolean b) {
                jTextViewSeek3.setText(jSeekBar3.getProgress()+"");
            }

            @Override
            public void onStartTrackingTouch(SeekBar seekBar) {
                jTextViewSeek3.setText(jSeekBar3.getProgress()+"");
            }

            @Override
            public void onStopTrackingTouch(SeekBar seekBar) {
                jTextViewSeek3.setText(jSeekBar3.getProgress()+"");
            }
        });
    }

    @Override
    public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
        myText = (TextView) view;
    }

    @Override
    public void onNothingSelected(AdapterView<?> adapterView) {

    }

    public void dialogAppear() {
        new DatePickerDialog(this, d, calendar.get(java.util.Calendar.YEAR), calendar.get(Calendar.MONTH), calendar.get(Calendar.DAY_OF_MONTH)).show();
    }

    public void updateTextViewDate() {

        //jTextViewDate.setText(calendar.getTime().toString());
        jBirthdayButton.setText(formatDateTime.format(calendar.getTime()).toString().substring(0, 12));
    }

    DatePickerDialog.OnDateSetListener d = new DatePickerDialog.OnDateSetListener() {
        @Override
        public void onDateSet(DatePicker datePicker, int i, int i1, int i2) {
            calendar.set(Calendar.YEAR, i);
            calendar.set(Calendar.MONTH, i1);
            calendar.set(Calendar.DAY_OF_MONTH, i2);
            updateTextViewDate();
        }
    };

    public void saveMethod(View v) {
        String name = jEditText.getText().toString();
        String eyecolor = myText.getText().toString();
        String dob = jBirthdayButton.getText().toString();
        if (jCheckBox.isChecked()) {
            b = true;
            status = "Wonderful";
        } else {
            b = false;
            status = "Complicated.";
        }

        String size = radioValue;
        String TextViewDate = jBirthdayButton.getText().toString();
        Cursor c;

        baseUserDbHelper = new UserDBHelper(context);
        baseSqLiteDatabase = baseUserDbHelper.getWritableDatabase();
        baseUserDbHelper.addRow(name, eyecolor, dob, status, size, baseSqLiteDatabase);
        c = baseUserDbHelper.selectRow(baseSqLiteDatabase);
        Toast.makeText(getBaseContext(), "Data saved into database", Toast.LENGTH_LONG).show();
        baseUserDbHelper.close();
    }


    public void showMethod(View v) {
        Intent objintent = new Intent(this, DataListActivity.class);
        startActivity(objintent);
    }
}
