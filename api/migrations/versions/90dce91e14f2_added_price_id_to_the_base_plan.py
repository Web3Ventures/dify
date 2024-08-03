"""added price_id to the base plan 

Revision ID: 90dce91e14f2
Revises: 88e183a5aaf1
Create Date: 2024-08-02 11:24:22.781251

"""
from alembic import op
import models as models
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '90dce91e14f2'
down_revision = '88e183a5aaf1'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('base_plans', schema=None) as batch_op:
        batch_op.add_column(sa.Column('price_id_monthly', sa.String(length=255), nullable=True))
        batch_op.add_column(sa.Column('price_id_yearly', sa.String(length=255), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('base_plans', schema=None) as batch_op:
        batch_op.drop_column('price_id_yearly')
        batch_op.drop_column('price_id_monthly')

    # ### end Alembic commands ###