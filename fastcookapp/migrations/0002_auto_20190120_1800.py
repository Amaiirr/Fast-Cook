# Generated by Django 2.1.5 on 2019-01-20 18:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fastcookapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='xmlgraph',
            name='title',
            field=models.CharField(default='Untitled Graph', max_length=100, null=True, unique=True),
        ),
    ]