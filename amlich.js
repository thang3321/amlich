const check = () =>{
    let a = +document.getElementById("year").value;
    if (a < 0){
        alert("Năm không tồn tại");
    }
    let can = a % 10
    console.log(can)
    let chi = a % 12
    console.log(chi)
    switch (can){
        case 0:
            switch(chi){
                case 0:
                    alert("Canh Thân");
                    break;
                case 1:
                    alert("Canh Dậu");
                    break;
                case 2:
                    alert("Canh Tuất");
                    break;
                case 3:
                    alert("Canh Hợi");
                    break;
                case 4:
                    alert("Canh Tý");
                    break;
                case 5:
                    alert("Canh Sửu");
                    break;
                case 6:
                    alert("Canh Dần");
                    break;
                case 7:
                    alert("Canh Mẹo");
                    break;
                case 8:
                    alert("Canh Thìn");
                    break;
                case 9:
                    alert("Canh Tỵ");
                    break;
                case 10:
                    alert("Canh Ngọ");
                    break;
                case 11:
                    alert("Canh Mùi");
                    break;
            }
            break;
        case 1:
            switch(chi){
                case 0:
                    alert("Tân Thân");
                    break;
                case 1:
                    alert("Tân Dậu");
                    break;
                case 2:
                    alert("Tân Tuất");
                    break;
                case 3:
                    alert("Tân Hợi");
                    break;
                case 4:
                    alert("Tân Tý");
                    break;
                case 5:
                    alert("Tân Sửu");
                    break;
                case 6:
                    alert("Tân Dần");
                    break;
                case 7:
                    alert("Tân Mẹo");
                    break;
                case 8:
                    alert("Tân Thìn");
                    break;
                case 9:
                    alert("Tân Tỵ");
                    break;
                case 10:
                    alert("Tân Ngọ");
                    break;
                case 11:
                    alert("Tân Mùi");
                    break;
            }
            break;
        case 2:
            switch(chi){
                case 0:
                    alert("Nhâm Thân");
                    break;
                case 1:
                    alert("Nhâm Dậu");
                    break;
                case 2:
                    alert("Nhâm Tuất");
                    break;
                case 3:
                    alert("Nhâm Hợi");
                    break;
                case 4:
                    alert("Nhâm Tý");
                    break;
                case 5:
                    alert("Nhâm Sửu");
                    break;
                case 6:
                    alert("Nhâm Dần");
                    break;
                case 7:
                    alert("Nhâm Mẹo");
                    break;
                case 8:
                    alert("Nhâm Thìn");
                    break;
                case 9:
                    alert("Nhâm Tỵ");
                    break;
                case 10:
                    alert("Nhâm Ngọ");
                    break;
                case 11:
                    alert("Nhâm Mùi");
                    break;
            }
            break;
        case 3:
            switch(chi){
                case 0:
                    alert("Quý Thân");
                    break;
                case 1:
                    alert("Quý Dậu");
                    break;
                case 2:
                    alert("Quý Tuất");
                    break;
                case 3:
                    alert("Quý Hợi");
                    break;
                case 4:
                    alert("Quý Tý");
                    break;
                case 5:
                    alert("Quý Sửu");
                    break;
                case 6:
                    alert("Quý Dần");
                    break;
                case 7:
                    alert("Quý Mẹo");
                    break;
                case 8:
                    alert("Quý Thìn");
                    break;
                case 9:
                    alert("Quý Tỵ");
                    break;
                case 10:
                    alert("Quý Ngọ");
                    break;
                case 11:
                    alert("Quý Mùi");
                    break;
            }
            break;
        case 4:
            switch(chi){
                case 0:
                    alert("Giáp Thân");
                    break;
                case 1:
                    alert("Giáp Dậu");
                    break;
                case 2:
                    alert("Giáp Tuất");
                    break;
                case 3:
                    alert("Giáp Hợi");
                    break;
                case 4:
                    alert("Giáp Tý");
                    break;
                case 5:
                    alert("Giáp Sửu");
                    break;
                case 6:
                    alert("Giáp Dần");
                    break;
                case 7:
                    alert("Giáp Mẹo");
                    break;
                case 8:
                    alert("Giáp Thìn");
                    break;
                case 9:
                    alert("Giáp Tỵ");
                    break;
                case 10:
                    alert("Giáp Ngọ");
                    break;
                case 11:
                    alert("Giáp Mùi");
                    break;
            }
            break;
        case 5:
            switch(chi){
                case 0:
                    alert("Ất Thân");
                    break;
                case 1:
                    alert("Ất Dậu");
                    break;
                case 2:
                    alert("Ất Tuất");
                    break;
                case 3:
                    alert("Ất Hợi");
                    break;
                case 4:
                    alert("Ất Tý");
                    break;
                case 5:
                    alert("Ất Sửu");
                    break;
                case 6:
                    alert("Ất Dần");
                    break;
                case 7:
                    alert("Ất Mẹo");
                    break;
                case 8:
                    alert("Ất Thìn");
                    break;
                case 9:
                    alert("Ất Tỵ");
                    break;
                case 10:
                    alert("Ất Ngọ");
                    break;
                case 11:
                    alert("Ất Mùi");
                    break;
            }
            break;
        case 6:
            switch(chi){
                case 0:
                    alert("Bính Thân");
                    break;
                case 1:
                    alert("Bính Dậu");
                    break;
                case 2:
                    alert("Bính Tuất");
                    break;
                case 3:
                    alert("Bính Hợi");
                    break;
                case 4:
                    alert("Bính Tý");
                    break;
                case 5:
                    alert("Bính Sửu");
                    break;
                case 6:
                    alert("Bính Dần");
                    break;
                case 7:
                    alert("Bính Mẹo");
                    break;
                case 8:
                    alert("Bính Thìn");
                    break;
                case 9:
                    alert("Bính Tỵ");
                    break;
                case 10:
                    alert("Bính Ngọ");
                    break;
                case 11:
                    alert("Bính Mùi");
                    break;
            }
            break;
        case 7:
            switch(chi){
                case 0:
                    alert("Đinh Thân");
                    break;
                case 1:
                    alert("Đinh Dậu");
                    break;
                case 2:
                    alert("Đinh Tuất");
                    break;
                case 3:
                    alert("Đinh Hợi");
                    break;
                case 4:
                    alert("Đinh Tý");
                    break;
                case 5:
                    alert("Đinh Sửu");
                    break;
                case 6:
                    alert("Đinh Dần");
                    break;
                case 7:
                    alert("Đinh Mẹo");
                    break;
                case 8:
                    alert("Đinh Thìn");
                    break;
                case 9:
                    alert("Đinh Tỵ");
                    break;
                case 10:
                    alert("Đinh Ngọ");
                    break;
                case 11:
                    alert("Đinh Mùi");
                    break;
            }
            break;
        case 8:
            switch(chi){
                case 0:
                    alert("Mậu Thân");
                    break;
                case 1:
                    alert("Mậu Dậu");
                    break;
                case 2:
                    alert("Mậu Tuất");
                    break;
                case 3:
                    alert("Mậu Hợi");
                    break;
                case 4:
                    alert("Mậu Tý");
                    break;
                case 5:
                    alert("Mậu Sửu");
                    break;
                case 6:
                    alert("Mậu Dần");
                    break;
                case 7:
                    alert("Mậu Mẹo");
                    break;
                case 8:
                    alert("Mậu Thìn");
                    break;
                case 9:
                    alert("Mậu Tỵ");
                    break;
                case 10:
                    alert("Mậu Ngọ");
                    break;
                case 11:
                    alert("Mậu Mùi");
                    break;
            }
            break;
        case 9:
            switch(chi){
                case 0:
                    alert("Kỷ Thân");
                    break;
                case 1:
                    alert("Kỷ Dậu");
                    break;
                case 2:
                    alert("Kỷ Tuất");
                    break;
                case 3:
                    alert("Kỷ Hợi");
                    break;
                case 4:
                    alert("Kỷ Tý");
                    break;
                case 5:
                    alert("Kỷ Sửu");
                    break;
                case 6:
                    alert("Kỷ Dần");
                    break;
                case 7:
                    alert("Kỷ Mẹo");
                    break;
                case 8:
                    alert("Kỷ Thìn");
                    break;
                case 9:
                    alert("Kỷ Tỵ");
                    break;
                case 10:
                    alert("Kỷ Ngọ");
                    break;
                case 11:
                    alert("Kỷ Mùi");
                    break;
            }
            break;
    }
}