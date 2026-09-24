import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CatalogService {
    datas = [
        {
            Cateid: "cate1", CateName: "nuoc ngot",
            Products: [
                {
                    ProductId: "p1", ProductName: "Coca", Price: 100,
                    Image: "https://bizweb.dktcdn.net/100/469/765/products/1503-9de8f3562b364e56b550ff30bc493122-2c0db7cc76fd4b7f8b3c767fb24bc277-d4f804d8fc474b4bae5f628ff0d632e0-master.jpg?v=1670317796997"
                },
                {
                    ProductId: "p2", ProductName: "Pepsi", Price: 300,
                    Image: "https://www.lottemart.vn/media/catalog/product/cache/0x0/8/9/8934588013669-1-1.jpg.webp"
                },
                {
                    ProductId: "p3", ProductName: "Sting", Price: 200,
                    Image: "https://www.lottemart.vn/media/catalog/product/cache/0x0/8/9/8934588232114-1_1.jpg.webp"
                },
            ]
        },
        {
            Cateid: "cate2", CateName: "Bia",
            Products: [
                {
                    ProductId: "p4", ProductName: "Heineken", Price: 500,
                    Image: "https://cdnv2.tgdd.vn/bhx-static/bhx/production/2025/12/image/Products/Images/2282/201265/bhx/bia-heineken-250ml_202512301337028701.jpg"
                },
                {
                    ProductId: "p5", ProductName: "333", Price: 400,
                    Image: "https://sieuthithanhdo.vn/images/products/thuc-pham/Hung-230125/J000054.jpg"
                },
                {
                    ProductId: "p6", ProductName: "Sai Gon", Price: 600,
                    Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-P0L-lIaAJean7KPRLPp_NbIvbVWZvk43UsQsefrk1KNFdETozM3TNd7&s=10"
                },
            ]
        },
    ]
    constructor() { }
    getCategories() {
        return this.datas
    }

}
