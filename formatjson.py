import json

f = open('article-content.json', 'r')

data = json.loads(f.read())
f.close

for entry in data['content'][0]:
    

