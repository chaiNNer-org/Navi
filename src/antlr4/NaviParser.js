// Generated from src/antlr4/Navi.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import NaviListener from './NaviListener.js';
const serializedATN = [4,1,51,469,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
1,0,1,0,5,0,87,8,0,10,0,12,0,90,9,0,1,0,1,0,1,1,5,1,95,8,1,10,1,12,1,98,
9,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,3,3,110,8,3,1,3,1,3,1,4,1,4,
1,4,1,4,3,4,118,8,4,1,5,1,5,1,5,1,5,3,5,124,8,5,1,6,1,6,1,6,1,6,3,6,130,
8,6,1,6,1,6,1,6,1,6,1,6,3,6,137,8,6,1,7,1,7,1,7,3,7,142,8,7,1,7,1,7,1,7,
1,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,154,8,8,10,8,12,8,157,9,8,1,8,3,8,160,8,
8,5,8,162,8,8,10,8,12,8,165,9,8,1,8,1,8,1,9,1,9,3,9,171,8,9,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,3,10,191,8,10,1,11,1,11,1,11,1,11,1,11,1,11,5,11,199,8,11,10,11,12,
11,202,9,11,1,11,3,11,205,8,11,3,11,207,8,11,1,11,1,11,1,12,1,12,3,12,213,
8,12,1,12,1,12,3,12,217,8,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,
1,14,1,15,1,15,1,15,1,16,1,16,5,16,234,8,16,10,16,12,16,237,9,16,1,16,1,
16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,3,17,248,8,17,1,18,1,18,1,18,5,18,
253,8,18,10,18,12,18,256,9,18,1,19,3,19,259,8,19,1,19,1,19,1,20,1,20,1,20,
5,20,266,8,20,10,20,12,20,269,9,20,1,21,1,21,1,21,5,21,274,8,21,10,21,12,
21,277,9,21,1,22,1,22,1,22,5,22,282,8,22,10,22,12,22,285,9,22,1,23,1,23,
1,23,5,23,290,8,23,10,23,12,23,293,9,23,1,24,1,24,1,24,3,24,298,8,24,1,25,
5,25,301,8,25,10,25,12,25,304,9,25,1,25,1,25,1,26,1,26,1,26,5,26,311,8,26,
10,26,12,26,314,9,26,1,27,1,27,1,27,5,27,319,8,27,10,27,12,27,322,9,27,1,
28,1,28,1,29,1,29,1,29,5,29,329,8,29,10,29,12,29,332,9,29,1,29,3,29,335,
8,29,3,29,337,8,29,1,30,1,30,1,30,1,30,5,30,343,8,30,10,30,12,30,346,9,30,
1,30,3,30,349,8,30,3,30,351,8,30,1,30,1,30,1,31,1,31,1,31,1,31,5,31,359,
8,31,10,31,12,31,362,9,31,1,31,1,31,1,31,1,31,5,31,368,8,31,10,31,12,31,
371,9,31,1,31,3,31,374,8,31,3,31,376,8,31,3,31,378,8,31,1,31,1,31,1,31,5,
31,383,8,31,10,31,12,31,386,9,31,1,31,3,31,389,8,31,3,31,391,8,31,3,31,393,
8,31,1,31,1,31,1,32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,3,34,405,8,34,1,35,
1,35,1,35,1,35,5,35,411,8,35,10,35,12,35,414,9,35,1,35,3,35,417,8,35,3,35,
419,8,35,1,35,1,35,1,36,1,36,1,36,1,36,5,36,427,8,36,10,36,12,36,430,9,36,
1,36,1,36,3,36,434,8,36,1,36,3,36,437,8,36,1,36,3,36,440,8,36,3,36,442,8,
36,1,36,1,36,1,37,1,37,1,37,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,40,1,40,
1,41,1,41,1,41,1,41,3,41,462,8,41,5,41,464,8,41,10,41,12,41,467,9,41,1,41,
0,0,42,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,
48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,0,4,1,0,40,41,1,0,
38,39,1,0,42,47,2,0,14,14,23,24,498,0,88,1,0,0,0,2,96,1,0,0,0,4,102,1,0,
0,0,6,104,1,0,0,0,8,117,1,0,0,0,10,119,1,0,0,0,12,125,1,0,0,0,14,138,1,0,
0,0,16,147,1,0,0,0,18,168,1,0,0,0,20,190,1,0,0,0,22,192,1,0,0,0,24,212,1,
0,0,0,26,221,1,0,0,0,28,226,1,0,0,0,30,228,1,0,0,0,32,231,1,0,0,0,34,241,
1,0,0,0,36,249,1,0,0,0,38,258,1,0,0,0,40,262,1,0,0,0,42,270,1,0,0,0,44,278,
1,0,0,0,46,286,1,0,0,0,48,294,1,0,0,0,50,302,1,0,0,0,52,307,1,0,0,0,54,315,
1,0,0,0,56,323,1,0,0,0,58,336,1,0,0,0,60,338,1,0,0,0,62,354,1,0,0,0,64,396,
1,0,0,0,66,399,1,0,0,0,68,402,1,0,0,0,70,406,1,0,0,0,72,422,1,0,0,0,74,445,
1,0,0,0,76,448,1,0,0,0,78,452,1,0,0,0,80,455,1,0,0,0,82,457,1,0,0,0,84,87,
3,8,4,0,85,87,3,4,2,0,86,84,1,0,0,0,86,85,1,0,0,0,87,90,1,0,0,0,88,86,1,
0,0,0,88,89,1,0,0,0,89,91,1,0,0,0,90,88,1,0,0,0,91,92,5,0,0,1,92,1,1,0,0,
0,93,95,3,8,4,0,94,93,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,
97,99,1,0,0,0,98,96,1,0,0,0,99,100,3,56,28,0,100,101,5,0,0,1,101,3,1,0,0,
0,102,103,3,6,3,0,103,5,1,0,0,0,104,105,5,20,0,0,105,106,5,16,0,0,106,107,
3,82,41,0,107,109,3,72,36,0,108,110,3,78,39,0,109,108,1,0,0,0,109,110,1,
0,0,0,110,111,1,0,0,0,111,112,5,1,0,0,112,7,1,0,0,0,113,118,3,10,5,0,114,
118,3,12,6,0,115,118,3,14,7,0,116,118,3,16,8,0,117,113,1,0,0,0,117,114,1,
0,0,0,117,115,1,0,0,0,117,116,1,0,0,0,118,9,1,0,0,0,119,120,5,25,0,0,120,
123,3,82,41,0,121,124,5,1,0,0,122,124,3,60,30,0,123,121,1,0,0,0,123,122,
1,0,0,0,124,11,1,0,0,0,125,126,5,16,0,0,126,127,3,82,41,0,127,129,3,70,35,
0,128,130,3,78,39,0,129,128,1,0,0,0,129,130,1,0,0,0,130,136,1,0,0,0,131,
132,5,2,0,0,132,133,3,56,28,0,133,134,5,1,0,0,134,137,1,0,0,0,135,137,3,
32,16,0,136,131,1,0,0,0,136,135,1,0,0,0,137,13,1,0,0,0,138,139,5,21,0,0,
139,141,3,82,41,0,140,142,3,78,39,0,141,140,1,0,0,0,141,142,1,0,0,0,142,
143,1,0,0,0,143,144,5,2,0,0,144,145,3,56,28,0,145,146,5,1,0,0,146,15,1,0,
0,0,147,148,5,18,0,0,148,149,3,82,41,0,149,163,5,3,0,0,150,155,3,18,9,0,
151,152,5,4,0,0,152,154,3,18,9,0,153,151,1,0,0,0,154,157,1,0,0,0,155,153,
1,0,0,0,155,156,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,158,160,5,4,0,0,
159,158,1,0,0,0,159,160,1,0,0,0,160,162,1,0,0,0,161,150,1,0,0,0,162,165,
1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,166,1,0,0,0,165,163,1,0,0,0,
166,167,5,5,0,0,167,17,1,0,0,0,168,170,5,37,0,0,169,171,3,60,30,0,170,169,
1,0,0,0,170,171,1,0,0,0,171,19,1,0,0,0,172,191,5,29,0,0,173,191,5,30,0,0,
174,191,5,31,0,0,175,191,5,32,0,0,176,191,5,33,0,0,177,191,5,34,0,0,178,
191,5,35,0,0,179,191,5,36,0,0,180,191,3,22,11,0,181,191,3,34,17,0,182,191,
3,26,13,0,183,191,3,28,14,0,184,191,3,30,15,0,185,191,3,32,16,0,186,187,
5,6,0,0,187,188,3,56,28,0,188,189,5,7,0,0,189,191,1,0,0,0,190,172,1,0,0,
0,190,173,1,0,0,0,190,174,1,0,0,0,190,175,1,0,0,0,190,176,1,0,0,0,190,177,
1,0,0,0,190,178,1,0,0,0,190,179,1,0,0,0,190,180,1,0,0,0,190,181,1,0,0,0,
190,182,1,0,0,0,190,183,1,0,0,0,190,184,1,0,0,0,190,185,1,0,0,0,190,186,
1,0,0,0,191,21,1,0,0,0,192,193,5,22,0,0,193,194,3,56,28,0,194,206,5,3,0,
0,195,200,3,24,12,0,196,197,5,4,0,0,197,199,3,24,12,0,198,196,1,0,0,0,199,
202,1,0,0,0,200,198,1,0,0,0,200,201,1,0,0,0,201,204,1,0,0,0,202,200,1,0,
0,0,203,205,5,4,0,0,204,203,1,0,0,0,204,205,1,0,0,0,205,207,1,0,0,0,206,
195,1,0,0,0,206,207,1,0,0,0,207,208,1,0,0,0,208,209,5,5,0,0,209,23,1,0,0,
0,210,213,5,28,0,0,211,213,3,56,28,0,212,210,1,0,0,0,212,211,1,0,0,0,213,
216,1,0,0,0,214,215,5,15,0,0,215,217,5,37,0,0,216,214,1,0,0,0,216,217,1,
0,0,0,217,218,1,0,0,0,218,219,5,8,0,0,219,220,3,56,28,0,220,25,1,0,0,0,221,
222,3,82,41,0,222,223,5,6,0,0,223,224,3,58,29,0,224,225,5,7,0,0,225,27,1,
0,0,0,226,227,3,82,41,0,227,29,1,0,0,0,228,229,3,82,41,0,229,230,3,62,31,
0,230,31,1,0,0,0,231,235,5,3,0,0,232,234,3,8,4,0,233,232,1,0,0,0,234,237,
1,0,0,0,235,233,1,0,0,0,235,236,1,0,0,0,236,238,1,0,0,0,237,235,1,0,0,0,
238,239,3,56,28,0,239,240,5,5,0,0,240,33,1,0,0,0,241,242,5,19,0,0,242,243,
3,56,28,0,243,244,3,32,16,0,244,247,5,17,0,0,245,248,3,32,16,0,246,248,3,
34,17,0,247,245,1,0,0,0,247,246,1,0,0,0,248,35,1,0,0,0,249,254,3,20,10,0,
250,251,5,9,0,0,251,253,5,37,0,0,252,250,1,0,0,0,253,256,1,0,0,0,254,252,
1,0,0,0,254,255,1,0,0,0,255,37,1,0,0,0,256,254,1,0,0,0,257,259,5,38,0,0,
258,257,1,0,0,0,258,259,1,0,0,0,259,260,1,0,0,0,260,261,3,36,18,0,261,39,
1,0,0,0,262,267,3,38,19,0,263,264,7,0,0,0,264,266,3,38,19,0,265,263,1,0,
0,0,266,269,1,0,0,0,267,265,1,0,0,0,267,268,1,0,0,0,268,41,1,0,0,0,269,267,
1,0,0,0,270,275,3,40,20,0,271,272,7,1,0,0,272,274,3,40,20,0,273,271,1,0,
0,0,274,277,1,0,0,0,275,273,1,0,0,0,275,276,1,0,0,0,276,43,1,0,0,0,277,275,
1,0,0,0,278,283,3,42,21,0,279,280,5,10,0,0,280,282,3,42,21,0,281,279,1,0,
0,0,282,285,1,0,0,0,283,281,1,0,0,0,283,284,1,0,0,0,284,45,1,0,0,0,285,283,
1,0,0,0,286,291,3,44,22,0,287,288,5,11,0,0,288,290,3,44,22,0,289,287,1,0,
0,0,290,293,1,0,0,0,291,289,1,0,0,0,291,292,1,0,0,0,292,47,1,0,0,0,293,291,
1,0,0,0,294,297,3,46,23,0,295,296,7,2,0,0,296,298,3,46,23,0,297,295,1,0,
0,0,297,298,1,0,0,0,298,49,1,0,0,0,299,301,5,23,0,0,300,299,1,0,0,0,301,
304,1,0,0,0,302,300,1,0,0,0,302,303,1,0,0,0,303,305,1,0,0,0,304,302,1,0,
0,0,305,306,3,48,24,0,306,51,1,0,0,0,307,312,3,50,25,0,308,309,5,14,0,0,
309,311,3,50,25,0,310,308,1,0,0,0,311,314,1,0,0,0,312,310,1,0,0,0,312,313,
1,0,0,0,313,53,1,0,0,0,314,312,1,0,0,0,315,320,3,52,26,0,316,317,5,24,0,
0,317,319,3,52,26,0,318,316,1,0,0,0,319,322,1,0,0,0,320,318,1,0,0,0,320,
321,1,0,0,0,321,55,1,0,0,0,322,320,1,0,0,0,323,324,3,54,27,0,324,57,1,0,
0,0,325,330,3,56,28,0,326,327,5,4,0,0,327,329,3,56,28,0,328,326,1,0,0,0,
329,332,1,0,0,0,330,328,1,0,0,0,330,331,1,0,0,0,331,334,1,0,0,0,332,330,
1,0,0,0,333,335,5,4,0,0,334,333,1,0,0,0,334,335,1,0,0,0,335,337,1,0,0,0,
336,325,1,0,0,0,336,337,1,0,0,0,337,59,1,0,0,0,338,350,5,3,0,0,339,344,3,
66,33,0,340,341,5,4,0,0,341,343,3,66,33,0,342,340,1,0,0,0,343,346,1,0,0,
0,344,342,1,0,0,0,344,345,1,0,0,0,345,348,1,0,0,0,346,344,1,0,0,0,347,349,
5,4,0,0,348,347,1,0,0,0,348,349,1,0,0,0,349,351,1,0,0,0,350,339,1,0,0,0,
350,351,1,0,0,0,351,352,1,0,0,0,352,353,5,5,0,0,353,61,1,0,0,0,354,392,5,
3,0,0,355,360,3,64,32,0,356,357,5,4,0,0,357,359,3,64,32,0,358,356,1,0,0,
0,359,362,1,0,0,0,360,358,1,0,0,0,360,361,1,0,0,0,361,377,1,0,0,0,362,360,
1,0,0,0,363,375,5,4,0,0,364,369,3,68,34,0,365,366,5,4,0,0,366,368,3,68,34,
0,367,365,1,0,0,0,368,371,1,0,0,0,369,367,1,0,0,0,369,370,1,0,0,0,370,373,
1,0,0,0,371,369,1,0,0,0,372,374,5,4,0,0,373,372,1,0,0,0,373,374,1,0,0,0,
374,376,1,0,0,0,375,364,1,0,0,0,375,376,1,0,0,0,376,378,1,0,0,0,377,363,
1,0,0,0,377,378,1,0,0,0,378,393,1,0,0,0,379,384,3,68,34,0,380,381,5,4,0,
0,381,383,3,68,34,0,382,380,1,0,0,0,383,386,1,0,0,0,384,382,1,0,0,0,384,
385,1,0,0,0,385,388,1,0,0,0,386,384,1,0,0,0,387,389,5,4,0,0,388,387,1,0,
0,0,388,389,1,0,0,0,389,391,1,0,0,0,390,379,1,0,0,0,390,391,1,0,0,0,391,
393,1,0,0,0,392,355,1,0,0,0,392,390,1,0,0,0,393,394,1,0,0,0,394,395,5,5,
0,0,395,63,1,0,0,0,396,397,5,48,0,0,397,398,3,56,28,0,398,65,1,0,0,0,399,
400,5,37,0,0,400,401,3,78,39,0,401,67,1,0,0,0,402,404,5,37,0,0,403,405,3,
78,39,0,404,403,1,0,0,0,404,405,1,0,0,0,405,69,1,0,0,0,406,418,5,6,0,0,407,
412,3,74,37,0,408,409,5,4,0,0,409,411,3,74,37,0,410,408,1,0,0,0,411,414,
1,0,0,0,412,410,1,0,0,0,412,413,1,0,0,0,413,416,1,0,0,0,414,412,1,0,0,0,
415,417,5,4,0,0,416,415,1,0,0,0,416,417,1,0,0,0,417,419,1,0,0,0,418,407,
1,0,0,0,418,419,1,0,0,0,419,420,1,0,0,0,420,421,5,7,0,0,421,71,1,0,0,0,422,
441,5,6,0,0,423,428,3,74,37,0,424,425,5,4,0,0,425,427,3,74,37,0,426,424,
1,0,0,0,427,430,1,0,0,0,428,426,1,0,0,0,428,429,1,0,0,0,429,433,1,0,0,0,
430,428,1,0,0,0,431,432,5,4,0,0,432,434,3,76,38,0,433,431,1,0,0,0,433,434,
1,0,0,0,434,437,1,0,0,0,435,437,3,76,38,0,436,423,1,0,0,0,436,435,1,0,0,
0,437,439,1,0,0,0,438,440,5,4,0,0,439,438,1,0,0,0,439,440,1,0,0,0,440,442,
1,0,0,0,441,436,1,0,0,0,441,442,1,0,0,0,442,443,1,0,0,0,443,444,5,7,0,0,
444,73,1,0,0,0,445,446,5,37,0,0,446,447,3,78,39,0,447,75,1,0,0,0,448,449,
5,48,0,0,449,450,5,37,0,0,450,451,3,78,39,0,451,77,1,0,0,0,452,453,5,12,
0,0,453,454,3,56,28,0,454,79,1,0,0,0,455,456,7,3,0,0,456,81,1,0,0,0,457,
465,5,37,0,0,458,461,5,13,0,0,459,462,5,37,0,0,460,462,3,80,40,0,461,459,
1,0,0,0,461,460,1,0,0,0,462,464,1,0,0,0,463,458,1,0,0,0,464,467,1,0,0,0,
465,463,1,0,0,0,465,466,1,0,0,0,466,83,1,0,0,0,467,465,1,0,0,0,57,86,88,
96,109,117,123,129,136,141,155,159,163,170,190,200,204,206,212,216,235,247,
254,258,267,275,283,291,297,302,312,320,330,334,336,344,348,350,360,369,
373,375,377,384,388,390,392,404,412,416,418,428,433,436,439,441,461,465];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class NaviParser extends antlr4.Parser {

    static grammarFileName = "Navi.g4";
    static literalNames = [ null, "';'", "'='", "'{'", "','", "'}'", "'('", 
                            "')'", "'=>'", "'.'", "'&'", "'|'", "':'", "'::'", 
                            "'and'", "'as'", "'def'", "'else'", "'enum'", 
                            "'if'", "'intrinsic'", "'let'", "'match'", "'not'", 
                            "'or'", "'struct'", "'self'", "'trait'", "'_'", 
                            null, null, null, null, null, null, null, null, 
                            null, "'-'", "'+'", "'*'", "'/'", "'=='", "'!='", 
                            "'>'", "'<'", "'>='", "'<='", "'...'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "And", 
                             "As", "Def", "Else", "Enum", "If", "Intrinsic", 
                             "Let", "Match", "Not", "Or", "Struct", "Self", 
                             "Trait", "Discard", "IntInterval", "NonIntInterval", 
                             "IntervalInclusive", "IntervalMinExclusive", 
                             "IntervalMaxExclusive", "IntervalExclusive", 
                             "Number", "String", "Identifier", "OpMinus", 
                             "OpPlus", "OpMult", "OpDiv", "OpEqual", "OpNotEqual", 
                             "OpGt", "OpLt", "OpGte", "OpLte", "OpSpread", 
                             "Space", "LineComment", "BlockComment" ];
    static ruleNames = [ "definitionDocument", "expressionDocument", "declaration", 
                         "intrinsicFunctionDeclaration", "definition", "structDefinition", 
                         "functionDefinition", "variableDefinition", "enumDefinition", 
                         "enumVariant", "primaryExpression", "matchExpression", 
                         "matchArm", "functionCall", "named", "structExpression", 
                         "scopeExpression", "ifExpression", "fieldAccessExpression", 
                         "negateExpression", "multiplicativeExpression", 
                         "additiveExpression", "intersectionExpression", 
                         "unionExpression", "comparisonExpression", "logicalNotExpression", 
                         "logicalAndExpression", "logicalOrExpression", 
                         "expression", "args", "fields", "fieldsSpread", 
                         "spread", "field", "fieldMaybeAssert", "parameters", 
                         "varArgParameters", "parameter", "varArgParameter", 
                         "assert", "contextualKeyword", "name" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = NaviParser.ruleNames;
        this.literalNames = NaviParser.literalNames;
        this.symbolicNames = NaviParser.symbolicNames;
    }



	definitionDocument() {
	    let localctx = new DefinitionDocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, NaviParser.RULE_definitionDocument);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 37027840) !== 0)) {
	            this.state = 86;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 16:
	            case 18:
	            case 21:
	            case 25:
	                this.state = 84;
	                this.definition();
	                break;
	            case 20:
	                this.state = 85;
	                this.declaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 90;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 91;
	        this.match(NaviParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionDocument() {
	    let localctx = new ExpressionDocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, NaviParser.RULE_expressionDocument);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 35979264) !== 0)) {
	            this.state = 93;
	            this.definition();
	            this.state = 98;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 99;
	        this.expression();
	        this.state = 100;
	        this.match(NaviParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, NaviParser.RULE_declaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        this.intrinsicFunctionDeclaration();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	intrinsicFunctionDeclaration() {
	    let localctx = new IntrinsicFunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, NaviParser.RULE_intrinsicFunctionDeclaration);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 104;
	        this.match(NaviParser.Intrinsic);
	        this.state = 105;
	        this.match(NaviParser.Def);
	        this.state = 106;
	        this.name();
	        this.state = 107;
	        this.varArgParameters();
	        this.state = 109;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 108;
	            this.assert();
	        }

	        this.state = 111;
	        this.match(NaviParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, NaviParser.RULE_definition);
	    try {
	        this.state = 117;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 113;
	            this.structDefinition();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 114;
	            this.functionDefinition();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 115;
	            this.variableDefinition();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 116;
	            this.enumDefinition();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	structDefinition() {
	    let localctx = new StructDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, NaviParser.RULE_structDefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 119;
	        this.match(NaviParser.Struct);
	        this.state = 120;
	        this.name();
	        this.state = 123;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.state = 121;
	            this.match(NaviParser.T__0);
	            break;
	        case 3:
	            this.state = 122;
	            this.fields();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDefinition() {
	    let localctx = new FunctionDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, NaviParser.RULE_functionDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 125;
	        this.match(NaviParser.Def);
	        this.state = 126;
	        this.name();
	        this.state = 127;
	        this.parameters();
	        this.state = 129;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 128;
	            this.assert();
	        }

	        this.state = 136;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.state = 131;
	            this.match(NaviParser.T__1);
	            this.state = 132;
	            this.expression();
	            this.state = 133;
	            this.match(NaviParser.T__0);
	            break;
	        case 3:
	            this.state = 135;
	            this.scopeExpression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDefinition() {
	    let localctx = new VariableDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, NaviParser.RULE_variableDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(NaviParser.Let);
	        this.state = 139;
	        this.name();
	        this.state = 141;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 140;
	            this.assert();
	        }

	        this.state = 143;
	        this.match(NaviParser.T__1);
	        this.state = 144;
	        this.expression();
	        this.state = 145;
	        this.match(NaviParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumDefinition() {
	    let localctx = new EnumDefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, NaviParser.RULE_enumDefinition);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 147;
	        this.match(NaviParser.Enum);
	        this.state = 148;
	        this.name();
	        this.state = 149;
	        this.match(NaviParser.T__2);
	        this.state = 163;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37) {
	            this.state = 150;
	            this.enumVariant();
	            this.state = 155;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 151;
	                    this.match(NaviParser.T__3);
	                    this.state = 152;
	                    this.enumVariant(); 
	                }
	                this.state = 157;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	            }

	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 158;
	                this.match(NaviParser.T__3);
	            }

	            this.state = 165;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 166;
	        this.match(NaviParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	enumVariant() {
	    let localctx = new EnumVariantContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, NaviParser.RULE_enumVariant);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this.match(NaviParser.Identifier);
	        this.state = 170;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 169;
	            this.fields();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primaryExpression() {
	    let localctx = new PrimaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, NaviParser.RULE_primaryExpression);
	    try {
	        this.state = 190;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 172;
	            this.match(NaviParser.IntInterval);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 173;
	            this.match(NaviParser.NonIntInterval);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 174;
	            this.match(NaviParser.IntervalInclusive);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 175;
	            this.match(NaviParser.IntervalMinExclusive);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 176;
	            this.match(NaviParser.IntervalMaxExclusive);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 177;
	            this.match(NaviParser.IntervalExclusive);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 178;
	            this.match(NaviParser.Number);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 179;
	            this.match(NaviParser.String);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 180;
	            this.matchExpression();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 181;
	            this.ifExpression();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 182;
	            this.functionCall();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 183;
	            this.named();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 184;
	            this.structExpression();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 185;
	            this.scopeExpression();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 186;
	            this.match(NaviParser.T__5);
	            this.state = 187;
	            this.expression();
	            this.state = 188;
	            this.match(NaviParser.T__6);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	matchExpression() {
	    let localctx = new MatchExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, NaviParser.RULE_matchExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 192;
	        this.match(NaviParser.Match);
	        this.state = 193;
	        this.expression();
	        this.state = 194;
	        this.match(NaviParser.T__2);
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4039639112) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 127) !== 0)) {
	            this.state = 195;
	            this.matchArm();
	            this.state = 200;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 196;
	                    this.match(NaviParser.T__3);
	                    this.state = 197;
	                    this.matchArm(); 
	                }
	                this.state = 202;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	            }

	            this.state = 204;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 203;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 208;
	        this.match(NaviParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	matchArm() {
	    let localctx = new MatchArmContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, NaviParser.RULE_matchArm);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 212;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.state = 210;
	            this.match(NaviParser.Discard);
	            break;
	        case 3:
	        case 6:
	        case 19:
	        case 22:
	        case 23:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	            this.state = 211;
	            this.expression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 216;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 214;
	            this.match(NaviParser.As);
	            this.state = 215;
	            this.match(NaviParser.Identifier);
	        }

	        this.state = 218;
	        this.match(NaviParser.T__7);
	        this.state = 219;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, NaviParser.RULE_functionCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 221;
	        this.name();
	        this.state = 222;
	        this.match(NaviParser.T__5);
	        this.state = 223;
	        this.args();
	        this.state = 224;
	        this.match(NaviParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	named() {
	    let localctx = new NamedContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, NaviParser.RULE_named);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 226;
	        this.name();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	structExpression() {
	    let localctx = new StructExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, NaviParser.RULE_structExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 228;
	        this.name();
	        this.state = 229;
	        this.fieldsSpread();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	scopeExpression() {
	    let localctx = new ScopeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, NaviParser.RULE_scopeExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 231;
	        this.match(NaviParser.T__2);
	        this.state = 235;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 35979264) !== 0)) {
	            this.state = 232;
	            this.definition();
	            this.state = 237;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 238;
	        this.expression();
	        this.state = 239;
	        this.match(NaviParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifExpression() {
	    let localctx = new IfExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, NaviParser.RULE_ifExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this.match(NaviParser.If);
	        this.state = 242;
	        this.expression();
	        this.state = 243;
	        this.scopeExpression();
	        this.state = 244;
	        this.match(NaviParser.Else);
	        this.state = 247;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 245;
	            this.scopeExpression();
	            break;
	        case 19:
	            this.state = 246;
	            this.ifExpression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldAccessExpression() {
	    let localctx = new FieldAccessExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, NaviParser.RULE_fieldAccessExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.primaryExpression();
	        this.state = 254;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 250;
	            this.match(NaviParser.T__8);
	            this.state = 251;
	            this.match(NaviParser.Identifier);
	            this.state = 256;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	negateExpression() {
	    let localctx = new NegateExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, NaviParser.RULE_negateExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
	            this.state = 257;
	            this.match(NaviParser.OpMinus);
	        }

	        this.state = 260;
	        this.fieldAccessExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplicativeExpression() {
	    let localctx = new MultiplicativeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, NaviParser.RULE_multiplicativeExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.negateExpression();
	        this.state = 267;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40 || _la===41) {
	            this.state = 263;
	            _la = this._input.LA(1);
	            if(!(_la===40 || _la===41)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 264;
	            this.negateExpression();
	            this.state = 269;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	additiveExpression() {
	    let localctx = new AdditiveExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, NaviParser.RULE_additiveExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.multiplicativeExpression();
	        this.state = 275;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38 || _la===39) {
	            this.state = 271;
	            _la = this._input.LA(1);
	            if(!(_la===38 || _la===39)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 272;
	            this.multiplicativeExpression();
	            this.state = 277;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	intersectionExpression() {
	    let localctx = new IntersectionExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, NaviParser.RULE_intersectionExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 278;
	        this.additiveExpression();
	        this.state = 283;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 279;
	            this.match(NaviParser.T__9);
	            this.state = 280;
	            this.additiveExpression();
	            this.state = 285;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unionExpression() {
	    let localctx = new UnionExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, NaviParser.RULE_unionExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 286;
	        this.intersectionExpression();
	        this.state = 291;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 287;
	            this.match(NaviParser.T__10);
	            this.state = 288;
	            this.intersectionExpression();
	            this.state = 293;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparisonExpression() {
	    let localctx = new ComparisonExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, NaviParser.RULE_comparisonExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 294;
	        this.unionExpression();
	        this.state = 297;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 63) !== 0)) {
	            this.state = 295;
	            _la = this._input.LA(1);
	            if(!(((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 63) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 296;
	            this.unionExpression();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	logicalNotExpression() {
	    let localctx = new LogicalNotExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, NaviParser.RULE_logicalNotExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 299;
	            this.match(NaviParser.Not);
	            this.state = 304;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 305;
	        this.comparisonExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	logicalAndExpression() {
	    let localctx = new LogicalAndExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, NaviParser.RULE_logicalAndExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 307;
	        this.logicalNotExpression();
	        this.state = 312;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 308;
	            this.match(NaviParser.And);
	            this.state = 309;
	            this.logicalNotExpression();
	            this.state = 314;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	logicalOrExpression() {
	    let localctx = new LogicalOrExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, NaviParser.RULE_logicalOrExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 315;
	        this.logicalAndExpression();
	        this.state = 320;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===24) {
	            this.state = 316;
	            this.match(NaviParser.Or);
	            this.state = 317;
	            this.logicalAndExpression();
	            this.state = 322;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, NaviParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 323;
	        this.logicalOrExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	args() {
	    let localctx = new ArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, NaviParser.RULE_args);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3771203656) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 127) !== 0)) {
	            this.state = 325;
	            this.expression();
	            this.state = 330;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 326;
	                    this.match(NaviParser.T__3);
	                    this.state = 327;
	                    this.expression(); 
	                }
	                this.state = 332;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
	            }

	            this.state = 334;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 333;
	                this.match(NaviParser.T__3);
	            }

	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fields() {
	    let localctx = new FieldsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, NaviParser.RULE_fields);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 338;
	        this.match(NaviParser.T__2);
	        this.state = 350;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 339;
	            this.field();
	            this.state = 344;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 340;
	                    this.match(NaviParser.T__3);
	                    this.state = 341;
	                    this.field(); 
	                }
	                this.state = 346;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,34,this._ctx);
	            }

	            this.state = 348;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 347;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 352;
	        this.match(NaviParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldsSpread() {
	    let localctx = new FieldsSpreadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, NaviParser.RULE_fieldsSpread);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 354;
	        this.match(NaviParser.T__2);
	        this.state = 392;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	            this.state = 355;
	            this.spread();
	            this.state = 360;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 356;
	                    this.match(NaviParser.T__3);
	                    this.state = 357;
	                    this.spread(); 
	                }
	                this.state = 362;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
	            }

	            this.state = 377;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 363;
	                this.match(NaviParser.T__3);
	                this.state = 375;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===37) {
	                    this.state = 364;
	                    this.fieldMaybeAssert();
	                    this.state = 369;
	                    this._errHandler.sync(this);
	                    var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
	                    while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                        if(_alt===1) {
	                            this.state = 365;
	                            this.match(NaviParser.T__3);
	                            this.state = 366;
	                            this.fieldMaybeAssert(); 
	                        }
	                        this.state = 371;
	                        this._errHandler.sync(this);
	                        _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
	                    }

	                    this.state = 373;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===4) {
	                        this.state = 372;
	                        this.match(NaviParser.T__3);
	                    }

	                }

	            }

	            break;
	        case 5:
	        case 37:
	            this.state = 390;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===37) {
	                this.state = 379;
	                this.fieldMaybeAssert();
	                this.state = 384;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 380;
	                        this.match(NaviParser.T__3);
	                        this.state = 381;
	                        this.fieldMaybeAssert(); 
	                    }
	                    this.state = 386;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
	                }

	                this.state = 388;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===4) {
	                    this.state = 387;
	                    this.match(NaviParser.T__3);
	                }

	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 394;
	        this.match(NaviParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	spread() {
	    let localctx = new SpreadContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, NaviParser.RULE_spread);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        this.match(NaviParser.OpSpread);
	        this.state = 397;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, NaviParser.RULE_field);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 399;
	        this.match(NaviParser.Identifier);
	        this.state = 400;
	        this.assert();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldMaybeAssert() {
	    let localctx = new FieldMaybeAssertContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, NaviParser.RULE_fieldMaybeAssert);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 402;
	        this.match(NaviParser.Identifier);
	        this.state = 404;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 403;
	            this.assert();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameters() {
	    let localctx = new ParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, NaviParser.RULE_parameters);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 406;
	        this.match(NaviParser.T__5);
	        this.state = 418;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 407;
	            this.parameter();
	            this.state = 412;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,47,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 408;
	                    this.match(NaviParser.T__3);
	                    this.state = 409;
	                    this.parameter(); 
	                }
	                this.state = 414;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,47,this._ctx);
	            }

	            this.state = 416;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 415;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 420;
	        this.match(NaviParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varArgParameters() {
	    let localctx = new VarArgParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, NaviParser.RULE_varArgParameters);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 422;
	        this.match(NaviParser.T__5);
	        this.state = 441;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37 || _la===48) {
	            this.state = 436;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 37:
	                this.state = 423;
	                this.parameter();
	                this.state = 428;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,50,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 424;
	                        this.match(NaviParser.T__3);
	                        this.state = 425;
	                        this.parameter(); 
	                    }
	                    this.state = 430;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,50,this._ctx);
	                }

	                this.state = 433;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	                if(la_===1) {
	                    this.state = 431;
	                    this.match(NaviParser.T__3);
	                    this.state = 432;
	                    this.varArgParameter();

	                }
	                break;
	            case 48:
	                this.state = 435;
	                this.varArgParameter();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 439;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 438;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 443;
	        this.match(NaviParser.T__6);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, NaviParser.RULE_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 445;
	        this.match(NaviParser.Identifier);
	        this.state = 446;
	        this.assert();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varArgParameter() {
	    let localctx = new VarArgParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, NaviParser.RULE_varArgParameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 448;
	        this.match(NaviParser.OpSpread);
	        this.state = 449;
	        this.match(NaviParser.Identifier);
	        this.state = 450;
	        this.assert();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assert() {
	    let localctx = new AssertContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, NaviParser.RULE_assert);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 452;
	        this.match(NaviParser.T__11);
	        this.state = 453;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	contextualKeyword() {
	    let localctx = new ContextualKeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, NaviParser.RULE_contextualKeyword);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 455;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 25182208) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, NaviParser.RULE_name);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 457;
	        this.match(NaviParser.Identifier);
	        this.state = 465;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 458;
	            this.match(NaviParser.T__12);
	            this.state = 461;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 37:
	                this.state = 459;
	                this.match(NaviParser.Identifier);
	                break;
	            case 14:
	            case 23:
	            case 24:
	                this.state = 460;
	                this.contextualKeyword();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 467;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

