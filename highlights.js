console.log("in js");
        fetch('data.json')
                    .then(function (response) {
                        console.log("pre response");
                        return response.json();
                    })
                    .then(function (data) {
                        console.log("pre append");
                        appendData(data);
                        console.log("post append");
                        
                        
                    })
                    .catch(function (err) {
                        console.log('error: ' + err);
                    });
                function appendData(data) {
                   console.log("in append");
                   console.log(data.Players.length);


                    document.getElementById("img0").innerHTML = '<img src="./images/NishidaKill.gif" alt="NishidaKill"></img>';
                    document.getElementById("img1").innerHTML = '<img src="./images/IshikawaKill.gif" alt="IshikawaKill"></img>';
                    document.getElementById("img2").innerHTML = '<img src="./images/YamauchiBlock.gif" alt="YamauchiKill"></img>';
                    document.getElementById("img3").innerHTML = '<img src="./images/YamamotoDig.gif" alt="YamamotoDig"></img>';
                    document.getElementById("img4").innerHTML = '<img src="./images/SekitaDump.gif" alt="SekitaDump"></img>';
                    document.getElementById("img5").innerHTML = '<img src="./images/TakahashiKill.gif" alt="TakahashiKill"></img>';

                    for (let i = 0; i < data.Players.length; i++) {
                        console.log("in for");
                        console.log("player" + i);
                        console.log('Name: ' + data.Players[i].Height);
                        document.getElementById("player" + i).innerHTML = data.Players[i].firstName + ' ' + data.Players[i].lastName + ' with a monster ' + data.clip[i].type + ' against ' + data.clip[i].team;
    
                       }
                    
                }