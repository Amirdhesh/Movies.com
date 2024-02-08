"""removed update time in users

Revision ID: 0ddd15fbfdca
Revises: 4aa63c316ed0
Create Date: 2024-02-06 22:19:51.265296

"""

from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision: str = "0ddd15fbfdca"
down_revision: Union[str, None] = "4aa63c316ed0"
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column("users", "updated_at")
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column("users", sa.Column("updated_at", mysql.DATETIME(), nullable=False))
    # ### end Alembic commands ###
