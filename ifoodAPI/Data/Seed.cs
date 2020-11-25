using System.Linq;
using Models;

namespace Data
{
    public class Seed
    {
        public static void SeedUsers(DataContext context)
        {
            if(!context.Produtos.Any())
            {
                var produtos = new Produto[]
                {
                    new Produto{NomeProduto = "Roupa", ValorVenda = 100.99M, ImagemURL = "https://img.elo7.com.br/product/zoom/2885F09/roupa-de-festa-cascao-roupa-tematica-masculina-fantasia-cascao.jpg"},
                    new Produto{NomeProduto = "Sapato", ValorVenda = 50.99M, ImagemURL = "https://dipollini.vteximg.com.br/arquivos/ids/166315-1000-1000/IJ34022_Sapato_Social_dipollini_Couro_Pelica_Vegetal_Azul_1.jpg?v=636211242284770000"},
                };

                foreach (var produto in produtos)
                {
                    context.Produtos.Add(produto);                    
                }
                context.SaveChanges();
            }
        }
    }
}