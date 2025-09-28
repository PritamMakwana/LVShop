<script setup>
import GuestLayout from '@/components/GuestLayout.vue';
</script>

<template>


    <GuestLayout title="Set New Password">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="password" class="block text-sm/6 font-medium text-gray-900">New Password</label>
          <div class="mt-2">
            <input type="new_password" name="new_password" id="new_password" autocomplete="new_password" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

         <div>
          <label for="password" class="block text-sm/6 font-medium text-gray-900">Repeat Password</label>
          <div class="mt-2">
            <input type="repeat_password" name="repeat_password" id="repeat_password" autocomplete="repeat_password" required="" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <div class="text-sm">
               <router-link to="/login" class="font-semibold text-indigo-600 hover:text-indigo-500">Go Back to Login</router-link>
            </div>
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
        </div>
      </form>
    </GuestLayout>
</template>
