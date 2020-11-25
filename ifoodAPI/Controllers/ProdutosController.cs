using System.Threading.Tasks;
using Data;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProdutosController : ControllerBase
    {
        private readonly IProdutoRepository _repo;
        public ProdutosController(IProdutoRepository repo)
        {
            _repo = repo;
        }

        [HttpGet("listaprodutos")]
        public async Task<IActionResult> ListaProdutos()
        {
            var retorno = await _repo.ListaProdutos();
            return Ok(retorno);
        }

        [HttpGet("consultaproduto")]
        public async Task<IActionResult> ConsultaProduto(int id)
        {            
            var retorno = await _repo.ConsultaProduto(id);
            return Ok(retorno);
        }        
        
        [HttpPost("criaproduto")]
        public async Task<IActionResult> CriaProduto(Produto produto)
        {
            var retorno = await _repo.AdicionaProduto(produto);
            return Ok(retorno);
        }

        [HttpPost("alteraproduto")]
        public async Task<IActionResult> AlteraProduto(Produto produto)
        {
            var retorno = await _repo.AlteraProduto(produto);
            return Ok(retorno);
        }

        [HttpDelete("removeproduto")]
        public async Task<IActionResult> RemoveProduto(int id)
        {
            var retorno = await _repo.RemoveProduto(id);
            return Ok(retorno);
        }
    }
}