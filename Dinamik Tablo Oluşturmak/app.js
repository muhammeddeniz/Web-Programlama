var count = 0;
    function a() {

        var isim = $("#isim").val();
        var yas = $("#yas").val();
        var bolum = $("#bolum").val();

        var tr = document.createElement("TR");

        var td1 = document.createElement("TD");
        td1.setAttribute('scope', 'row');
        var td2 = document.createElement("TD");
        td2.setAttribute('scope', 'row');
        var td3 = document.createElement("TD");
        td3.setAttribute('scope', 'row');
        var td4 = document.createElement("TD");
        td4.setAttribute('scope', 'row');
        td4.style.backgroundColor = '#f00';
        td4.style.textAlign = 'center';
        td4.style.fontSize = '16px'

        td1.append(isim);
        td2.append(yas);
        td3.append(bolum);
        td4.append("SİL");
        

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        var id = "id" + count;
        tr.setAttribute('id', id);

        td4.onclick = function(){
            $(this).parent().remove();
        }

        $("#tbl").append(tr);

        $("#isim").val("");
        $("#yas").val("");
        $("#bolum").val("");

        count++;
    }
