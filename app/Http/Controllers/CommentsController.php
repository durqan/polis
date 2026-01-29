<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateCommentRequest;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentsController extends Controller
{
    public function create_comment($article_id, CreateCommentRequest $request)
    {
        $request->validated();

        $comment = Comment::create([
            'article_id' => $article_id,
            'content' => $request->text,
            'author_name' => $request->author_name,
        ]);

        return response()->json($comment, 201);
    }
}