NaviParser.EOF = antlr4.Token.EOF;
NaviParser.T__0 = 1;
NaviParser.T__1 = 2;
NaviParser.T__2 = 3;
NaviParser.T__3 = 4;
NaviParser.T__4 = 5;
NaviParser.T__5 = 6;
NaviParser.T__6 = 7;
NaviParser.T__7 = 8;
NaviParser.T__8 = 9;
NaviParser.T__9 = 10;
NaviParser.T__10 = 11;
NaviParser.T__11 = 12;
NaviParser.T__12 = 13;
NaviParser.And = 14;
NaviParser.As = 15;
NaviParser.Def = 16;
NaviParser.Else = 17;
NaviParser.Enum = 18;
NaviParser.If = 19;
NaviParser.Intrinsic = 20;
NaviParser.Let = 21;
NaviParser.Match = 22;
NaviParser.Not = 23;
NaviParser.Or = 24;
NaviParser.Struct = 25;
NaviParser.Self = 26;
NaviParser.Trait = 27;
NaviParser.Discard = 28;
NaviParser.IntInterval = 29;
NaviParser.NonIntInterval = 30;
NaviParser.IntervalInclusive = 31;
NaviParser.IntervalMinExclusive = 32;
NaviParser.IntervalMaxExclusive = 33;
NaviParser.IntervalExclusive = 34;
NaviParser.Number = 35;
NaviParser.String = 36;
NaviParser.Identifier = 37;
NaviParser.OpMinus = 38;
NaviParser.OpPlus = 39;
NaviParser.OpMult = 40;
NaviParser.OpDiv = 41;
NaviParser.OpEqual = 42;
NaviParser.OpNotEqual = 43;
NaviParser.OpGt = 44;
NaviParser.OpLt = 45;
NaviParser.OpGte = 46;
NaviParser.OpLte = 47;
NaviParser.OpSpread = 48;
NaviParser.Space = 49;
NaviParser.LineComment = 50;
NaviParser.BlockComment = 51;

