"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977,3105,2520],{977:function(e,n,a){a.r(n),a.d(n,{default:function(){return c}});var t=a(2520),r=a(3105);let i=Object.freeze({scopeName:"source.gdresource",uuid:"e076faa2-3c52-42fa-a8e6-9a7c453c1a5b",patterns:[{include:"#embedded_shader"},{include:"#embedded_gdscript"},{include:"#comment"},{include:"#heading"},{include:"#key_value"}],repository:{comment:{captures:{1:{name:"punctuation.definition.comment.gdresource"}},match:"(;).*$\\n?",name:"comment.line.gdresource"},embedded_shader:{name:"meta.embedded.block.gdshader",begin:'(code) = "',end:'"',beginCaptures:{1:{name:"variable.other.property.gdresource"}},patterns:[{include:"source.gdshader"}]},embedded_gdscript:{comment:"meta.embedded.block.gdscript",begin:'(script/source) = "',end:'"',beginCaptures:{1:{name:"variable.other.property.gdresource"}},patterns:[{include:"source.gdscript"}]},heading:{begin:"\\[([a-z_]*)\\s?",beginCaptures:{1:{name:"keyword.control.gdresource"}},end:"\\]",patterns:[{include:"#heading_properties"},{include:"#data"}]},heading_properties:{patterns:[{name:"invalid.deprecated.noValue.gdresource",match:"(\\s*[A-Za-z_\\-][A-Za-z0-9_\\-]*\\s*=)(?=\\s*$)"},{begin:"\\s*([A-Za-z_-][^\\s]*|\".+\"|'.+'|[0-9]+)\\s*(=)\\s*",beginCaptures:{1:{name:"variable.other.property.gdresource"},2:{name:"punctuation.definition.keyValue.gdresource"}},end:"($|(?==)|\\,?|\\s*(?=\\}))",patterns:[{include:"#data"}]}]},key_value:{patterns:[{name:"invalid.deprecated.noValue.gdresource",match:"(\\s*[A-Za-z_\\-][A-Za-z0-9_\\-]*\\s*=)(?=\\s*$)"},{begin:"\\s*([A-Za-z_-][^\\s]*|\".+\"|'.+'|[0-9]+)\\s*(=)\\s*",beginCaptures:{1:{name:"variable.other.property.gdresource"},2:{name:"punctuation.definition.keyValue.gdresource"}},end:"($|(?==)|\\,|\\s*(?=\\}))",patterns:[{include:"#data"}]}]},data:{patterns:[{include:"#comment"},{begin:"(?<!\\w)(\\{)\\s*",beginCaptures:{1:{name:"punctuation.definition.table.inline.gdresource"}},end:"\\s*(\\})(?!\\w)",endCaptures:{1:{name:"punctuation.definition.table.inline.gdresource"}},patterns:[{include:"#key_value"},{include:"#data"}]},{begin:"(?<!\\w)(\\[)\\s*",beginCaptures:{1:{name:"punctuation.definition.array.gdresource"}},end:"\\s*(\\])(?!\\w)",endCaptures:{1:{name:"punctuation.definition.array.gdresource"}},patterns:[{include:"#data"}]},{name:"string.quoted.triple.basic.block.gdresource",begin:'"""',end:'"""',patterns:[{match:'\\\\([btnfr"\\\\\\n/ ]|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})',name:"constant.character.escape.gdresource"},{match:'\\\\[^btnfr/"\\\\\\n]',name:"invalid.illegal.escape.gdresource"}]},{name:"support.function.any-method.gdresource",match:'"res:\\/\\/[^"\\\\]*(?:\\\\.[^"\\\\]*)*"'},{name:"support.class.library.gdresource",match:'(?<=type=)"[^"\\\\]*(?:\\\\.[^"\\\\]*)*"'},{name:"constant.character.escape.gdresource",match:'(?<=NodePath\\(|parent=|name=)"[^"\\\\]*(?:\\\\.[^"\\\\]*)*"'},{name:"string.quoted.double.basic.line.gdresource",match:'"[^"\\\\]*(?:\\\\.[^"\\\\]*)*"',patterns:[{match:'\\\\([btnfr"\\\\\\n/ ]|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})',name:"constant.character.escape.gdresource"},{match:'\\\\[^btnfr/"\\\\\\n]',name:"invalid.illegal.escape.gdresource"}]},{name:"invalid.illegal.escape.gdresource",begin:"'''",end:"'''"},{name:"string.quoted.single.literal.line.gdresource",match:"'.*?'"},{match:"(?<!\\w)(true|false)(?!\\w)",captures:{1:{name:"constant.language.gdresource"}}},{match:"(?<!\\w)([\\+\\-]?(0|([1-9](([0-9]|_[0-9])+)?))(?:(?:\\.(0|([1-9](([0-9]|_[0-9])+)?)))?[eE][\\+\\-]?[1-9]_?[0-9]*|(?:\\.[0-9_]*)))(?!\\w)",captures:{1:{name:"constant.numeric.float.gdresource"}}},{match:"(?<!\\w)((?:[\\+\\-]?(0|([1-9](([0-9]|_[0-9])+)?))))(?!\\w)",captures:{1:{name:"constant.numeric.integer.gdresource"}}},{match:"(?<!\\w)([\\+\\-]?inf)(?!\\w)",captures:{1:{name:"constant.numeric.inf.gdresource"}}},{match:"(?<!\\w)([\\+\\-]?nan)(?!\\w)",captures:{1:{name:"constant.numeric.nan.gdresource"}}},{match:"(?<!\\w)((?:0x(([0-9a-fA-F](([0-9a-fA-F]|_[0-9a-fA-F])+)?))))(?!\\w)",captures:{1:{name:"constant.numeric.hex.gdresource"}}},{match:"(?<!\\w)(0o[0-7](_?[0-7])*)(?!\\w)",captures:{1:{name:"constant.numeric.oct.gdresource"}}},{match:"(?<!\\w)(0b[01](_?[01])*)(?!\\w)",captures:{1:{name:"constant.numeric.bin.gdresource"}}},{begin:"(?<!\\w)(Vector2|Vector2i|Vector3|Vector3i|Color|Rect2|Rect2i|Array|Basis|Dictionary|Plane|Quat|RID|Rect3|Transform|Transform2D|Transform3D|AABB|String|Color|NodePath|Object|PoolByteArray|PoolIntArray|PoolRealArray|PoolStringArray|PoolVector2Array|PoolVector3Array|PoolColorArray|bool|int|float|StringName|Quaternion|PackedByteArray|PackedInt32Array|PackedInt64Array|PackedFloat32Array|PackedFloat64Array|PackedStringArray|PackedVector2Array|PackedVector2iArray|PackedVector3Array|PackedVector3iArray|PackedColorArray)(\\()\\s?",beginCaptures:{1:{name:"support.class.library.gdresource"}},end:"\\s?(\\))",patterns:[{include:"#key_value"},{include:"#data"}]},{begin:"(?<!\\w)(ExtResource|SubResource)(\\()\\s?",beginCaptures:{1:{name:"keyword.control.gdresource"}},end:"\\s?(\\))",patterns:[{include:"#key_value"},{include:"#data"}]}]}},name:"gdresource",displayName:"GDResource",embeddedLangs:["gdshader","gdscript"]});var c=[...t.default,...r.default,i]},3105:function(e,n,a){a.r(n),a.d(n,{default:function(){return r}});let t=Object.freeze({fileTypes:["gd"],scopeName:"source.gdscript",name:"gdscript",patterns:[{include:"#nodepath_object"},{include:"#nodepath_function"},{include:"#base_expression"},{include:"#logic_op"},{include:"#in_keyword"},{include:"#getter_setter_godot4"},{include:"#compare_op"},{include:"#arithmetic_op"},{include:"#assignment_op"},{include:"#lambda_declaration"},{include:"#control_flow"},{include:"#annotations"},{include:"#keywords"},{include:"#self"},{include:"#class_definition"},{include:"#variable_definition"},{include:"#class_name"},{include:"#builtin_func"},{include:"#builtin_get_node_shorthand"},{include:"#builtin_classes"},{include:"#const_vars"},{include:"#pascal_case_class"},{include:"#class_new"},{include:"#class_is"},{include:"#class_enum"},{include:"#signal_declaration_bare"},{include:"#signal_declaration"},{include:"#function_declaration"},{include:"#function_keyword"},{include:"#any_method"},{include:"#any_property"},{include:"#extends"}],repository:{comment:{captures:{1:{name:"punctuation.definition.comment.number-sign.gdscript"}},match:"(#).*$\\n?",name:"comment.line.number-sign.gdscript"},strings:{patterns:[{begin:"(?:(?<=get_node|has_node|find_node|get_node_or_null|NodePath)\\s*\\(\\s*)",end:"(?:\\s*\\))",patterns:[{begin:"[\"']",end:"[\"']",name:"constant.character.escape"},{include:"#base_expression"}]},{name:"invalid.illegal.escape.gdscript",begin:"'''",end:"'''"},{begin:'"',end:'"',patterns:[{name:"constant.character.escape.untitled",match:"\\\\."}],name:"string.quoted.double.gdscript"},{begin:"'",end:"'",patterns:[{name:"constant.character.escape.untitled",match:"\\\\."}],name:"string.quoted.single.gdscript"},{begin:'@"',end:'"',patterns:[{name:"constant.character.escape.untitled",match:"\\."}],name:"string.nodepath.gdscript"}]},nodepath_object:{name:"meta.literal.nodepath.gdscript",begin:"(NodePath)\\s*(?:\\()",beginCaptures:{1:{name:"support.class.library.gdscript"}},end:"(?:\\))",patterns:[{begin:"[\"']",end:"[\"']",name:"constant.character.escape",patterns:[{match:"%",name:"keyword.control.flow"}]}]},nodepath_function:{name:"meta.literal.nodepath.gdscript",begin:"(get_node_or_null|has_node|has_node_and_resource|find_node|get_node)\\s*(?:\\()",beginCaptures:{1:{name:"entity.name.function.gdscript"}},end:"(?:\\))",patterns:[{begin:"[\"']",end:"[\"']",name:"constant.character.escape",patterns:[{match:"%",name:"keyword.control.flow"}]}]},self:{match:"\\bself\\b",name:"variable.language.gdscript"},base_expression:{patterns:[{include:"#builtin_get_node_shorthand"},{include:"#nodepath_object"},{include:"#nodepath_function"},{include:"#strings"},{include:"#keywords"},{include:"#logic_op"},{include:"#lambda_declaration"},{include:"#in_keyword"},{include:"#control_flow"},{include:"#function_call"},{include:"#comment"},{include:"#self"},{include:"#letter"},{include:"#numbers"},{include:"#builtin_func"},{include:"#builtin_classes"},{include:"#const_vars"},{include:"#pascal_case_class"},{include:"#line_continuation"}]},logic_op:{match:"\\b(and|or|not)\\b",name:"keyword.operator.wordlike.gdscript"},in_keyword:{patterns:[{match:"\\b(for)\\s+[a-zA-Z_]\\w*\\s+(in)\\b",captures:{1:{name:"keyword.control.gdscript"},2:{name:"keyword.control.gdscript"}}},{match:"\\bin\\b",name:"keyword.operator.wordlike.gdscript"}]},compare_op:{match:"<=|>=|==|<|>|!=",name:"keyword.operator.comparison.gdscript"},arithmetic_op:{match:"\\+=|-=|\\*=|/=|%=|&=|\\|=|\\*|/|%|\\+|-|<<|>>|&|\\||\\^|~",name:"keyword.operator.arithmetic.gdscript"},assignment_op:{match:"=",name:"keyword.operator.assignment.gdscript"},control_flow:{match:"\\b(?i:if|elif|else|for|while|break|continue|pass|return|match|yield|await)\\b",name:"keyword.control.gdscript"},keywords:{match:"\\b(?i:class|class_name|extends|is|onready|tool|static|export|as|void|enum|preload|assert|breakpoint|rpc|sync|remote|master|puppet|slave|remotesync|mastersync|puppetsync|trait|namespace)\\b",name:"keyword.language.gdscript"},letter:{match:"\\b(?i:true|false|null)\\b",name:"constant.language.gdscript"},numbers:{patterns:[{match:"\\b(?i:0x\\h*)\\b",name:"constant.numeric.integer.hexadecimal.gdscript"},{match:"\\b(?i:(\\d+\\.\\d*(e[\\-\\+]?\\d+)?))\\b",name:"constant.numeric.float.gdscript"},{match:"\\b(?i:(\\.\\d+(e[\\-\\+]?\\d+)?))\\b",name:"constant.numeric.float.gdscript"},{match:"\\b(?i:(\\d+e[\\-\\+]?\\d+))\\b",name:"constant.numeric.float.gdscript"},{match:"\\b\\d+\\b",name:"constant.numeric.integer.gdscript"}]},variable_definition:{begin:"\\b(?:(var)|(const))\\s+",end:"$|;",beginCaptures:{1:{name:"storage.type.var.gdscript"},2:{name:"storage.type.const.gdscript"}},patterns:[{match:"(:)\\s*([a-zA-Z_]\\w*)?",captures:{1:{name:"punctuation.separator.annotation.gdscript"},2:{name:"entity.name.type.class.gdscript"}}},{match:"=(?!=)",name:"keyword.operator.assignment.gdscript"},{match:"(setget)\\s+([a-zA-Z_]\\w*)(?:[,]\\s*([a-zA-Z_]\\w*))?",captures:{1:{name:"storage.type.const.gdscript"},2:{name:"entity.name.function.gdscript"},3:{name:"entity.name.function.gdscript"}}},{include:"#base_expression"}]},getter_setter_godot4:{patterns:[{match:"\\b(get):",captures:{1:{name:"entity.name.function.gdscript"}}},{name:"meta.function.gdscript",begin:"(?x) \\s+\n (set) \\s*\n (?=\\()",end:`(:|(?=[#'"\\n]))`,beginCaptures:{1:{name:"entity.name.function.gdscript"}},patterns:[{include:"#parameters"},{include:"#line_continuation"},{match:"\\s*(\\-\\>)\\s*([a-zA-Z_]\\w*)\\s*\\:",captures:{1:{},2:{name:"entity.name.type.class.gdscript"}}}]}]},class_definition:{captures:{1:{name:"entity.name.type.class.gdscript"},2:{name:"class.other.gdscript"}},match:"(?<=^class)\\s+([a-zA-Z_]\\w*)\\s*(?=:)"},class_new:{captures:{1:{name:"entity.name.type.class.gdscript"},2:{name:"storage.type.new.gdscript"}},match:"\\b([a-zA-Z_]\\w*).(new)\\("},class_is:{captures:{1:{name:"storage.type.is.gdscript"},2:{name:"entity.name.type.class.gdscript"}},match:"\\s+(is)\\s+([a-zA-Z_]\\w*)"},class_enum:{captures:{1:{name:"entity.name.type.class.gdscript"},2:{name:"constant.language.gdscript"}},match:"\\b([A-Z][a-zA-Z_0-9]*)\\.([A-Z_0-9]+)"},class_name:{captures:{1:{name:"entity.name.type.class.gdscript"},2:{name:"class.other.gdscript"}},match:"(?<=class_name)\\s+([a-zA-Z_]\\w*(\\.([a-zA-Z_]\\w*))?)"},extends:{match:"(?<=extends)\\s+[a-zA-Z_]\\w*(\\.([a-zA-Z_]\\w*))?",name:"entity.other.inherited-class.gdscript"},builtin_func:{match:"(?<![^.]\\.|:)\\b(abs|absf|absi|acos|asin|assert|atan|atan2|bytes2var|bytes2var_with_objects|ceil|char|clamp|clampf|clampi|Color8|convert|cos|cosh|cubic_interpolate|db2linear|decimals|dectime|deg2rad|dict2inst|ease|error_string|exp|floor|fmod|fposmod|funcref|get_stack|hash|inst2dict|instance_from_id|inverse_lerp|is_equal_approx|is_inf|is_instance_id_valid|is_instance_valid|is_nan|is_zero_approx|len|lerp|lerp_angle|linear2db|load|log|max|maxf|maxi|min|minf|mini|move_toward|nearest_po2|pingpong|posmod|pow|preload|print|printerr|printraw|prints|printt|print_debug|print_stack|print_verbose|push_error|push_warning|rad2deg|randf|randfn|randf_range|randi|randi_range|randomize|rand_from_seed|rand_range|rand_seed|range|range_lerp|range_step_decimals|rid_allocate_id|rid_from_int64|round|seed|sign|signf|signi|sin|sinh|smoothstep|snapped|sqrt|stepify|step_decimals|str|str2var|tan|tanh|typeof|type_exists|var2bytes|var2bytes_with_objects|var2str|weakref|wrapf|wrapi|yield)\\b(?=(\\()([^)]*)(\\)))",name:"support.function.builtin.gdscript"},builtin_get_node_shorthand:{patterns:[{include:"#builtin_get_node_shorthand_quoted"},{include:"#builtin_get_node_shorthand_bare"}]},builtin_get_node_shorthand_quoted:{begin:"(\\$)([\"'])",end:"([\"'])",name:"support.function.builtin.shorthand.gdscript",beginCaptures:{1:{name:"keyword.control.flow"},2:{name:"constant.character.escape"}},endCaptures:{1:{name:"constant.character.escape"}},patterns:[{match:"%",name:"keyword.control.flow"},{match:"[^%^\"^']*",name:"constant.character.escape"}]},builtin_get_node_shorthand_bare:{begin:"(\\$)",end:"[^\\w%]",name:"support.function.builtin.shorthand.gdscript",beginCaptures:{1:{name:"keyword.control.flow"}},patterns:[{match:"[a-zA-Z_]\\w*/?",name:"constant.character.escape"},{match:"%[a-zA-Z_]\\w*/?",name:"invalid.illegal.escape.gdscript"}]},annotations:{match:"(@)(export|export_color_no_alpha|export_dir|export_enum|export_exp_easing|export_file|export_flags|export_flags_2d_navigation|export_flags_2d_physics|export_flags_2d_render|export_flags_3d_navigation|export_flags_3d_physics|export_flags_3d_render|export_global_dir|export_global_file|export_multiline|export_node_path|export_placeholder|export_range|icon|onready|rpc|tool|warning_ignore)\\b",captures:{1:{name:"entity.name.function.decorator.gdscript"},2:{name:"entity.name.function.decorator.gdscript"}}},builtin_classes:{match:"(?<![^.]\\.|:)\\b(OS|GDScript|Vector2|Vector2i|Vector3|Vector3i|Color|Rect2|Rect2i|Array|Basis|Dictionary|Plane|Quat|RID|Rect3|Transform|Transform2D|Transform3D|AABB|String|Color|NodePath|Object|PoolByteArray|PoolIntArray|PoolRealArray|PoolStringArray|PoolVector2Array|PoolVector3Array|PoolColorArray|bool|int|float|StringName|Quaternion|PackedByteArray|PackedInt32Array|PackedInt64Array|PackedFloat32Array|PackedFloat64Array|PackedStringArray|PackedVector2Array|PackedVector2iArray|PackedVector3Array|PackedVector3iArray|PackedColorArray|super)\\b",name:"support.class.library.gdscript"},const_vars:{match:"\\b([A-Z_][A-Z_0-9]*)\\b",name:"constant.language.gdscript"},pascal_case_class:{match:"\\b([A-Z][a-z_0-9]*([A-Z]?[a-z_0-9]+)*[A-Z]?)\\b",name:"support.class.library.gdscript"},signal_declaration_bare:{match:"(?x) \\s*\n (signal) \\s+\n ([a-zA-Z_]\\w*)(?=[\\n\\s])",captures:{1:{name:"storage.type.function.gdscript"},2:{name:"entity.name.function.gdscript"}}},signal_declaration:{name:"meta.signal.gdscript",begin:"(?x) \\s*\n (signal) \\s+\n ([a-zA-Z_]\\w*) \\s*\n (?=\\()",end:`((?=[#'"\\n]))`,beginCaptures:{1:{name:"storage.type.function.gdscript"},2:{name:"entity.name.function.gdscript"}},patterns:[{include:"#parameters"},{include:"#line_continuation"},{match:"\\s*(\\-\\>)\\s*([a-zA-Z_]\\w*)\\s*\\:",captures:{1:{},2:{name:"entity.name.type.class.gdscript"}}}]},lambda_declaration:{name:"meta.function.gdscript",begin:"(func)(?=\\()",end:`(:|(?=[#'"\\n]))`,beginCaptures:{1:{name:"storage.type.function.gdscript"},2:{name:"entity.name.function.gdscript"}},patterns:[{include:"#parameters"},{include:"#line_continuation"}]},function_declaration:{name:"meta.function.gdscript",begin:"(?x) \\s*\n (func) \\s+\n ([a-zA-Z_]\\w*) \\s*\n (?=\\()",end:`((:)|(?=[#'"\\n]))`,beginCaptures:{1:{name:"storage.type.function.gdscript"},2:{name:"entity.name.function.gdscript"}},endCaptures:{1:{name:"punctuation.section.function.begin.gdscript"}},patterns:[{include:"#parameters"},{include:"#line_continuation"},{match:"\\s*(\\-\\>)\\s*([a-zA-Z_]\\w*)\\s*\\:",captures:{1:{},2:{name:"entity.name.type.class.gdscript"}}},{include:"#base_expression"}]},function_keyword:{match:"func",name:"keyword.language.gdscript"},parameters:{name:"meta.function.parameters.gdscript",begin:"(\\()",end:"(\\))",beginCaptures:{1:{name:"punctuation.definition.parameters.begin.gdscript"}},endCaptures:{1:{name:"punctuation.definition.parameters.end.gdscript"}},patterns:[{include:"#annotated_parameter"},{match:"(?x)\n  ([a-zA-Z_]\\w*)\n    \\s* (?: (,) | (?=[)#\\n=]))\n",captures:{1:{name:"variable.parameter.function.language.gdscript"},2:{name:"punctuation.separator.parameters.gdscript"}}},{include:"#comment"},{include:"#loose_default"}]},loose_default:{begin:"(=)",end:"(,)|(?=\\))",beginCaptures:{1:{name:"keyword.operator.gdscript"}},endCaptures:{1:{name:"punctuation.separator.parameters.gdscript"}},patterns:[{include:"#base_expression"}]},annotated_parameter:{begin:"(?x)\n  \\b\n  ([a-zA-Z_]\\w*) \\s* (:)\n",end:"(,)|(?=\\))",beginCaptures:{1:{name:"variable.parameter.function.language.gdscript"},2:{name:"punctuation.separator.annotation.gdscript"}},endCaptures:{1:{name:"punctuation.separator.parameters.gdscript"}},patterns:[{include:"#base_expression"},{name:"keyword.operator.assignment.gdscript",match:"=(?!=)"}]},line_continuation:{patterns:[{match:"(\\\\)\\s*(\\S.*$\\n?)",captures:{1:{name:"punctuation.separator.continuation.line.gdscript"},2:{name:"invalid.illegal.line.continuation.gdscript"}}},{begin:"(\\\\)\\s*$\\n?",end:`(?x)
  (?=^\\s*$)
  |
  (?! (\\s* [rR]? (\\'\\'\\'|\\"\\"\\"|\\'|\\"))
      |
      (\\G $)  (?# '\\G' is necessary for ST)
  )
`,beginCaptures:{1:{name:"punctuation.separator.continuation.line.gdscript"}},patterns:[{include:"#base_expression"}]}]},any_method:{match:"\\b([A-Za-z_]\\w*)\\b(?=\\s*(?:[(]))",name:"support.function.any-method.gdscript"},any_property:{match:"(?<=[^.]\\.)\\b([A-Za-z_]\\w*)\\b(?![(])",name:"variable.other.property.gdscript"},function_call:{name:"meta.function-call.gdscript",comment:'Regular function call of the type "name(args)"',begin:"(?x)\n  \\b(?=\n    ([a-zA-Z_]\\w*) \\s* (\\()\n  )\n",end:"(\\))",endCaptures:{1:{name:"punctuation.definition.arguments.end.gdscript"}},patterns:[{include:"#function_name"},{include:"#function_arguments"}]},function_name:{patterns:[{include:"#builtin_func"},{include:"#builtin_classes"},{comment:"Some color schemas support meta.function-call.generic scope",name:"support.function.any-method.gdscript",match:"(?x)\n  \\b ([a-zA-Z_]\\w*) \\b\n"}]},function_arguments:{begin:"(\\()",end:"(?=\\))(?!\\)\\s*\\()",beginCaptures:{1:{name:"punctuation.definition.arguments.begin.gdscript"}},contentName:"meta.function-call.arguments.gdscript",patterns:[{name:"punctuation.separator.arguments.gdscript",match:"(,)"},{match:"\\b([a-zA-Z_]\\w*)\\s*(=)(?!=)",captures:{1:{name:"variable.parameter.function-call.gdscript"},2:{name:"keyword.operator.assignment.gdscript"}}},{name:"keyword.operator.assignment.gdscript",match:"=(?!=)"},{include:"#base_expression"},{match:"\\s*(\\))\\s*(\\()",captures:{1:{name:"punctuation.definition.arguments.end.gdscript"},2:{name:"punctuation.definition.arguments.begin.gdscript"}}}]}},displayName:"GDScript"});var r=[t]},2520:function(e,n,a){a.r(n),a.d(n,{default:function(){return r}});let t=Object.freeze({name:"gdshader",scopeName:"source.gdshader",uuid:"3a95d25d-688b-481f-a581-eee47f00e5ca",fileTypes:["gdshader"],patterns:[{include:"#any"}],repository:{any:{patterns:[{include:"#comment"},{include:"#enclosed"},{include:"#classifier"},{include:"#definition"},{include:"#keyword"},{include:"#element"},{include:"#separator"},{include:"#operator"}]},comment:{patterns:[{include:"#commentLine"},{include:"#commentBlock"}]},commentLine:{name:"comment.line.double-slash.gdshader",begin:"//",end:"$"},commentBlock:{name:"comment.block.gdshader",begin:"/\\*",end:"\\*/"},enclosed:{name:"meta.parenthesis.gdshader",begin:"\\(",end:"\\)",captures:{0:{name:"punctuation.parenthesis.gdshader"}},patterns:[{include:"#any"}]},classifier:{name:"meta.classifier.gdshader",begin:"(?=\\b(?:shader_type|render_mode)\\b)",patterns:[{include:"#comment"},{include:"#keyword"},{include:"#identifierClassification"},{include:"#separator"}],end:"(?<=;)"},classifierKeyword:{name:"keyword.language.classifier.gdshader",match:"\\b(?:shader_type|render_mode)\\b"},identifierClassification:{name:"entity.other.inherited-class.gdshader",match:"\\b[a-z_]+\\b"},definition:{patterns:[{include:"#structDefinition"}]},arraySize:{name:"meta.array-size.gdshader",begin:"\\[",end:"\\]",captures:{0:{name:"punctuation.bracket.gdshader"}},patterns:[{include:"#comment"},{include:"#keyword"},{include:"#element"},{include:"#separator"}]},structDefinition:{begin:"(?=\\b(?:struct)\\b)",patterns:[{include:"#comment"},{include:"#keyword"},{include:"#structName"},{include:"#structDefinitionBlock"},{include:"#separator"}],end:"(?<=;)"},structKeyword:{name:"keyword.other.struct.gdshader",match:"\\b(?:struct)\\b"},structName:{name:"entity.name.type.struct.gdshader",match:"\\b[a-zA-Z_]\\w*\\b"},structDefinitionBlock:{name:"meta.definition.block.struct.gdshader",begin:"\\{",end:"\\}",captures:{0:{name:"punctuation.definition.block.struct.gdshader"}},patterns:[{include:"#comment"},{include:"#precisionKeyword"},{include:"#fieldDefinition"},{include:"#keyword"},{include:"#any"}]},fieldDefinition:{name:"meta.definition.field.gdshader",begin:"\\b[a-zA-Z_]\\w*\\b",beginCaptures:{0:{patterns:[{include:"#typeKeyword"},{match:".+",name:"entity.name.type.gdshader"}]}},patterns:[{include:"#comment"},{include:"#keyword"},{include:"#arraySize"},{include:"#fieldName"},{include:"#any"}],end:"(?<=;)"},fieldName:{name:"entity.name.variable.field.gdshader",match:"\\b[a-zA-Z_]\\w*\\b"},keyword:{patterns:[{include:"#classifierKeyword"},{include:"#structKeyword"},{include:"#controlKeyword"},{include:"#modifierKeyword"},{include:"#precisionKeyword"},{include:"#typeKeyword"},{include:"#hintKeyword"}]},controlKeyword:{name:"keyword.control.gdshader",match:"\\b(?:if|else|do|while|for|continue|break|switch|case|default|return|discard)\\b"},modifierKeyword:{name:"storage.modifier.gdshader",match:"\\b(?:const|global|instance|uniform|varying|in|out|inout|flat|smooth)\\b"},precisionKeyword:{name:"storage.type.built-in.primitive.precision.gdshader",match:"\\b(?:low|medium|high)p\\b"},typeKeyword:{name:"support.type.gdshader",match:"\\b(?:void|bool|[biu]?vec[234]|u?int|float|mat[234]|[iu]?sampler(?:3D|2D(?:Array)?)|samplerCube)\\b"},hintKeyword:{name:"support.type.annotation.gdshader",match:"\\b(?:source_color|hint_(?:color|range|(?:black_)?albedo|normal|(?:default_)?(?:white|black)|aniso|anisotropy|roughness_(?:[rgba]|normal|gray))|filter_(?:nearest|linear)(?:_mipmap(?:_anisotropic)?)?|repeat_(?:en|dis)able)\\b"},element:{patterns:[{include:"#literalFloat"},{include:"#literalInt"},{include:"#literalBool"},{include:"#identifierType"},{include:"#constructor"},{include:"#processorFunction"},{include:"#identifierFunction"},{include:"#swizzling"},{include:"#identifierField"},{include:"#constantFloat"},{include:"#languageVariable"},{include:"#identifierVariable"}]},literalFloat:{name:"constant.numeric.float.gdshader",match:"\\b(?:\\d+[eE][-+]?\\d+|(?:\\d*[.]\\d+|\\d+[.])(?:[eE][-+]?\\d+)?)[fF]?"},literalInt:{name:"constant.numeric.integer.gdshader",match:"\\b(?:0[xX][0-9A-Fa-f]+|\\d+[uU]?)\\b"},literalBool:{name:"constant.language.boolean.gdshader",match:"\\b(?:false|true)\\b"},identifierType:{name:"entity.name.type.gdshader",match:"\\b[a-zA-Z_]\\w*(?=(?:\\s*\\[\\s*\\w*\\s*\\])?\\s+[a-zA-Z_]\\w*\\b)"},constructor:{name:"entity.name.type.constructor.gdshader",match:"\\b[a-zA-Z_]\\w*(?=\\s*\\[\\s*\\w*\\s*\\]\\s*[(])|\\b[A-Z]\\w*(?=\\s*[(])"},processorFunction:{name:"support.function.gdshader",match:"\\b(?:vertex|fragment|light|start|process|sky|fog)(?=(?:\\s|/\\*(?:\\*(?!/)|[^*])*\\*/)*[(])"},identifierFunction:{name:"entity.name.function.gdshader",match:"\\b[a-zA-Z_]\\w*(?=(?:\\s|/\\*(?:\\*(?!/)|[^*])*\\*/)*[(])"},swizzling:{match:"([.])\\s*([xyzw]{2,4}|[rgba]{2,4}|[stpq]{2,4})\\b",captures:{1:{name:"punctuation.accessor.gdshader"},2:{name:"variable.other.property.gdshader"}}},identifierField:{match:"([.])\\s*([a-zA-Z_]\\w*)\\b(?!\\s*\\()",captures:{1:{name:"punctuation.accessor.gdshader"},2:{name:"entity.name.variable.field.gdshader"}}},constantFloat:{name:"constant.language.float.gdshader",match:"\\b(?:E|PI|TAU)\\b"},languageVariable:{name:"variable.language.gdshader",match:"\\b(?:[A-Z][A-Z_0-9]*)\\b"},identifierVariable:{name:"variable.name.gdshader",match:"\\b[a-zA-Z_]\\w*\\b"},separator:{patterns:[{match:"[.]",name:"punctuation.accessor.gdshader"},{include:"#separatorComma"},{match:"[;]",name:"punctuation.terminator.statement.gdshader"},{match:"[:]",name:"keyword.operator.type.annotation.gdshader"}]},separatorComma:{name:"punctuation.separator.comma.gdshader",match:"[,]"},operator:{name:"keyword.operator.gdshader",match:"\\<\\<\\=?|\\>\\>\\=?|[-+*/&|<>=!]\\=|\\&\\&|[|][|]|[-+~!*/%<>&^|=]"}},displayName:"GDShader"});var r=[t]}}]);