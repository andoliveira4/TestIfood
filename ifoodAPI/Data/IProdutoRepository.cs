using System.Collections.Generic;
using System.Threading.Tasks;
using Models;

namespace Data
{
    public interface IProdutoRepository
    {
        Task<Produto> ConsultaProduto(int id);
        Task<IEnumerable<Produto>> ListaProdutos();
        Task<bool> AdicionaProduto(Produto produto);
        Task<bool> AlteraProduto(Produto produto);
        Task<bool> RemoveProduto(int id);
    }
}