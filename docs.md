# API Documentation
This is the technical documentation for using the clock API. It also has some stuff relating to the database.

## Database structure
This is the main database structure.

### Main (parent)
| name  | what it is               |
|-------|--------------------------|
| Posts | post object thing. array |

### Post (child)
| name      | data type | what it is                     |
|-----------|-----------|--------------------------------|
| index     | uint      | index/id of post               |
| title     | string    | The post title                 |
| content   | string[]  | Post content. Serialized json. |
| upvotes   | uint      | Number of upvotes (likes)      |
| downvotes | uint      | Number of downvotes (dislikes) |