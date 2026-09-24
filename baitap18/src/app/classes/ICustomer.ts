// Interface đại diện cho từng khách hàng con bên trong
export interface Customer {
  Id: string;
  Name: string;
  Email: string;
  Age: number;
  Image: string;
}

// Interface đại diện cho nhóm loại khách hàng (gồm mã loại, tên loại và danh sách khách hàng)
export interface CustomerType {
  CustomerTypeId: number;
  CustomterTypeName: string; // Lưu ý: giữ đúng chính tả theo key trong JSON
  Customers: Customer[];
}