<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Models\User;

class UserController extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index()
    {
        $users = User::all();
        return response(['users' => UserResource::collection($users)]);
    }

    public function store(Request $request)
    {
        $data = $request->all();

        // $validator = Validator::make($data, [
        //     'name' => 'required|max:255',
        //     'sku' => 'required|max:255',
        //     'upc' => 'required|max:255',
        // ]);

        // if($validator->fails()){
        //     return response(['error' => $validator->errors(), 'Validation Error']);
        // }

        $user = User::create($data);

        return response(['user' => new UserResource($user), 'message' => 'Пользователь создан']);
    }
}
