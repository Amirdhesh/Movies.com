from fastapi import APIRouter, Depends
from Model.users_model import UserCreate, Users, UserLogin, UserLoginResponse
from Db.config import Session, get_session, select

router = APIRouter()


from sqlalchemy.exc import IntegrityError

@router.post("/register")
def create_user(
    *, session: Session = Depends(get_session), user_details: UserCreate
):
    try:
        user = Users()
        user.name = user_details.name
        user.email = user_details.email
        user.password = user_details.password
        session.add(user)
        session.commit()
        return {'status': True}
    except IntegrityError as e:
        session.rollback() 
        return {'status': False, 'message': f'Username {user_details.name} already exists'}


@router.post("/login")
def login_user(*, session: Session = Depends(get_session),user_details: UserLogin):
    statement = select(Users).where(Users.name == user_details.name).where(Users.password == user_details.password)
    user = session.exec(statement).one_or_none()
    if user: 
        return {'status':True, 'user':user}
    return {'status':False}
