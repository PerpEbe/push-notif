const button = document.querySelector("button")
button.addEventListener("click", () => {
    Notification.requestPermission().then(perm => {
        if(perm === "granted"){
            const notification=new Notification("Example notification",{
                body:"This is more text",
                data:{hello:"World"},
                icon:"logo.png",
                // tag: "Welcome Message"
            })
            notification.addEventListener("close", e => {
                console.log(e)
            })
        }
    })
})

let notification
let interval
document.addEventListener("visibilitychange", () =>{
    if(document.visibilityState==="hidden"){
        interval=etInterval(()=>{
            notification=new Notification("Come back please", {
                body: `You have been away for ${Math.round(
                    (new Date() - leaveDate)/1000
                )} seconds`,
                tag: "Come Back",
            }) 
        })
        notification=new Notification("Come back Please",{
            body: "PLEASE",
            tag:"COome BACK",
        })
    }else{
        if(interval) clearInterval(interval)
        if(notification) notification.close()
    }
})