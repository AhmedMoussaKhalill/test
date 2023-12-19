// imports
import {
    BsFileEarmarkTextFill,
  } from 'react-icons/bs';
  import { AiFillFile } from 'react-icons/ai';
import { AudioLines, Clapperboard, Image } from 'lucide-react';
  
  export default function fileIcon(file_type: any): any {
    if (file_type.includes('video')) return <div className='flex gap-2 items-center mb-1'><p className='text-sm text-gray-400'>( beta )</p><Clapperboard /></div>;
    if (file_type.includes('audio')) return <AudioLines className='mb-1' />;
    if (file_type.includes('text')) return <BsFileEarmarkTextFill />;
    if (file_type.includes('image')) return <Image className='mb-1' />;
    else return <AiFillFile />;
  }