using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Data
{
    public class ProdutoRepository : IProdutoRepository
    {
        private readonly DataContext _context;
        public ProdutoRepository(DataContext context)
        {
            _context = context;
        }   

        public async Task<Produto> ConsultaProduto(int id)
        {
            var retorno = await _context.Produtos.FirstOrDefaultAsync(x => x.Id == id);
            return retorno;
        }

        public async Task<IEnumerable<Produto>> ListaProdutos()
        {
            var retorno = await _context.Produtos.ToListAsync();
            return retorno;
        }
        
        public async Task<bool> AdicionaProduto(Produto produto)
        {
            _context.Add(produto);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> AlteraProduto(Produto produto)
        {
            var produtoAlterado = await _context.Produtos.FirstOrDefaultAsync(x => x.Id == produto.Id);
            produtoAlterado.NomeProduto = produto.NomeProduto;
            produtoAlterado.ValorVenda = produto.ValorVenda;
            produtoAlterado.ImagemURL = produto.ImagemURL;
            return await _context.SaveChangesAsync() > 0;            
        }        

        public async Task<bool> RemoveProduto(int id)
        {
            var produto = _context.Produtos.FirstOrDefault(x => x.Id == id);
            _context.Remove(produto);
            return await _context.SaveChangesAsync() > 0;
        }

        
    }
}