NaviParser.RULE_definitionDocument = 0;
NaviParser.RULE_expressionDocument = 1;
NaviParser.RULE_declaration = 2;
NaviParser.RULE_intrinsicFunctionDeclaration = 3;
NaviParser.RULE_definition = 4;
NaviParser.RULE_structDefinition = 5;
NaviParser.RULE_functionDefinition = 6;
NaviParser.RULE_variableDefinition = 7;
NaviParser.RULE_enumDefinition = 8;
NaviParser.RULE_enumVariant = 9;
NaviParser.RULE_primaryExpression = 10;
NaviParser.RULE_matchExpression = 11;
NaviParser.RULE_matchArm = 12;
NaviParser.RULE_functionCall = 13;
NaviParser.RULE_named = 14;
NaviParser.RULE_structExpression = 15;
NaviParser.RULE_scopeExpression = 16;
NaviParser.RULE_ifExpression = 17;
NaviParser.RULE_fieldAccessExpression = 18;
NaviParser.RULE_negateExpression = 19;
NaviParser.RULE_multiplicativeExpression = 20;
NaviParser.RULE_additiveExpression = 21;
NaviParser.RULE_intersectionExpression = 22;
NaviParser.RULE_unionExpression = 23;
NaviParser.RULE_comparisonExpression = 24;
NaviParser.RULE_logicalNotExpression = 25;
NaviParser.RULE_logicalAndExpression = 26;
NaviParser.RULE_logicalOrExpression = 27;
NaviParser.RULE_expression = 28;
NaviParser.RULE_args = 29;
NaviParser.RULE_fields = 30;
NaviParser.RULE_fieldsSpread = 31;
NaviParser.RULE_spread = 32;
NaviParser.RULE_field = 33;
NaviParser.RULE_fieldMaybeAssert = 34;
NaviParser.RULE_parameters = 35;
NaviParser.RULE_varArgParameters = 36;
NaviParser.RULE_parameter = 37;
NaviParser.RULE_varArgParameter = 38;
NaviParser.RULE_assert = 39;
NaviParser.RULE_contextualKeyword = 40;
NaviParser.RULE_name = 41;

class DefinitionDocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_definitionDocument;
    }

	EOF() {
	    return this.getToken(NaviParser.EOF, 0);
	};

	definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DefinitionContext,i);
	    }
	};

	declaration = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclarationContext);
	    } else {
	        return this.getTypedRuleContext(DeclarationContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterDefinitionDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitDefinitionDocument(this);
		}
	}


}



class ExpressionDocumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_expressionDocument;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	EOF() {
	    return this.getToken(NaviParser.EOF, 0);
	};

	definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterExpressionDocument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitExpressionDocument(this);
		}
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_declaration;
    }

	intrinsicFunctionDeclaration() {
	    return this.getTypedRuleContext(IntrinsicFunctionDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitDeclaration(this);
		}
	}


}



class IntrinsicFunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_intrinsicFunctionDeclaration;
    }

	Intrinsic() {
	    return this.getToken(NaviParser.Intrinsic, 0);
	};

	Def() {
	    return this.getToken(NaviParser.Def, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	varArgParameters() {
	    return this.getTypedRuleContext(VarArgParametersContext,0);
	};

	assert() {
	    return this.getTypedRuleContext(AssertContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterIntrinsicFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitIntrinsicFunctionDeclaration(this);
		}
	}


}



class DefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_definition;
    }

	structDefinition() {
	    return this.getTypedRuleContext(StructDefinitionContext,0);
	};

	functionDefinition() {
	    return this.getTypedRuleContext(FunctionDefinitionContext,0);
	};

	variableDefinition() {
	    return this.getTypedRuleContext(VariableDefinitionContext,0);
	};

	enumDefinition() {
	    return this.getTypedRuleContext(EnumDefinitionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitDefinition(this);
		}
	}


}



class StructDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_structDefinition;
    }

	Struct() {
	    return this.getToken(NaviParser.Struct, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	fields() {
	    return this.getTypedRuleContext(FieldsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterStructDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitStructDefinition(this);
		}
	}


}



class FunctionDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_functionDefinition;
    }

	Def() {
	    return this.getToken(NaviParser.Def, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	parameters() {
	    return this.getTypedRuleContext(ParametersContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	scopeExpression() {
	    return this.getTypedRuleContext(ScopeExpressionContext,0);
	};

	assert() {
	    return this.getTypedRuleContext(AssertContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterFunctionDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitFunctionDefinition(this);
		}
	}


}



class VariableDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_variableDefinition;
    }

	Let() {
	    return this.getToken(NaviParser.Let, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	assert() {
	    return this.getTypedRuleContext(AssertContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterVariableDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitVariableDefinition(this);
		}
	}


}



class EnumDefinitionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_enumDefinition;
    }

	Enum() {
	    return this.getToken(NaviParser.Enum, 0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enumVariant = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EnumVariantContext);
	    } else {
	        return this.getTypedRuleContext(EnumVariantContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterEnumDefinition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitEnumDefinition(this);
		}
	}


}



class EnumVariantContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_enumVariant;
    }

	Identifier() {
	    return this.getToken(NaviParser.Identifier, 0);
	};

	fields() {
	    return this.getTypedRuleContext(FieldsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterEnumVariant(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitEnumVariant(this);
		}
	}


}



class PrimaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_primaryExpression;
    }

	IntInterval() {
	    return this.getToken(NaviParser.IntInterval, 0);
	};

	NonIntInterval() {
	    return this.getToken(NaviParser.NonIntInterval, 0);
	};

	IntervalInclusive() {
	    return this.getToken(NaviParser.IntervalInclusive, 0);
	};

	IntervalMinExclusive() {
	    return this.getToken(NaviParser.IntervalMinExclusive, 0);
	};

	IntervalMaxExclusive() {
	    return this.getToken(NaviParser.IntervalMaxExclusive, 0);
	};

	IntervalExclusive() {
	    return this.getToken(NaviParser.IntervalExclusive, 0);
	};

	Number() {
	    return this.getToken(NaviParser.Number, 0);
	};

	String() {
	    return this.getToken(NaviParser.String, 0);
	};

	matchExpression() {
	    return this.getTypedRuleContext(MatchExpressionContext,0);
	};

	ifExpression() {
	    return this.getTypedRuleContext(IfExpressionContext,0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	named() {
	    return this.getTypedRuleContext(NamedContext,0);
	};

	structExpression() {
	    return this.getTypedRuleContext(StructExpressionContext,0);
	};

	scopeExpression() {
	    return this.getTypedRuleContext(ScopeExpressionContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterPrimaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitPrimaryExpression(this);
		}
	}


}



class MatchExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_matchExpression;
    }

	Match() {
	    return this.getToken(NaviParser.Match, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	matchArm = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MatchArmContext);
	    } else {
	        return this.getTypedRuleContext(MatchArmContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterMatchExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitMatchExpression(this);
		}
	}


}



class MatchArmContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_matchArm;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	Discard() {
	    return this.getToken(NaviParser.Discard, 0);
	};

	As() {
	    return this.getToken(NaviParser.As, 0);
	};

	Identifier() {
	    return this.getToken(NaviParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterMatchArm(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitMatchArm(this);
		}
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_functionCall;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	args() {
	    return this.getTypedRuleContext(ArgsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitFunctionCall(this);
		}
	}


}



class NamedContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_named;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterNamed(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitNamed(this);
		}
	}


}



class StructExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_structExpression;
    }

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	fieldsSpread() {
	    return this.getTypedRuleContext(FieldsSpreadContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterStructExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitStructExpression(this);
		}
	}


}



class ScopeExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_scopeExpression;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	definition = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DefinitionContext);
	    } else {
	        return this.getTypedRuleContext(DefinitionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterScopeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitScopeExpression(this);
		}
	}


}



class IfExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_ifExpression;
    }

	If() {
	    return this.getToken(NaviParser.If, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	scopeExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ScopeExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ScopeExpressionContext,i);
	    }
	};

	Else() {
	    return this.getToken(NaviParser.Else, 0);
	};

	ifExpression() {
	    return this.getTypedRuleContext(IfExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterIfExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitIfExpression(this);
		}
	}


}



class FieldAccessExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_fieldAccessExpression;
    }

	primaryExpression() {
	    return this.getTypedRuleContext(PrimaryExpressionContext,0);
	};

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaviParser.Identifier);
	    } else {
	        return this.getToken(NaviParser.Identifier, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterFieldAccessExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitFieldAccessExpression(this);
		}
	}


}



class NegateExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_negateExpression;
    }

	fieldAccessExpression() {
	    return this.getTypedRuleContext(FieldAccessExpressionContext,0);
	};

	OpMinus() {
	    return this.getToken(NaviParser.OpMinus, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterNegateExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitNegateExpression(this);
		}
	}


}



class MultiplicativeExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_multiplicativeExpression;
    }

	negateExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NegateExpressionContext);
	    } else {
	        return this.getTypedRuleContext(NegateExpressionContext,i);
	    }
	};

	OpMult = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaviParser.OpMult);
	    } else {
	        return this.getToken(NaviParser.OpMult, i);
	    }
	};


	OpDiv = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaviParser.OpDiv);
	    } else {
	        return this.getToken(NaviParser.OpDiv, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterMultiplicativeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitMultiplicativeExpression(this);
		}
	}


}



class AdditiveExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_additiveExpression;
    }

	multiplicativeExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeExpressionContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeExpressionContext,i);
	    }
	};

	OpMinus = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaviParser.OpMinus);
	    } else {
	        return this.getToken(NaviParser.OpMinus, i);
	    }
	};


	OpPlus = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaviParser.OpPlus);
	    } else {
	        return this.getToken(NaviParser.OpPlus, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterAdditiveExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitAdditiveExpression(this);
		}
	}


}



class IntersectionExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_intersectionExpression;
    }

	additiveExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditiveExpressionContext);
	    } else {
	        return this.getTypedRuleContext(AdditiveExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterIntersectionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitIntersectionExpression(this);
		}
	}


}



class UnionExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_unionExpression;
    }

	intersectionExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(IntersectionExpressionContext);
	    } else {
	        return this.getTypedRuleContext(IntersectionExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterUnionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitUnionExpression(this);
		}
	}


}



class ComparisonExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_comparisonExpression;
    }

	unionExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnionExpressionContext);
	    } else {
	        return this.getTypedRuleContext(UnionExpressionContext,i);
	    }
	};

	OpEqual() {
	    return this.getToken(NaviParser.OpEqual, 0);
	};

	OpNotEqual() {
	    return this.getToken(NaviParser.OpNotEqual, 0);
	};

	OpGt() {
	    return this.getToken(NaviParser.OpGt, 0);
	};

	OpGte() {
	    return this.getToken(NaviParser.OpGte, 0);
	};

	OpLt() {
	    return this.getToken(NaviParser.OpLt, 0);
	};

	OpLte() {
	    return this.getToken(NaviParser.OpLte, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterComparisonExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitComparisonExpression(this);
		}
	}


}



class LogicalNotExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_logicalNotExpression;
    }

	comparisonExpression() {
	    return this.getTypedRuleContext(ComparisonExpressionContext,0);
	};

	Not = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaviParser.Not);
	    } else {
	        return this.getToken(NaviParser.Not, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterLogicalNotExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitLogicalNotExpression(this);
		}
	}


}



class LogicalAndExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_logicalAndExpression;
    }

	logicalNotExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogicalNotExpressionContext);
	    } else {
	        return this.getTypedRuleContext(LogicalNotExpressionContext,i);
	    }
	};

	And = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaviParser.And);
	    } else {
	        return this.getToken(NaviParser.And, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterLogicalAndExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitLogicalAndExpression(this);
		}
	}


}



class LogicalOrExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_logicalOrExpression;
    }

	logicalAndExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogicalAndExpressionContext);
	    } else {
	        return this.getTypedRuleContext(LogicalAndExpressionContext,i);
	    }
	};

	Or = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaviParser.Or);
	    } else {
	        return this.getToken(NaviParser.Or, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterLogicalOrExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitLogicalOrExpression(this);
		}
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_expression;
    }

	logicalOrExpression() {
	    return this.getTypedRuleContext(LogicalOrExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitExpression(this);
		}
	}


}



class ArgsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_args;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterArgs(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitArgs(this);
		}
	}


}



class FieldsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_fields;
    }

	field = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldContext);
	    } else {
	        return this.getTypedRuleContext(FieldContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterFields(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitFields(this);
		}
	}


}



class FieldsSpreadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_fieldsSpread;
    }

	spread = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SpreadContext);
	    } else {
	        return this.getTypedRuleContext(SpreadContext,i);
	    }
	};

	fieldMaybeAssert = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldMaybeAssertContext);
	    } else {
	        return this.getTypedRuleContext(FieldMaybeAssertContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterFieldsSpread(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitFieldsSpread(this);
		}
	}


}



class SpreadContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_spread;
    }

	OpSpread() {
	    return this.getToken(NaviParser.OpSpread, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterSpread(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitSpread(this);
		}
	}


}



class FieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_field;
    }

	Identifier() {
	    return this.getToken(NaviParser.Identifier, 0);
	};

	assert() {
	    return this.getTypedRuleContext(AssertContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitField(this);
		}
	}


}



class FieldMaybeAssertContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_fieldMaybeAssert;
    }

	Identifier() {
	    return this.getToken(NaviParser.Identifier, 0);
	};

	assert() {
	    return this.getTypedRuleContext(AssertContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterFieldMaybeAssert(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitFieldMaybeAssert(this);
		}
	}


}



class ParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_parameters;
    }

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitParameters(this);
		}
	}


}



class VarArgParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_varArgParameters;
    }

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
	    }
	};

	varArgParameter() {
	    return this.getTypedRuleContext(VarArgParameterContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterVarArgParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitVarArgParameters(this);
		}
	}


}



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_parameter;
    }

	Identifier() {
	    return this.getToken(NaviParser.Identifier, 0);
	};

	assert() {
	    return this.getTypedRuleContext(AssertContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitParameter(this);
		}
	}


}



class VarArgParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_varArgParameter;
    }

	OpSpread() {
	    return this.getToken(NaviParser.OpSpread, 0);
	};

	Identifier() {
	    return this.getToken(NaviParser.Identifier, 0);
	};

	assert() {
	    return this.getTypedRuleContext(AssertContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterVarArgParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitVarArgParameter(this);
		}
	}


}



class AssertContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_assert;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterAssert(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitAssert(this);
		}
	}


}



class ContextualKeywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_contextualKeyword;
    }

	And() {
	    return this.getToken(NaviParser.And, 0);
	};

	Or() {
	    return this.getToken(NaviParser.Or, 0);
	};

	Not() {
	    return this.getToken(NaviParser.Not, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterContextualKeyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitContextualKeyword(this);
		}
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_name;
    }

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NaviParser.Identifier);
	    } else {
	        return this.getToken(NaviParser.Identifier, i);
	    }
	};


	contextualKeyword = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ContextualKeywordContext);
	    } else {
	        return this.getTypedRuleContext(ContextualKeywordContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitName(this);
		}
	}


}




NaviParser.DefinitionDocumentContext = DefinitionDocumentContext; 
NaviParser.ExpressionDocumentContext = ExpressionDocumentContext; 
NaviParser.DeclarationContext = DeclarationContext; 
NaviParser.IntrinsicFunctionDeclarationContext = IntrinsicFunctionDeclarationContext; 
NaviParser.DefinitionContext = DefinitionContext; 
NaviParser.StructDefinitionContext = StructDefinitionContext; 
NaviParser.FunctionDefinitionContext = FunctionDefinitionContext; 
NaviParser.VariableDefinitionContext = VariableDefinitionContext; 
NaviParser.EnumDefinitionContext = EnumDefinitionContext; 
NaviParser.EnumVariantContext = EnumVariantContext; 
NaviParser.PrimaryExpressionContext = PrimaryExpressionContext; 
NaviParser.MatchExpressionContext = MatchExpressionContext; 
NaviParser.MatchArmContext = MatchArmContext; 
NaviParser.FunctionCallContext = FunctionCallContext; 
NaviParser.NamedContext = NamedContext; 
NaviParser.StructExpressionContext = StructExpressionContext; 
NaviParser.ScopeExpressionContext = ScopeExpressionContext; 
NaviParser.IfExpressionContext = IfExpressionContext; 
NaviParser.FieldAccessExpressionContext = FieldAccessExpressionContext; 
NaviParser.NegateExpressionContext = NegateExpressionContext; 
NaviParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext; 
NaviParser.AdditiveExpressionContext = AdditiveExpressionContext; 
NaviParser.IntersectionExpressionContext = IntersectionExpressionContext; 
NaviParser.UnionExpressionContext = UnionExpressionContext; 
NaviParser.ComparisonExpressionContext = ComparisonExpressionContext; 
NaviParser.LogicalNotExpressionContext = LogicalNotExpressionContext; 
NaviParser.LogicalAndExpressionContext = LogicalAndExpressionContext; 
NaviParser.LogicalOrExpressionContext = LogicalOrExpressionContext; 
NaviParser.ExpressionContext = ExpressionContext; 
NaviParser.ArgsContext = ArgsContext; 
NaviParser.FieldsContext = FieldsContext; 
NaviParser.FieldsSpreadContext = FieldsSpreadContext; 
NaviParser.SpreadContext = SpreadContext; 
NaviParser.FieldContext = FieldContext; 
NaviParser.FieldMaybeAssertContext = FieldMaybeAssertContext; 
NaviParser.ParametersContext = ParametersContext; 
NaviParser.VarArgParametersContext = VarArgParametersContext; 
NaviParser.ParameterContext = ParameterContext; 
NaviParser.VarArgParameterContext = VarArgParameterContext; 
NaviParser.AssertContext = AssertContext; 
NaviParser.ContextualKeywordContext = ContextualKeywordContext; 
NaviParser.NameContext = NameContext; 
