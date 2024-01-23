import json

# Fields:
# ['type', 'id', 'authors', 'title', 'booktitle', 'isbn', 'year', 'doi', 'address', 'journal', 'volume', 'issn', 'publisher', 'month', 'editors', 'chapter', 'pages', 'howpublished', 'school']
# \item[[SRFP93]] \textsf{H. Santos, José Carlos Ramalho, J. M.
# Fernandes, A. J. Proença}, \emph{"A Heterogeneous Computer Vision
# Architecture: Implementation Issues"}, 1st International Meeting on Vector
# and Paralell Processing, 1993.

def to_latex(paper):
    """Converts a paper from JSON to LaTeX format."""
    res = f"""
\item[[{paper['id']}]]
    """
    res += "\\textsf{" + ", ".join(paper['authors']) + "}, "
    res += "\emph{\"" + paper['title'] + "\"}, "
    if 'booktitle' in paper.keys():
       res += paper['booktitle'] + ", "
    if 'address' in paper.keys():
       res += paper['address'] + ", "
    if 'journal' in paper.keys():
       res += paper['journal'] + ", "
    if 'isbn' in paper.keys():
       res += "ISBN: " + paper['isbn'] + ", "
    if 'issn' in paper.keys():
       res += "ISSN: " + paper['issn'] + ", "
    if 'journal' in paper.keys():
       res += "Journal: " + paper['journal'] + ", "
    if 'volume' in paper.keys():
       res += "Volume: " + paper['volume'] + ", "
    if 'publisher' in paper.keys():
       res += "Publisher: " + paper['publisher'] + ", "   
    if 'doi' in paper.keys():
       res += r"\url{" + paper['doi'] + "}, "
    if 'howpublished' in paper.keys():
       res += r"\url{" + paper['howpublished'] + "}, "
    if 'month' in paper.keys():
       res += paper['month'] + ", "
    res += paper['year'] + ".\n"
    return res

f = open("myJSONDatabase.json") 
db = json.load(f)
papers = db['pubs']
pubs = sorted(papers, key=lambda x: x['year'], reverse = True)

inproc = [p for p in pubs if p['type'] == "inproceedings"]




latex_list = "\\begin{description}\n"
print("\% Artigos processados: " + str(len(inproc)))
for paper in pubs:
    latex_list += to_latex(paper)
latex_list += "\\end{description}\n"

print(latex_list)

