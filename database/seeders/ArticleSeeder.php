<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Article;
use App\Models\Comment;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        $articles = [
            [
                'title' => 'Первая статья',
                'content' => 'Содержание первой статьи. Это пример текста для демонстрации работы приложения.',
            ],
            [
                'title' => 'Вторая статья',
                'content' => 'Текст второй статьи. Здесь можно писать что угодно, это тестовые данные.',
            ],
            [
                'title' => 'Третья статья',
                'content' => 'Контент третьей статьи. Просто чтобы было что показывать в списке.',
            ],
        ];

        foreach ($articles as $articleData) {
            $article = Article::create($articleData);

            // Добавим комментарии к каждой статье
            $comments = [
                ['author_name' => 'Алексей', 'content' => 'Отличная статья!'],
                ['author_name' => 'Мария', 'content' => 'Спасибо за полезную информацию.'],
                ['author_name' => 'Иван', 'content' => 'Интересно написано, жду продолжения.'],
            ];

            foreach ($comments as $commentData) {
                Comment::create([
                    'article_id' => $article->id,
                    'author_name' => $commentData['author_name'],
                    'content' => $commentData['content'],
                ]);
            }
        }
    }
}
