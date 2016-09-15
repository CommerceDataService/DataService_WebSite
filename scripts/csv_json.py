<<<<<<< HEAD
import csv, ujson as json, pprint

pp = pprint.PrettyPrinter(indent=2)

def mapjson(course, uid, course_key = ['first_name','last_name','position','teams', 'picture_file','quote','quote_author','life_Story','why_cds']):
    course_entry = { key: value for (key, value) in zip(course_key, course) }
    course_entry['uid'] = uid
    return course_entry

course_json = []
with open('./data/CDS_Team_Responses.csv', 'rt') as f:
    courses = csv.reader(f)
    for i, course in enumerate(courses):
        # if i == 0:
        #     course_key = course
        if i != 0:
            course_json.append(mapjson(course, i))

with open('../mixitup/cds_team.json', 'wt') as f:
    json.dump({ 'data':course_json }, f)
