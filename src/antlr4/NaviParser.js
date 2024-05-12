// Generated from src/antlr4/Navi.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import NaviListener from './NaviListener.js';
const serializedATN = [4,1,52,476,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,
2,42,7,42,1,0,1,0,5,0,89,8,0,10,0,12,0,92,9,0,1,0,1,0,1,1,5,1,97,8,1,10,
1,12,1,100,9,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,3,3,112,8,3,1,3,1,
3,1,4,1,4,1,4,1,4,3,4,120,8,4,1,5,1,5,1,5,1,5,3,5,126,8,5,1,6,1,6,1,6,1,
6,3,6,132,8,6,1,6,1,6,1,6,1,6,1,6,3,6,139,8,6,1,7,1,7,1,7,3,7,144,8,7,1,
7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,156,8,8,10,8,12,8,159,9,8,1,8,
3,8,162,8,8,5,8,164,8,8,10,8,12,8,167,9,8,1,8,1,8,1,9,1,9,3,9,173,8,9,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,10,3,10,193,8,10,1,11,1,11,1,11,1,11,1,11,1,11,5,11,201,8,11,
10,11,12,11,204,9,11,1,11,3,11,207,8,11,3,11,209,8,11,1,11,1,11,1,12,1,12,
3,12,215,8,12,1,12,1,12,3,12,219,8,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,
1,13,1,14,1,14,1,15,1,15,1,15,1,16,1,16,5,16,236,8,16,10,16,12,16,239,9,
16,1,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,3,17,250,8,17,1,18,1,18,
1,18,5,18,255,8,18,10,18,12,18,258,9,18,1,19,1,19,1,19,3,19,263,8,19,1,20,
3,20,266,8,20,1,20,1,20,1,21,1,21,1,21,5,21,273,8,21,10,21,12,21,276,9,21,
1,22,1,22,1,22,5,22,281,8,22,10,22,12,22,284,9,22,1,23,1,23,1,23,5,23,289,
8,23,10,23,12,23,292,9,23,1,24,1,24,1,24,5,24,297,8,24,10,24,12,24,300,9,
24,1,25,1,25,1,25,3,25,305,8,25,1,26,5,26,308,8,26,10,26,12,26,311,9,26,
1,26,1,26,1,27,1,27,1,27,5,27,318,8,27,10,27,12,27,321,9,27,1,28,1,28,1,
28,5,28,326,8,28,10,28,12,28,329,9,28,1,29,1,29,1,30,1,30,1,30,5,30,336,
8,30,10,30,12,30,339,9,30,1,30,3,30,342,8,30,3,30,344,8,30,1,31,1,31,1,31,
1,31,5,31,350,8,31,10,31,12,31,353,9,31,1,31,3,31,356,8,31,3,31,358,8,31,
1,31,1,31,1,32,1,32,1,32,1,32,5,32,366,8,32,10,32,12,32,369,9,32,1,32,1,
32,1,32,1,32,5,32,375,8,32,10,32,12,32,378,9,32,1,32,3,32,381,8,32,3,32,
383,8,32,3,32,385,8,32,1,32,1,32,1,32,5,32,390,8,32,10,32,12,32,393,9,32,
1,32,3,32,396,8,32,3,32,398,8,32,3,32,400,8,32,1,32,1,32,1,33,1,33,1,33,
1,34,1,34,1,34,1,35,1,35,3,35,412,8,35,1,36,1,36,1,36,1,36,5,36,418,8,36,
10,36,12,36,421,9,36,1,36,3,36,424,8,36,3,36,426,8,36,1,36,1,36,1,37,1,37,
1,37,1,37,5,37,434,8,37,10,37,12,37,437,9,37,1,37,1,37,3,37,441,8,37,1,37,
3,37,444,8,37,1,37,3,37,447,8,37,3,37,449,8,37,1,37,1,37,1,38,1,38,1,38,
1,39,1,39,1,39,1,39,1,40,1,40,1,40,1,41,1,41,1,42,1,42,1,42,1,42,3,42,469,
8,42,5,42,471,8,42,10,42,12,42,474,9,42,1,42,0,0,43,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,
66,68,70,72,74,76,78,80,82,84,0,4,1,0,40,41,1,0,38,39,1,0,43,48,2,0,14,14,
23,24,505,0,90,1,0,0,0,2,98,1,0,0,0,4,104,1,0,0,0,6,106,1,0,0,0,8,119,1,
0,0,0,10,121,1,0,0,0,12,127,1,0,0,0,14,140,1,0,0,0,16,149,1,0,0,0,18,170,
1,0,0,0,20,192,1,0,0,0,22,194,1,0,0,0,24,214,1,0,0,0,26,223,1,0,0,0,28,228,
1,0,0,0,30,230,1,0,0,0,32,233,1,0,0,0,34,243,1,0,0,0,36,251,1,0,0,0,38,259,
1,0,0,0,40,265,1,0,0,0,42,269,1,0,0,0,44,277,1,0,0,0,46,285,1,0,0,0,48,293,
1,0,0,0,50,301,1,0,0,0,52,309,1,0,0,0,54,314,1,0,0,0,56,322,1,0,0,0,58,330,
1,0,0,0,60,343,1,0,0,0,62,345,1,0,0,0,64,361,1,0,0,0,66,403,1,0,0,0,68,406,
1,0,0,0,70,409,1,0,0,0,72,413,1,0,0,0,74,429,1,0,0,0,76,452,1,0,0,0,78,455,
1,0,0,0,80,459,1,0,0,0,82,462,1,0,0,0,84,464,1,0,0,0,86,89,3,8,4,0,87,89,
3,4,2,0,88,86,1,0,0,0,88,87,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,
0,0,0,91,93,1,0,0,0,92,90,1,0,0,0,93,94,5,0,0,1,94,1,1,0,0,0,95,97,3,8,4,
0,96,95,1,0,0,0,97,100,1,0,0,0,98,96,1,0,0,0,98,99,1,0,0,0,99,101,1,0,0,
0,100,98,1,0,0,0,101,102,3,58,29,0,102,103,5,0,0,1,103,3,1,0,0,0,104,105,
3,6,3,0,105,5,1,0,0,0,106,107,5,20,0,0,107,108,5,16,0,0,108,109,3,84,42,
0,109,111,3,74,37,0,110,112,3,80,40,0,111,110,1,0,0,0,111,112,1,0,0,0,112,
113,1,0,0,0,113,114,5,1,0,0,114,7,1,0,0,0,115,120,3,10,5,0,116,120,3,12,
6,0,117,120,3,14,7,0,118,120,3,16,8,0,119,115,1,0,0,0,119,116,1,0,0,0,119,
117,1,0,0,0,119,118,1,0,0,0,120,9,1,0,0,0,121,122,5,25,0,0,122,125,3,84,
42,0,123,126,5,1,0,0,124,126,3,62,31,0,125,123,1,0,0,0,125,124,1,0,0,0,126,
11,1,0,0,0,127,128,5,16,0,0,128,129,3,84,42,0,129,131,3,72,36,0,130,132,
3,80,40,0,131,130,1,0,0,0,131,132,1,0,0,0,132,138,1,0,0,0,133,134,5,2,0,
0,134,135,3,58,29,0,135,136,5,1,0,0,136,139,1,0,0,0,137,139,3,32,16,0,138,
133,1,0,0,0,138,137,1,0,0,0,139,13,1,0,0,0,140,141,5,21,0,0,141,143,3,84,
42,0,142,144,3,80,40,0,143,142,1,0,0,0,143,144,1,0,0,0,144,145,1,0,0,0,145,
146,5,2,0,0,146,147,3,58,29,0,147,148,5,1,0,0,148,15,1,0,0,0,149,150,5,18,
0,0,150,151,3,84,42,0,151,165,5,3,0,0,152,157,3,18,9,0,153,154,5,4,0,0,154,
156,3,18,9,0,155,153,1,0,0,0,156,159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,
0,0,158,161,1,0,0,0,159,157,1,0,0,0,160,162,5,4,0,0,161,160,1,0,0,0,161,
162,1,0,0,0,162,164,1,0,0,0,163,152,1,0,0,0,164,167,1,0,0,0,165,163,1,0,
0,0,165,166,1,0,0,0,166,168,1,0,0,0,167,165,1,0,0,0,168,169,5,5,0,0,169,
17,1,0,0,0,170,172,5,37,0,0,171,173,3,62,31,0,172,171,1,0,0,0,172,173,1,
0,0,0,173,19,1,0,0,0,174,193,5,29,0,0,175,193,5,30,0,0,176,193,5,31,0,0,
177,193,5,32,0,0,178,193,5,33,0,0,179,193,5,34,0,0,180,193,5,35,0,0,181,
193,5,36,0,0,182,193,3,22,11,0,183,193,3,34,17,0,184,193,3,26,13,0,185,193,
3,28,14,0,186,193,3,30,15,0,187,193,3,32,16,0,188,189,5,6,0,0,189,190,3,
58,29,0,190,191,5,7,0,0,191,193,1,0,0,0,192,174,1,0,0,0,192,175,1,0,0,0,
192,176,1,0,0,0,192,177,1,0,0,0,192,178,1,0,0,0,192,179,1,0,0,0,192,180,
1,0,0,0,192,181,1,0,0,0,192,182,1,0,0,0,192,183,1,0,0,0,192,184,1,0,0,0,
192,185,1,0,0,0,192,186,1,0,0,0,192,187,1,0,0,0,192,188,1,0,0,0,193,21,1,
0,0,0,194,195,5,22,0,0,195,196,3,58,29,0,196,208,5,3,0,0,197,202,3,24,12,
0,198,199,5,4,0,0,199,201,3,24,12,0,200,198,1,0,0,0,201,204,1,0,0,0,202,
200,1,0,0,0,202,203,1,0,0,0,203,206,1,0,0,0,204,202,1,0,0,0,205,207,5,4,
0,0,206,205,1,0,0,0,206,207,1,0,0,0,207,209,1,0,0,0,208,197,1,0,0,0,208,
209,1,0,0,0,209,210,1,0,0,0,210,211,5,5,0,0,211,23,1,0,0,0,212,215,5,28,
0,0,213,215,3,58,29,0,214,212,1,0,0,0,214,213,1,0,0,0,215,218,1,0,0,0,216,
217,5,15,0,0,217,219,5,37,0,0,218,216,1,0,0,0,218,219,1,0,0,0,219,220,1,
0,0,0,220,221,5,8,0,0,221,222,3,58,29,0,222,25,1,0,0,0,223,224,3,84,42,0,
224,225,5,6,0,0,225,226,3,60,30,0,226,227,5,7,0,0,227,27,1,0,0,0,228,229,
3,84,42,0,229,29,1,0,0,0,230,231,3,84,42,0,231,232,3,64,32,0,232,31,1,0,
0,0,233,237,5,3,0,0,234,236,3,8,4,0,235,234,1,0,0,0,236,239,1,0,0,0,237,
235,1,0,0,0,237,238,1,0,0,0,238,240,1,0,0,0,239,237,1,0,0,0,240,241,3,58,
29,0,241,242,5,5,0,0,242,33,1,0,0,0,243,244,5,19,0,0,244,245,3,58,29,0,245,
246,3,32,16,0,246,249,5,17,0,0,247,250,3,32,16,0,248,250,3,34,17,0,249,247,
1,0,0,0,249,248,1,0,0,0,250,35,1,0,0,0,251,256,3,20,10,0,252,253,5,9,0,0,
253,255,5,37,0,0,254,252,1,0,0,0,255,258,1,0,0,0,256,254,1,0,0,0,256,257,
1,0,0,0,257,37,1,0,0,0,258,256,1,0,0,0,259,262,3,36,18,0,260,261,5,42,0,
0,261,263,3,36,18,0,262,260,1,0,0,0,262,263,1,0,0,0,263,39,1,0,0,0,264,266,
5,38,0,0,265,264,1,0,0,0,265,266,1,0,0,0,266,267,1,0,0,0,267,268,3,38,19,
0,268,41,1,0,0,0,269,274,3,40,20,0,270,271,7,0,0,0,271,273,3,40,20,0,272,
270,1,0,0,0,273,276,1,0,0,0,274,272,1,0,0,0,274,275,1,0,0,0,275,43,1,0,0,
0,276,274,1,0,0,0,277,282,3,42,21,0,278,279,7,1,0,0,279,281,3,42,21,0,280,
278,1,0,0,0,281,284,1,0,0,0,282,280,1,0,0,0,282,283,1,0,0,0,283,45,1,0,0,
0,284,282,1,0,0,0,285,290,3,44,22,0,286,287,5,10,0,0,287,289,3,44,22,0,288,
286,1,0,0,0,289,292,1,0,0,0,290,288,1,0,0,0,290,291,1,0,0,0,291,47,1,0,0,
0,292,290,1,0,0,0,293,298,3,46,23,0,294,295,5,11,0,0,295,297,3,46,23,0,296,
294,1,0,0,0,297,300,1,0,0,0,298,296,1,0,0,0,298,299,1,0,0,0,299,49,1,0,0,
0,300,298,1,0,0,0,301,304,3,48,24,0,302,303,7,2,0,0,303,305,3,48,24,0,304,
302,1,0,0,0,304,305,1,0,0,0,305,51,1,0,0,0,306,308,5,23,0,0,307,306,1,0,
0,0,308,311,1,0,0,0,309,307,1,0,0,0,309,310,1,0,0,0,310,312,1,0,0,0,311,
309,1,0,0,0,312,313,3,50,25,0,313,53,1,0,0,0,314,319,3,52,26,0,315,316,5,
14,0,0,316,318,3,52,26,0,317,315,1,0,0,0,318,321,1,0,0,0,319,317,1,0,0,0,
319,320,1,0,0,0,320,55,1,0,0,0,321,319,1,0,0,0,322,327,3,54,27,0,323,324,
5,24,0,0,324,326,3,54,27,0,325,323,1,0,0,0,326,329,1,0,0,0,327,325,1,0,0,
0,327,328,1,0,0,0,328,57,1,0,0,0,329,327,1,0,0,0,330,331,3,56,28,0,331,59,
1,0,0,0,332,337,3,58,29,0,333,334,5,4,0,0,334,336,3,58,29,0,335,333,1,0,
0,0,336,339,1,0,0,0,337,335,1,0,0,0,337,338,1,0,0,0,338,341,1,0,0,0,339,
337,1,0,0,0,340,342,5,4,0,0,341,340,1,0,0,0,341,342,1,0,0,0,342,344,1,0,
0,0,343,332,1,0,0,0,343,344,1,0,0,0,344,61,1,0,0,0,345,357,5,3,0,0,346,351,
3,68,34,0,347,348,5,4,0,0,348,350,3,68,34,0,349,347,1,0,0,0,350,353,1,0,
0,0,351,349,1,0,0,0,351,352,1,0,0,0,352,355,1,0,0,0,353,351,1,0,0,0,354,
356,5,4,0,0,355,354,1,0,0,0,355,356,1,0,0,0,356,358,1,0,0,0,357,346,1,0,
0,0,357,358,1,0,0,0,358,359,1,0,0,0,359,360,5,5,0,0,360,63,1,0,0,0,361,399,
5,3,0,0,362,367,3,66,33,0,363,364,5,4,0,0,364,366,3,66,33,0,365,363,1,0,
0,0,366,369,1,0,0,0,367,365,1,0,0,0,367,368,1,0,0,0,368,384,1,0,0,0,369,
367,1,0,0,0,370,382,5,4,0,0,371,376,3,70,35,0,372,373,5,4,0,0,373,375,3,
70,35,0,374,372,1,0,0,0,375,378,1,0,0,0,376,374,1,0,0,0,376,377,1,0,0,0,
377,380,1,0,0,0,378,376,1,0,0,0,379,381,5,4,0,0,380,379,1,0,0,0,380,381,
1,0,0,0,381,383,1,0,0,0,382,371,1,0,0,0,382,383,1,0,0,0,383,385,1,0,0,0,
384,370,1,0,0,0,384,385,1,0,0,0,385,400,1,0,0,0,386,391,3,70,35,0,387,388,
5,4,0,0,388,390,3,70,35,0,389,387,1,0,0,0,390,393,1,0,0,0,391,389,1,0,0,
0,391,392,1,0,0,0,392,395,1,0,0,0,393,391,1,0,0,0,394,396,5,4,0,0,395,394,
1,0,0,0,395,396,1,0,0,0,396,398,1,0,0,0,397,386,1,0,0,0,397,398,1,0,0,0,
398,400,1,0,0,0,399,362,1,0,0,0,399,397,1,0,0,0,400,401,1,0,0,0,401,402,
5,5,0,0,402,65,1,0,0,0,403,404,5,49,0,0,404,405,3,58,29,0,405,67,1,0,0,0,
406,407,5,37,0,0,407,408,3,80,40,0,408,69,1,0,0,0,409,411,5,37,0,0,410,412,
3,80,40,0,411,410,1,0,0,0,411,412,1,0,0,0,412,71,1,0,0,0,413,425,5,6,0,0,
414,419,3,76,38,0,415,416,5,4,0,0,416,418,3,76,38,0,417,415,1,0,0,0,418,
421,1,0,0,0,419,417,1,0,0,0,419,420,1,0,0,0,420,423,1,0,0,0,421,419,1,0,
0,0,422,424,5,4,0,0,423,422,1,0,0,0,423,424,1,0,0,0,424,426,1,0,0,0,425,
414,1,0,0,0,425,426,1,0,0,0,426,427,1,0,0,0,427,428,5,7,0,0,428,73,1,0,0,
0,429,448,5,6,0,0,430,435,3,76,38,0,431,432,5,4,0,0,432,434,3,76,38,0,433,
431,1,0,0,0,434,437,1,0,0,0,435,433,1,0,0,0,435,436,1,0,0,0,436,440,1,0,
0,0,437,435,1,0,0,0,438,439,5,4,0,0,439,441,3,78,39,0,440,438,1,0,0,0,440,
441,1,0,0,0,441,444,1,0,0,0,442,444,3,78,39,0,443,430,1,0,0,0,443,442,1,
0,0,0,444,446,1,0,0,0,445,447,5,4,0,0,446,445,1,0,0,0,446,447,1,0,0,0,447,
449,1,0,0,0,448,443,1,0,0,0,448,449,1,0,0,0,449,450,1,0,0,0,450,451,5,7,
0,0,451,75,1,0,0,0,452,453,5,37,0,0,453,454,3,80,40,0,454,77,1,0,0,0,455,
456,5,49,0,0,456,457,5,37,0,0,457,458,3,80,40,0,458,79,1,0,0,0,459,460,5,
12,0,0,460,461,3,58,29,0,461,81,1,0,0,0,462,463,7,3,0,0,463,83,1,0,0,0,464,
472,5,37,0,0,465,468,5,13,0,0,466,469,5,37,0,0,467,469,3,82,41,0,468,466,
1,0,0,0,468,467,1,0,0,0,469,471,1,0,0,0,470,465,1,0,0,0,471,474,1,0,0,0,
472,470,1,0,0,0,472,473,1,0,0,0,473,85,1,0,0,0,474,472,1,0,0,0,58,88,90,
98,111,119,125,131,138,143,157,161,165,172,192,202,206,208,214,218,237,249,
256,262,265,274,282,290,298,304,309,319,327,337,341,343,351,355,357,367,
376,380,382,384,391,395,397,399,411,419,423,425,435,440,443,446,448,468,
472];


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
                            null, "'-'", "'+'", "'*'", "'/'", "'**'", "'=='", 
                            "'!='", "'>'", "'<'", "'>='", "'<='", "'...'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "And", 
                             "As", "Def", "Else", "Enum", "If", "Intrinsic", 
                             "Let", "Match", "Not", "Or", "Struct", "Self", 
                             "Trait", "Discard", "IntInterval", "NonIntInterval", 
                             "IntervalInclusive", "IntervalMinExclusive", 
                             "IntervalMaxExclusive", "IntervalExclusive", 
                             "Number", "String", "Identifier", "OpMinus", 
                             "OpPlus", "OpMult", "OpDiv", "OpPow", "OpEqual", 
                             "OpNotEqual", "OpGt", "OpLt", "OpGte", "OpLte", 
                             "OpSpread", "Space", "LineComment", "BlockComment" ];
    static ruleNames = [ "definitionDocument", "expressionDocument", "declaration", 
                         "intrinsicFunctionDeclaration", "definition", "structDefinition", 
                         "functionDefinition", "variableDefinition", "enumDefinition", 
                         "enumVariant", "primaryExpression", "matchExpression", 
                         "matchArm", "functionCall", "named", "structExpression", 
                         "scopeExpression", "ifExpression", "fieldAccessExpression", 
                         "powExpression", "negateExpression", "multiplicativeExpression", 
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
	        this.state = 90;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 37027840) !== 0)) {
	            this.state = 88;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 16:
	            case 18:
	            case 21:
	            case 25:
	                this.state = 86;
	                this.definition();
	                break;
	            case 20:
	                this.state = 87;
	                this.declaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 92;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 93;
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
	        this.state = 98;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 35979264) !== 0)) {
	            this.state = 95;
	            this.definition();
	            this.state = 100;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 101;
	        this.expression();
	        this.state = 102;
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
	        this.state = 104;
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
	        this.state = 106;
	        this.match(NaviParser.Intrinsic);
	        this.state = 107;
	        this.match(NaviParser.Def);
	        this.state = 108;
	        this.name();
	        this.state = 109;
	        this.varArgParameters();
	        this.state = 111;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 110;
	            this.assert();
	        }

	        this.state = 113;
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
	        this.state = 119;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 25:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 115;
	            this.structDefinition();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 116;
	            this.functionDefinition();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 117;
	            this.variableDefinition();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 118;
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
	        this.state = 121;
	        this.match(NaviParser.Struct);
	        this.state = 122;
	        this.name();
	        this.state = 125;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.state = 123;
	            this.match(NaviParser.T__0);
	            break;
	        case 3:
	            this.state = 124;
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
	        this.state = 127;
	        this.match(NaviParser.Def);
	        this.state = 128;
	        this.name();
	        this.state = 129;
	        this.parameters();
	        this.state = 131;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 130;
	            this.assert();
	        }

	        this.state = 138;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 2:
	            this.state = 133;
	            this.match(NaviParser.T__1);
	            this.state = 134;
	            this.expression();
	            this.state = 135;
	            this.match(NaviParser.T__0);
	            break;
	        case 3:
	            this.state = 137;
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
	        this.state = 140;
	        this.match(NaviParser.Let);
	        this.state = 141;
	        this.name();
	        this.state = 143;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 142;
	            this.assert();
	        }

	        this.state = 145;
	        this.match(NaviParser.T__1);
	        this.state = 146;
	        this.expression();
	        this.state = 147;
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
	        this.state = 149;
	        this.match(NaviParser.Enum);
	        this.state = 150;
	        this.name();
	        this.state = 151;
	        this.match(NaviParser.T__2);
	        this.state = 165;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37) {
	            this.state = 152;
	            this.enumVariant();
	            this.state = 157;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 153;
	                    this.match(NaviParser.T__3);
	                    this.state = 154;
	                    this.enumVariant(); 
	                }
	                this.state = 159;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	            }

	            this.state = 161;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 160;
	                this.match(NaviParser.T__3);
	            }

	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 168;
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
	        this.state = 170;
	        this.match(NaviParser.Identifier);
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===3) {
	            this.state = 171;
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
	        this.state = 192;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 174;
	            this.match(NaviParser.IntInterval);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 175;
	            this.match(NaviParser.NonIntInterval);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 176;
	            this.match(NaviParser.IntervalInclusive);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 177;
	            this.match(NaviParser.IntervalMinExclusive);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 178;
	            this.match(NaviParser.IntervalMaxExclusive);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 179;
	            this.match(NaviParser.IntervalExclusive);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 180;
	            this.match(NaviParser.Number);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 181;
	            this.match(NaviParser.String);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 182;
	            this.matchExpression();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 183;
	            this.ifExpression();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 184;
	            this.functionCall();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 185;
	            this.named();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 186;
	            this.structExpression();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 187;
	            this.scopeExpression();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 188;
	            this.match(NaviParser.T__5);
	            this.state = 189;
	            this.expression();
	            this.state = 190;
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
	        this.state = 194;
	        this.match(NaviParser.Match);
	        this.state = 195;
	        this.expression();
	        this.state = 196;
	        this.match(NaviParser.T__2);
	        this.state = 208;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 4039639112) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 127) !== 0)) {
	            this.state = 197;
	            this.matchArm();
	            this.state = 202;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 198;
	                    this.match(NaviParser.T__3);
	                    this.state = 199;
	                    this.matchArm(); 
	                }
	                this.state = 204;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	            }

	            this.state = 206;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 205;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 210;
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
	        this.state = 214;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.state = 212;
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
	            this.state = 213;
	            this.expression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 218;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===15) {
	            this.state = 216;
	            this.match(NaviParser.As);
	            this.state = 217;
	            this.match(NaviParser.Identifier);
	        }

	        this.state = 220;
	        this.match(NaviParser.T__7);
	        this.state = 221;
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
	        this.state = 223;
	        this.name();
	        this.state = 224;
	        this.match(NaviParser.T__5);
	        this.state = 225;
	        this.args();
	        this.state = 226;
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
	        this.state = 228;
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
	        this.state = 230;
	        this.name();
	        this.state = 231;
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
	        this.state = 233;
	        this.match(NaviParser.T__2);
	        this.state = 237;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 35979264) !== 0)) {
	            this.state = 234;
	            this.definition();
	            this.state = 239;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 240;
	        this.expression();
	        this.state = 241;
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
	        this.state = 243;
	        this.match(NaviParser.If);
	        this.state = 244;
	        this.expression();
	        this.state = 245;
	        this.scopeExpression();
	        this.state = 246;
	        this.match(NaviParser.Else);
	        this.state = 249;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 3:
	            this.state = 247;
	            this.scopeExpression();
	            break;
	        case 19:
	            this.state = 248;
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
	        this.state = 251;
	        this.primaryExpression();
	        this.state = 256;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===9) {
	            this.state = 252;
	            this.match(NaviParser.T__8);
	            this.state = 253;
	            this.match(NaviParser.Identifier);
	            this.state = 258;
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



	powExpression() {
	    let localctx = new PowExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, NaviParser.RULE_powExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.fieldAccessExpression();
	        this.state = 262;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===42) {
	            this.state = 260;
	            this.match(NaviParser.OpPow);
	            this.state = 261;
	            this.fieldAccessExpression();
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
	    this.enterRule(localctx, 40, NaviParser.RULE_negateExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 265;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===38) {
	            this.state = 264;
	            this.match(NaviParser.OpMinus);
	        }

	        this.state = 267;
	        this.powExpression();
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
	    this.enterRule(localctx, 42, NaviParser.RULE_multiplicativeExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 269;
	        this.negateExpression();
	        this.state = 274;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40 || _la===41) {
	            this.state = 270;
	            _la = this._input.LA(1);
	            if(!(_la===40 || _la===41)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 271;
	            this.negateExpression();
	            this.state = 276;
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
	    this.enterRule(localctx, 44, NaviParser.RULE_additiveExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.multiplicativeExpression();
	        this.state = 282;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38 || _la===39) {
	            this.state = 278;
	            _la = this._input.LA(1);
	            if(!(_la===38 || _la===39)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 279;
	            this.multiplicativeExpression();
	            this.state = 284;
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
	    this.enterRule(localctx, 46, NaviParser.RULE_intersectionExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
	        this.additiveExpression();
	        this.state = 290;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===10) {
	            this.state = 286;
	            this.match(NaviParser.T__9);
	            this.state = 287;
	            this.additiveExpression();
	            this.state = 292;
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
	    this.enterRule(localctx, 48, NaviParser.RULE_unionExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 293;
	        this.intersectionExpression();
	        this.state = 298;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===11) {
	            this.state = 294;
	            this.match(NaviParser.T__10);
	            this.state = 295;
	            this.intersectionExpression();
	            this.state = 300;
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
	    this.enterRule(localctx, 50, NaviParser.RULE_comparisonExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 301;
	        this.unionExpression();
	        this.state = 304;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 63) !== 0)) {
	            this.state = 302;
	            _la = this._input.LA(1);
	            if(!(((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 63) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 303;
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
	    this.enterRule(localctx, 52, NaviParser.RULE_logicalNotExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23) {
	            this.state = 306;
	            this.match(NaviParser.Not);
	            this.state = 311;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 312;
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
	    this.enterRule(localctx, 54, NaviParser.RULE_logicalAndExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 314;
	        this.logicalNotExpression();
	        this.state = 319;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 315;
	            this.match(NaviParser.And);
	            this.state = 316;
	            this.logicalNotExpression();
	            this.state = 321;
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
	    this.enterRule(localctx, 56, NaviParser.RULE_logicalOrExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 322;
	        this.logicalAndExpression();
	        this.state = 327;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===24) {
	            this.state = 323;
	            this.match(NaviParser.Or);
	            this.state = 324;
	            this.logicalAndExpression();
	            this.state = 329;
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
	    this.enterRule(localctx, 58, NaviParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 330;
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
	    this.enterRule(localctx, 60, NaviParser.RULE_args);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 343;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 3771203656) !== 0) || ((((_la - 32)) & ~0x1f) === 0 && ((1 << (_la - 32)) & 127) !== 0)) {
	            this.state = 332;
	            this.expression();
	            this.state = 337;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 333;
	                    this.match(NaviParser.T__3);
	                    this.state = 334;
	                    this.expression(); 
	                }
	                this.state = 339;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
	            }

	            this.state = 341;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 340;
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
	    this.enterRule(localctx, 62, NaviParser.RULE_fields);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 345;
	        this.match(NaviParser.T__2);
	        this.state = 357;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 346;
	            this.field();
	            this.state = 351;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 347;
	                    this.match(NaviParser.T__3);
	                    this.state = 348;
	                    this.field(); 
	                }
	                this.state = 353;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
	            }

	            this.state = 355;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 354;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 359;
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
	    this.enterRule(localctx, 64, NaviParser.RULE_fieldsSpread);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 361;
	        this.match(NaviParser.T__2);
	        this.state = 399;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 49:
	            this.state = 362;
	            this.spread();
	            this.state = 367;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,38,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 363;
	                    this.match(NaviParser.T__3);
	                    this.state = 364;
	                    this.spread(); 
	                }
	                this.state = 369;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,38,this._ctx);
	            }

	            this.state = 384;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 370;
	                this.match(NaviParser.T__3);
	                this.state = 382;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===37) {
	                    this.state = 371;
	                    this.fieldMaybeAssert();
	                    this.state = 376;
	                    this._errHandler.sync(this);
	                    var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
	                    while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                        if(_alt===1) {
	                            this.state = 372;
	                            this.match(NaviParser.T__3);
	                            this.state = 373;
	                            this.fieldMaybeAssert(); 
	                        }
	                        this.state = 378;
	                        this._errHandler.sync(this);
	                        _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
	                    }

	                    this.state = 380;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===4) {
	                        this.state = 379;
	                        this.match(NaviParser.T__3);
	                    }

	                }

	            }

	            break;
	        case 5:
	        case 37:
	            this.state = 397;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===37) {
	                this.state = 386;
	                this.fieldMaybeAssert();
	                this.state = 391;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,43,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 387;
	                        this.match(NaviParser.T__3);
	                        this.state = 388;
	                        this.fieldMaybeAssert(); 
	                    }
	                    this.state = 393;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,43,this._ctx);
	                }

	                this.state = 395;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(_la===4) {
	                    this.state = 394;
	                    this.match(NaviParser.T__3);
	                }

	            }

	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 401;
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
	    this.enterRule(localctx, 66, NaviParser.RULE_spread);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 403;
	        this.match(NaviParser.OpSpread);
	        this.state = 404;
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
	    this.enterRule(localctx, 68, NaviParser.RULE_field);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 406;
	        this.match(NaviParser.Identifier);
	        this.state = 407;
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
	    this.enterRule(localctx, 70, NaviParser.RULE_fieldMaybeAssert);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 409;
	        this.match(NaviParser.Identifier);
	        this.state = 411;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12) {
	            this.state = 410;
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
	    this.enterRule(localctx, 72, NaviParser.RULE_parameters);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 413;
	        this.match(NaviParser.T__5);
	        this.state = 425;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37) {
	            this.state = 414;
	            this.parameter();
	            this.state = 419;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,48,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 415;
	                    this.match(NaviParser.T__3);
	                    this.state = 416;
	                    this.parameter(); 
	                }
	                this.state = 421;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,48,this._ctx);
	            }

	            this.state = 423;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 422;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 427;
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
	    this.enterRule(localctx, 74, NaviParser.RULE_varArgParameters);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 429;
	        this.match(NaviParser.T__5);
	        this.state = 448;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===37 || _la===49) {
	            this.state = 443;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 37:
	                this.state = 430;
	                this.parameter();
	                this.state = 435;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,51,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 431;
	                        this.match(NaviParser.T__3);
	                        this.state = 432;
	                        this.parameter(); 
	                    }
	                    this.state = 437;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,51,this._ctx);
	                }

	                this.state = 440;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,52,this._ctx);
	                if(la_===1) {
	                    this.state = 438;
	                    this.match(NaviParser.T__3);
	                    this.state = 439;
	                    this.varArgParameter();

	                }
	                break;
	            case 49:
	                this.state = 442;
	                this.varArgParameter();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 446;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===4) {
	                this.state = 445;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 450;
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
	    this.enterRule(localctx, 76, NaviParser.RULE_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 452;
	        this.match(NaviParser.Identifier);
	        this.state = 453;
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
	    this.enterRule(localctx, 78, NaviParser.RULE_varArgParameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 455;
	        this.match(NaviParser.OpSpread);
	        this.state = 456;
	        this.match(NaviParser.Identifier);
	        this.state = 457;
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
	    this.enterRule(localctx, 80, NaviParser.RULE_assert);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 459;
	        this.match(NaviParser.T__11);
	        this.state = 460;
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
	    this.enterRule(localctx, 82, NaviParser.RULE_contextualKeyword);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 462;
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
	    this.enterRule(localctx, 84, NaviParser.RULE_name);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 464;
	        this.match(NaviParser.Identifier);
	        this.state = 472;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===13) {
	            this.state = 465;
	            this.match(NaviParser.T__12);
	            this.state = 468;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 37:
	                this.state = 466;
	                this.match(NaviParser.Identifier);
	                break;
	            case 14:
	            case 23:
	            case 24:
	                this.state = 467;
	                this.contextualKeyword();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 474;
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
NaviParser.OpPow = 42;
NaviParser.OpEqual = 43;
NaviParser.OpNotEqual = 44;
NaviParser.OpGt = 45;
NaviParser.OpLt = 46;
NaviParser.OpGte = 47;
NaviParser.OpLte = 48;
NaviParser.OpSpread = 49;
NaviParser.Space = 50;
NaviParser.LineComment = 51;
NaviParser.BlockComment = 52;

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
NaviParser.RULE_powExpression = 19;
NaviParser.RULE_negateExpression = 20;
NaviParser.RULE_multiplicativeExpression = 21;
NaviParser.RULE_additiveExpression = 22;
NaviParser.RULE_intersectionExpression = 23;
NaviParser.RULE_unionExpression = 24;
NaviParser.RULE_comparisonExpression = 25;
NaviParser.RULE_logicalNotExpression = 26;
NaviParser.RULE_logicalAndExpression = 27;
NaviParser.RULE_logicalOrExpression = 28;
NaviParser.RULE_expression = 29;
NaviParser.RULE_args = 30;
NaviParser.RULE_fields = 31;
NaviParser.RULE_fieldsSpread = 32;
NaviParser.RULE_spread = 33;
NaviParser.RULE_field = 34;
NaviParser.RULE_fieldMaybeAssert = 35;
NaviParser.RULE_parameters = 36;
NaviParser.RULE_varArgParameters = 37;
NaviParser.RULE_parameter = 38;
NaviParser.RULE_varArgParameter = 39;
NaviParser.RULE_assert = 40;
NaviParser.RULE_contextualKeyword = 41;
NaviParser.RULE_name = 42;

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



class PowExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NaviParser.RULE_powExpression;
    }

	fieldAccessExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FieldAccessExpressionContext);
	    } else {
	        return this.getTypedRuleContext(FieldAccessExpressionContext,i);
	    }
	};

	OpPow() {
	    return this.getToken(NaviParser.OpPow, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.enterPowExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NaviListener ) {
	        listener.exitPowExpression(this);
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

	powExpression() {
	    return this.getTypedRuleContext(PowExpressionContext,0);
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
NaviParser.PowExpressionContext = PowExpressionContext; 
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
