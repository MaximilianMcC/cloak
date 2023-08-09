# API Documentation
This is the technical documentation for using the clock API. It also has some stuff relating to the database.

## Database structure
This is the main database structure. I will be using MongoDB to create the NoSQL database for this project. In a pervious iteration I used a relational sqlite3 database, however it wasn't a very good fit for the project.

### Post Document
| Name      | Data type | What it is                              |
|-----------|-----------|-----------------------------------------|
| title     | string    | The post title                          |
| content   | string[]  | Post content. Filled with post objects. |
| upvotes   | uint      | Number of upvotes (likes)               |
| downvotes | uint      | Number of downvotes (dislikes)          |
### Post objects:
There are three main types of post objects: text, media, and interactive poll.

**Normal text**
| Name | Data type | What it is                                      |
|------|-----------|-------------------------------------------------|
| text | string    | Text content. Written in MD, then saved as HTML |

**Media**
| Name    | Data type | What it is                                     |
|---------|-----------|------------------------------------------------|
| url     | string    | url to the media in question                   |
| altText | string    | Alt text. Optional; default will be post title |

**Poll**
(array of these)
| Name  | Data type | What it is                        |
|-------|-----------|-----------------------------------|
| text  | string    | The text regarding the poll item. |
| votes | uint      | How many votes the item has.      |

## API Endpoints
The API is used to control the data of the app. No key is required to use it.

### `POST /create-post`
This is used to create a new post. Post details are to be sent in the body of the request. The body should be supplied with `title` and `content`
```json
// Example request of a post that contains some text, and an image.
{
	"title": "My first post",
	"content": [
		{
			"type": "text",
			"content": "Hello, world! This is an example post\nLorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, dolorum?"
		},
		{
			"type": "image",
			"url": "https://picsum.photos/1024"
		}
	]
}
```