<template>
    <div id="dashboard">
        <div class="navbar">
            <h1 @click="goHome">Dashboard</h1>

            <div class="links">
                <h4 @click="handleAdmin">Admin</h4>
                <h4 @click="handleClick">View Blog</h4>
                <button @click="handleLogout">Logout</button>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>

export default {

    methods: {
        handleLogout: function(){
            localStorage.removeItem("at");
            this.$router.push('/login')
        },
        handleClick: function(){
            this.$router.push('/show')
        },
        goHome: function (){
            this.$router.push('/add')
        },
        handleAdmin: function(){
            this.$router.push('/admin')
        }
    }
}

</script>

<style>

    #dashboard{
        background: #eee;
        padding: 0;
        margin: 0;
        height: 100%;
    }
    h1{
        cursor: pointer;
    }
    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }
    .navbar button{
        width: 70px;
        height: 30px;
    }
    .links{
        display: flex;
        align-items: center;
    }
    .links h4{
        margin-right: 15px;
        border-bottom: 1px solid gray;
        cursor: pointer;
    }


</style>