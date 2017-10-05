package com.example.brahmpreetsingh.the_roster;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.TextView;

public class SplashScreen extends AppCompatActivity {

    TextView jTextViewSplash1;
    TextView jTextViewSplash2;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_splash_screen);

        jTextViewSplash1=(TextView)findViewById(R.id.xTextViewSplash1);
        jTextViewSplash2=(TextView) findViewById(R.id.xTextViewSplash2);

        Animation myanim = AnimationUtils.loadAnimation(this,R.anim.mytransition);
        jTextViewSplash1.startAnimation(myanim);
        jTextViewSplash2.startAnimation(myanim);

        final Intent i =new Intent(this,MainActivity.class);
        Thread timer = new Thread(){
            public void run()
            {
                try{
                    sleep(5000);
                }catch (InterruptedException e)
                {
                    e.printStackTrace();
                }
                finally{
                    startActivity(i);
                    finish();
                }
            }
        };
        timer.start();
    }
}
