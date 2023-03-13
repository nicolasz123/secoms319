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

                    document.getElementById("img0").innerHTML = '<img src="./images/Nishida.jpg" alt="Nishida"></img>';
                    document.getElementById("img1").innerHTML = '<img src="./images/Ishikawa.jpg" alt="Ishikawa" height = "400" width = "420">';
                    document.getElementById("img2").innerHTML = '<img src="./images/Yamauchi.jpg" alt="Yamauchi" height = "400" width = "420">';
                    document.getElementById("img3").innerHTML = '<img src="./images/Yamamoto.jpg" alt="Yamamoto">';
                    document.getElementById("img4").innerHTML = '<img src="./images/Sekita.jpg" alt="Sekita">';
                    document.getElementById("img5").innerHTML = '<img src="./images/Takahashi.jpg" alt="Takahashi">';
                    

                    for (let i = 0; i < data.Players.length; i++) {
                        console.log("in for");
                        //var p = document.getElementById("player" + i);
                        console.log("player" + i);
                        console.log('Name: ' + data.Players[i].Height);
                        document.getElementById("player" + i).innerHTML = data.Players[i].firstName + ' ' + data.Players[i].lastName + ' is an ' + data.Players[i].Position + ' for the Japanese national volleyball team. He is currently ' + data.Players[i].Age + ' years old. ' + data.Players[i].lastName + ' also plays for the ' + data.Players[i].club + ' club team. He will be the starting ' + data.Players[i].Position + ' in the coming VNL tournament begining june 2nd in Nagoya, Japan.';
                        
                       // mainContainer.appendChild(div);
                    }
                }