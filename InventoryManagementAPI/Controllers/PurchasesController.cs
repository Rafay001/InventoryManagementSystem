using InventoryManagementAPI.Data;
using InventoryManagementAPI.Models;
using InventoryManagementAPI.Request;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InventoryManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PurchasesController : ControllerBase
    {
        private readonly InventoryDbContext _context;

        public PurchasesController(InventoryDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult RecordPurchase([FromBody] PurchaseRequest request)
        {
            var product = _context.Products.Find(request.ProductId);
            if (product == null)
                return NotFound("Product not found");

            product.Quantity += request.Quantity;
            _context.SaveChanges();

            return Ok(new { message = "Purchase recorded successfully" });
        }
    }
}
