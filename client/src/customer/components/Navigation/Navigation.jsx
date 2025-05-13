import { Fragment, useState } from 'react';
import {
    Dialog,
    DialogBackdrop,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Transition,
} from '@headlessui/react';
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    XMarkIcon,
    PlusIcon,
    MinusIcon,
} from '@heroicons/react/24/outline';
import { navigation } from './navigation';
import { Link } from 'react-router-dom';
import { useAuth } from '../Auth/AuthContext';

export default function Navigation() {
    const [open, setOpen] = useState(false);
    const [expandedCategories, setExpandedCategories] = useState({});
    const { user, logout, loading } = useAuth();

    const toggleCategory = (categoryName) => {
        setExpandedCategories(prev => ({
            ...prev,
            [categoryName]: !prev[categoryName]
        }));
    };

    return (
        <div className="relative z-50 bg-white">
            <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
                <DialogBackdrop className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
                <div className="fixed inset-0 z-40 flex">
                    <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-2xl rounded-r-2xl">
                        <div className="flex items-center justify-between px-4 pt-5 pb-2">
                            <button
                                type="button"
                                onClick={() => setOpen(false)}
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 transition"
                            >
                                <XMarkIcon className="size-6" />
                            </button>
                        </div>

                        <div className="mt-4 space-y-4">
                            {navigation.categories.map((category) => (
                                <div key={category.name} className="border-b border-gray-200 pb-2">
                                    <div className="flex items-center justify-between px-4">
                                        <h2 className="text-base font-semibold text-gray-900">{category.name}</h2>
                                        <button onClick={() => toggleCategory(category.name)} className="hover:bg-gray-100 rounded-full p-1 transition">
                                            {expandedCategories[category.name] ? (
                                                <MinusIcon className="h-5 w-5 text-gray-500" />
                                            ) : (
                                                <PlusIcon className="h-5 w-5 text-gray-500" />
                                            )}
                                        </button>
                                    </div>
                                    <Transition
                                        show={expandedCategories[category.name]}
                                        as={Fragment}
                                        enter="transition duration-300 ease-out"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="transition duration-200 ease-in"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <ul className="mt-2 space-y-2 px-4">
                                            {category.sections.map((section) => (
                                                <li key={section.name} className="py-2">
                                                    <p className="font-medium text-gray-900">{section.name}</p>
                                                    <ul className="mt-2 space-y-1 pl-4">
                                                        {section.items.map((item) => (
                                                            <li key={item.name}>
                                                                <a href={item.href || '#'} className="block text-gray-500 hover:text-orange-400 transition">
                                                                    {item.name}
                                                                </a>
                                                                {item.children && (
                                                                    <ul className="ml-4 mt-1 space-y-1">
                                                                        {item.children.map((child) => (
                                                                            <li key={child.name}>
                                                                                <a href={child.href || '#'} className="block text-gray-500 hover:text-orange-400 transition">
                                                                                    {child.name}
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            ))}
                                        </ul>
                                    </Transition>
                                </div>
                            ))}

                            <div className="space-y-6 px-4 py-6">
                                {navigation.pages.map((page) => (
                                    <div key={page.name} className="flow-root">
                                        <a href={page.href} className="-m-2 block p-2 text-base font-semibold text-gray-900 hover:text-orange-400 transition">
                                            {page.name}
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
                <p className="flex h-10 items-center justify-center bg-orange-500 px-4 text-sm font-semibold text-white tracking-wide">
                    Miễn phí giao hàng cho đơn từ 300.000đ
                </p>

                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center justify-center">
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="absolute left-4 rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 transition lg:hidden"
                            >
                                <Bars3Icon className="size-6" />
                            </button>

                            <PopoverGroup className="hidden lg:block">
                                <div className="flex h-full items-center space-x-6">
                                    {navigation.pages.map((page) => (
                                        <a
                                            key={page.name}
                                            href={page.href}
                                            className="text-base font-semibold text-gray-700 hover:text-orange-400 transition"
                                        >
                                            {page.name}
                                        </a>
                                    ))}

                                    {navigation.categories.map((category) => (
                                        <Popover key={category.name} className="relative">
                                            {({ open }) => (
                                                <>
                                                    <PopoverButton className={`flex items-center gap-1 text-base font-semibold transition ${open ? 'text-orange-400' : 'text-gray-700 hover:text-orange-400'}`}>
                                                        {category.name}
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                        </svg>
                                                    </PopoverButton>
                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0 translate-y-1"
                                                        enterTo="opacity-100 translate-y-0"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100 translate-y-0"
                                                        leaveTo="opacity-0 translate-y-1"
                                                    >
                                                        <PopoverPanel className="absolute left-0 top-full mt-2 w-72 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                                                            <div className="py-2">
                                                                {category.sections.map((section) => (
                                                                    <div key={section.name} className="px-4 py-2">
                                                                        {section.items.map((item) => (
                                                                            <div key={item.name}>
                                                                                <a
                                                                                    href={item.href || '#'}
                                                                                    className="block px-2 py-1 text-gray-700 hover:text-orange-500 hover:bg-gray-100 rounded transition"
                                                                                >
                                                                                    {item.name}
                                                                                </a>
                                                                                {item.children && (
                                                                                    <div className="ml-4 mt-1 space-y-1">
                                                                                        {item.children.map((child) => (
                                                                                            <a
                                                                                                key={child.name}
                                                                                                href={child.href || '#'}
                                                                                                className="block px-2 py-1 text-sm text-gray-600 hover:text-orange-400 hover:bg-gray-50 rounded"
                                                                                            >
                                                                                                {child.name}
                                                                                            </a>
                                                                                        ))}
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </PopoverPanel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}
                                </div>
                            </PopoverGroup>

                            <div className="absolute right-4 flex items-center space-x-6">
                                <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                                    <MagnifyingGlassIcon className="size-6" />
                                </a>

                                <a href="/cart" className="relative flex items-center text-gray-700 hover:text-orange-400 transition">
                                    <ShoppingBagIcon className="size-6" />
                                    <span className="ml-2 text-sm font-semibold">0</span>
                                </a>

                                {user && loading == false ? (
                                    <div>
                                        <span>{user.sub}</span> {/* or user.email depending on your JWT payload */}
                                        <button onClick={logout}>Đăng Xuất</button>
                                    </div>
                                ) : (
                                    <div className="hidden lg:flex space-x-4">
                                        <Link to="/login" className="text-sm font-semibold text-gray-700 hover:text-orange-400 transition">
                                            Đăng nhập
                                        </Link>
                                        <Link to="/register" className="text-sm font-semibold text-gray-700 hover:text-orange-400 transition">
                                            Đăng ký
                                        </Link>

                                    </div>
                                )}


                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
