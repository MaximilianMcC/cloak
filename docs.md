# General Documentation
Documentation regarding basic features of the site.

---
- [Creating a new post](#creating-a-new-post)
---

## Creating a new post
Posts can be created using the `Create post` button located on the left sidebar at the top.
![Create post button](https://i.imgur.com/kQvlaSB.png)


# Technical API Documentation
Documentation regarding the API used to control the site.

---
- [Creating a new post](#creating-a-new-post-using-api)
	- [Body Payload](#body-payload)
	- [Content Types](#content-types)
		- [Text](#text)
		- [Images/GIFs](#imagegif)
		- [Polls](#polls)
- [Getting posts](#getting-a-post)
---

## Creating a new post using API
Posts can be created using the `POST /add-post` endpoint. The post data is carried over in the post body.

### body payload
The body payload must include four different keys. Failure to address these will result in a response of `500`.
| **Key**     | **Type**   |
|-------------|------------|
| `title`     | `string`   |
| `content`   | `Object[]` |
| `upvotes`   | `uint`     |
| `downvotes` | `uint`     |
```json
{
	"title": "Hello, world!",
	"content": [],
	"upvotes": 0,
	"downvotes": 0
}
```

### Content Types
The `content` key from the root takes in an array of objects. These objects is where the content is stored, allowing for multiple types of content to be included in a single post.

---
#### Text
This is for simple text. This text has markdown support and is applied on the client when the posts are rendered.
```json
{
	"type": "text",
	"content": "Your text here."
}
```

---
#### Image/GIF
This is for displaying an image, or a gif. The site doesn't host images, so the images must be hosted in another place.
```json
{
	"type": "image",
	"content": "https://example.com/image.png"
}
```

---
#### Polls
This is for creating polls that users can interact with. The `content` key takes in an array of poll objects.
```json
{
	"type": "poll",
	"content": [
		{
			"text": "Poll option 1",
			"votes": 23
		},
		{
			"text": "Poll option 2",
			"votes": 13
		}
	]
}
```

## Getting a post
Posts can be fetched using the `GET /posts` endpoint. This will return an array of all posts currently in the database.