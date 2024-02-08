from fastapi import APIRouter,Depends
from Model.users_model import UserCreate, Users
from Db.config import engine, Session ,get_session
router = APIRouter()


@router.post('/login')
def create_user(*,session:Session = Depends(get_session),user_details: UserCreate): #https://sqlmodel.tiangolo.com/tutorial/fastapi/session-with-dependency/ refer this link
    user = Users()
    user.name = user_details.name
    user.email = user_details.email
    user.password = user_details.password
    print(user)
    session.add(user)
    session.commit()
    return user_details
