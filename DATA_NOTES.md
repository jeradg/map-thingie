# Data notes

## Primary models

### User

A `user` is the top-level actor in the system.

### Journey

A `user` has many `journeys`.

A `journey` is an ordered collection of steps.

### Step

A `step` is the combination of a geographic location with a name and a description. The description is a Markdown string. The description might tell a story of something that the user did at that location; it might be a review of a restaurant or hotel at that location; it might be a write-up for a travel guide written for a friend.

## Data diagram
```txt
                      users
                     /
                   /
                 /
                 |
                / \
              journeys
                 |
                / \
               steps
```

## Data example

```json
{
  "journey": {
    "name": "My first journey",
    "description": "Some Markdown text",
    "created_at": "2019-01-01T01:01:01.000Z",
    "updated_at": "2019-01-01T01:01:01.000Z",
    "steps": [
      {
        "lat": 43.761539,
        "lng": -79.411079,
        "name": "The first step",
        "happened_at": "2019-01-01T01:01:01.000Z", // optional
        "description": "Some Markdown text",
        "created_at": "2019-01-01T01:01:01.000Z",
        "updated_at": "2019-01-01T01:01:01.000Z"
      }
    ]
  }
}
```
