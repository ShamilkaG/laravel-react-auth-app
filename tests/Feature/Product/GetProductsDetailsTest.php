<?php

namespace Product;



use App\Models\Product;
use Symfony\Component\HttpFoundation\Response;
use Tests\TestCase;

final class GetProductsDetailsTest extends TestCase
{
    public function test_get_all_products_details()
    {

        $product1 = Product::factory()->create();
        $product2 = Product::factory()->create();

        $response = $this->get('api/get-products-details');

        $response->assertStatus(200); //1
        $response->assertJsonStructure([
            'status',
            'product_details'
        ]);
        $response->assertSimilarJson([
            'status' => Response::HTTP_OK,
            'product_details' => [
                [
                    'id' => $product1->id,
                    'product_name' => $product1->product_name,
                    'product_description' => $product1->product_description,
                    'product_price' => (string) $product1->product_price,
                    'product_qty' => $product1->product_qty,
                ],
                [
                    'id' => $product2->id,
                    'product_name' => $product2->product_name,
                    'product_description' => $product2->product_description,
                    'product_price' => (string) $product2->product_price,
                    'product_qty' => $product2->product_qty,
                ]
            ]
        ]);
    }
}
