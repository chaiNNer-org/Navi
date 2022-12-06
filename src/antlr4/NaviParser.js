// Generated from src/antlr4/Navi.g4 by ANTLR 4.10.1
// jshint ignore: start
import antlr4 from 'antlr4';
import NaviListener from './NaviListener.js';
const serializedATN = [4,1,38,311,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,1,0,5,0,60,8,0,10,0,12,0,63,9,0,1,0,1,0,1,1,5,1,68,8,1,10,
1,12,1,71,9,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,80,8,2,1,3,1,3,1,3,1,3,3,3,
86,8,3,1,4,1,4,1,4,1,4,3,4,92,8,4,1,4,1,4,1,4,1,4,1,4,3,4,99,8,4,1,5,1,5,
1,5,3,5,104,8,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,5,6,116,8,6,10,6,
12,6,119,9,6,1,6,3,6,122,8,6,5,6,124,8,6,10,6,12,6,127,9,6,1,6,1,6,1,7,1,
7,3,7,133,8,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,147,8,
8,1,9,1,9,1,9,1,9,1,9,1,9,5,9,155,8,9,10,9,12,9,158,9,9,1,9,3,9,161,8,9,
3,9,163,8,9,1,9,1,9,1,10,1,10,3,10,169,8,10,1,10,1,10,3,10,173,8,10,1,10,
1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,3,12,185,8,12,1,13,1,13,5,13,
189,8,13,10,13,12,13,192,9,13,1,13,1,13,1,13,1,14,1,14,1,14,5,14,200,8,14,
10,14,12,14,203,9,14,1,15,3,15,206,8,15,1,15,1,15,1,16,1,16,1,16,5,16,213,
8,16,10,16,12,16,216,9,16,1,17,1,17,1,17,5,17,221,8,17,10,17,12,17,224,9,
17,1,18,1,18,1,18,5,18,229,8,18,10,18,12,18,232,9,18,1,19,1,19,1,19,5,19,
237,8,19,10,19,12,19,240,9,19,1,20,1,20,1,20,3,20,245,8,20,1,21,1,21,1,22,
1,22,1,22,5,22,252,8,22,10,22,12,22,255,9,22,1,22,3,22,258,8,22,3,22,260,
8,22,1,23,1,23,1,23,1,23,5,23,266,8,23,10,23,12,23,269,9,23,1,23,3,23,272,
8,23,3,23,274,8,23,1,23,1,23,1,24,1,24,1,24,1,25,1,25,1,25,1,25,5,25,285,
8,25,10,25,12,25,288,9,25,1,25,3,25,291,8,25,3,25,293,8,25,1,25,1,25,1,26,
1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,28,5,28,306,8,28,10,28,12,28,309,9,
28,1,28,0,0,29,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
42,44,46,48,50,52,54,56,0,3,1,0,28,29,1,0,26,27,1,0,30,35,326,0,61,1,0,0,
0,2,69,1,0,0,0,4,79,1,0,0,0,6,81,1,0,0,0,8,87,1,0,0,0,10,100,1,0,0,0,12,
109,1,0,0,0,14,130,1,0,0,0,16,146,1,0,0,0,18,148,1,0,0,0,20,168,1,0,0,0,
22,177,1,0,0,0,24,182,1,0,0,0,26,186,1,0,0,0,28,196,1,0,0,0,30,205,1,0,0,
0,32,209,1,0,0,0,34,217,1,0,0,0,36,225,1,0,0,0,38,233,1,0,0,0,40,241,1,0,
0,0,42,246,1,0,0,0,44,259,1,0,0,0,46,261,1,0,0,0,48,277,1,0,0,0,50,280,1,
0,0,0,52,296,1,0,0,0,54,299,1,0,0,0,56,302,1,0,0,0,58,60,3,4,2,0,59,58,1,
0,0,0,60,63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,64,1,0,0,0,63,61,1,0,
0,0,64,65,5,0,0,1,65,1,1,0,0,0,66,68,3,4,2,0,67,66,1,0,0,0,68,71,1,0,0,0,
69,67,1,0,0,0,69,70,1,0,0,0,70,72,1,0,0,0,71,69,1,0,0,0,72,73,3,42,21,0,
73,74,5,0,0,1,74,3,1,0,0,0,75,80,3,6,3,0,76,80,3,8,4,0,77,80,3,10,5,0,78,
80,3,12,6,0,79,75,1,0,0,0,79,76,1,0,0,0,79,77,1,0,0,0,79,78,1,0,0,0,80,5,
1,0,0,0,81,82,5,18,0,0,82,85,3,56,28,0,83,86,5,1,0,0,84,86,3,46,23,0,85,
83,1,0,0,0,85,84,1,0,0,0,86,7,1,0,0,0,87,88,5,15,0,0,88,89,3,56,28,0,89,
91,3,50,25,0,90,92,3,54,27,0,91,90,1,0,0,0,91,92,1,0,0,0,92,98,1,0,0,0,93,
94,5,2,0,0,94,95,3,42,21,0,95,96,5,1,0,0,96,99,1,0,0,0,97,99,3,26,13,0,98,
93,1,0,0,0,98,97,1,0,0,0,99,9,1,0,0,0,100,101,5,16,0,0,101,103,3,56,28,0,
102,104,3,54,27,0,103,102,1,0,0,0,103,104,1,0,0,0,104,105,1,0,0,0,105,106,
5,2,0,0,106,107,3,42,21,0,107,108,5,1,0,0,108,11,1,0,0,0,109,110,5,19,0,
0,110,111,3,56,28,0,111,125,5,3,0,0,112,117,3,14,7,0,113,114,5,4,0,0,114,
116,3,14,7,0,115,113,1,0,0,0,116,119,1,0,0,0,117,115,1,0,0,0,117,118,1,0,
0,0,118,121,1,0,0,0,119,117,1,0,0,0,120,122,5,4,0,0,121,120,1,0,0,0,121,
122,1,0,0,0,122,124,1,0,0,0,123,112,1,0,0,0,124,127,1,0,0,0,125,123,1,0,
0,0,125,126,1,0,0,0,126,128,1,0,0,0,127,125,1,0,0,0,128,129,5,5,0,0,129,
13,1,0,0,0,130,132,5,25,0,0,131,133,3,46,23,0,132,131,1,0,0,0,132,133,1,
0,0,0,133,15,1,0,0,0,134,147,5,21,0,0,135,147,5,22,0,0,136,147,5,23,0,0,
137,147,5,24,0,0,138,147,3,18,9,0,139,147,3,22,11,0,140,147,3,24,12,0,141,
147,3,26,13,0,142,143,5,6,0,0,143,144,3,42,21,0,144,145,5,7,0,0,145,147,
1,0,0,0,146,134,1,0,0,0,146,135,1,0,0,0,146,136,1,0,0,0,146,137,1,0,0,0,
146,138,1,0,0,0,146,139,1,0,0,0,146,140,1,0,0,0,146,141,1,0,0,0,146,142,
1,0,0,0,147,17,1,0,0,0,148,149,5,17,0,0,149,150,3,42,21,0,150,162,5,3,0,
0,151,156,3,20,10,0,152,153,5,4,0,0,153,155,3,20,10,0,154,152,1,0,0,0,155,
158,1,0,0,0,156,154,1,0,0,0,156,157,1,0,0,0,157,160,1,0,0,0,158,156,1,0,
0,0,159,161,5,4,0,0,160,159,1,0,0,0,160,161,1,0,0,0,161,163,1,0,0,0,162,
151,1,0,0,0,162,163,1,0,0,0,163,164,1,0,0,0,164,165,5,5,0,0,165,19,1,0,0,
0,166,169,5,20,0,0,167,169,3,42,21,0,168,166,1,0,0,0,168,167,1,0,0,0,169,
172,1,0,0,0,170,171,5,14,0,0,171,173,5,25,0,0,172,170,1,0,0,0,172,173,1,
0,0,0,173,174,1,0,0,0,174,175,5,8,0,0,175,176,3,42,21,0,176,21,1,0,0,0,177,
178,3,56,28,0,178,179,5,6,0,0,179,180,3,44,22,0,180,181,5,7,0,0,181,23,1,
0,0,0,182,184,3,56,28,0,183,185,3,46,23,0,184,183,1,0,0,0,184,185,1,0,0,
0,185,25,1,0,0,0,186,190,5,3,0,0,187,189,3,4,2,0,188,187,1,0,0,0,189,192,
1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,193,1,0,0,0,192,190,1,0,0,0,
193,194,3,42,21,0,194,195,5,5,0,0,195,27,1,0,0,0,196,201,3,16,8,0,197,198,
5,9,0,0,198,200,5,25,0,0,199,197,1,0,0,0,200,203,1,0,0,0,201,199,1,0,0,0,
201,202,1,0,0,0,202,29,1,0,0,0,203,201,1,0,0,0,204,206,5,26,0,0,205,204,
1,0,0,0,205,206,1,0,0,0,206,207,1,0,0,0,207,208,3,28,14,0,208,31,1,0,0,0,
209,214,3,30,15,0,210,211,7,0,0,0,211,213,3,30,15,0,212,210,1,0,0,0,213,
216,1,0,0,0,214,212,1,0,0,0,214,215,1,0,0,0,215,33,1,0,0,0,216,214,1,0,0,
0,217,222,3,32,16,0,218,219,7,1,0,0,219,221,3,32,16,0,220,218,1,0,0,0,221,
224,1,0,0,0,222,220,1,0,0,0,222,223,1,0,0,0,223,35,1,0,0,0,224,222,1,0,0,
0,225,230,3,34,17,0,226,227,5,10,0,0,227,229,3,34,17,0,228,226,1,0,0,0,229,
232,1,0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,37,1,0,0,0,232,230,1,0,0,
0,233,238,3,36,18,0,234,235,5,11,0,0,235,237,3,36,18,0,236,234,1,0,0,0,237,
240,1,0,0,0,238,236,1,0,0,0,238,239,1,0,0,0,239,39,1,0,0,0,240,238,1,0,0,
0,241,244,3,38,19,0,242,243,7,2,0,0,243,245,3,38,19,0,244,242,1,0,0,0,244,
245,1,0,0,0,245,41,1,0,0,0,246,247,3,40,20,0,247,43,1,0,0,0,248,253,3,42,
21,0,249,250,5,4,0,0,250,252,3,42,21,0,251,249,1,0,0,0,252,255,1,0,0,0,253,
251,1,0,0,0,253,254,1,0,0,0,254,257,1,0,0,0,255,253,1,0,0,0,256,258,5,4,
0,0,257,256,1,0,0,0,257,258,1,0,0,0,258,260,1,0,0,0,259,248,1,0,0,0,259,
260,1,0,0,0,260,45,1,0,0,0,261,273,5,3,0,0,262,267,3,48,24,0,263,264,5,4,
0,0,264,266,3,48,24,0,265,263,1,0,0,0,266,269,1,0,0,0,267,265,1,0,0,0,267,
268,1,0,0,0,268,271,1,0,0,0,269,267,1,0,0,0,270,272,5,4,0,0,271,270,1,0,
0,0,271,272,1,0,0,0,272,274,1,0,0,0,273,262,1,0,0,0,273,274,1,0,0,0,274,
275,1,0,0,0,275,276,5,5,0,0,276,47,1,0,0,0,277,278,5,25,0,0,278,279,3,54,
27,0,279,49,1,0,0,0,280,292,5,6,0,0,281,286,3,52,26,0,282,283,5,4,0,0,283,
285,3,52,26,0,284,282,1,0,0,0,285,288,1,0,0,0,286,284,1,0,0,0,286,287,1,
0,0,0,287,290,1,0,0,0,288,286,1,0,0,0,289,291,5,4,0,0,290,289,1,0,0,0,290,
291,1,0,0,0,291,293,1,0,0,0,292,281,1,0,0,0,292,293,1,0,0,0,293,294,1,0,
0,0,294,295,5,7,0,0,295,51,1,0,0,0,296,297,5,25,0,0,297,298,3,54,27,0,298,
53,1,0,0,0,299,300,5,12,0,0,300,301,3,42,21,0,301,55,1,0,0,0,302,307,5,25,
0,0,303,304,5,13,0,0,304,306,5,25,0,0,305,303,1,0,0,0,306,309,1,0,0,0,307,
305,1,0,0,0,307,308,1,0,0,0,308,57,1,0,0,0,309,307,1,0,0,0,36,61,69,79,85,
91,98,103,117,121,125,132,146,156,160,162,168,172,184,190,201,205,214,222,
230,238,244,253,257,259,267,271,273,286,290,292,307];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class NaviParser extends antlr4.Parser {

    static grammarFileName = "Navi.g4";
    static literalNames = [ null, "';'", "'='", "'{'", "','", "'}'", "'('", 
                            "')'", "'=>'", "'.'", "'&'", "'|'", "':'", "'::'", 
                            "'as'", "'def'", "'let'", "'match'", "'struct'", 
                            "'enum'", "'_'", null, null, null, null, null, 
                            "'-'", "'+'", "'*'", "'/'", "'=='", "'!='", 
                            "'>'", "'<'", "'>='", "'<='" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "As", "Def", 
                             "Let", "Match", "Struct", "Enum", "Discard", 
                             "IntInterval", "Interval", "Number", "String", 
                             "Identifier", "OpMinus", "OpPlus", "OpMult", 
                             "OpDiv", "OpEqual", "OpNotEqual", "OpGt", "OpLt", 
                             "OpGte", "OpLte", "Space", "LineComment", "BlockComment" ];
    static ruleNames = [ "definitionDocument", "expressionDocument", "definition", 
                         "structDefinition", "functionDefinition", "variableDefinition", 
                         "enumDefinition", "enumVariant", "primaryExpression", 
                         "matchExpression", "matchArm", "functionCall", 
                         "named", "scopeExpression", "fieldAccessExpression", 
                         "negateExpression", "multiplicativeExpression", 
                         "additiveExpression", "intersectionExpression", 
                         "unionExpression", "comparisonExpression", "expression", 
                         "args", "fields", "field", "parameters", "parameter", 
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
	        this.state = 61;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NaviParser.Def) | (1 << NaviParser.Let) | (1 << NaviParser.Struct) | (1 << NaviParser.Enum))) !== 0)) {
	            this.state = 58;
	            this.definition();
	            this.state = 63;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 64;
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
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NaviParser.Def) | (1 << NaviParser.Let) | (1 << NaviParser.Struct) | (1 << NaviParser.Enum))) !== 0)) {
	            this.state = 66;
	            this.definition();
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 72;
	        this.expression();
	        this.state = 73;
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



	definition() {
	    let localctx = new DefinitionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, NaviParser.RULE_definition);
	    try {
	        this.state = 79;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NaviParser.Struct:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 75;
	            this.structDefinition();
	            break;
	        case NaviParser.Def:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 76;
	            this.functionDefinition();
	            break;
	        case NaviParser.Let:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 77;
	            this.variableDefinition();
	            break;
	        case NaviParser.Enum:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 78;
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
	    this.enterRule(localctx, 6, NaviParser.RULE_structDefinition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(NaviParser.Struct);
	        this.state = 82;
	        this.name();
	        this.state = 85;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NaviParser.T__0:
	            this.state = 83;
	            this.match(NaviParser.T__0);
	            break;
	        case NaviParser.T__2:
	            this.state = 84;
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
	    this.enterRule(localctx, 8, NaviParser.RULE_functionDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this.match(NaviParser.Def);
	        this.state = 88;
	        this.name();
	        this.state = 89;
	        this.parameters();
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.T__11) {
	            this.state = 90;
	            this.assert();
	        }

	        this.state = 98;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NaviParser.T__1:
	            this.state = 93;
	            this.match(NaviParser.T__1);
	            this.state = 94;
	            this.expression();
	            this.state = 95;
	            this.match(NaviParser.T__0);
	            break;
	        case NaviParser.T__2:
	            this.state = 97;
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
	    this.enterRule(localctx, 10, NaviParser.RULE_variableDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 100;
	        this.match(NaviParser.Let);
	        this.state = 101;
	        this.name();
	        this.state = 103;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.T__11) {
	            this.state = 102;
	            this.assert();
	        }

	        this.state = 105;
	        this.match(NaviParser.T__1);
	        this.state = 106;
	        this.expression();
	        this.state = 107;
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
	    this.enterRule(localctx, 12, NaviParser.RULE_enumDefinition);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(NaviParser.Enum);
	        this.state = 110;
	        this.name();
	        this.state = 111;
	        this.match(NaviParser.T__2);
	        this.state = 125;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.Identifier) {
	            this.state = 112;
	            this.enumVariant();
	            this.state = 117;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 113;
	                    this.match(NaviParser.T__3);
	                    this.state = 114;
	                    this.enumVariant(); 
	                }
	                this.state = 119;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
	            }

	            this.state = 121;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 120;
	                this.match(NaviParser.T__3);
	            }

	            this.state = 127;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 128;
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
	    this.enterRule(localctx, 14, NaviParser.RULE_enumVariant);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        this.match(NaviParser.Identifier);
	        this.state = 132;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.T__2) {
	            this.state = 131;
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
	    this.enterRule(localctx, 16, NaviParser.RULE_primaryExpression);
	    try {
	        this.state = 146;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 134;
	            this.match(NaviParser.IntInterval);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 135;
	            this.match(NaviParser.Interval);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 136;
	            this.match(NaviParser.Number);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 137;
	            this.match(NaviParser.String);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 138;
	            this.matchExpression();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 139;
	            this.functionCall();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 140;
	            this.named();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 141;
	            this.scopeExpression();
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 142;
	            this.match(NaviParser.T__5);
	            this.state = 143;
	            this.expression();
	            this.state = 144;
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
	    this.enterRule(localctx, 18, NaviParser.RULE_matchExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(NaviParser.Match);
	        this.state = 149;
	        this.expression();
	        this.state = 150;
	        this.match(NaviParser.T__2);
	        this.state = 162;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NaviParser.T__2) | (1 << NaviParser.T__5) | (1 << NaviParser.Match) | (1 << NaviParser.Discard) | (1 << NaviParser.IntInterval) | (1 << NaviParser.Interval) | (1 << NaviParser.Number) | (1 << NaviParser.String) | (1 << NaviParser.Identifier) | (1 << NaviParser.OpMinus))) !== 0)) {
	            this.state = 151;
	            this.matchArm();
	            this.state = 156;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 152;
	                    this.match(NaviParser.T__3);
	                    this.state = 153;
	                    this.matchArm(); 
	                }
	                this.state = 158;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	            }

	            this.state = 160;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 159;
	                this.match(NaviParser.T__3);
	            }

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



	matchArm() {
	    let localctx = new MatchArmContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, NaviParser.RULE_matchArm);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 168;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NaviParser.Discard:
	            this.state = 166;
	            this.match(NaviParser.Discard);
	            break;
	        case NaviParser.T__2:
	        case NaviParser.T__5:
	        case NaviParser.Match:
	        case NaviParser.IntInterval:
	        case NaviParser.Interval:
	        case NaviParser.Number:
	        case NaviParser.String:
	        case NaviParser.Identifier:
	        case NaviParser.OpMinus:
	            this.state = 167;
	            this.expression();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 172;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.As) {
	            this.state = 170;
	            this.match(NaviParser.As);
	            this.state = 171;
	            this.match(NaviParser.Identifier);
	        }

	        this.state = 174;
	        this.match(NaviParser.T__7);
	        this.state = 175;
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
	    this.enterRule(localctx, 22, NaviParser.RULE_functionCall);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 177;
	        this.name();
	        this.state = 178;
	        this.match(NaviParser.T__5);
	        this.state = 179;
	        this.args();
	        this.state = 180;
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
	    this.enterRule(localctx, 24, NaviParser.RULE_named);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 182;
	        this.name();
	        this.state = 184;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        if(la_===1) {
	            this.state = 183;
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
	    this.enterRule(localctx, 26, NaviParser.RULE_scopeExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(NaviParser.T__2);
	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NaviParser.Def) | (1 << NaviParser.Let) | (1 << NaviParser.Struct) | (1 << NaviParser.Enum))) !== 0)) {
	            this.state = 187;
	            this.definition();
	            this.state = 192;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 193;
	        this.expression();
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



	fieldAccessExpression() {
	    let localctx = new FieldAccessExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, NaviParser.RULE_fieldAccessExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 196;
	        this.primaryExpression();
	        this.state = 201;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.T__8) {
	            this.state = 197;
	            this.match(NaviParser.T__8);
	            this.state = 198;
	            this.match(NaviParser.Identifier);
	            this.state = 203;
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
	    this.enterRule(localctx, 30, NaviParser.RULE_negateExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.OpMinus) {
	            this.state = 204;
	            this.match(NaviParser.OpMinus);
	        }

	        this.state = 207;
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
	    this.enterRule(localctx, 32, NaviParser.RULE_multiplicativeExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 209;
	        this.negateExpression();
	        this.state = 214;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.OpMult || _la===NaviParser.OpDiv) {
	            this.state = 210;
	            _la = this._input.LA(1);
	            if(!(_la===NaviParser.OpMult || _la===NaviParser.OpDiv)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 211;
	            this.negateExpression();
	            this.state = 216;
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
	    this.enterRule(localctx, 34, NaviParser.RULE_additiveExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 217;
	        this.multiplicativeExpression();
	        this.state = 222;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.OpMinus || _la===NaviParser.OpPlus) {
	            this.state = 218;
	            _la = this._input.LA(1);
	            if(!(_la===NaviParser.OpMinus || _la===NaviParser.OpPlus)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 219;
	            this.multiplicativeExpression();
	            this.state = 224;
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
	    this.enterRule(localctx, 36, NaviParser.RULE_intersectionExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 225;
	        this.additiveExpression();
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.T__9) {
	            this.state = 226;
	            this.match(NaviParser.T__9);
	            this.state = 227;
	            this.additiveExpression();
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



	unionExpression() {
	    let localctx = new UnionExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, NaviParser.RULE_unionExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 233;
	        this.intersectionExpression();
	        this.state = 238;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.T__10) {
	            this.state = 234;
	            this.match(NaviParser.T__10);
	            this.state = 235;
	            this.intersectionExpression();
	            this.state = 240;
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
	    this.enterRule(localctx, 40, NaviParser.RULE_comparisonExpression);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 241;
	        this.unionExpression();
	        this.state = 244;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (NaviParser.OpEqual - 30)) | (1 << (NaviParser.OpNotEqual - 30)) | (1 << (NaviParser.OpGt - 30)) | (1 << (NaviParser.OpLt - 30)) | (1 << (NaviParser.OpGte - 30)) | (1 << (NaviParser.OpLte - 30)))) !== 0)) {
	            this.state = 242;
	            _la = this._input.LA(1);
	            if(!(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (NaviParser.OpEqual - 30)) | (1 << (NaviParser.OpNotEqual - 30)) | (1 << (NaviParser.OpGt - 30)) | (1 << (NaviParser.OpLt - 30)) | (1 << (NaviParser.OpGte - 30)) | (1 << (NaviParser.OpLte - 30)))) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 243;
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
	    this.enterRule(localctx, 42, NaviParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
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
	    this.enterRule(localctx, 44, NaviParser.RULE_args);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NaviParser.T__2) | (1 << NaviParser.T__5) | (1 << NaviParser.Match) | (1 << NaviParser.IntInterval) | (1 << NaviParser.Interval) | (1 << NaviParser.Number) | (1 << NaviParser.String) | (1 << NaviParser.Identifier) | (1 << NaviParser.OpMinus))) !== 0)) {
	            this.state = 248;
	            this.expression();
	            this.state = 253;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 249;
	                    this.match(NaviParser.T__3);
	                    this.state = 250;
	                    this.expression(); 
	                }
	                this.state = 255;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
	            }

	            this.state = 257;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 256;
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
	    this.enterRule(localctx, 46, NaviParser.RULE_fields);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.match(NaviParser.T__2);
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.Identifier) {
	            this.state = 262;
	            this.field();
	            this.state = 267;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,29,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 263;
	                    this.match(NaviParser.T__3);
	                    this.state = 264;
	                    this.field(); 
	                }
	                this.state = 269;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,29,this._ctx);
	            }

	            this.state = 271;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 270;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 275;
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
	    this.enterRule(localctx, 48, NaviParser.RULE_field);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.match(NaviParser.Identifier);
	        this.state = 278;
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
	    this.enterRule(localctx, 50, NaviParser.RULE_parameters);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 280;
	        this.match(NaviParser.T__5);
	        this.state = 292;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NaviParser.Identifier) {
	            this.state = 281;
	            this.parameter();
	            this.state = 286;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 282;
	                    this.match(NaviParser.T__3);
	                    this.state = 283;
	                    this.parameter(); 
	                }
	                this.state = 288;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
	            }

	            this.state = 290;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NaviParser.T__3) {
	                this.state = 289;
	                this.match(NaviParser.T__3);
	            }

	        }

	        this.state = 294;
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
	    this.enterRule(localctx, 52, NaviParser.RULE_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 296;
	        this.match(NaviParser.Identifier);
	        this.state = 297;
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
	    this.enterRule(localctx, 54, NaviParser.RULE_assert);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 299;
	        this.match(NaviParser.T__11);
	        this.state = 300;
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
	    this.enterRule(localctx, 56, NaviParser.RULE_name);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 302;
	        this.match(NaviParser.Identifier);
	        this.state = 307;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===NaviParser.T__12) {
	            this.state = 303;
	            this.match(NaviParser.T__12);
	            this.state = 304;
	            this.match(NaviParser.Identifier);
	            this.state = 309;
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
NaviParser.Struct = 18;
NaviParser.Enum = 19;
NaviParser.Discard = 20;
NaviParser.IntInterval = 21;
NaviParser.Interval = 22;
NaviParser.Number = 23;
NaviParser.String = 24;
NaviParser.Identifier = 25;
NaviParser.OpMinus = 26;
NaviParser.OpPlus = 27;
NaviParser.OpMult = 28;
NaviParser.OpDiv = 29;
NaviParser.OpEqual = 30;
NaviParser.OpNotEqual = 31;
NaviParser.OpGt = 32;
NaviParser.OpLt = 33;
NaviParser.OpGte = 34;
NaviParser.OpLte = 35;
NaviParser.Space = 36;
NaviParser.LineComment = 37;
NaviParser.BlockComment = 38;

NaviParser.RULE_definitionDocument = 0;
NaviParser.RULE_expressionDocument = 1;
NaviParser.RULE_definition = 2;
NaviParser.RULE_structDefinition = 3;
NaviParser.RULE_functionDefinition = 4;
NaviParser.RULE_variableDefinition = 5;
NaviParser.RULE_enumDefinition = 6;
NaviParser.RULE_enumVariant = 7;
NaviParser.RULE_primaryExpression = 8;
NaviParser.RULE_matchExpression = 9;
NaviParser.RULE_matchArm = 10;
NaviParser.RULE_functionCall = 11;
NaviParser.RULE_named = 12;
NaviParser.RULE_scopeExpression = 13;
NaviParser.RULE_fieldAccessExpression = 14;
NaviParser.RULE_negateExpression = 15;
NaviParser.RULE_multiplicativeExpression = 16;
NaviParser.RULE_additiveExpression = 17;
NaviParser.RULE_intersectionExpression = 18;
NaviParser.RULE_unionExpression = 19;
NaviParser.RULE_comparisonExpression = 20;
NaviParser.RULE_expression = 21;
NaviParser.RULE_args = 22;
NaviParser.RULE_fields = 23;
NaviParser.RULE_field = 24;
NaviParser.RULE_parameters = 25;
NaviParser.RULE_parameter = 26;
NaviParser.RULE_assert = 27;
NaviParser.RULE_name = 28;

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
NaviParser.ParameterContext = ParameterContext; 
NaviParser.AssertContext = AssertContext; 
NaviParser.NameContext = NameContext; 
