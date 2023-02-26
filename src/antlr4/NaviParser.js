// Generated from src/antlr4/Navi.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import NaviListener from './NaviListener.js';
const serializedATN = [4,1,44,367,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,1,0,1,0,
5,0,71,8,0,10,0,12,0,74,9,0,1,0,1,0,1,1,5,1,79,8,1,10,1,12,1,82,9,1,1,1,
1,1,1,1,1,2,1,2,1,3,1,3,1,3,1,3,1,3,3,3,94,8,3,1,3,1,3,1,4,1,4,1,4,1,4,3,
4,102,8,4,1,5,1,5,1,5,1,5,3,5,108,8,5,1,6,1,6,1,6,1,6,3,6,114,8,6,1,6,1,
6,1,6,1,6,1,6,3,6,121,8,6,1,7,1,7,1,7,3,7,126,8,7,1,7,1,7,1,7,1,7,1,8,1,
8,1,8,1,8,1,8,1,8,5,8,138,8,8,10,8,12,8,141,9,8,1,8,3,8,144,8,8,5,8,146,
8,8,10,8,12,8,149,9,8,1,8,1,8,1,9,1,9,3,9,155,8,9,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,170,8,10,1,11,1,11,1,11,
1,11,1,11,1,11,5,11,178,8,11,10,11,12,11,181,9,11,1,11,3,11,184,8,11,3,11,
186,8,11,1,11,1,11,1,12,1,12,3,12,192,8,12,1,12,1,12,3,12,196,8,12,1,12,
1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,3,14,208,8,14,1,15,1,15,5,15,
212,8,15,10,15,12,15,215,9,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,
16,1,17,1,17,1,17,5,17,229,8,17,10,17,12,17,232,9,17,1,18,3,18,235,8,18,
1,18,1,18,1,19,1,19,1,19,5,19,242,8,19,10,19,12,19,245,9,19,1,20,1,20,1,
20,5,20,250,8,20,10,20,12,20,253,9,20,1,21,1,21,1,21,5,21,258,8,21,10,21,
12,21,261,9,21,1,22,1,22,1,22,5,22,266,8,22,10,22,12,22,269,9,22,1,23,1,
23,1,23,3,23,274,8,23,1,24,1,24,1,25,1,25,1,25,5,25,281,8,25,10,25,12,25,
284,9,25,1,25,3,25,287,8,25,3,25,289,8,25,1,26,1,26,1,26,1,26,5,26,295,8,
26,10,26,12,26,298,9,26,1,26,3,26,301,8,26,3,26,303,8,26,1,26,1,26,1,27,
1,27,1,27,1,28,1,28,1,28,1,28,5,28,314,8,28,10,28,12,28,317,9,28,1,28,3,
28,320,8,28,3,28,322,8,28,1,28,1,28,1,29,1,29,1,29,1,29,5,29,330,8,29,10,
29,12,29,333,9,29,1,29,1,29,3,29,337,8,29,1,29,3,29,340,8,29,1,29,3,29,343,
8,29,3,29,345,8,29,1,29,1,29,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,32,1,32,
1,32,1,33,1,33,1,33,5,33,362,8,33,10,33,12,33,365,9,33,1,33,0,0,34,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
56,58,60,62,64,66,0,3,1,0,33,34,1,0,31,32,1,0,35,40,385,0,72,1,0,0,0,2,80,
1,0,0,0,4,86,1,0,0,0,6,88,1,0,0,0,8,101,1,0,0,0,10,103,1,0,0,0,12,109,1,
0,0,0,14,122,1,0,0,0,16,131,1,0,0,0,18,152,1,0,0,0,20,169,1,0,0,0,22,171,
1,0,0,0,24,191,1,0,0,0,26,200,1,0,0,0,28,205,1,0,0,0,30,209,1,0,0,0,32,219,
1,0,0,0,34,225,1,0,0,0,36,234,1,0,0,0,38,238,1,0,0,0,40,246,1,0,0,0,42,254,
1,0,0,0,44,262,1,0,0,0,46,270,1,0,0,0,48,275,1,0,0,0,50,288,1,0,0,0,52,290,
1,0,0,0,54,306,1,0,0,0,56,309,1,0,0,0,58,325,1,0,0,0,60,348,1,0,0,0,62,351,
1,0,0,0,64,355,1,0,0,0,66,358,1,0,0,0,68,71,3,8,4,0,69,71,3,4,2,0,70,68,
1,0,0,0,70,69,1,0,0,0,71,74,1,0,0,0,72,70,1,0,0,0,72,73,1,0,0,0,73,75,1,
0,0,0,74,72,1,0,0,0,75,76,5,0,0,1,76,1,1,0,0,0,77,79,3,8,4,0,78,77,1,0,0,
0,79,82,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,83,1,0,0,0,82,80,1,0,0,0,
83,84,3,48,24,0,84,85,5,0,0,1,85,3,1,0,0,0,86,87,3,6,3,0,87,5,1,0,0,0,88,
89,5,22,0,0,89,90,5,15,0,0,90,91,3,66,33,0,91,93,3,58,29,0,92,94,3,64,32,
0,93,92,1,0,0,0,93,94,1,0,0,0,94,95,1,0,0,0,95,96,5,1,0,0,96,7,1,0,0,0,97,
102,3,10,5,0,98,102,3,12,6,0,99,102,3,14,7,0,100,102,3,16,8,0,101,97,1,0,
0,0,101,98,1,0,0,0,101,99,1,0,0,0,101,100,1,0,0,0,102,9,1,0,0,0,103,104,
5,20,0,0,104,107,3,66,33,0,105,108,5,1,0,0,106,108,3,52,26,0,107,105,1,0,
0,0,107,106,1,0,0,0,108,11,1,0,0,0,109,110,5,15,0,0,110,111,3,66,33,0,111,
113,3,56,28,0,112,114,3,64,32,0,113,112,1,0,0,0,113,114,1,0,0,0,114,120,
1,0,0,0,115,116,5,2,0,0,116,117,3,48,24,0,117,118,5,1,0,0,118,121,1,0,0,
0,119,121,3,30,15,0,120,115,1,0,0,0,120,119,1,0,0,0,121,13,1,0,0,0,122,123,
5,16,0,0,123,125,3,66,33,0,124,126,3,64,32,0,125,124,1,0,0,0,125,126,1,0,
0,0,126,127,1,0,0,0,127,128,5,2,0,0,128,129,3,48,24,0,129,130,5,1,0,0,130,
15,1,0,0,0,131,132,5,21,0,0,132,133,3,66,33,0,133,147,5,3,0,0,134,139,3,
18,9,0,135,136,5,4,0,0,136,138,3,18,9,0,137,135,1,0,0,0,138,141,1,0,0,0,
139,137,1,0,0,0,139,140,1,0,0,0,140,143,1,0,0,0,141,139,1,0,0,0,142,144,
5,4,0,0,143,142,1,0,0,0,143,144,1,0,0,0,144,146,1,0,0,0,145,134,1,0,0,0,
146,149,1,0,0,0,147,145,1,0,0,0,147,148,1,0,0,0,148,150,1,0,0,0,149,147,
1,0,0,0,150,151,5,5,0,0,151,17,1,0,0,0,152,154,5,30,0,0,153,155,3,52,26,
0,154,153,1,0,0,0,154,155,1,0,0,0,155,19,1,0,0,0,156,170,5,26,0,0,157,170,
5,27,0,0,158,170,5,28,0,0,159,170,5,29,0,0,160,170,3,22,11,0,161,170,3,32,
16,0,162,170,3,26,13,0,163,170,3,28,14,0,164,170,3,30,15,0,165,166,5,6,0,
0,166,167,3,48,24,0,167,168,5,7,0,0,168,170,1,0,0,0,169,156,1,0,0,0,169,
157,1,0,0,0,169,158,1,0,0,0,169,159,1,0,0,0,169,160,1,0,0,0,169,161,1,0,
0,0,169,162,1,0,0,0,169,163,1,0,0,0,169,164,1,0,0,0,169,165,1,0,0,0,170,
21,1,0,0,0,171,172,5,17,0,0,172,173,3,48,24,0,173,185,5,3,0,0,174,179,3,
24,12,0,175,176,5,4,0,0,176,178,3,24,12,0,177,175,1,0,0,0,178,181,1,0,0,
0,179,177,1,0,0,0,179,180,1,0,0,0,180,183,1,0,0,0,181,179,1,0,0,0,182,184,
5,4,0,0,183,182,1,0,0,0,183,184,1,0,0,0,184,186,1,0,0,0,185,174,1,0,0,0,
185,186,1,0,0,0,186,187,1,0,0,0,187,188,5,5,0,0,188,23,1,0,0,0,189,192,5,
25,0,0,190,192,3,48,24,0,191,189,1,0,0,0,191,190,1,0,0,0,192,195,1,0,0,0,
193,194,5,14,0,0,194,196,5,30,0,0,195,193,1,0,0,0,195,196,1,0,0,0,196,197,
1,0,0,0,197,198,5,8,0,0,198,199,3,48,24,0,199,25,1,0,0,0,200,201,3,66,33,
0,201,202,5,6,0,0,202,203,3,50,25,0,203,204,5,7,0,0,204,27,1,0,0,0,205,207,
3,66,33,0,206,208,3,52,26,0,207,206,1,0,0,0,207,208,1,0,0,0,208,29,1,0,0,
0,209,213,5,3,0,0,210,212,3,8,4,0,211,210,1,0,0,0,212,215,1,0,0,0,213,211,
1,0,0,0,213,214,1,0,0,0,214,216,1,0,0,0,215,213,1,0,0,0,216,217,3,48,24,
0,217,218,5,5,0,0,218,31,1,0,0,0,219,220,5,18,0,0,220,221,3,48,24,0,221,
222,3,30,15,0,222,223,5,19,0,0,223,224,3,30,15,0,224,33,1,0,0,0,225,230,
3,20,10,0,226,227,5,9,0,0,227,229,5,30,0,0,228,226,1,0,0,0,229,232,1,0,0,
0,230,228,1,0,0,0,230,231,1,0,0,0,231,35,1,0,0,0,232,230,1,0,0,0,233,235,
5,31,0,0,234,233,1,0,0,0,234,235,1,0,0,0,235,236,1,0,0,0,236,237,3,34,17,
0,237,37,1,0,0,0,238,243,3,36,18,0,239,240,7,0,0,0,240,242,3,36,18,0,241,
239,1,0,0,0,242,245,1,0,0,0,243,241,1,0,0,0,243,244,1,0,0,0,244,39,1,0,0,
0,245,243,1,0,0,0,246,251,3,38,19,0,247,248,7,1,0,0,248,250,3,38,19,0,249,
247,1,0,0,0,250,253,1,0,0,0,251,249,1,0,0,0,251,252,1,0,0,0,252,41,1,0,0,
0,253,251,1,0,0,0,254,259,3,40,20,0,255,256,5,10,0,0,256,258,3,40,20,0,257,
255,1,0,0,0,258,261,1,0,0,0,259,257,1,0,0,0,259,260,1,0,0,0,260,43,1,0,0,
0,261,259,1,0,0,0,262,267,3,42,21,0,263,264,5,11,0,0,264,266,3,42,21,0,265,
263,1,0,0,0,266,269,1,0,0,0,267,265,1,0,0,0,267,268,1,0,0,0,268,45,1,0,0,
0,269,267,1,0,0,0,270,273,3,44,22,0,271,272,7,2,0,0,272,274,3,44,22,0,273,
271,1,0,0,0,273,274,1,0,0,0,274,47,1,0,0,0,275,276,3,46,23,0,276,49,1,0,
0,0,277,282,3,48,24,0,278,279,5,4,0,0,279,281,3,48,24,0,280,278,1,0,0,0,
281,284,1,0,0,0,282,280,1,0,0,0,282,283,1,0,0,0,283,286,1,0,0,0,284,282,
1,0,0,0,285,287,5,4,0,0,286,285,1,0,0,0,286,287,1,0,0,0,287,289,1,0,0,0,
288,277,1,0,0,0,288,289,1,0,0,0,289,51,1,0,0,0,290,302,5,3,0,0,291,296,3,
54,27,0,292,293,5,4,0,0,293,295,3,54,27,0,294,292,1,0,0,0,295,298,1,0,0,
0,296,294,1,0,0,0,296,297,1,0,0,0,297,300,1,0,0,0,298,296,1,0,0,0,299,301,
5,4,0,0,300,299,1,0,0,0,300,301,1,0,0,0,301,303,1,0,0,0,302,291,1,0,0,0,
302,303,1,0,0,0,303,304,1,0,0,0,304,305,5,5,0,0,305,53,1,0,0,0,306,307,5,
30,0,0,307,308,3,64,32,0,308,55,1,0,0,0,309,321,5,6,0,0,310,315,3,60,30,
0,311,312,5,4,0,0,312,314,3,60,30,0,313,311,1,0,0,0,314,317,1,0,0,0,315,
313,1,0,0,0,315,316,1,0,0,0,316,319,1,0,0,0,317,315,1,0,0,0,318,320,5,4,
0,0,319,318,1,0,0,0,319,320,1,0,0,0,320,322,1,0,0,0,321,310,1,0,0,0,321,
322,1,0,0,0,322,323,1,0,0,0,323,324,5,7,0,0,324,57,1,0,0,0,325,344,5,6,0,
0,326,331,3,60,30,0,327,328,5,4,0,0,328,330,3,60,30,0,329,327,1,0,0,0,330,
333,1,0,0,0,331,329,1,0,0,0,331,332,1,0,0,0,332,336,1,0,0,0,333,331,1,0,
0,0,334,335,5,4,0,0,335,337,3,62,31,0,336,334,1,0,0,0,336,337,1,0,0,0,337,
340,1,0,0,0,338,340,3,62,31,0,339,326,1,0,0,0,339,338,1,0,0,0,340,342,1,
0,0,0,341,343,5,4,0,0,342,341,1,0,0,0,342,343,1,0,0,0,343,345,1,0,0,0,344,
339,1,0,0,0,344,345,1,0,0,0,345,346,1,0,0,0,346,347,5,7,0,0,347,59,1,0,0,
0,348,349,5,30,0,0,349,350,3,64,32,0,350,61,1,0,0,0,351,352,5,41,0,0,352,
353,5,30,0,0,353,354,3,64,32,0,354,63,1,0,0,0,355,356,5,12,0,0,356,357,3,
48,24,0,357,65,1,0,0,0,358,363,5,30,0,0,359,360,5,13,0,0,360,362,5,30,0,
0,361,359,1,0,0,0,362,365,1,0,0,0,363,361,1,0,0,0,363,364,1,0,0,0,364,67,
1,0,0,0,365,363,1,0,0,0,43,70,72,80,93,101,107,113,120,125,139,143,147,154,
169,179,183,185,191,195,207,213,230,234,243,251,259,267,273,282,286,288,
296,300,302,315,319,321,331,336,339,342,344,363];


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
                            null, null, "'-'", "'+'", "'*'", "'/'", "'=='", 
                            "'!='", "'>'", "'<'", "'>='", "'<='", "'...'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "As", "Def", 
                             "Let", "Match", "If", "Else", "Struct", "Enum", 
                             "Intrinsic", "Self", "Trait", "Discard", "IntInterval", 
                             "Interval", "Number", "String", "Identifier", 
                             "OpMinus", "OpPlus", "OpMult", "OpDiv", "OpEqual", 
                             "OpNotEqual", "OpGt", "OpLt", "OpGte", "OpLte", 
                             "OpSpread", "Space", "LineComment", "BlockComment" ];
    static ruleNames = [ "definitionDocument", "expressionDocument", "declaration", 
                         "intrinsicFunctionDeclaration", "definition", "structDefinition", 
                         "functionDefinition", "variableDefinition", "enumDefinition", 
                         "enumVariant", "primaryExpression", "matchExpression", 
                         "matchArm", "functionCall", "named", "scopeExpression", 
                         "ifExpression", "fieldAccessExpression", "negateExpression", 
                         "multiplicativeExpression", "additiveExpression", 
                         "intersectionExpression", "unionExpression", "comparisonExpression", 
                         "expression", "args", "fields", "field", "parameters", 
                         "varArgParameters", "parameter", "varArgParameter", 
                         "assert", "name" ];

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
	        this.state = 72;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NaviParser.Def) | (1 << NaviParser.Let) | (1 << NaviParser.Struct) | (1 << NaviParser.Enum) | (1 << NaviParser.Intrinsic))) !== 0)) {
	            this.state = 70;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case NaviParser.Def:
	            case NaviParser.Let:
	            case NaviParser.Struct:
	            case NaviParser.Enum:
	                this.state = 68;
	                this.definition();
	                break;
	            case NaviParser.Intrinsic:
	                this.state = 69;
	                this.declaration();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 75;
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
	        this.state = 80;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NaviParser.Def) | (1 << NaviParser.Let) | (1 << NaviParser.Struct) | (1 << NaviParser.Enum))) !== 0)) {
	            this.state = 77;
	            this.definition();
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 83;
	        this.expression();
	        this.state = 84;
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
	        this.state = 86;
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
	        this.state = 88;
	        this.match(NaviParser.Intrinsic);
	        this.state = 89;
	        this.match(NaviParser.Def);
	        this.state = 90;
	        this.name();
	        this.state = 91;
	        this.varArgParameters();
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.T__11) {
	            this.state = 92;
	            this.assert();
	        }

	        this.state = 95;
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
	        this.state = 101;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NaviParser.Struct:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 97;
	            this.structDefinition();
	            break;
	        case NaviParser.Def:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 98;
	            this.functionDefinition();
	            break;
	        case NaviParser.Let:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 99;
	            this.variableDefinition();
	            break;
	        case NaviParser.Enum:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 100;
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
	        this.state = 103;
	        this.match(NaviParser.Struct);
	        this.state = 104;
	        this.name();
	        this.state = 107;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NaviParser.T__0:
	            this.state = 105;
	            this.match(NaviParser.T__0);
	            break;
	        case NaviParser.T__2:
	            this.state = 106;
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
	        this.state = 109;
	        this.match(NaviParser.Def);
	        this.state = 110;
	        this.name();
	        this.state = 111;
	        this.parameters();
	        this.state = 113;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.T__11) {
	            this.state = 112;
	            this.assert();
	        }

	        this.state = 120;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NaviParser.T__1:
	            this.state = 115;
	            this.match(NaviParser.T__1);
	            this.state = 116;
	            this.expression();
	            this.state = 117;
	            this.match(NaviParser.T__0);
	            break;
	        case NaviParser.T__2:
	            this.state = 119;
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
	        this.state = 122;
	        this.match(NaviParser.Let);
	        this.state = 123;
	        this.name();
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.T__11) {
	            this.state = 124;
	            this.assert();
	        }

	        this.state = 127;
	        this.match(NaviParser.T__1);
	        this.state = 128;
	        this.expression();
	        this.state = 129;
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
	        this.state = 131;
	        this.match(NaviParser.Enum);
	        this.state = 132;
	        this.name();
	        this.state = 133;
	        this.match(NaviParser.T__2);
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.Identifier) {
	            this.state = 134;
	            this.enumVariant();
	            this.state = 139;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 135;
	                    this.match(NaviParser.T__3);
	                    this.state = 136;
	                    this.enumVariant(); 
	                }
	                this.state = 141;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	            }

	            this.state = 143;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 142;
	                this.match(NaviParser.T__3);
	            }

	            this.state = 149;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 150;
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
	        this.state = 152;
	        this.match(NaviParser.Identifier);
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.T__2) {
	            this.state = 153;
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
	        this.state = 169;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 156;
	            this.match(NaviParser.IntInterval);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 157;
	            this.match(NaviParser.Interval);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 158;
	            this.match(NaviParser.Number);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 159;
	            this.match(NaviParser.String);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 160;
	            this.matchExpression();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 161;
	            this.ifExpression();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 162;
	            this.functionCall();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 163;
	            this.named();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 164;
	            this.scopeExpression();
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 165;
	            this.match(NaviParser.T__5);
	            this.state = 166;
	            this.expression();
	            this.state = 167;
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
	        this.state = 171;
	        this.match(NaviParser.Match);
	        this.state = 172;
	        this.expression();
	        this.state = 173;
	        this.match(NaviParser.T__2);
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NaviParser.T__2) | (1 << NaviParser.T__5) | (1 << NaviParser.Match) | (1 << NaviParser.If) | (1 << NaviParser.Discard) | (1 << NaviParser.IntInterval) | (1 << NaviParser.Interval) | (1 << NaviParser.Number) | (1 << NaviParser.String) | (1 << NaviParser.Identifier) | (1 << NaviParser.OpMinus))) !== 0)) {
	            this.state = 174;
	            this.matchArm();
	            this.state = 179;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 175;
	                    this.match(NaviParser.T__3);
	                    this.state = 176;
	                    this.matchArm(); 
	                }
	                this.state = 181;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	            }

	            this.state = 183;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 182;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 187;
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
	        this.state = 191;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NaviParser.Discard:
	            this.state = 189;
	            this.match(NaviParser.Discard);
	            break;
	        case NaviParser.T__2:
	        case NaviParser.T__5:
	        case NaviParser.Match:
	        case NaviParser.If:
	        case NaviParser.IntInterval:
	        case NaviParser.Interval:
	        case NaviParser.Number:
	        case NaviParser.String:
	        case NaviParser.Identifier:
	        case NaviParser.OpMinus:
	            this.state = 190;
	            this.expression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 195;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.As) {
	            this.state = 193;
	            this.match(NaviParser.As);
	            this.state = 194;
	            this.match(NaviParser.Identifier);
	        }

	        this.state = 197;
	        this.match(NaviParser.T__7);
	        this.state = 198;
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
	        this.state = 200;
	        this.name();
	        this.state = 201;
	        this.match(NaviParser.T__5);
	        this.state = 202;
	        this.args();
	        this.state = 203;
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
	        this.state = 205;
	        this.name();
	        this.state = 207;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	        if(la_===1) {
	            this.state = 206;
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



	scopeExpression() {
	    let localctx = new ScopeExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, NaviParser.RULE_scopeExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.match(NaviParser.T__2);
	        this.state = 213;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NaviParser.Def) | (1 << NaviParser.Let) | (1 << NaviParser.Struct) | (1 << NaviParser.Enum))) !== 0)) {
	            this.state = 210;
	            this.definition();
	            this.state = 215;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 216;
	        this.expression();
	        this.state = 217;
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
	    this.enterRule(localctx, 32, NaviParser.RULE_ifExpression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 219;
	        this.match(NaviParser.If);
	        this.state = 220;
	        this.expression();
	        this.state = 221;
	        this.scopeExpression();
	        this.state = 222;
	        this.match(NaviParser.Else);
	        this.state = 223;
	        this.scopeExpression();
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
	    this.enterRule(localctx, 34, NaviParser.RULE_fieldAccessExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.primaryExpression();
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.T__8) {
	            this.state = 226;
	            this.match(NaviParser.T__8);
	            this.state = 227;
	            this.match(NaviParser.Identifier);
	            this.state = 232;
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
	    this.enterRule(localctx, 36, NaviParser.RULE_negateExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.OpMinus) {
	            this.state = 233;
	            this.match(NaviParser.OpMinus);
	        }

	        this.state = 236;
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
	    this.enterRule(localctx, 38, NaviParser.RULE_multiplicativeExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this.negateExpression();
	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.OpMult || _la===NaviParser.OpDiv) {
	            this.state = 239;
	            _la = this._input.LA(1);
	            if(!(_la===NaviParser.OpMult || _la===NaviParser.OpDiv)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 240;
	            this.negateExpression();
	            this.state = 245;
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
	    this.enterRule(localctx, 40, NaviParser.RULE_additiveExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.multiplicativeExpression();
	        this.state = 251;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.OpMinus || _la===NaviParser.OpPlus) {
	            this.state = 247;
	            _la = this._input.LA(1);
	            if(!(_la===NaviParser.OpMinus || _la===NaviParser.OpPlus)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 248;
	            this.multiplicativeExpression();
	            this.state = 253;
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
	    this.enterRule(localctx, 42, NaviParser.RULE_intersectionExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        this.additiveExpression();
	        this.state = 259;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.T__9) {
	            this.state = 255;
	            this.match(NaviParser.T__9);
	            this.state = 256;
	            this.additiveExpression();
	            this.state = 261;
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
	    this.enterRule(localctx, 44, NaviParser.RULE_unionExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        this.intersectionExpression();
	        this.state = 267;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.T__10) {
	            this.state = 263;
	            this.match(NaviParser.T__10);
	            this.state = 264;
	            this.intersectionExpression();
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



	comparisonExpression() {
	    let localctx = new ComparisonExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, NaviParser.RULE_comparisonExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 270;
	        this.unionExpression();
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (NaviParser.OpEqual - 35)) | (1 << (NaviParser.OpNotEqual - 35)) | (1 << (NaviParser.OpGt - 35)) | (1 << (NaviParser.OpLt - 35)) | (1 << (NaviParser.OpGte - 35)) | (1 << (NaviParser.OpLte - 35)))) !== 0)) {
	            this.state = 271;
	            _la = this._input.LA(1);
	            if(!(((((_la - 35)) & ~0x1f) == 0 && ((1 << (_la - 35)) & ((1 << (NaviParser.OpEqual - 35)) | (1 << (NaviParser.OpNotEqual - 35)) | (1 << (NaviParser.OpGt - 35)) | (1 << (NaviParser.OpLt - 35)) | (1 << (NaviParser.OpGte - 35)) | (1 << (NaviParser.OpLte - 35)))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 272;
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
	    this.enterRule(localctx, 48, NaviParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
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
	    this.enterRule(localctx, 50, NaviParser.RULE_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 288;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NaviParser.T__2) | (1 << NaviParser.T__5) | (1 << NaviParser.Match) | (1 << NaviParser.If) | (1 << NaviParser.IntInterval) | (1 << NaviParser.Interval) | (1 << NaviParser.Number) | (1 << NaviParser.String) | (1 << NaviParser.Identifier) | (1 << NaviParser.OpMinus))) !== 0)) {
	            this.state = 277;
	            this.expression();
	            this.state = 282;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 278;
	                    this.match(NaviParser.T__3);
	                    this.state = 279;
	                    this.expression(); 
	                }
	                this.state = 284;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
	            }

	            this.state = 286;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 285;
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
	    this.enterRule(localctx, 52, NaviParser.RULE_fields);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 290;
	        this.match(NaviParser.T__2);
	        this.state = 302;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.Identifier) {
	            this.state = 291;
	            this.field();
	            this.state = 296;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 292;
	                    this.match(NaviParser.T__3);
	                    this.state = 293;
	                    this.field(); 
	                }
	                this.state = 298;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
	            }

	            this.state = 300;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 299;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 304;
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
	    this.enterRule(localctx, 54, NaviParser.RULE_field);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 306;
	        this.match(NaviParser.Identifier);
	        this.state = 307;
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
	    this.enterRule(localctx, 56, NaviParser.RULE_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 309;
	        this.match(NaviParser.T__5);
	        this.state = 321;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.Identifier) {
	            this.state = 310;
	            this.parameter();
	            this.state = 315;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 311;
	                    this.match(NaviParser.T__3);
	                    this.state = 312;
	                    this.parameter(); 
	                }
	                this.state = 317;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,34,this._ctx);
	            }

	            this.state = 319;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 318;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 323;
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
	    this.enterRule(localctx, 58, NaviParser.RULE_varArgParameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 325;
	        this.match(NaviParser.T__5);
	        this.state = 344;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.Identifier || _la===NaviParser.OpSpread) {
	            this.state = 339;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case NaviParser.Identifier:
	                this.state = 326;
	                this.parameter();
	                this.state = 331;
	                this._errHandler.sync(this);
	                var _alt = this._interp.adaptivePredict(this._input,37,this._ctx)
	                while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                    if(_alt===1) {
	                        this.state = 327;
	                        this.match(NaviParser.T__3);
	                        this.state = 328;
	                        this.parameter(); 
	                    }
	                    this.state = 333;
	                    this._errHandler.sync(this);
	                    _alt = this._interp.adaptivePredict(this._input,37,this._ctx);
	                }

	                this.state = 336;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	                if(la_===1) {
	                    this.state = 334;
	                    this.match(NaviParser.T__3);
	                    this.state = 335;
	                    this.varArgParameter();

	                }
	                break;
	            case NaviParser.OpSpread:
	                this.state = 338;
	                this.varArgParameter();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 342;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 341;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 346;
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
	    this.enterRule(localctx, 60, NaviParser.RULE_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 348;
	        this.match(NaviParser.Identifier);
	        this.state = 349;
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
	    this.enterRule(localctx, 62, NaviParser.RULE_varArgParameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 351;
	        this.match(NaviParser.OpSpread);
	        this.state = 352;
	        this.match(NaviParser.Identifier);
	        this.state = 353;
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
	    this.enterRule(localctx, 64, NaviParser.RULE_assert);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this.match(NaviParser.T__11);
	        this.state = 356;
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
	    this.enterRule(localctx, 66, NaviParser.RULE_name);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
	        this.match(NaviParser.Identifier);
	        this.state = 363;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.T__12) {
	            this.state = 359;
	            this.match(NaviParser.T__12);
	            this.state = 360;
	            this.match(NaviParser.Identifier);
	            this.state = 365;
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
NaviParser.Interval = 27;
NaviParser.Number = 28;
NaviParser.String = 29;
NaviParser.Identifier = 30;
NaviParser.OpMinus = 31;
NaviParser.OpPlus = 32;
NaviParser.OpMult = 33;
NaviParser.OpDiv = 34;
NaviParser.OpEqual = 35;
NaviParser.OpNotEqual = 36;
NaviParser.OpGt = 37;
NaviParser.OpLt = 38;
NaviParser.OpGte = 39;
NaviParser.OpLte = 40;
NaviParser.OpSpread = 41;
NaviParser.Space = 42;
NaviParser.LineComment = 43;
NaviParser.BlockComment = 44;

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
NaviParser.RULE_scopeExpression = 15;
NaviParser.RULE_ifExpression = 16;
NaviParser.RULE_fieldAccessExpression = 17;
NaviParser.RULE_negateExpression = 18;
NaviParser.RULE_multiplicativeExpression = 19;
NaviParser.RULE_additiveExpression = 20;
NaviParser.RULE_intersectionExpression = 21;
NaviParser.RULE_unionExpression = 22;
NaviParser.RULE_comparisonExpression = 23;
NaviParser.RULE_expression = 24;
NaviParser.RULE_args = 25;
NaviParser.RULE_fields = 26;
NaviParser.RULE_field = 27;
NaviParser.RULE_parameters = 28;
NaviParser.RULE_varArgParameters = 29;
NaviParser.RULE_parameter = 30;
NaviParser.RULE_varArgParameter = 31;
NaviParser.RULE_assert = 32;
NaviParser.RULE_name = 33;

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

	Interval() {
	    return this.getToken(NaviParser.Interval, 0);
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

	fields() {
	    return this.getTypedRuleContext(FieldsContext,0);
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
