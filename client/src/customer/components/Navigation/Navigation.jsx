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

export default function Navigation() {
    const [open, setOpen] = useState(false);
    const [expandedCategories, setExpandedCategories] = useState({});

    const toggleCategory = (categoryName) => {
        setExpandedCategories(prev => ({
            ...prev,
            [categoryName]: !prev[categoryName]
        }));
    };

    return (
        <div className="relative z-50 bg-white">
            {/* Mobile menu */}
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

                        {/* Links */}
                        <div className="mt-4 space-y-4">
                            {navigation.categories.map((category) => (
                                <div
                                    key={category.name}
                                    className="border-b border-gray-200 pb-2"
                                >
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
                                                                <a href={item.href} className="block text-gray-500 hover:text-orange-400 transition">
                                                                    {item.name}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            ))}
                                        </ul>
                                    </Transition>
                                </div>
                            ))}

                            {/* Pages */}
                            <div className="space-y-6 px-4 py-6">
                                {navigation.pages.map((page) => (
                                    <div key={page.name} className="flow-root">
                                        <a href={page.href} className="-m-2 block p-2 text-base font-semibold text-gray-900 hover:text-orange-400 transition">
                                            {page.name}
                                        </a>
                                    </div>
                                ))}
                            </div>

                            {/* Login/Register */}
                            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                <div className="flow-root">
                                    <a href="#" className="-m-2 block p-2 text-base font-semibold text-gray-900 hover:text-orange-400 transition">
                                        Đăng nhập
                                    </a>
                                </div>
                                <div className="flow-root">
                                    <a href="#" className="-m-2 block p-2 text-base font-semibold text-gray-900 hover:text-orange-400 transition">
                                        Đăng ký
                                    </a>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>

            {/* Desktop menu */}
            <header className="relative bg-white">
                <p className="flex h-10 items-center justify-center bg-orange-500 px-4 text-sm font-semibold text-white tracking-wide">
                    Miễn phí giao hàng cho đơn từ 300.000đ
                </p>

                <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            {/* Mobile menu button */}
                            <button
                                type="button"
                                onClick={() => setOpen(true)}
                                className="rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 transition lg:hidden"
                            >
                                <Bars3Icon className="size-6" />
                            </button>

                            {/* Flyout menus */}
                            <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-8">
                                    {navigation.categories.map((category) => (
                                        <Popover key={category.name} className="flex">
                                            <div className="relative flex">
                                                <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-base font-semibold text-gray-700 hover:text-orange-400 data-open:border-orange-400 transition">
                                                    {category.name}
                                                </PopoverButton>
                                            </div>

                                            <PopoverPanel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                                <div className="relative bg-white shadow-2xl rounded-b-2xl">
                                                    <div className="mx-auto max-w-7xl px-8 py-10 grid grid-cols-2 gap-8">
                                                        <div className="grid grid-cols-2 gap-8">
                                                            {category.featured.map((item) => (
                                                                <div key={item.name}>
                                                                    <img
                                                                        className="w-full rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                                                                        src={item.imageSrc}
                                                                        alt={item.imageAlt}
                                                                    />
                                                                    <a href={item.href} className="mt-2 block text-base font-semibold text-gray-900 hover:text-orange-400 transition">
                                                                        {item.name}
                                                                    </a>
                                                                </div>
                                                            ))}
                                                        </div>
                                                        <div className="grid grid-cols-3 gap-8">
                                                            {category.sections.map((section) => (
                                                                <div key={section.name}>
                                                                    <p className="text-base font-semibold text-gray-900">{section.name}</p>
                                                                    <ul className="mt-4 space-y-2">
                                                                        {section.items.map((item) => (
                                                                            <li key={item.name}>
                                                                                <a href={item.href} className="text-gray-500 hover:text-orange-400 transition">
                                                                                    {item.name}
                                                                                </a>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </PopoverPanel>
                                        </Popover>
                                    ))}

                                    {navigation.pages.map((page) => (
                                        <a
                                            key={page.name}
                                            href={page.href}
                                            className="flex items-center text-base font-semibold text-gray-700 hover:text-orange-400 transition"
                                        >
                                            {page.name}
                                        </a>
                                    ))}
                                </div>
                            </PopoverGroup>

                            {/* Right side */}
                            <div className="ml-auto flex items-center space-x-6">
                                <a href="#" className="text-gray-400 hover:text-orange-400 transition">
                                    <MagnifyingGlassIcon className="size-6" />
                                </a>

                                <a href="/cart" className="relative flex items-center text-gray-700 hover:text-orange-400 transition">
                                    <ShoppingBagIcon className="size-6" />
                                    <span className="ml-2 text-sm font-semibold">0</span>
                                </a>

                                <div className="hidden lg:flex space-x-4">
                                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-orange-400 transition">Đăng nhập</a>
                                    <a href="#" className="text-sm font-semibold text-gray-700 hover:text-orange-400 transition">Đăng ký</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
