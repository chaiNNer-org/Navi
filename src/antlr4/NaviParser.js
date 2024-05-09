// Generated from src/antlr4/Navi.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import NaviListener from './NaviListener.js';
const serializedATN = [4,1,51,459,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,1,0,1,0,5,
0,85,8,0,10,0,12,0,88,9,0,1,0,1,0,1,1,5,1,93,8,1,10,1,12,1,96,9,1,1,1,1,
1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,3,3,108,8,3,1,3,1,3,1,4,1,4,1,4,1,4,3,
4,116,8,4,1,5,1,5,1,5,1,5,3,5,122,8,5,1,6,1,6,1,6,1,6,3,6,128,8,6,1,6,1,
6,1,6,1,6,1,6,3,6,135,8,6,1,7,1,7,1,7,3,7,140,8,7,1,7,1,7,1,7,1,7,1,8,1,
8,1,8,1,8,1,8,1,8,5,8,152,8,8,10,8,12,8,155,9,8,1,8,3,8,158,8,8,5,8,160,
8,8,10,8,12,8,163,9,8,1,8,1,8,1,9,1,9,3,9,169,8,9,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,
189,8,10,1,11,1,11,1,11,1,11,1,11,1,11,5,11,197,8,11,10,11,12,11,200,9,11,
1,11,3,11,203,8,11,3,11,205,8,11,1,11,1,11,1,12,1,12,3,12,211,8,12,1,12,
1,12,3,12,215,8,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,1,15,
1,15,1,15,1,16,1,16,5,16,232,8,16,10,16,12,16,235,9,16,1,16,1,16,1,16,1,
17,1,17,1,17,1,17,1,17,1,17,3,17,246,8,17,1,18,1,18,1,18,5,18,251,8,18,10,
18,12,18,254,9,18,1,19,3,19,257,8,19,1,19,1,19,1,20,1,20,1,20,5,20,264,8,
20,10,20,12,20,267,9,20,1,21,1,21,1,21,5,21,272,8,21,10,21,12,21,275,9,21,
1,22,1,22,1,22,5,22,280,8,22,10,22,12,22,283,9,22,1,23,1,23,1,23,5,23,288,
8,23,10,23,12,23,291,9,23,1,24,1,24,1,24,3,24,296,8,24,1,25,1,25,1,25,5,
25,301,8,25,10,25,12,25,304,9,25,1,26,1,26,1,26,5,26,309,8,26,10,26,12,26,
312,9,26,1,27,1,27,1,28,1,28,1,28,5,28,319,8,28,10,28,12,28,322,9,28,1,28,
3,28,325,8,28,3,28,327,8,28,1,29,1,29,1,29,1,29,5,29,333,8,29,10,29,12,29,
336,9,29,1,29,3,29,339,8,29,3,29,341,8,29,1,29,1,29,1,30,1,30,1,30,1,30,
5,30,349,8,30,10,30,12,30,352,9,30,1,30,1,30,1,30,1,30,5,30,358,8,30,10,
30,12,30,361,9,30,1,30,3,30,364,8,30,3,30,366,8,30,3,30,368,8,30,1,30,1,
30,1,30,5,30,373,8,30,10,30,12,30,376,9,30,1,30,3,30,379,8,30,3,30,381,8,
30,3,30,383,8,30,1,30,1,30,1,31,1,31,1,31,1,32,1,32,1,32,1,33,1,33,3,33,
395,8,33,1,34,1,34,1,34,1,34,5,34,401,8,34,10,34,12,34,404,9,34,1,34,3,34,
407,8,34,3,34,409,8,34,1,34,1,34,1,35,1,35,1,35,1,35,5,35,417,8,35,10,35,
12,35,420,9,35,1,35,1,35,3,35,424,8,35,1,35,3,35,427,8,35,1,35,3,35,430,
8,35,3,35,432,8,35,1,35,1,35,1,36,1,36,1,36,1,37,1,37,1,37,1,37,1,38,1,38,
1,38,1,39,1,39,1,40,1,40,1,40,1,40,3,40,452,8,40,5,40,454,8,40,10,40,12,
40,457,9,40,1,40,0,0,41,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,
36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,0,5,
2,0,23,23,38,38,1,0,40,41,1,0,38,39,1,0,42,47,2,0,14,14,23,24,488,0,86,1,
0,0,0,2,94,1,0,0,0,4,100,1,0,0,0,6,102,1,0,0,0,8,115,1,0,0,0,10,117,1,0,
0,0,12,123,1,0,0,0,14,136,1,0,0,0,16,145,1,0,0,0,18,166,1,0,0,0,20,188,1,
0,0,0,22,190,1,0,0,0,24,210,1,0,0,0,26,219,1,0,0,0,28,224,1,0,0,0,30,226,
1,0,0,0,32,229,1,0,0,0,34,239,1,0,0,0,36,247,1,0,0,0,38,256,1,0,0,0,40,260,
1,0,0,0,42,268,1,0,0,0,44,276,1,0,0,0,46,284,1,0,0,0,48,292,1,0,0,0,50,297,
1,0,0,0,52,305,1,0,0,0,54,313,1,0,0,0,56,326,1,0,0,0,58,328,1,0,0,0,60,344,
1,0,0,0,62,386,1,0,0,0,64,389,1,0,0,0,66,392,1,0,0,0,68,396,1,0,0,0,70,412,
1,0,0,0,72,435,1,0,0,0,74,438,1,0,0,0,76,442,1,0,0,0,78,445,1,0,0,0,80,447,
1,0,0,0,82,85,3,8,4,0,83,85,3,4,2,0,84,82,1,0,0,0,84,83,1,0,0,0,85,88,1,
0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,89,1,0,0,0,88,86,1,0,0,0,89,90,5,0,
0,1,90,1,1,0,0,0,91,93,3,8,4,0,92,91,1,0,0,0,93,96,1,0,0,0,94,92,1,0,0,0,
94,95,1,0,0,0,95,97,1,0,0,0,96,94,1,0,0,0,97,98,3,54,27,0,98,99,5,0,0,1,
99,3,1,0,0,0,100,101,3,6,3,0,101,5,1,0,0,0,102,103,5,20,0,0,103,104,5,16,
0,0,104,105,3,80,40,0,105,107,3,70,35,0,106,108,3,76,38,0,107,106,1,0,0,
0,107,108,1,0,0,0,108,109,1,0,0,0,109,110,5,1,0,0,110,7,1,0,0,0,111,116,
3,10,5,0,112,116,3,12,6,0,113,116,3,14,7,0,114,116,3,16,8,0,115,111,1,0,
0,0,115,112,1,0,0,0,115,113,1,0,0,0,115,114,1,0,0,0,116,9,1,0,0,0,117,118,
5,25,0,0,118,121,3,80,40,0,119,122,5,1,0,0,120,122,3,58,29,0,121,119,1,0,
0,0,121,120,1,0,0,0,122,11,1,0,0,0,123,124,5,16,0,0,124,125,3,80,40,0,125,
127,3,68,34,0,126,128,3,76,38,0,127,126,1,0,0,0,127,128,1,0,0,0,128,134,
1,0,0,0,129,130,5,2,0,0,130,131,3,54,27,0,131,132,5,1,0,0,132,135,1,0,0,
0,133,135,3,32,16,0,134,129,1,0,0,0,134,133,1,0,0,0,135,13,1,0,0,0,136,137,
5,21,0,0,137,139,3,80,40,0,138,140,3,76,38,0,139,138,1,0,0,0,139,140,1,0,
0,0,140,141,1,0,0,0,141,142,5,2,0,0,142,143,3,54,27,0,143,144,5,1,0,0,144,
15,1,0,0,0,145,146,5,18,0,0,146,147,3,80,40,0,147,161,5,3,0,0,148,153,3,
18,9,0,149,150,5,4,0,0,150,152,3,18,9,0,151,149,1,0,0,0,152,155,1,0,0,0,
153,151,1,0,0,0,153,154,1,0,0,0,154,157,1,0,0,0,155,153,1,0,0,0,156,158,
5,4,0,0,157,156,1,0,0,0,157,158,1,0,0,0,158,160,1,0,0,0,159,148,1,0,0,0,
160,163,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,162,164,1,0,0,0,163,161,
1,0,0,0,164,165,5,5,0,0,165,17,1,0,0,0,166,168,5,37,0,0,167,169,3,58,29,
0,168,167,1,0,0,0,168,169,1,0,0,0,169,19,1,0,0,0,170,189,5,29,0,0,171,189,
5,30,0,0,172,189,5,31,0,0,173,189,5,32,0,0,174,189,5,33,0,0,175,189,5,34,
0,0,176,189,5,35,0,0,177,189,5,36,0,0,178,189,3,22,11,0,179,189,3,34,17,
0,180,189,3,26,13,0,181,189,3,28,14,0,182,189,3,30,15,0,183,189,3,32,16,
0,184,185,5,6,0,0,185,186,3,54,27,0,186,187,5,7,0,0,187,189,1,0,0,0,188,
170,1,0,0,0,188,171,1,0,0,0,188,172,1,0,0,0,188,173,1,0,0,0,188,174,1,0,
0,0,188,175,1,0,0,0,188,176,1,0,0,0,188,177,1,0,0,0,188,178,1,0,0,0,188,
179,1,0,0,0,188,180,1,0,0,0,188,181,1,0,0,0,188,182,1,0,0,0,188,183,1,0,
0,0,188,184,1,0,0,0,189,21,1,0,0,0,190,191,5,22,0,0,191,192,3,54,27,0,192,
204,5,3,0,0,193,198,3,24,12,0,194,195,5,4,0,0,195,197,3,24,12,0,196,194,
1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,198,199,1,0,0,0,199,202,1,0,0,0,
200,198,1,0,0,0,201,203,5,4,0,0,202,201,1,0,0,0,202,203,1,0,0,0,203,205,
1,0,0,0,204,193,1,0,0,0,204,205,1,0,0,0,205,206,1,0,0,0,206,207,5,5,0,0,
207,23,1,0,0,0,208,211,5,28,0,0,209,211,3,54,27,0,210,208,1,0,0,0,210,209,
1,0,0,0,211,214,1,0,0,0,212,213,5,15,0,0,213,215,5,37,0,0,214,212,1,0,0,
0,214,215,1,0,0,0,215,216,1,0,0,0,216,217,5,8,0,0,217,218,3,54,27,0,218,
25,1,0,0,0,219,220,3,80,40,0,220,221,5,6,0,0,221,222,3,56,28,0,222,223,5,
7,0,0,223,27,1,0,0,0,224,225,3,80,40,0,225,29,1,0,0,0,226,227,3,80,40,0,
227,228,3,60,30,0,228,31,1,0,0,0,229,233,5,3,0,0,230,232,3,8,4,0,231,230,
1,0,0,0,232,235,1,0,0,0,233,231,1,0,0,0,233,234,1,0,0,0,234,236,1,0,0,0,
235,233,1,0,0,0,236,237,3,54,27,0,237,238,5,5,0,0,238,33,1,0,0,0,239,240,
5,19,0,0,240,241,3,54,27,0,241,242,3,32,16,0,242,245,5,17,0,0,243,246,3,
32,16,0,244,246,3,34,17,0,245,243,1,0,0,0,245,244,1,0,0,0,246,35,1,0,0,0,
247,252,3,20,10,0,248,249,5,9,0,0,249,251,5,37,0,0,250,248,1,0,0,0,251,254,
1,0,0,0,252,250,1,0,0,0,252,253,1,0,0,0,253,37,1,0,0,0,254,252,1,0,0,0,255,
257,7,0,0,0,256,255,1,0,0,0,256,257,1,0,0,0,257,258,1,0,0,0,258,259,3,36,
18,0,259,39,1,0,0,0,260,265,3,38,19,0,261,262,7,1,0,0,262,264,3,38,19,0,
263,261,1,0,0,0,264,267,1,0,0,0,265,263,1,0,0,0,265,266,1,0,0,0,266,41,1,
0,0,0,267,265,1,0,0,0,268,273,3,40,20,0,269,270,7,2,0,0,270,272,3,40,20,
0,271,269,1,0,0,0,272,275,1,0,0,0,273,271,1,0,0,0,273,274,1,0,0,0,274,43,
1,0,0,0,275,273,1,0,0,0,276,281,3,42,21,0,277,278,5,10,0,0,278,280,3,42,
21,0,279,277,1,0,0,0,280,283,1,0,0,0,281,279,1,0,0,0,281,282,1,0,0,0,282,
45,1,0,0,0,283,281,1,0,0,0,284,289,3,44,22,0,285,286,5,11,0,0,286,288,3,
44,22,0,287,285,1,0,0,0,288,291,1,0,0,0,289,287,1,0,0,0,289,290,1,0,0,0,
290,47,1,0,0,0,291,289,1,0,0,0,292,295,3,46,23,0,293,294,7,3,0,0,294,296,
3,46,23,0,295,293,1,0,0,0,295,296,1,0,0,0,296,49,1,0,0,0,297,302,3,48,24,
0,298,299,5,14,0,0,299,301,3,48,24,0,300,298,1,0,0,0,301,304,1,0,0,0,302,
300,1,0,0,0,302,303,1,0,0,0,303,51,1,0,0,0,304,302,1,0,0,0,305,310,3,50,
25,0,306,307,5,24,0,0,307,309,3,50,25,0,308,306,1,0,0,0,309,312,1,0,0,0,
310,308,1,0,0,0,310,311,1,0,0,0,311,53,1,0,0,0,312,310,1,0,0,0,313,314,3,
52,26,0,314,55,1,0,0,0,315,320,3,54,27,0,316,317,5,4,0,0,317,319,3,54,27,
0,318,316,1,0,0,0,319,322,1,0,0,0,320,318,1,0,0,0,320,321,1,0,0,0,321,324,
1,0,0,0,322,320,1,0,0,0,323,325,5,4,0,0,324,323,1,0,0,0,324,325,1,0,0,0,
325,327,1,0,0,0,326,315,1,0,0,0,326,327,1,0,0,0,327,57,1,0,0,0,328,340,5,
3,0,0,329,334,3,64,32,0,330,331,5,4,0,0,331,333,3,64,32,0,332,330,1,0,0,
0,333,336,1,0,0,0,334,332,1,0,0,0,334,335,1,0,0,0,335,338,1,0,0,0,336,334,
1,0,0,0,337,339,5,4,0,0,338,337,1,0,0,0,338,339,1,0,0,0,339,341,1,0,0,0,
340,329,1,0,0,0,340,341,1,0,0,0,341,342,1,0,0,0,342,343,5,5,0,0,343,59,1,
0,0,0,344,382,5,3,0,0,345,350,3,62,31,0,346,347,5,4,0,0,347,349,3,62,31,
0,348,346,1,0,0,0,349,352,1,0,0,0,350,348,1,0,0,0,350,351,1,0,0,0,351,367,
1,0,0,0,352,350,1,0,0,0,353,365,5,4,0,0,354,359,3,66,33,0,355,356,5,4,0,
0,356,358,3,66,33,0,357,355,1,0,0,0,358,361,1,0,0,0,359,357,1,0,0,0,359,
360,1,0,0,0,360,363,1,0,0,0,361,359,1,0,0,0,362,364,5,4,0,0,363,362,1,0,
0,0,363,364,1,0,0,0,364,366,1,0,0,0,365,354,1,0,0,0,365,366,1,0,0,0,366,
368,1,0,0,0,367,353,1,0,0,0,367,368,1,0,0,0,368,383,1,0,0,0,369,374,3,66,
33,0,370,371,5,4,0,0,371,373,3,66,33,0,372,370,1,0,0,0,373,376,1,0,0,0,374,
372,1,0,0,0,374,375,1,0,0,0,375,378,1,0,0,0,376,374,1,0,0,0,377,379,5,4,
0,0,378,377,1,0,0,0,378,379,1,0,0,0,379,381,1,0,0,0,380,369,1,0,0,0,380,
381,1,0,0,0,381,383,1,0,0,0,382,345,1,0,0,0,382,380,1,0,0,0,383,384,1,0,
0,0,384,385,5,5,0,0,385,61,1,0,0,0,386,387,5,48,0,0,387,388,3,54,27,0,388,
63,1,0,0,0,389,390,5,37,0,0,390,391,3,76,38,0,391,65,1,0,0,0,392,394,5,37,
0,0,393,395,3,76,38,0,394,393,1,0,0,0,394,395,1,0,0,0,395,67,1,0,0,0,396,
408,5,6,0,0,397,402,3,72,36,0,398,399,5,4,0,0,399,401,3,72,36,0,400,398,
1,0,0,0,401,404,1,0,0,0,402,400,1,0,0,0,402,403,1,0,0,0,403,406,1,0,0,0,
404,402,1,0,0,0,405,407,5,4,0,0,406,405,1,0,0,0,406,407,1,0,0,0,407,409,
1,0,0,0,408,397,1,0,0,0,408,409,1,0,0,0,409,410,1,0,0,0,410,411,5,7,0,0,
411,69,1,0,0,0,412,431,5,6,0,0,413,418,3,72,36,0,414,415,5,4,0,0,415,417,
3,72,36,0,416,414,1,0,0,0,417,420,1,0,0,0,418,416,1,0,0,0,418,419,1,0,0,
0,419,423,1,0,0,0,420,418,1,0,0,0,421,422,5,4,0,0,422,424,3,74,37,0,423,
421,1,0,0,0,423,424,1,0,0,0,424,427,1,0,0,0,425,427,3,74,37,0,426,413,1,
0,0,0,426,425,1,0,0,0,427,429,1,0,0,0,428,430,5,4,0,0,429,428,1,0,0,0,429,
430,1,0,0,0,430,432,1,0,0,0,431,426,1,0,0,0,431,432,1,0,0,0,432,433,1,0,
0,0,433,434,5,7,0,0,434,71,1,0,0,0,435,436,5,37,0,0,436,437,3,76,38,0,437,
73,1,0,0,0,438,439,5,48,0,0,439,440,5,37,0,0,440,441,3,76,38,0,441,75,1,
0,0,0,442,443,5,12,0,0,443,444,3,54,27,0,444,77,1,0,0,0,445,446,7,4,0,0,
446,79,1,0,0,0,447,455,5,37,0,0,448,451,5,13,0,0,449,452,5,37,0,0,450,452,
3,78,39,0,451,449,1,0,0,0,451,450,1,0,0,0,452,454,1,0,0,0,453,448,1,0,0,
0,454,457,1,0,0,0,455,453,1,0,0,0,455,456,1,0,0,0,456,81,1,0,0,0,457,455,
1,0,0,0,56,84,86,94,107,115,121,127,134,139,153,157,161,168,188,198,202,
204,210,214,233,245,252,256,265,273,281,289,295,302,310,320,324,326,334,
338,340,350,359,363,365,367,374,378,380,382,394,402,406,408,418,423,426,
429,431,451,455];


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
                         "unaryExpression", "multiplicativeExpression", 
                         "additiveExpression", "intersectionExpression", 
                         "unionExpression", "comparisonExpression", "logicalAndExpression", 
                         "logicalOrExpression", "expression", "args", "fields", 
                         "fieldsSpread", "spread", "field", "fieldMaybeAssert", 
                         "parameters", "varArgParameters", "parameter", 
                         "varArgParameter", "assert", "contextualKeyword", 
                         "name" ];

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
	        this.state = 86;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 37027840) !== 0)) {
	            this.state = 84;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 16:
	            case 18:
	            case 21:
	            case 25:
	                this.state = 82;
	                this.definition();
	                break;
	            case 20:
	                this.state = 83;
	                this.declaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 89;
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
	        this.state = 94;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 35979264) !== 0)) {
	            this.state = 91;
	            this.definition();
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 97;
	        this.expression();
	        this.state = 98;
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
	        this.state = 100;
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
	        this.state = 102;
	        this.match(NaviParser.Intrinsic);
	        this.state = 103;
	        this.match(NaviParser.Def);
	        this.state = 104;
	        this.name();
	        this.state = 105;
	        this.varArgParameters();
	        this.state = 107;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 106;
	            this.assert();
	        }

	        this.state = 109;
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
	        this.state = 115;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.structDefinition();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 112;
	            this.functionDefinition();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 113;
	            this.variableDefinition();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 114;
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
	        this.state = 117;
	        this.match(NaviParser.Struct);
	        this.state = 118;
	        this.name();
	        this.state = 121;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.state = 119;
	            this.match(NaviParser.T__0);
	            break;
	        case 3:
	            this.state = 120;
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
	        this.state = 123;
	        this.match(NaviParser.Def);
	        this.state = 124;
	        this.name();
	        this.state = 125;
	        this.parameters();
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 126;
	            this.assert();
	        }

	        this.state = 134;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.state = 129;
	            this.match(NaviParser.T__1);
	            this.state = 130;
	            this.expression();
	            this.state = 131;
	            this.match(NaviParser.T__0);
	            break;
	        case 3:
	            this.state = 133;
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
	        this.state = 136;
	        this.match(NaviParser.Let);
	        this.state = 137;
	        this.name();
	        this.state = 139;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 138;
	            this.assert();
	        }

	        this.state = 141;
	        this.match(NaviParser.T__1);
	        this.state = 142;
	        this.expression();
	        this.state = 143;
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
	        this.state = 145;
	        this.match(NaviParser.Enum);
	        this.state = 146;
	        this.name();
	        this.state = 147;
	        this.match(NaviParser.T__2);
	        this.state = 161;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37) {
	            this.state = 148;
	            this.enumVariant();
	            this.state = 153;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 149;
	                    this.match(NaviParser.T__3);
	                    this.state = 150;
	                    this.enumVariant(); 
	                }
	                this.state = 155;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	            }

	            this.state = 157;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 156;
	                this.match(NaviParser.T__3);
	            }

	            this.state = 163;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 164;
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
	        this.state = 166;
	        this.match(NaviParser.Identifier);
	        this.state = 168;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 167;
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
	        this.state = 188;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 170;
	            this.match(NaviParser.IntInterval);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 171;
	            this.match(NaviParser.NonIntInterval);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 172;
	            this.match(NaviParser.IntervalInclusive);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 173;
	            this.match(NaviParser.IntervalMinExclusive);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 174;
	            this.match(NaviParser.IntervalMaxExclusive);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 175;
	            this.match(NaviParser.IntervalExclusive);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 176;
	            this.match(NaviParser.Number);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 177;
	            this.match(NaviParser.String);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 178;
	            this.matchExpression();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 179;
	            this.ifExpression();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 180;
	            this.functionCall();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 181;
	            this.named();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 182;
	            this.structExpression();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 183;
	            this.scopeExpression();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 184;
	            this.match(NaviParser.T__5);
	            this.state = 185;
	            this.expression();
	            this.state = 186;
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
	        this.state = 190;
	        this.match(NaviParser.Match);
	        this.state = 191;
	        this.expression();
	        this.state = 192;
	        this.match(NaviParser.T__2);
	        this.state = 204;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4039639112) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 127) !== 0)) {
	            this.state = 193;
	            this.matchArm();
	            this.state = 198;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 194;
	                    this.match(NaviParser.T__3);
	                    this.state = 195;
	                    this.matchArm(); 
	                }
	                this.state = 200;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	            }

	            this.state = 202;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 201;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 206;
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
	        this.state = 210;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.state = 208;
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
	            this.state = 209;
	            this.expression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 214;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 212;
	            this.match(NaviParser.As);
	            this.state = 213;
	            this.match(NaviParser.Identifier);
	        }

	        this.state = 216;
	        this.match(NaviParser.T__7);
	        this.state = 217;
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
	        this.state = 219;
	        this.name();
	        this.state = 220;
	        this.match(NaviParser.T__5);
	        this.state = 221;
	        this.args();
	        this.state = 222;
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
	        this.state = 224;
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
	        this.state = 226;
	        this.name();
	        this.state = 227;
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
	        this.state = 229;
	        this.match(NaviParser.T__2);
	        this.state = 233;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 35979264) !== 0)) {
	            this.state = 230;
	            this.definition();
	            this.state = 235;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 236;
	        this.expression();
	        this.state = 237;
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
	        this.state = 239;
	        this.match(NaviParser.If);
	        this.state = 240;
	        this.expression();
	        this.state = 241;
	        this.scopeExpression();
	        this.state = 242;
	        this.match(NaviParser.Else);
	        this.state = 245;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 243;
	            this.scopeExpression();
	            break;
	        case 19:
	            this.state = 244;
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
	        this.state = 247;
	        this.primaryExpression();
	        this.state = 252;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 248;
	            this.match(NaviParser.T__8);
	            this.state = 249;
	            this.match(NaviParser.Identifier);
	            this.state = 254;
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



	unaryExpression() {
	    let localctx = new UnaryExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, NaviParser.RULE_unaryExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===23 || _la===38) {
	            this.state = 255;
	            _la = this._input.LA(1);
	            if(!(_la===23 || _la===38)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	        this.state = 258;
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
	        this.state = 260;
	        this.unaryExpression();
	        this.state = 265;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40 || _la===41) {
	            this.state = 261;
	            _la = this._input.LA(1);
	            if(!(_la===40 || _la===41)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 262;
	            this.unaryExpression();
	            this.state = 267;
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
	        this.state = 268;
	        this.multiplicativeExpression();
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38 || _la===39) {
	            this.state = 269;
	            _la = this._input.LA(1);
	            if(!(_la===38 || _la===39)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 270;
	            this.multiplicativeExpression();
	            this.state = 275;
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
	        this.state = 276;
	        this.additiveExpression();
	        this.state = 281;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 277;
	            this.match(NaviParser.T__9);
	            this.state = 278;
	            this.additiveExpression();
	            this.state = 283;
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
	        this.state = 284;
	        this.intersectionExpression();
	        this.state = 289;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 285;
	            this.match(NaviParser.T__10);
	            this.state = 286;
	            this.intersectionExpression();
	            this.state = 291;
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
	        this.state = 292;
	        this.unionExpression();
	        this.state = 295;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 63) !== 0)) {
	            this.state = 293;
	            _la = this._input.LA(1);
	            if(!(((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 63) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 294;
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



	logicalAndExpression() {
	    let localctx = new LogicalAndExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, NaviParser.RULE_logicalAndExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 297;
	        this.comparisonExpression();
	        this.state = 302;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 298;
	            this.match(NaviParser.And);
	            this.state = 299;
	            this.comparisonExpression();
	            this.state = 304;
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
	    this.enterRule(localctx, 52, NaviParser.RULE_logicalOrExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 305;
	        this.logicalAndExpression();
	        this.state = 310;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===24) {
	            this.state = 306;
	            this.match(NaviParser.Or);
	            this.state = 307;
	            this.logicalAndExpression();
	            this.state = 312;
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
	    this.enterRule(localctx, 54, NaviParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 313;
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
	    this.enterRule(localctx, 56, NaviParser.RULE_args);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 326;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3771203656) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 127) !== 0)) {
	            this.state = 315;
	            this.expression();
	            this.state = 320;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,30,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 316;
	                    this.match(NaviParser.T__3);
	                    this.state = 317;
	                    this.expression(); 
	                }
	                this.state = 322;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,30,this._ctx);
	            }

	            this.state = 324;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 323;
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
	    this.enterRule(localctx, 58, NaviParser.RULE_fields);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 328;
	        this.match(NaviParser.T__2);
	        this.state = 340;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 329;
	            this.field();
	            this.state = 334;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 330;
	                    this.match(NaviParser.T__3);
	                    this.state = 331;
	                    this.field(); 
	                }
	                this.state = 336;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
	            }

	            this.state = 338;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 337;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 342;
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
	    this.enterRule(localctx, 60, NaviParser.RULE_fieldsSpread);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 344;
	        this.match(NaviParser.T__2);
	        this.state = 382;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 48:
	            this.state = 345;
	            this.spread();
	            this.state = 350;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,36,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 346;
	                    this.match(NaviParser.T__3);
	                    this.state = 347;
	                    this.spread(); 
	                }
	                this.state = 352;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,36,this._ctx);
	            }

	            this.state = 367;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 353;
	                this.match(NaviParser.T__3);
	                this.state = 365;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===37) {
	                    this.state = 354;
	                    this.fieldMaybeAssert();
	                    this.state = 359;
	                    this._errHandler.sync(this);
	                    var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
	                    while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                        if(_alt===1) {
	                            this.state = 355;
	                            this.match(NaviParser.T__3);
	                            this.state = 356;
	                            this.fieldMaybeAssert(); 
	                        }
	                        this.state = 361;
	                        this._errHandler.sync(this);
	                        _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
	                    }

	                    this.state = 363;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===4) {
	                        this.state = 362;
	                        this.match(NaviParser.T__3);
	                    }

	                }

	            }

	            break;
	        case 5:
	        case 37:
	            this.state = 380;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===37) {
	                this.state = 369;
	                this.fieldMaybeAssert();
	                this.state = 374;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 370;
	                        this.match(NaviParser.T__3);
	                        this.state = 371;
	                        this.fieldMaybeAssert(); 
	                    }
	                    this.state = 376;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
	                }

	                this.state = 378;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===4) {
	                    this.state = 377;
	                    this.match(NaviParser.T__3);
	                }

	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 384;
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
	    this.enterRule(localctx, 62, NaviParser.RULE_spread);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 386;
	        this.match(NaviParser.OpSpread);
	        this.state = 387;
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
	    this.enterRule(localctx, 64, NaviParser.RULE_field);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 389;
	        this.match(NaviParser.Identifier);
	        this.state = 390;
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
	    this.enterRule(localctx, 66, NaviParser.RULE_fieldMaybeAssert);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 392;
	        this.match(NaviParser.Identifier);
	        this.state = 394;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 393;
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
	    this.enterRule(localctx, 68, NaviParser.RULE_parameters);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 396;
	        this.match(NaviParser.T__5);
	        this.state = 408;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 397;
	            this.parameter();
	            this.state = 402;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,46,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 398;
	                    this.match(NaviParser.T__3);
	                    this.state = 399;
	                    this.parameter(); 
	                }
	                this.state = 404;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,46,this._ctx);
	            }

	            this.state = 406;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 405;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 410;
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
	    this.enterRule(localctx, 70, NaviParser.RULE_varArgParameters);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 412;
	        this.match(NaviParser.T__5);
	        this.state = 431;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37 || _la===48) {
	            this.state = 426;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 37:
	                this.state = 413;
	                this.parameter();
	                this.state = 418;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,49,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 414;
	                        this.match(NaviParser.T__3);
	                        this.state = 415;
	                        this.parameter(); 
	                    }
	                    this.state = 420;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,49,this._ctx);
	                }

	                this.state = 423;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	                if(la_===1) {
	                    this.state = 421;
	                    this.match(NaviParser.T__3);
	                    this.state = 422;
	                    this.varArgParameter();

	                }
	                break;
	            case 48:
	                this.state = 425;
	                this.varArgParameter();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 429;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 428;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 433;
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
	    this.enterRule(localctx, 72, NaviParser.RULE_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 435;
	        this.match(NaviParser.Identifier);
	        this.state = 436;
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
	    this.enterRule(localctx, 74, NaviParser.RULE_varArgParameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 438;
	        this.match(NaviParser.OpSpread);
	        this.state = 439;
	        this.match(NaviParser.Identifier);
	        this.state = 440;
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
	    this.enterRule(localctx, 76, NaviParser.RULE_assert);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 442;
	        this.match(NaviParser.T__11);
	        this.state = 443;
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
	    this.enterRule(localctx, 78, NaviParser.RULE_contextualKeyword);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 445;
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
	    this.enterRule(localctx, 80, NaviParser.RULE_name);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 447;
	        this.match(NaviParser.Identifier);
	        this.state = 455;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 448;
	            this.match(NaviParser.T__12);
	            this.state = 451;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 37:
	                this.state = 449;
	                this.match(NaviParser.Identifier);
	                break;
	            case 14:
	            case 23:
	            case 24:
	                this.state = 450;
	                this.contextualKeyword();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 457;
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
NaviParser.RULE_unaryExpression = 19;
NaviParser.RULE_multiplicativeExpression = 20;
NaviParser.RULE_additiveExpression = 21;
NaviParser.RULE_intersectionExpression = 22;
NaviParser.RULE_unionExpression = 23;
NaviParser.RULE_comparisonExpression = 24;
NaviParser.RULE_logicalAndExpression = 25;
NaviParser.RULE_logicalOrExpression = 26;
NaviParser.RULE_expression = 27;
NaviParser.RULE_args = 28;
NaviParser.RULE_fields = 29;
NaviParser.RULE_fieldsSpread = 30;
NaviParser.RULE_spread = 31;
NaviParser.RULE_field = 32;
NaviParser.RULE_fieldMaybeAssert = 33;
NaviParser.RULE_parameters = 34;
NaviParser.RULE_varArgParameters = 35;
NaviParser.RULE_parameter = 36;
NaviParser.RULE_varArgParameter = 37;
NaviParser.RULE_assert = 38;
NaviParser.RULE_contextualKeyword = 39;
NaviParser.RULE_name = 40;

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



class UnaryExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_unaryExpression;
    }

	fieldAccessExpression() {
	    return this.getTypedRuleContext(FieldAccessExpressionContext,0);
	};

	OpMinus() {
	    return this.getToken(NaviParser.OpMinus, 0);
	};

	Not() {
	    return this.getToken(NaviParser.Not, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterUnaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitUnaryExpression(this);
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

	unaryExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnaryExpressionContext);
	    } else {
	        return this.getTypedRuleContext(UnaryExpressionContext,i);
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

	comparisonExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ComparisonExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ComparisonExpressionContext,i);
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
NaviParser.UnaryExpressionContext = UnaryExpressionContext; 
NaviParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext; 
NaviParser.AdditiveExpressionContext = AdditiveExpressionContext; 
NaviParser.IntersectionExpressionContext = IntersectionExpressionContext; 
NaviParser.UnionExpressionContext = UnionExpressionContext; 
NaviParser.ComparisonExpressionContext = ComparisonExpressionContext; 
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
