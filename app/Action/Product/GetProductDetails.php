<?php

namespace App\Action\Product;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Symfony\Component\HttpFoundation\Response;

class GetProductDetails
{
    public function __invoke(): array
    {
        $products = $this->getProductAllDetails();

        return [
            'status' => Response::HTTP_OK,
            'product_details' => $products
        ];
    }
    private function getProductAllDetails(): Collection
    {
        return DB::table('products')->select([
            'id',
            'product_name',
            'product_description',
            'product_price',
            'product_qty',
        ])->get();
    }
}
