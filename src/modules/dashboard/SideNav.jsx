    import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon, PowerIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { updateAdmin } from '../../store/slice';
import { useDispatch } from 'react-redux';


const links = [
    { name: 'Home',  icon: HomeIcon },
    {
        name: 'Data',
        icon: DocumentDuplicateIcon,
    },
    { name: 'Customers', icon: UserGroupIcon },
];

export default function SideNav() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <a
                className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
            >
                <div className="w-32 text-white md:w-40">
                    <h1>RIDA MARIYAM</h1>
                </div>
            </a>
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                {links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                        <a
                            key={link.name}
                            className={clsx(
                                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 hover:cursor-pointer md:flex-none md:justify-start md:p-2 md:px-3',
                                {
                                    'bg-sky-100 text-blue-600': '/dashboard' === link.href,
                                },
                            )}
                        >
                            <LinkIcon className="w-6" />
                            <p className="hidden md:block">{link.name}</p>
                        </a>
                    );
                })}
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <div
                
                >
                    <button
                        onClick={() => {
                            dispatch(updateAdmin(false))
                            navigate('/login')
                        }}
                    className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        <PowerIcon className="w-6" />
                        <p
                        
                        className="hidden md:block">Sign Out</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
