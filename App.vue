<template>
    <div :class="{ 'dark': darkMode }">
        <div class="bg-white dark:bg-dim-900">
            <div class="min-h-full">
                <div class="grid grid-cols-12 mx-auto sm:px-6 lg:mx-w-7xl lg:px-8 lg:gap-5">
                    <!--Left sidebar-->
                    <div class="md:block xs-col-sapn-1 xl:col-span-2">
                        <div class="sticky top-0">
                            <NavigationSideBar />
                        </div>
                    </div>
                    <!--Main content-->
                    <main class="col-span-12 md:col-span-8 xl:col-span-6">

                    </main>
                    <!--right sidebar-->
                    <div class="md:block xs-col-sapn-1 xl:col-span-3">
                        <div class="sticky top-0">
                            <MoreSideBar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const title = ref('');
const darkMode = ref(false)

</script>