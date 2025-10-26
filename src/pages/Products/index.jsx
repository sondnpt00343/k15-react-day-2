import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";

// Syntax:
// - useEffect(callback, [dependencies])
// Cách hoạt động:
// 1. callback LUÔN được gọi trong lần đầu sử dụng component
// 2. callback sẽ được gọi khi component re-render với ít nhất 1
// deps thay đổi
// *Callback được gọi bất đồng bộ (sau khi render được UI vào DOM)

function Products() {
    const [params] = useSearchParams();

    const [products, setProducts] = useState([]);
    const [lastPage, setLastPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const currentPage = +params.get("page") || 1;

    useEffect(() => {
        setIsLoading(true);

        fetch(`https://api01.f8team.dev/api/products?page=${currentPage}`)
            .then((res) => res.json())
            .then((response) => {
                setProducts(response.data.items);
                setLastPage(response.data.pagination.last_page);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [currentPage]);

    const renderPagination = () => {
        return Array(lastPage)
            .fill()
            .map((_, index) => {
                const pageNum = index + 1;
                const active = pageNum === currentPage;

                return (
                    <li key={index}>
                        <Link
                            style={{
                                display: "inline-block",
                                padding: 4,
                                border: "1px solid #333",
                                textDecoration: "none",
                                color: active ? "#fff" : "#333",
                                background: active ? "#333" : "transparent",
                            }}
                            to={`?page=${pageNum}`}
                        >
                            {pageNum}
                        </Link>
                    </li>
                );
            });
    };

    return (
        <div>
            <h1>Products</h1>
            {isLoading && <div>Loading...</div>}
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.id}. {product.title}
                    </li>
                ))}
            </ul>
            <ul
                style={{
                    display: "flex",
                    gap: 20,
                    listStyle: "none",
                    marginTop: 10,
                }}
            >
                {renderPagination()}
            </ul>
        </div>
    );
}

export default Products;
