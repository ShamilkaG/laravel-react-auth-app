<?php

namespace App\Http\Controllers;

use App\Action\Product\GetProductDetails;
use Illuminate\Http\JsonResponse;


class ProductController extends Controller
{
    public function getProductDetails(GetProductDetails $getProductDetails): JsonResponse
    {
        return response()->json($getProductDetails());
    }
}
