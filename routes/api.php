<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\CommentsController;

Route::get('/articles', [ArticlesController::class, 'get_articles']);
Route::get('/articles/{id}', [ArticlesController::class, 'get_article']);
Route::post('/articles', [ArticlesController::class, 'create_article']);
Route::post('/articles/{id}/comments', [CommentsController::class, 'create_comment']);
