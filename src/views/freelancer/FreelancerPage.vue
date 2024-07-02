<template>
    <div class="container mx-auto px-4 py-8">

        <!-- Profile Card -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="md:col-span-1">
                <div class="bg-white p-4 rounded-lg shadow">
                    <div class="flex flex-col items-center text-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                            class="rounded-full h-32 w-32 object-cover">
                        <div class="mt-4">
                            <h4 class="text-xl font-bold">John Doe</h4>
                            <p class="text-gray-500 mb-1">Full Stack Developer</p>
                            <p class="text-gray-500">Bay Area, San Francisco, CA</p>
                            <div class="mt-4 space-x-2">
                                <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow">Follow</button>
                                <button
                                    class="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg shadow">Message</button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Social Links -->
                <div class="grid grid-cols-4 gap-1 p-5">
                    <!-- Column 1 -->
                    <div class="bg-blue-500 text-white p-2 text-center rounded-3xl shadow-lg mb-4 border-green-600 border-3 ">S1</div>
                    <div class="bg-green-500 text-white p-2 text-center rounded-3xl shadow-lg mb-4">S2</div>
                    <div class="bg-yellow-500 text-white p-2 text-center rounded-3xl shadow-lg mb-4 col-span-2">S3</div>

                    <!-- Column 2 -->
                    <div class="bg-purple-500 text-white p-2 text-center rounded-3xl shadow-lg mb-4 col-span-3">S5</div>
                    <div class="bg-indigo-500 text-white p-2 text-center rounded-3xl shadow-lg mb-4 col-span-2">S6</div>

                    <div class="bg-red-500 text-white p-2 text-center rounded-3xl shadow-lg mb-4">S4</div>
                    <!-- Column 3 -->
                    <div class="bg-pink-500 text-white p-2 text-center rounded-3xl shadow-lg mb-4">S7</div>
                    <div class="bg-orange-500 text-white p-2 text-center rounded-3xl shadow-lg mb-4">S8</div>


                </div>
            </div>

            <!-- Profile Details -->
            <div class="md:col-span-2">
                <div class="bg-white p-4 rounded-lg shadow mb-4">
                    <div class="flex items-center mb-3">
                        <h6 class="text-sm font-semibold mr-2">First Name</h6>
                        <span class="text-gray-600">Kenneth</span>
                    </div>
                    <hr>
                    <div class="flex items-center mb-3">
                        <h6 class="text-sm font-semibold mr-2">Last Name</h6>
                        <span class="text-gray-600">Kenneth</span>
                    </div>
                    <hr class="my-2">
                    <div class="flex items-center mb-3">
                        <h6 class="text-sm font-semibold mr-2">Email</h6>
                        <span class="text-gray-600">fip@jukmuh.al</span>
                    </div>
                    <hr class="my-2">
                    <div class="flex items-center mb-3">
                        <h6 class="text-sm font-semibold mr-2">Phone</h6>
                        <span class="text-gray-600">(239) 816-9029</span>
                    </div>
                    <hr class="my-2">
                    <hr class="my-2">
                    <div class="mt-4 flex">
                        <button class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow">Edit</button>
                    </div>
                </div>

                <!-- Project Status -->
                <div class="grid grid-cols-1 md:grid-cols-1 gap-4">
                    <div class="bg-white p-4 rounded-lg shadow">
                        <h6 class="flex items-center mb-3 text-info"><svg xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 mr-2 inline-block" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                                </path>
                            </svg>
                            Project Status
                        </h6>
                        <div class="flex items-center mb-3">
                            <small class="text-gray-600">Web Design</small>
                            <div class="flex items-center ml-auto">
                                <div class="bg-blue-500 h-2 w-64 rounded-full">
                                    <div class="h-2 bg-primary rounded-full" style="width: 80%;"></div>
                                </div>
                                <span class="text-gray-600 ml-2">80%</span>
                            </div>
                        </div>
                        <div class="flex items-center mb-3">
                            <small class="text-gray-600">Website Markup</small>
                            <div class="flex items-center ml-auto">
                                <div class="bg-blue-500 h-2 w-64 rounded-full">
                                    <div class="h-2 bg-primary rounded-full" style="width: 72%;"></div>
                                </div>
                                <span class="text-gray-600 ml-2">72%</span>
                            </div>
                        </div>
                        <div class="flex items-center mb-3">
                            <small class="text-gray-600">One Page</small>
                            <div class="flex items-center ml-auto">
                                <div class="bg-blue-500 h-2 w-64 rounded-full">
                                    <div class="h-2 bg-primary rounded-full" style="width: 89%;"></div>
                                </div>
                                <span class="text-gray-600 ml-2">89%</span>
                            </div>
                        </div>
                        <div class="flex items-center mb-3">
                            <small class="text-gray-600">Mobile Template</small>
                            <div class="flex items-center ml-auto">
                                <div class="bg-blue-500 h-2 w-64 rounded-full">
                                    <div class="h-2 bg-primary rounded-full" style="width: 55%;"></div>
                                </div>
                                <span class="text-gray-600 ml-2">55%</span>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <small class="text-gray-600">Backend API</small>
                            <div class="flex items-center ml-auto">
                                <div class="bg-blue-500 h-2 w-64 rounded-full">
                                    <div class="h-2 bg-primary rounded-full" style="width: 66%;"></div>
                                </div>
                                <span class="text-gray-600 ml-2">66%</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>