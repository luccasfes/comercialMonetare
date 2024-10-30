async function doSmthFunny() {
    const data = { name: "Luc" };
    try{
        let response = await fetch ('', {
            method: 'get',
            headers: {
                'Authorization': 'Basic '+btoa('username:password'),
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            // Body
            mode 

        })
    } catch {

    }
}