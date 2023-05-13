import { Repository } from "@/page/Dashboard/index.types";

const RepositoryCard = ({
  name,
  stargazers_count,
  description,
  html_url,
}: Repository) => {
  return (
    <a href={html_url} target='_blank' rel='noreferrer'>
      <div className='bg-gray-100 p-4 mt-2 border-gray-200 border-[1px]'>
        <div className='flex justify-between font-bold text-[16px]'>
          <p>{name}</p>
          <p>{stargazers_count}</p>
        </div>
        <p className='text-xs overflow-y-auto max-h-[164px] mt-4'>
          {description || 'No Description'}
        </p>
      </div>
    </a>
  );
};

export default RepositoryCard;
