import { Button } from 'antd';
import ImgUrl from '@/assets/img/404.jpg';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/home');
  };
  return (
    <div className="un-box h-full flex items-center justify-center flex-col bg-[#f5f5f5]">
      <img src={ImgUrl} width="500" alt="" />
      <Button
        className="mt-5 text-[#6783d8] bg-[#f5f5f5] px-5 border-[#6783d8]"
        onClick={handleClick}
      >
        返回首页
      </Button>
    </div>
  );
}

export default NotFound;
