function mostrarSigno(){

    let signo = document.getElementById("signo").value;
    
    let nombreCaballero;

    let nombreImagen;

    let nombreAudio;

    let nombreVideo;

    let  fragmentoHTML;

    if(signo == 'ARI'){
        nombreImagen='naruto.png'
        nombreCaballero = 'Uzumaki Naruto  <br> <br> La obra narra la historia de un ninja adolescente llamado Naruto Uzumaki, quien aspira a convertirse en Hokage, líder de su aldea, con el propósito de ser reconocido como alguien importante dentro de la aldea y entre sus compañeros.'
        nombreAudio = 'naruto.mp3'
    }else if(signo =='TAU'){
            nombreImagen = 'sasuke.png'
            nombreCaballero = 'Uchiha Sasuke <br> <br> Sasuke es el hijo menor del capitán de la Policía Militar de Konoha y líder del Clan Uchiha, Fugaku Uchiha, y de su esposa Mikoto Uchiha. ... Sasuke pasó sus primeros años viviendo bajo la sombra de su hermano mayor, (Itachi Uchiha), quien constantemente demostraba ser un genio en las artes de ninja.'
            nombreAudio = 'sasuke.mp3'
        }else if(signo == 'GEM'){
            nombreImagen = 'pain.png'
            nombreCaballero = 'Rinigan Pain'
        }else if(signo == 'CAN'){
            nombreImagen = 'itachi.jpg'
            nombreCaballero = 'Uchiga Itachi <br> <br>  Itachi fue el primogénito de Fugaku Uchiha, Líder del Clan Uchiha y Mikoto Uchiha. Itachi fue considerado un genio desde muy pronta edad; despertó el Sharingan a los 8 años, se graduó como el primero de su promoción y fue nombrado capitán de las unidades ANBU a los 13.'
            nombreAudio = 'itachi.mp3'
        }else if(signo == 'LEO'){
            nombreImagen = 'nagato.png'
            nombreCaballero = 'Nagato'
            nombreAudio = 'nagato.mp3'
        }else if(signo == 'VIR'){
            nombreImagen = 'madara.png'
            nombreCaballero = 'Madara uchiha'
            // nombreAudio = 'madara.mp3'
            nombreVideo ='madara.mp4'
        }else if(signo == 'LIB'){
            nombreImagen = 'obito.jpg'
            nombreCaballero = 'Obito uchiha'
        }else if(signo == 'ESC'){
            nombreImagen = 'kakashi.png'
            nombreCaballero = 'Atake Kakashi'
            nombreVideo = 'kakashi.mp4'
        }else if (signo =='SAG'){
            nombreImagen = 'orochimaru.png'
            nombreCaballero = 'Orochimaru'
        } else if(signo == 'CAP'){
            nombreImagen = 'jiraiya.png'
            nombreCaballero = 'Jiraiya'
        }else if (signo == 'ACU'){
            nombreImagen = 'boruto.png'
            nombreCaballero = 'Uzumaki Boruto'
        }else if(signo == 'PIS'){
            nombreImagen = 'kawaki.jpg'
            nombreCaballero = 'Kawaki'
        }

        fragmentoHTML = '<img src="/ACTIVIDAD 2/imagenes/' + nombreImagen + ' " alt=""><p>Tu pernonaje es ' + nombreCaballero + '</p> <audio src="/ACTIVIDAD 2/audio/' + nombreAudio + ' " autoplay></audio> <video src="/ACTIVIDAD 2/video/'+nombreVideo+'" autoplay ></video>'

        

        document.getElementById('caballero-oro').innerHTML = fragmentoHTML
        document.getElementById('caballero-oro').style.display = 'block'
        
}