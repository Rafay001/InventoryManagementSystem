namespace InventoryManagementAPI.Models
{
    public class Purchase
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int QuantityPurchased { get; set; }
        public DateTime PurchaseDate { get; set; } = DateTime.Now;

        public Product? Product { get; set; }
    }
}
