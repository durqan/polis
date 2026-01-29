<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateArticleRequest;
use App\Models\Article;

class ArticlesController extends Controller
{
    public function get_articles()
    {
        $articles = Article::latest()->paginate(10);
        return response()->json($articles);
    }

    public function get_article($id)
    {
        $article = Article::with('comments')->findOrFail($id);
        return response()->json($article);
    }

    public function create_article(CreateArticleRequest $request)
    {
        $article = Article::create($request->validated());
        return response()->json($article, 201);
    }
}
