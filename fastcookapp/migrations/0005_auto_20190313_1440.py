# Generated by Django 2.1.5 on 2019-03-13 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fastcookapp', '0004_auto_20190304_1514'),
    ]

    operations = [
        migrations.AddField(
            model_name='xmlgraph',
            name='rating',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='xmlgraph',
            name='serving',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='xmlgraph',
            name='time',
            field=models.TextField(null=True),
        ),
    ]
