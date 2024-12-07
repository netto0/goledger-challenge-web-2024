import avatarImg from '../assets/img/avatar.webp'

export default function UserInfos() {
  return (
    <div className="flex items-center gap-4">
      <img src={avatarImg} alt="avatar" className='w-20 rounded-full' />
      <h2 className='text-3xl font-bold'>Usuário</h2>
    </div>
  );
}
