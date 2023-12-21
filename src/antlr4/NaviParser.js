// Generated from src/antlr4/Navi.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import NaviListener from './NaviListener.js';
const serializedATN = [4,1,48,377,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,1,0,1,0,5,0,73,8,0,10,0,12,0,76,9,0,1,0,1,0,1,1,5,1,81,8,1,10,1,12,1,
84,9,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,3,3,96,8,3,1,3,1,3,1,4,1,
4,1,4,1,4,3,4,104,8,4,1,5,1,5,1,5,1,5,3,5,110,8,5,1,6,1,6,1,6,1,6,3,6,116,
8,6,1,6,1,6,1,6,1,6,1,6,3,6,123,8,6,1,7,1,7,1,7,3,7,128,8,7,1,7,1,7,1,7,
1,7,1,8,1,8,1,8,1,8,1,8,1,8,5,8,140,8,8,10,8,12,8,143,9,8,1,8,3,8,146,8,
8,5,8,148,8,8,10,8,12,8,151,9,8,1,8,1,8,1,9,1,9,3,9,157,8,9,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,
1,10,3,10,177,8,10,1,11,1,11,1,11,1,11,1,11,1,11,5,11,185,8,11,10,11,12,
11,188,9,11,1,11,3,11,191,8,11,3,11,193,8,11,1,11,1,11,1,12,1,12,3,12,199,
8,12,1,12,1,12,3,12,203,8,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,
1,14,1,15,1,15,1,15,1,16,1,16,5,16,220,8,16,10,16,12,16,223,9,16,1,16,1,
16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,3,17,234,8,17,1,18,1,18,1,18,5,18,
239,8,18,10,18,12,18,242,9,18,1,19,3,19,245,8,19,1,19,1,19,1,20,1,20,1,20,
5,20,252,8,20,10,20,12,20,255,9,20,1,21,1,21,1,21,5,21,260,8,21,10,21,12,
21,263,9,21,1,22,1,22,1,22,5,22,268,8,22,10,22,12,22,271,9,22,1,23,1,23,
1,23,5,23,276,8,23,10,23,12,23,279,9,23,1,24,1,24,1,24,3,24,284,8,24,1,25,
1,25,1,26,1,26,1,26,5,26,291,8,26,10,26,12,26,294,9,26,1,26,3,26,297,8,26,
3,26,299,8,26,1,27,1,27,1,27,1,27,5,27,305,8,27,10,27,12,27,308,9,27,1,27,
3,27,311,8,27,3,27,313,8,27,1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,29,1,29,
5,29,324,8,29,10,29,12,29,327,9,29,1,29,3,29,330,8,29,3,29,332,8,29,1,29,
1,29,1,30,1,30,1,30,1,30,5,30,340,8,30,10,30,12,30,343,9,30,1,30,1,30,3,
30,347,8,30,1,30,3,30,350,8,30,1,30,3,30,353,8,30,3,30,355,8,30,1,30,1,30,
1,31,1,31,1,31,1,32,1,32,1,32,1,32,1,33,1,33,1,33,1,34,1,34,1,34,5,34,372,
8,34,10,34,12,34,375,9,34,1,34,0,0,35,0,2,4,6,8,10,12,14,16,18,20,22,24,
26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,0,3,1,
0,37,38,1,0,35,36,1,0,39,44,399,0,74,1,0,0,0,2,82,1,0,0,0,4,88,1,0,0,0,6,
90,1,0,0,0,8,103,1,0,0,0,10,105,1,0,0,0,12,111,1,0,0,0,14,124,1,0,0,0,16,
133,1,0,0,0,18,154,1,0,0,0,20,176,1,0,0,0,22,178,1,0,0,0,24,198,1,0,0,0,
26,207,1,0,0,0,28,212,1,0,0,0,30,214,1,0,0,0,32,217,1,0,0,0,34,227,1,0,0,
0,36,235,1,0,0,0,38,244,1,0,0,0,40,248,1,0,0,0,42,256,1,0,0,0,44,264,1,0,
0,0,46,272,1,0,0,0,48,280,1,0,0,0,50,285,1,0,0,0,52,298,1,0,0,0,54,300,1,
0,0,0,56,316,1,0,0,0,58,319,1,0,0,0,60,335,1,0,0,0,62,358,1,0,0,0,64,361,
1,0,0,0,66,365,1,0,0,0,68,368,1,0,0,0,70,73,3,8,4,0,71,73,3,4,2,0,72,70,
1,0,0,0,72,71,1,0,0,0,73,76,1,0,0,0,74,72,1,0,0,0,74,75,1,0,0,0,75,77,1,
0,0,0,76,74,1,0,0,0,77,78,5,0,0,1,78,1,1,0,0,0,79,81,3,8,4,0,80,79,1,0,0,
0,81,84,1,0,0,0,82,80,1,0,0,0,82,83,1,0,0,0,83,85,1,0,0,0,84,82,1,0,0,0,
85,86,3,50,25,0,86,87,5,0,0,1,87,3,1,0,0,0,88,89,3,6,3,0,89,5,1,0,0,0,90,
91,5,22,0,0,91,92,5,15,0,0,92,93,3,68,34,0,93,95,3,60,30,0,94,96,3,66,33,
0,95,94,1,0,0,0,95,96,1,0,0,0,96,97,1,0,0,0,97,98,5,1,0,0,98,7,1,0,0,0,99,
104,3,10,5,0,100,104,3,12,6,0,101,104,3,14,7,0,102,104,3,16,8,0,103,99,1,
0,0,0,103,100,1,0,0,0,103,101,1,0,0,0,103,102,1,0,0,0,104,9,1,0,0,0,105,
106,5,20,0,0,106,109,3,68,34,0,107,110,5,1,0,0,108,110,3,54,27,0,109,107,
1,0,0,0,109,108,1,0,0,0,110,11,1,0,0,0,111,112,5,15,0,0,112,113,3,68,34,
0,113,115,3,58,29,0,114,116,3,66,33,0,115,114,1,0,0,0,115,116,1,0,0,0,116,
122,1,0,0,0,117,118,5,2,0,0,118,119,3,50,25,0,119,120,5,1,0,0,120,123,1,
0,0,0,121,123,3,32,16,0,122,117,1,0,0,0,122,121,1,0,0,0,123,13,1,0,0,0,124,
125,5,16,0,0,125,127,3,68,34,0,126,128,3,66,33,0,127,126,1,0,0,0,127,128,
1,0,0,0,128,129,1,0,0,0,129,130,5,2,0,0,130,131,3,50,25,0,131,132,5,1,0,
0,132,15,1,0,0,0,133,134,5,21,0,0,134,135,3,68,34,0,135,149,5,3,0,0,136,
141,3,18,9,0,137,138,5,4,0,0,138,140,3,18,9,0,139,137,1,0,0,0,140,143,1,
0,0,0,141,139,1,0,0,0,141,142,1,0,0,0,142,145,1,0,0,0,143,141,1,0,0,0,144,
146,5,4,0,0,145,144,1,0,0,0,145,146,1,0,0,0,146,148,1,0,0,0,147,136,1,0,
0,0,148,151,1,0,0,0,149,147,1,0,0,0,149,150,1,0,0,0,150,152,1,0,0,0,151,
149,1,0,0,0,152,153,5,5,0,0,153,17,1,0,0,0,154,156,5,34,0,0,155,157,3,54,
27,0,156,155,1,0,0,0,156,157,1,0,0,0,157,19,1,0,0,0,158,177,5,26,0,0,159,
177,5,27,0,0,160,177,5,28,0,0,161,177,5,29,0,0,162,177,5,30,0,0,163,177,
5,31,0,0,164,177,5,32,0,0,165,177,5,33,0,0,166,177,3,22,11,0,167,177,3,34,
17,0,168,177,3,26,13,0,169,177,3,28,14,0,170,177,3,30,15,0,171,177,3,32,
16,0,172,173,5,6,0,0,173,174,3,50,25,0,174,175,5,7,0,0,175,177,1,0,0,0,176,
158,1,0,0,0,176,159,1,0,0,0,176,160,1,0,0,0,176,161,1,0,0,0,176,162,1,0,
0,0,176,163,1,0,0,0,176,164,1,0,0,0,176,165,1,0,0,0,176,166,1,0,0,0,176,
167,1,0,0,0,176,168,1,0,0,0,176,169,1,0,0,0,176,170,1,0,0,0,176,171,1,0,
0,0,176,172,1,0,0,0,177,21,1,0,0,0,178,179,5,17,0,0,179,180,3,50,25,0,180,
192,5,3,0,0,181,186,3,24,12,0,182,183,5,4,0,0,183,185,3,24,12,0,184,182,
1,0,0,0,185,188,1,0,0,0,186,184,1,0,0,0,186,187,1,0,0,0,187,190,1,0,0,0,
188,186,1,0,0,0,189,191,5,4,0,0,190,189,1,0,0,0,190,191,1,0,0,0,191,193,
1,0,0,0,192,181,1,0,0,0,192,193,1,0,0,0,193,194,1,0,0,0,194,195,5,5,0,0,
195,23,1,0,0,0,196,199,5,25,0,0,197,199,3,50,25,0,198,196,1,0,0,0,198,197,
1,0,0,0,199,202,1,0,0,0,200,201,5,14,0,0,201,203,5,34,0,0,202,200,1,0,0,
0,202,203,1,0,0,0,203,204,1,0,0,0,204,205,5,8,0,0,205,206,3,50,25,0,206,
25,1,0,0,0,207,208,3,68,34,0,208,209,5,6,0,0,209,210,3,52,26,0,210,211,5,
7,0,0,211,27,1,0,0,0,212,213,3,68,34,0,213,29,1,0,0,0,214,215,3,68,34,0,
215,216,3,54,27,0,216,31,1,0,0,0,217,221,5,3,0,0,218,220,3,8,4,0,219,218,
1,0,0,0,220,223,1,0,0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,224,1,0,0,0,
223,221,1,0,0,0,224,225,3,50,25,0,225,226,5,5,0,0,226,33,1,0,0,0,227,228,
5,18,0,0,228,229,3,50,25,0,229,230,3,32,16,0,230,233,5,19,0,0,231,234,3,
32,16,0,232,234,3,34,17,0,233,231,1,0,0,0,233,232,1,0,0,0,234,35,1,0,0,0,
235,240,3,20,10,0,236,237,5,9,0,0,237,239,5,34,0,0,238,236,1,0,0,0,239,242,
1,0,0,0,240,238,1,0,0,0,240,241,1,0,0,0,241,37,1,0,0,0,242,240,1,0,0,0,243,
245,5,35,0,0,244,243,1,0,0,0,244,245,1,0,0,0,245,246,1,0,0,0,246,247,3,36,
18,0,247,39,1,0,0,0,248,253,3,38,19,0,249,250,7,0,0,0,250,252,3,38,19,0,
251,249,1,0,0,0,252,255,1,0,0,0,253,251,1,0,0,0,253,254,1,0,0,0,254,41,1,
0,0,0,255,253,1,0,0,0,256,261,3,40,20,0,257,258,7,1,0,0,258,260,3,40,20,
0,259,257,1,0,0,0,260,263,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,43,
1,0,0,0,263,261,1,0,0,0,264,269,3,42,21,0,265,266,5,10,0,0,266,268,3,42,
21,0,267,265,1,0,0,0,268,271,1,0,0,0,269,267,1,0,0,0,269,270,1,0,0,0,270,
45,1,0,0,0,271,269,1,0,0,0,272,277,3,44,22,0,273,274,5,11,0,0,274,276,3,
44,22,0,275,273,1,0,0,0,276,279,1,0,0,0,277,275,1,0,0,0,277,278,1,0,0,0,
278,47,1,0,0,0,279,277,1,0,0,0,280,283,3,46,23,0,281,282,7,2,0,0,282,284,
3,46,23,0,283,281,1,0,0,0,283,284,1,0,0,0,284,49,1,0,0,0,285,286,3,48,24,
0,286,51,1,0,0,0,287,292,3,50,25,0,288,289,5,4,0,0,289,291,3,50,25,0,290,
288,1,0,0,0,291,294,1,0,0,0,292,290,1,0,0,0,292,293,1,0,0,0,293,296,1,0,
0,0,294,292,1,0,0,0,295,297,5,4,0,0,296,295,1,0,0,0,296,297,1,0,0,0,297,
299,1,0,0,0,298,287,1,0,0,0,298,299,1,0,0,0,299,53,1,0,0,0,300,312,5,3,0,
0,301,306,3,56,28,0,302,303,5,4,0,0,303,305,3,56,28,0,304,302,1,0,0,0,305,
308,1,0,0,0,306,304,1,0,0,0,306,307,1,0,0,0,307,310,1,0,0,0,308,306,1,0,
0,0,309,311,5,4,0,0,310,309,1,0,0,0,310,311,1,0,0,0,311,313,1,0,0,0,312,
301,1,0,0,0,312,313,1,0,0,0,313,314,1,0,0,0,314,315,5,5,0,0,315,55,1,0,0,
0,316,317,5,34,0,0,317,318,3,66,33,0,318,57,1,0,0,0,319,331,5,6,0,0,320,
325,3,62,31,0,321,322,5,4,0,0,322,324,3,62,31,0,323,321,1,0,0,0,324,327,
1,0,0,0,325,323,1,0,0,0,325,326,1,0,0,0,326,329,1,0,0,0,327,325,1,0,0,0,
328,330,5,4,0,0,329,328,1,0,0,0,329,330,1,0,0,0,330,332,1,0,0,0,331,320,
1,0,0,0,331,332,1,0,0,0,332,333,1,0,0,0,333,334,5,7,0,0,334,59,1,0,0,0,335,
354,5,6,0,0,336,341,3,62,31,0,337,338,5,4,0,0,338,340,3,62,31,0,339,337,
1,0,0,0,340,343,1,0,0,0,341,339,1,0,0,0,341,342,1,0,0,0,342,346,1,0,0,0,
343,341,1,0,0,0,344,345,5,4,0,0,345,347,3,64,32,0,346,344,1,0,0,0,346,347,
1,0,0,0,347,350,1,0,0,0,348,350,3,64,32,0,349,336,1,0,0,0,349,348,1,0,0,
0,350,352,1,0,0,0,351,353,5,4,0,0,352,351,1,0,0,0,352,353,1,0,0,0,353,355,
1,0,0,0,354,349,1,0,0,0,354,355,1,0,0,0,355,356,1,0,0,0,356,357,5,7,0,0,
357,61,1,0,0,0,358,359,5,34,0,0,359,360,3,66,33,0,360,63,1,0,0,0,361,362,
5,45,0,0,362,363,5,34,0,0,363,364,3,66,33,0,364,65,1,0,0,0,365,366,5,12,
0,0,366,367,3,50,25,0,367,67,1,0,0,0,368,373,5,34,0,0,369,370,5,13,0,0,370,
372,5,34,0,0,371,369,1,0,0,0,372,375,1,0,0,0,373,371,1,0,0,0,373,374,1,0,
0,0,374,69,1,0,0,0,375,373,1,0,0,0,43,72,74,82,95,103,109,115,122,127,141,
145,149,156,176,186,190,192,198,202,221,233,240,244,253,261,269,277,283,
292,296,298,306,310,312,325,329,331,341,346,349,352,354,373];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class NaviParser extends antlr4.Parser {

    static grammarFileName = "Navi.g4";
    static literalNames = [ null, "';'", "'='", "'{'", "','", "'}'", "'('", 
                            "')'", "'=>'", "'.'", "'&'", "'|'", "':'", "'::'", 
                            "'as'", "'def'", "'let'", "'match'", "'if'", 
                            "'else'", "'struct'", "'enum'", "'intrinsic'", 
                            "'self'", "'trait'", "'_'", null, null, null, 
                            null, null, null, null, null, null, "'-'", "'+'", 
                            "'*'", "'/'", "'=='", "'!='", "'>'", "'<'", 
                            "'>='", "'<='", "'...'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "As", "Def", 
                             "Let", "Match", "If", "Else", "Struct", "Enum", 
                             "Intrinsic", "Self", "Trait", "Discard", "IntInterval", 
                             "NonIntInterval", "IntervalInclusive", "IntervalMinExclusive", 
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
                         "unionExpression", "comparisonExpression", "expression", 
                         "args", "fields", "field", "parameters", "varArgParameters", 
                         "parameter", "varArgParameter", "assert", "name" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = NaviParser.ruleNames;
        this.literalNames = NaviParser.literalNames;
        this.symbolicNames = NaviParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	definitionDocument() {
	    let localctx = new DefinitionDocumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, NaviParser.RULE_definitionDocument);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 74;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NaviParser.Def) | (1 << NaviParser.Let) | (1 << NaviParser.Struct) | (1 << NaviParser.Enum) | (1 << NaviParser.Intrinsic))) !== 0)) {
	            this.state = 72;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case NaviParser.Def:
	            case NaviParser.Let:
	            case NaviParser.Struct:
	            case NaviParser.Enum:
	                this.state = 70;
	                this.definition();
	                break;
	            case NaviParser.Intrinsic:
	                this.state = 71;
	                this.declaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 77;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NaviParser.Def) | (1 << NaviParser.Let) | (1 << NaviParser.Struct) | (1 << NaviParser.Enum))) !== 0)) {
	            this.state = 79;
	            this.definition();
	            this.state = 84;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 85;
	        this.expression();
	        this.state = 86;
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
	        this.state = 88;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(NaviParser.Intrinsic);
	        this.state = 91;
	        this.match(NaviParser.Def);
	        this.state = 92;
	        this.name();
	        this.state = 93;
	        this.varArgParameters();
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.T__11) {
	            this.state = 94;
	            this.assert();
	        }

	        this.state = 97;
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
	        this.state = 103;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NaviParser.Struct:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 99;
	            this.structDefinition();
	            break;
	        case NaviParser.Def:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 100;
	            this.functionDefinition();
	            break;
	        case NaviParser.Let:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 101;
	            this.variableDefinition();
	            break;
	        case NaviParser.Enum:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 102;
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
	        this.state = 105;
	        this.match(NaviParser.Struct);
	        this.state = 106;
	        this.name();
	        this.state = 109;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NaviParser.T__0:
	            this.state = 107;
	            this.match(NaviParser.T__0);
	            break;
	        case NaviParser.T__2:
	            this.state = 108;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 111;
	        this.match(NaviParser.Def);
	        this.state = 112;
	        this.name();
	        this.state = 113;
	        this.parameters();
	        this.state = 115;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.T__11) {
	            this.state = 114;
	            this.assert();
	        }

	        this.state = 122;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NaviParser.T__1:
	            this.state = 117;
	            this.match(NaviParser.T__1);
	            this.state = 118;
	            this.expression();
	            this.state = 119;
	            this.match(NaviParser.T__0);
	            break;
	        case NaviParser.T__2:
	            this.state = 121;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 124;
	        this.match(NaviParser.Let);
	        this.state = 125;
	        this.name();
	        this.state = 127;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.T__11) {
	            this.state = 126;
	            this.assert();
	        }

	        this.state = 129;
	        this.match(NaviParser.T__1);
	        this.state = 130;
	        this.expression();
	        this.state = 131;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.match(NaviParser.Enum);
	        this.state = 134;
	        this.name();
	        this.state = 135;
	        this.match(NaviParser.T__2);
	        this.state = 149;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.Identifier) {
	            this.state = 136;
	            this.enumVariant();
	            this.state = 141;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 137;
	                    this.match(NaviParser.T__3);
	                    this.state = 138;
	                    this.enumVariant(); 
	                }
	                this.state = 143;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	            }

	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 144;
	                this.match(NaviParser.T__3);
	            }

	            this.state = 151;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 152;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 154;
	        this.match(NaviParser.Identifier);
	        this.state = 156;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.T__2) {
	            this.state = 155;
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
	        this.state = 176;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 158;
	            this.match(NaviParser.IntInterval);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 159;
	            this.match(NaviParser.NonIntInterval);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 160;
	            this.match(NaviParser.IntervalInclusive);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 161;
	            this.match(NaviParser.IntervalMinExclusive);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 162;
	            this.match(NaviParser.IntervalMaxExclusive);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 163;
	            this.match(NaviParser.IntervalExclusive);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 164;
	            this.match(NaviParser.Number);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 165;
	            this.match(NaviParser.String);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 166;
	            this.matchExpression();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 167;
	            this.ifExpression();
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 168;
	            this.functionCall();
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 169;
	            this.named();
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 170;
	            this.structExpression();
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 171;
	            this.scopeExpression();
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 172;
	            this.match(NaviParser.T__5);
	            this.state = 173;
	            this.expression();
	            this.state = 174;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.match(NaviParser.Match);
	        this.state = 179;
	        this.expression();
	        this.state = 180;
	        this.match(NaviParser.T__2);
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NaviParser.T__2) | (1 << NaviParser.T__5) | (1 << NaviParser.Match) | (1 << NaviParser.If) | (1 << NaviParser.Discard) | (1 << NaviParser.IntInterval) | (1 << NaviParser.NonIntInterval) | (1 << NaviParser.IntervalInclusive) | (1 << NaviParser.IntervalMinExclusive) | (1 << NaviParser.IntervalMaxExclusive) | (1 << NaviParser.IntervalExclusive))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (NaviParser.Number - 32)) | (1 << (NaviParser.String - 32)) | (1 << (NaviParser.Identifier - 32)) | (1 << (NaviParser.OpMinus - 32)))) !== 0)) {
	            this.state = 181;
	            this.matchArm();
	            this.state = 186;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 182;
	                    this.match(NaviParser.T__3);
	                    this.state = 183;
	                    this.matchArm(); 
	                }
	                this.state = 188;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	            }

	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 189;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 194;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NaviParser.Discard:
	            this.state = 196;
	            this.match(NaviParser.Discard);
	            break;
	        case NaviParser.T__2:
	        case NaviParser.T__5:
	        case NaviParser.Match:
	        case NaviParser.If:
	        case NaviParser.IntInterval:
	        case NaviParser.NonIntInterval:
	        case NaviParser.IntervalInclusive:
	        case NaviParser.IntervalMinExclusive:
	        case NaviParser.IntervalMaxExclusive:
	        case NaviParser.IntervalExclusive:
	        case NaviParser.Number:
	        case NaviParser.String:
	        case NaviParser.Identifier:
	        case NaviParser.OpMinus:
	            this.state = 197;
	            this.expression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 202;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.As) {
	            this.state = 200;
	            this.match(NaviParser.As);
	            this.state = 201;
	            this.match(NaviParser.Identifier);
	        }

	        this.state = 204;
	        this.match(NaviParser.T__7);
	        this.state = 205;
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
	        this.state = 207;
	        this.name();
	        this.state = 208;
	        this.match(NaviParser.T__5);
	        this.state = 209;
	        this.args();
	        this.state = 210;
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
	        this.state = 212;
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
	        this.state = 214;
	        this.name();
	        this.state = 215;
	        this.fields();
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.match(NaviParser.T__2);
	        this.state = 221;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NaviParser.Def) | (1 << NaviParser.Let) | (1 << NaviParser.Struct) | (1 << NaviParser.Enum))) !== 0)) {
	            this.state = 218;
	            this.definition();
	            this.state = 223;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 224;
	        this.expression();
	        this.state = 225;
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
	        this.state = 227;
	        this.match(NaviParser.If);
	        this.state = 228;
	        this.expression();
	        this.state = 229;
	        this.scopeExpression();
	        this.state = 230;
	        this.match(NaviParser.Else);
	        this.state = 233;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NaviParser.T__2:
	            this.state = 231;
	            this.scopeExpression();
	            break;
	        case NaviParser.If:
	            this.state = 232;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 235;
	        this.primaryExpression();
	        this.state = 240;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.T__8) {
	            this.state = 236;
	            this.match(NaviParser.T__8);
	            this.state = 237;
	            this.match(NaviParser.Identifier);
	            this.state = 242;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.OpMinus) {
	            this.state = 243;
	            this.match(NaviParser.OpMinus);
	        }

	        this.state = 246;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.negateExpression();
	        this.state = 253;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.OpMult || _la===NaviParser.OpDiv) {
	            this.state = 249;
	            _la = this._input.LA(1);
	            if(!(_la===NaviParser.OpMult || _la===NaviParser.OpDiv)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 250;
	            this.negateExpression();
	            this.state = 255;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        this.multiplicativeExpression();
	        this.state = 261;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.OpMinus || _la===NaviParser.OpPlus) {
	            this.state = 257;
	            _la = this._input.LA(1);
	            if(!(_la===NaviParser.OpMinus || _la===NaviParser.OpPlus)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 258;
	            this.multiplicativeExpression();
	            this.state = 263;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        this.additiveExpression();
	        this.state = 269;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.T__9) {
	            this.state = 265;
	            this.match(NaviParser.T__9);
	            this.state = 266;
	            this.additiveExpression();
	            this.state = 271;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 272;
	        this.intersectionExpression();
	        this.state = 277;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.T__10) {
	            this.state = 273;
	            this.match(NaviParser.T__10);
	            this.state = 274;
	            this.intersectionExpression();
	            this.state = 279;
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
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.unionExpression();
	        this.state = 283;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (NaviParser.OpEqual - 39)) | (1 << (NaviParser.OpNotEqual - 39)) | (1 << (NaviParser.OpGt - 39)) | (1 << (NaviParser.OpLt - 39)) | (1 << (NaviParser.OpGte - 39)) | (1 << (NaviParser.OpLte - 39)))) !== 0)) {
	            this.state = 281;
	            _la = this._input.LA(1);
	            if(!(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (NaviParser.OpEqual - 39)) | (1 << (NaviParser.OpNotEqual - 39)) | (1 << (NaviParser.OpGt - 39)) | (1 << (NaviParser.OpLt - 39)) | (1 << (NaviParser.OpGte - 39)) | (1 << (NaviParser.OpLte - 39)))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 282;
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



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, NaviParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 285;
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



	args() {
	    let localctx = new ArgsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, NaviParser.RULE_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 298;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NaviParser.T__2) | (1 << NaviParser.T__5) | (1 << NaviParser.Match) | (1 << NaviParser.If) | (1 << NaviParser.IntInterval) | (1 << NaviParser.NonIntInterval) | (1 << NaviParser.IntervalInclusive) | (1 << NaviParser.IntervalMinExclusive) | (1 << NaviParser.IntervalMaxExclusive) | (1 << NaviParser.IntervalExclusive))) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (NaviParser.Number - 32)) | (1 << (NaviParser.String - 32)) | (1 << (NaviParser.Identifier - 32)) | (1 << (NaviParser.OpMinus - 32)))) !== 0)) {
	            this.state = 287;
	            this.expression();
	            this.state = 292;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 288;
	                    this.match(NaviParser.T__3);
	                    this.state = 289;
	                    this.expression(); 
	                }
	                this.state = 294;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
	            }

	            this.state = 296;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 295;
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
	    this.enterRule(localctx, 54, NaviParser.RULE_fields);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(NaviParser.T__2);
	        this.state = 312;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.Identifier) {
	            this.state = 301;
	            this.field();
	            this.state = 306;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 302;
	                    this.match(NaviParser.T__3);
	                    this.state = 303;
	                    this.field(); 
	                }
	                this.state = 308;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
	            }

	            this.state = 310;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 309;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 314;
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



	field() {
	    let localctx = new FieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, NaviParser.RULE_field);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 316;
	        this.match(NaviParser.Identifier);
	        this.state = 317;
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



	parameters() {
	    let localctx = new ParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, NaviParser.RULE_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 319;
	        this.match(NaviParser.T__5);
	        this.state = 331;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.Identifier) {
	            this.state = 320;
	            this.parameter();
	            this.state = 325;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 321;
	                    this.match(NaviParser.T__3);
	                    this.state = 322;
	                    this.parameter(); 
	                }
	                this.state = 327;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,34,this._ctx);
	            }

	            this.state = 329;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 328;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 333;
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
	    this.enterRule(localctx, 60, NaviParser.RULE_varArgParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 335;
	        this.match(NaviParser.T__5);
	        this.state = 354;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.Identifier || _la===NaviParser.OpSpread) {
	            this.state = 349;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case NaviParser.Identifier:
	                this.state = 336;
	                this.parameter();
	                this.state = 341;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 337;
	                        this.match(NaviParser.T__3);
	                        this.state = 338;
	                        this.parameter(); 
	                    }
	                    this.state = 343;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
	                }

	                this.state = 346;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	                if(la_===1) {
	                    this.state = 344;
	                    this.match(NaviParser.T__3);
	                    this.state = 345;
	                    this.varArgParameter();

	                }
	                break;
	            case NaviParser.OpSpread:
	                this.state = 348;
	                this.varArgParameter();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 352;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 351;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 356;
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
	    this.enterRule(localctx, 62, NaviParser.RULE_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
	        this.match(NaviParser.Identifier);
	        this.state = 359;
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
	    this.enterRule(localctx, 64, NaviParser.RULE_varArgParameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 361;
	        this.match(NaviParser.OpSpread);
	        this.state = 362;
	        this.match(NaviParser.Identifier);
	        this.state = 363;
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
	    this.enterRule(localctx, 66, NaviParser.RULE_assert);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 365;
	        this.match(NaviParser.T__11);
	        this.state = 366;
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



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, NaviParser.RULE_name);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 368;
	        this.match(NaviParser.Identifier);
	        this.state = 373;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.T__12) {
	            this.state = 369;
	            this.match(NaviParser.T__12);
	            this.state = 370;
	            this.match(NaviParser.Identifier);
	            this.state = 375;
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
NaviParser.As = 14;
NaviParser.Def = 15;
NaviParser.Let = 16;
NaviParser.Match = 17;
NaviParser.If = 18;
NaviParser.Else = 19;
NaviParser.Struct = 20;
NaviParser.Enum = 21;
NaviParser.Intrinsic = 22;
NaviParser.Self = 23;
NaviParser.Trait = 24;
NaviParser.Discard = 25;
NaviParser.IntInterval = 26;
NaviParser.NonIntInterval = 27;
NaviParser.IntervalInclusive = 28;
NaviParser.IntervalMinExclusive = 29;
NaviParser.IntervalMaxExclusive = 30;
NaviParser.IntervalExclusive = 31;
NaviParser.Number = 32;
NaviParser.String = 33;
NaviParser.Identifier = 34;
NaviParser.OpMinus = 35;
NaviParser.OpPlus = 36;
NaviParser.OpMult = 37;
NaviParser.OpDiv = 38;
NaviParser.OpEqual = 39;
NaviParser.OpNotEqual = 40;
NaviParser.OpGt = 41;
NaviParser.OpLt = 42;
NaviParser.OpGte = 43;
NaviParser.OpLte = 44;
NaviParser.OpSpread = 45;
NaviParser.Space = 46;
NaviParser.LineComment = 47;
NaviParser.BlockComment = 48;

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
NaviParser.RULE_expression = 25;
NaviParser.RULE_args = 26;
NaviParser.RULE_fields = 27;
NaviParser.RULE_field = 28;
NaviParser.RULE_parameters = 29;
NaviParser.RULE_varArgParameters = 30;
NaviParser.RULE_parameter = 31;
NaviParser.RULE_varArgParameter = 32;
NaviParser.RULE_assert = 33;
NaviParser.RULE_name = 34;

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

	fields() {
	    return this.getTypedRuleContext(FieldsContext,0);
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

	comparisonExpression() {
	    return this.getTypedRuleContext(ComparisonExpressionContext,0);
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
NaviParser.ExpressionContext = ExpressionContext; 
NaviParser.ArgsContext = ArgsContext; 
NaviParser.FieldsContext = FieldsContext; 
NaviParser.FieldContext = FieldContext; 
NaviParser.ParametersContext = ParametersContext; 
NaviParser.VarArgParametersContext = VarArgParametersContext; 
NaviParser.ParameterContext = ParameterContext; 
NaviParser.VarArgParameterContext = VarArgParameterContext; 
NaviParser.AssertContext = AssertContext; 
NaviParser.NameContext = NameContext; 
