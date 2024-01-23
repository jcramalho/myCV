# 2023-01-31 by jcr
#
# Adiciona um id a todos os registos da BD:
#   - Comunicações: comms1, comms2, ...
#   - Arguições: theexa1, theexa2, ...
#   - Supervisões: thesup1, thesup2, ...
#   - UCs: courses1, courses2, ...

import json 

fin = open("./myJSONDatabase.json")
db = json.load(fin)
fin.close()

for index, reg in enumerate(db['comms']):
    reg['id'] = "comms" + str(index)

for index, reg in enumerate(db['theexa']):
    reg['id'] = "theexa" + str(index)

for index, reg in enumerate(db['thesup']):
    reg['id'] = "thesup" + str(index)

for index, reg in enumerate(db['courses']):
    reg['id'] = "courses" + str(index)

fout = open("./myJSONDatabase.json", "w")
json.dump(db, fout, indent = 4)