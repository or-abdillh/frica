<template>
    <aside class="sticky top-0 right-0 bottom-0 dark:bg-slate-900 min-h-screen p-6 border-l border-gray-100 dark:border-slate-500 flex flex-col justify-between items-center">
        <!-- user profile -->
        <section class="text-center">
            <p class="text-gray-700 dark:text-gray-200 text-center">
                Your Profile
            </p>
            <img src="/img/user-profile.png" class="rounded-full mt-10  mb-1 ring ring-offset-2 ring-orange-100 mx-auto">
            <!-- username -->
            <small class="text-gray-600 dark:text-gray-400">@john.doe</small>
            <section class="mt-5">
                <!-- name -->
                <section class="mb-3">
                    <small class="text-gray-600 dark:text-gray-400">Name</small>
                    <p class="text-orange-700 dark:text-orange-600 font-medium">Johnathan Doe</p>
                </section>
                <!-- gender -->
                <section class="mb-3">
                    <small class="text-gray-600 dark:text-gray-400">Gender</small>
                    <p class="text-orange-700 dark:text-orange-600 font-medium">Male</p>
                </section>
                <!-- joined at -->
                <section class="mb-3">
                    <small class="text-gray-600 dark:text-gray-400">Joined</small>
                    <p class="text-orange-700 dark:text-orange-600 font-medium">Since 21 Aug 2022</p>
                </section>
            </section>
        </section>
        <!-- cta -->
        <section>
            <button class="btn ring-red-600 border border-red-600 text-sm text-red-500">
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                Log out
            </button>
        </section>
    </aside>
</template>