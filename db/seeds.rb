# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

aircrafts = Aircraft.create! [
    {
    name: "P-51-D30", 
    image_url: "https://static.warthunder.com/upload/image/!%202015%20NEWS/April/Wetmore/shot%202015_04_24%2019_16_42.jpg"
    },
    {
    name: "TA-152-H", 
    image_url: "http://i.imgur.com/kwMRN8J.jpg%5B/IMG%5D"
    },
    {
    name: "G-55S", 
    image_url: "https://cdn.wikiwiki.jp/to/w/warthunder/G.55S/::ref/shot%202017.05.25%2023.51.21.jpg?rev=4eae96366a345a95131b7a413bb07a78&t=20170526002529"
    },
    {
    name: "Ki-84 Otsu", 
    image_url: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d31be438-c396-4c1e-ba69-d649ec9dcdc7/dbdlbvm-e9feb005-77b5-43ba-aefb-742ef9d91f8f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QzMWJlNDM4LWMzOTYtNGMxZS1iYTY5LWQ2NDllYzlkY2RjN1wvZGJkbGJ2bS1lOWZlYjAwNS03N2I1LTQzYmEtYWVmYi03NDJlZjlkOTFmOGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-PtoKR05CsOyJtXtR4ThItAQVcstegKdN4gN_wDijU8"
    },
    {
    name: "Typhoon Mk1b", 
    image_url: "https://cdn-live.warthunder.com/uploads/4a/e840682b52b63945eef03f2901524dfe779e2a/typhoon_00.jpg"
    },
    {
    name: "Yak-3p", 
    image_url: "https://static.warthunder.com/upload/image/!%202014%20NEWS/December/Yak3/ZKYYY_(5375366326).jpg"
    },
]

# users = User.create! [
#     {
#     username: 'test2',
#     email: 'test2@gmail.com',
#     password_digest: '$2a$12$hyZJTsDJMiLV8n3PcGedx.ePtJ7y5lxMvClDntq9A.jQfmrgKL4.a'
#     }
# ]

# reviews = Review.create! [
#     {
#     title: 'Awesome Plane',
#     description: 'Great energy retension. Pretty fast, perfect for boom and zoom tactics.',
#     score: 4,
#     aircraft: aircrafts.first,
#     user: user.first
#     },
#     {
#     title: 'High-alt killer',
#     description: 'Above 7km, absolute beast. Flaps help it turn like a spit.',
#     score: 4,
#     aircraft: aircrafts.second,
#     user: user.first
#     }
# ]

# comments = Comment.create [
#     {
#         description: 'totally agree'
#     }
# ]
