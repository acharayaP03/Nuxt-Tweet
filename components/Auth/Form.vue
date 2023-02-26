<template>
    <div>
        <div class="pt-5 sapce-y-6">
            <UIInput label="Username" placeholder="@username" v-model="data.username"/>
        </div>

        <div class="pt-5 sapce-y-6">
            <UIInput label="Password" placeholder="********" v-model="data.password" type="password"/>
        </div>

        <div>
            <button @click="handleLogin">Login</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    const { login } = useAuth( )
    const data = reactive({
        password: '',
        username: '',
        loading: false
    })

    const handleLogin = async () => {
        data.loading = true;

        try {
            await login({
                username: data.username,
                password: data.password
            })
        } catch (error) {
            console.log(error);
            
        } finally {
            data.loading = false
        }
    }
    
</script>