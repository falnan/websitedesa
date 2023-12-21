<?php

namespace Database\Seeders;

use App\Models\Article;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        Article::create([
            'title' => 'Ini judul 1',
            'image' => 'images/1.jpg',
            'article' => 'Lorem 1 ipsum dolor, sit amet consectetur adipisicing elit. Deserunt possimus veniam beatae quod adipisci in a? Voluptatibus accusantium itaque ipsa laborum voluptate id dolore minus sint? Nesciunt adipisci blanditiis repellendus quisquam. Consectetur at cumque adipisci a culpa voluptatibus nihil sed exercitationem animi suscipit, commodi labore odio, ipsa aspernatur ullam similique provident odit quia dolore fugiat beatae est hic dignissimos ad. Aperiam sunt rem inventore amet consectetur. Exercitationem veritatis doloremque, vero distinctio nostrum dolor voluptate ratione error dolorem fuga? Ab dicta eius dolore labore blanditiis vero ipsam illo! Debitis tempore ab quos, reiciendis perspiciatis quis. Voluptatum assumenda earum modi mollitia ratione.',
            'tag' => 'news',
            'created_at' => Carbon::now(),
        ]);
        Article::create([
            'title' => 'Ini Judul 2',
            'image' => 'images/2.jpg',
            'article' => 'Lorem 2 ipsum dolor, sit amet consectetur adipisicing elit. Deserunt possimus veniam beatae quod adipisci in a? Voluptatibus accusantium itaque ipsa laborum voluptate id dolore minus sint? Nesciunt adipisci blanditiis repellendus quisquam. Consectetur at cumque adipisci a culpa voluptatibus nihil sed exercitationem animi suscipit, commodi labore odio, ipsa aspernatur ullam similique provident odit quia dolore fugiat beatae est hic dignissimos ad. Aperiam sunt rem inventore amet consectetur. Exercitationem veritatis doloremque, vero distinctio nostrum dolor voluptate ratione error dolorem fuga? Ab dicta eius dolore labore blanditiis vero ipsam illo! Debitis tempore ab quos, reiciendis perspiciatis quis. Voluptatum assumenda earum modi mollitia ratione.',
            'tag' => 'news',
            'created_at' => Carbon::now(),
        ]);
        Article::create([
            'title' => 'Ini Judul 1',
            'image' => 'images/3.jpg',
            'article' => 'Lorem 1 ipsum dolor, sit amet consectetur adipisicing elit. Deserunt possimus veniam beatae quod adipisci in a? Voluptatibus accusantium itaque ipsa laborum voluptate id dolore minus sint? Nesciunt adipisci blanditiis repellendus quisquam. Consectetur at cumque adipisci a culpa voluptatibus nihil sed exercitationem animi suscipit, commodi labore odio, ipsa aspernatur ullam similique provident odit quia dolore fugiat beatae est hic dignissimos ad. Aperiam sunt rem inventore amet consectetur. Exercitationem veritatis doloremque, vero distinctio nostrum dolor voluptate ratione error dolorem fuga? Ab dicta eius dolore labore blanditiis vero ipsam illo! Debitis tempore ab quos, reiciendis perspiciatis quis. Voluptatum assumenda earum modi mollitia ratione.',
            'tag' => 'announcement',
            'created_at' => Carbon::now(),
        ]);
        Article::create([
            'title' => 'Ini Judul 2',
            'image' => 'images/4.jpg',
            'article' => 'Lorem 2 ipsum dolor, sit amet consectetur adipisicing elit. Deserunt possimus veniam beatae quod adipisci in a? Voluptatibus accusantium itaque ipsa laborum voluptate id dolore minus sint? Nesciunt adipisci blanditiis repellendus quisquam. Consectetur at cumque adipisci a culpa voluptatibus nihil sed exercitationem animi suscipit, commodi labore odio, ipsa aspernatur ullam similique provident odit quia dolore fugiat beatae est hic dignissimos ad. Aperiam sunt rem inventore amet consectetur. Exercitationem veritatis doloremque, vero distinctio nostrum dolor voluptate ratione error dolorem fuga? Ab dicta eius dolore labore blanditiis vero ipsam illo! Debitis tempore ab quos, reiciendis perspiciatis quis. Voluptatum assumenda earum modi mollitia ratione.',
            'tag' => 'announcement',
            'created_at' => Carbon::now(),
        ]);
        Article::create([
            'title' => 'Ini Judul 3',
            'image' => 'images/5.jpg',
            'article' => 'Lorem 3 ipsum dolor, sit amet consectetur adipisicing elit. Deserunt possimus veniam beatae quod adipisci in a? Voluptatibus accusantium itaque ipsa laborum voluptate id dolore minus sint? Nesciunt adipisci blanditiis repellendus quisquam. Consectetur at cumque adipisci a culpa voluptatibus nihil sed exercitationem animi suscipit, commodi labore odio, ipsa aspernatur ullam similique provident odit quia dolore fugiat beatae est hic dignissimos ad. Aperiam sunt rem inventore amet consectetur. Exercitationem veritatis doloremque, vero distinctio nostrum dolor voluptate ratione error dolorem fuga? Ab dicta eius dolore labore blanditiis vero ipsam illo! Debitis tempore ab quos, reiciendis perspiciatis quis. Voluptatum assumenda earum modi mollitia ratione.',
            'tag' => 'announcement',
            'created_at' => Carbon::now(),
        ]);
    }
}
