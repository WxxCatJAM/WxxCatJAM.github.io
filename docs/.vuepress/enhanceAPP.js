// 隐藏/显示侧边栏

export default ({Vue, router}) => {
    Vue.mixin({
        data() {
           return{
              isSidebarOpen:true,
           };
        },
        methods:{
            toggleSidebar(){
                const body = document.body;
                if (this.isSidebarOpen) {
                body.classList.add('sidebar-hidden');
                } else {
                body.classList.remove('sidebar-hidden');
                }
                this.isSidebarOpen = !this.isSidebarOpen;
            },
                    
        },
    });
}
