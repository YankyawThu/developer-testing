import Image from 'next/image'
import { CiLocationOn } from "react-icons/ci";
import { FaBahtSign } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { PiSquaresFourLight } from "react-icons/pi";

const Property = ({property}) => {
    return(
        <div className='flex flex-col md:flex-row md:my-0 border-1 rounded-lg shadow-md md:h-[210px]'>
            <div className='md:flex-none md:w-[230px]'>
                <div>
                    <Image src={property.image1} width={350} height={350} className='w-full h-[167px] rounded-tl-lg rounded-tr-lg md:rounded-tr-none' />
                </div>
                <div className='grid grid-cols-4 gap-[1px] mt-[1px]'>
                    <Image src={property.image2} width={50} height={50} className='w-full h-50 md:rounded-bl-lg' />
                    <Image src={property.image3} width={50} height={50} className='w-full h-50' />
                    <Image src={property.image4} width={50} height={50} className='w-full h-50' />
                    <Image src={property.image5} width={50} height={50} className='w-full h-50' />
                </div>
            </div>
            <div className='md:grow mx-3 flex flex-col w-auto py-2'>
                <div className='font-semibold'>{property.project_name} ({property.property_type})</div>
                <div className='inline-flex items-center text-gray-600 py-1'><CiLocationOn /><span className='text-xs ml-2'>Bangkok, Thailand</span></div>
                <div className='border-t-[1px] border-dotted border-gray-300'></div>
                <div className='inline-flex items-center text-red-700 font-bold text-lg py-3'><FaBahtSign />{property.price}/mo</div>
                <div className='font-semibold text-sm'>{property.title}</div>
                <div className='text-gray-600 text-[0.75rem] line-clamp-2'>{property.property_description}</div>
                <div className='flex flex-row py-2'>
                    <div className='inline-flex items-center text-sm font-semibold mr-3'><IoBedOutline className='text-xl mr-1' /><span>{property.bedroom}</span></div>
                    <div className='inline-flex items-center text-sm font-semibold'><PiSquaresFourLight className='text-xl mr-1' /><span>{property.area} SqM</span></div>
                </div>
            </div>
        </div>
    )
}

export default Property