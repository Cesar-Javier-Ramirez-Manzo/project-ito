var indiceBu=0
var cont=0
var subca;
var acces=false;
document.addEventListener('keyup', (evento)=>{
    var dinosaurio= document.getElementById('dino')
    var dinStyle=window.getComputedStyle(dinosaurio)
    console.log(parseInt( dinStyle.getPropertyValue('margin-top')))

    var texto=document.getElementById('interfaz').value
    
    if(texto==""){
        indiceBu=0
        subca=null
        acces=false
    }
    
    
    
    subca=texto.substring(indiceBu)
    console.log(subca)
    var sujet=subca.search("vaca");
    var sujet1=subca.search("tu");
    if(sujet!=-1||sujet1!=-1){
        acces=true
    }
    var neg=subca.search("no");
    if(neg==-1){
        if(acces==true){
            var direccion=subca.search("hacia");
            var direccion1=subca.search("a la");
            var direccion2=subca.search("para");
            
    
            if(direccion!=-1||direccion1!=-1||direccion2!=-1){
                var arriba=subca.search("arriba");
                if(arriba!=-1){
                
                var newDir=(parseInt(dinStyle.getPropertyValue('margin-top'))-25)+"px";
                dinosaurio.style.marginTop= newDir 
                indiceBu=indiceBu+arriba+6
                cont++
                }
    
                var abajo=subca.search("abajo");
                if(abajo!=-1){
                
                    var newDir=(parseInt(dinStyle.getPropertyValue('margin-top'))+25)+"px";
                    dinosaurio.style.marginTop= newDir 
                    indiceBu=indiceBu+abajo+5
                    cont++
                }
    
                var dere=subca.search("derecha");
                if(dere!=-1){
                
                    var newDir=(parseInt(dinStyle.getPropertyValue('margin-left'))+25)+"px";
                    dinosaurio.style.marginLeft= newDir 
                    indiceBu=indiceBu+dere+7
                    cont++
                }
                var izquierda=subca.search("izquierda");
                if(izquierda!=-1){
                
                    var newDir=(parseInt(dinStyle.getPropertyValue('margin-left'))-25)+"px";
                    dinosaurio.style.marginLeft= newDir 
                    indiceBu=indiceBu+izquierda+9
                    cont++
                }
            }
        }
    }
    
    
    

})
