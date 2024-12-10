import { useState, useEffect } from 'react';

interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Agregado para manejo de carga
  const [error, setError] = useState<string | null>(null); // Agregado para manejo de errores

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://strapi-dqjm.onrender.com/api/articles', {
          headers: {
            Authorization: `Bearer 0f7bcb4965a447d2076e3576bda02197a9776e6a01828e692b0a0fcdd68208545f4a524fc39801617118041aafcd083503aed03b5743b0ab52796e3f7bd3c76322f706aaf495744a5e128d12b9be7a87473ce39cc2a0f805fe164689336d25f7b553bc0bac80bca3d64e7e0217287688f0f6cdd6900c2c26683b62f20f732d3f`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data.data); // Strapi devuelve los datos dentro de `data`
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };


    
    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h2>{article.attributes.title}</h2>
            <p>{article.attributes.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
