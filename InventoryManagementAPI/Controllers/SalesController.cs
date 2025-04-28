using InventoryManagementAPI.Data;
using InventoryManagementAPI.Models;
using InventoryManagementAPI.Request;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InventoryManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : ControllerBase
    {
        private readonly InventoryDbContext _context;

        public SalesController(InventoryDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult RecordSale([FromBody] SaleRequest request)
        {
            var product = _context.Products.Find(request.ProductId);
            if (product == null)
                return NotFound("Product not found");

            if (product.Quantity < request.Quantity)
                return BadRequest("Not enough stock to sell");

            product.Quantity -= request.Quantity;
            _context.SaveChanges();

            return Ok(new { message = "Sale recorded successfully" });
        }
    }
}
