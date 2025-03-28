# Generated by Django 2.2.6 on 2020-10-18 01:27

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('organisations', '0001_initial'),
        ('operations', '0002_auto_20201005_0431'),
        ('payments', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='invoice',
            name='credit_note',
        ),
        migrations.RemoveField(
            model_name='invoice',
            name='debit_note',
        ),
        migrations.RemoveField(
            model_name='invoice',
            name='total_amount',
        ),
        migrations.RemoveField(
            model_name='invoice',
            name='uploaded_data',
        ),
        migrations.AddField(
            model_name='invoice',
            name='organisation',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='organisations.Organisation'),
        ),
        migrations.AddField(
            model_name='invoice',
            name='status',
            field=models.CharField(choices=[('CR', 'Created'), ('PD', 'Paid'), ('NA', 'Not Available')], default='NA', max_length=2),
        ),
        migrations.AlterField(
            model_name='invoice',
            name='amount',
            field=models.IntegerField(blank=True, default=0),
        ),
        migrations.CreateModel(
            name='InvoiceItem',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('amount', models.IntegerField(blank=True, default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('item', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='operations.Fpldata')),
            ],
            options={
                'ordering': ['-created_at'],
            },
        ),
    ]
