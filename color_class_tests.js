(function( Color ){

var tested = []

function assert( condition, description, no_record ){
    var result
    try{
        console.log( "%cAssert test [" + (tested.length + 1) + "]:%c " + description, "font-weight: bold; color: #333;", "" )
        if( typeof condition === "function" ? condition() : condition ){
            console.log( "%ctest passed", "color: #33AA33;" )
            result = true
        }else{
            console.log( "%ctest failed", "color: #CC6666;" )
            result = false
        }
    }catch( error ){
        console.log( error )
        console.log( "%ctest failed", "color: #CC6666;" )
        result = false
    }
    if( !no_record ){
        tested.push( { test: description, result: result } )
    }
    return result
}

function AND(r, v){ return r && v }

function summary(){
    var passed = [], failed = []
    for( var i in tested ){
        if( tested[i].result ){
            passed.push( { n: +i+1, test: tested[i].test } )
        }else{
            failed.push( { n: +i+1, test: tested[i].test } )
        }
    }
    console.log( "Tested",(passed.length + failed.length), "tests,", passed.length, "passed,", failed.length, "failed.")
    if( failed.length > 0 ){
        console.log("%cfailed tests:", "color: #D02020;")
        for( i in failed ){
            console.log( "%c"+failed[i].n+ ":%c "+ failed[i].test, "color: #F06060;", "" )
        }
    }
}

function check( color, mode, array, valid, img ){
    var error = false
    if( !( color instanceof Color ) ){
        error = true
        console.log( "%cColor instance:%c", "color: #CCA033;", "",
                      color, "is not a color instance."            )
    }
    if( mode && color.mode !== mode ){
        error = true
        console.log( "%cColor mode:%c", "color: #CCA033;", "",
                      color.mode, " is not equal to ", mode, "."  )
    }
    if( array ){
        for( var i = 0; i < Color.modes[ color.mode ].keys.length; i++ ){
            if( color[i] !== array[i] ){
                if( typeof color[i] === "number" && typeof array[i] === "number" && isNaN( color[i] ) && isNaN( array[i] ) ){
                }else if( color[i] >= array[i]-0.01 && color[i] <= array[i]+0.01 ){
                    console.log( "%cKey value:%c", "color: #64C;", "",
                                  Color.modes[ color.mode ].keys[i], " key value ( ", color[i], " )",
                                  " is very close to ( ", array[i], " )"                                  )
                }else if( color[i] >= array[i]-0.4 && color[i] <= array[i]+0.4 ){
                    console.log( "%cKey value:%c", "color: #64C;", "",
                                  Color.modes[ color.mode ].keys[i], " key value ( ", color[i], " )",
                                  " is close to ( ", array[i], " )"                                  )
                }else if( color[i] >= array[i]-1 && color[i] <= array[i]+1 ){
                    console.log( "%cKey value:%c", "color: #64C;", "",
                                  Color.modes[ color.mode ].keys[i], " key value ( ", color[i], " )",
                                  " is near ( ", array[i], " )"                                  )
                }else{
                    error = true
                    console.log( "%cKey value:%c", "color: #CCA033;", "",
                                  Color.modes[ color.mode ].keys[i], " key value ( ", color[i], " )",
                                  " is not equal to ( ", array[i], " )"                               )
                }
            }
        }
        if( array.length > Color.modes[ color.mode ].keys.length && color.alpha.value !== array[i] ){
            if( typeof color.alpha.value === "number" && typeof array[i] === "number" && isNaN( color.alpha.value ) && isNaN( array[i] ) ){
            }else{
                error = true
                console.log( "%cKey value:%c", "color: #CCA033;", "",
                             "alpha key value ( ", color.alpha.value, " ) is not equal to ( ", array[i], " )" )
            }
        }
    }
    if( typeof valid !== "undefined" && color.validate() !== valid ){
        error = true
        console.log( "%cValidation:%c", "color: #CCA033;", "",
                     "this.validate() ( ", color.validate(), " ) is not equal to ( ", valid, " )" )
    }
    if( error ){
        return false
    }else{
        color.log( 0, color.mode, typeof img !== "undefined" && !img )
        return true
    }
}

/* start */
var start_time = performance.now(), end_time

/* class instance creation */
console.log( "\n%c/* class instance creation */\n\n", "color: #6666CC;" )
assert( function(){return !assert( function(){return check()}, "assert failed check" , "no_record")}, "fail check")
assert( function(){return check( new Color(), "rgb", [ 0, 0, 0, 255 ] )}, "Default new Color instance check" )
assert( function(){return check( new Color( 100, 22, 30, 4, 50, "cmyk" ), "cmyk", [ 100, 22, 30, 4, 50 ] )}, "new Color create with mode and alpha in scale check" )
assert( function(){return check( new Color( 100, "d", 3 ), "rgb", [ 100, 3, 0, 255 ] )}, "new Color create with false string and lesser value check" )
assert( function(){return check( new Color( 555, "xyz", -0.1, null, {} ), "xyz", [ 555, -0.1, 0, 1 ] )}, "new Color create with invalid number check" )
assert( function(){return check( new Color( [ 123, 99, 7, "hsv" ] ), "hsv", [ 123, 99, 7, 100 ] )}, "new Color create with an array check" )
assert( function(){var c = new Color( 12, 34, 5, "lab" ); return check( new Color( c ), "lab", [ 12, 34, 5, 1 ] )}, "new Color create with color instance check" )
assert( function(){return check( new Color( 12, 37, 5, 6, 7, 8, 9, "luv" ), "luv", [ 12, 37, 5, 6 ] )}, "new Color create with more arguments check" )
assert( function(){return check( new Color( 12, [ 9, 5, "lch"], 1 , 7, "rgb" ), "lch", [ 12, 9, 5, 1 ] )}, "new Color create with mixed more arguments and second mode check" )
assert( function(){return check( new Color( {a: 0, b:"s"}, function(){}, /123/, null ), "rgb", [ 0, 0, 0, 255 ] )}, "new Color create with mixed invalid arguments" )

/* parse creation */
console.log( "\n%c/* parse creation */\n\n", "color: #6666CC;" )
assert( function(){return check( new Color( "#FFF" ), "rgb", [ 255, 255, 255, 255 ] )}, "new Color create with 3-digit hex parsed" )
assert( function(){return check( new Color( "#A0C923" ), "rgb", [ 160, 201, 35, 255 ] )}, "new Color create with 6-digit hex parsed" )
assert( function(){return check( new Color( "rgb( 50, 200, 77 )" ), "rgb", [ 50, 200, 77, 255 ] )}, "new Color create with rgb css parsed" )
assert( function(){return check( new Color( "rgba( 150, 19, 177, 0.3 )" ), "rgb", [ 150, 19, 177, 76.5 ] )}, "new Color create with rgba css parsed" )
assert( function(){return check( new Color( "hsl( 278, 10%, 30% )" ), "hsl", [ 278, 10, 30, 100 ] )}, "new Color create with hsl css parsed" )
assert( function(){return check( new Color( "hsla( 333, 90.55%, 12.3%, .5 )" ), "hsl", [ 333, 90.55, 12.3, 50 ] )}, "new Color create with hsla css parsed" )
assert( function(){return check( new Color( "rgb( abc )" ), "rgb", [ 0, 0, 0, 255 ] )}, "new Color create with invalid rgb css parsed" )

/* assign value */
console.log( "\n%c/* assign value */\n\n", "color: #6666CC;" )
assert( function(){
    var a = new Color()
    a.r = 9
    a.g += 5
    a.b = 230
    a.alpha = 100
    return check( a, "rgb", [ 9, 5, 230, 100 ] )
}, "assign value by keys" )
assert( function(){
    var a = new Color( "luv" )
    a.l.value = 57.22
    a.u.value -= 1.556
    a.v.value = -72
    a.alpha.value = 0.65
    return check( a, "luv", [ 57.22, -101.556, -72, 0.65 ] )
}, "assign value by key.value" )
assert( function(){
    var a = new Color( "lab" )
    a.array = [ 87, -67, 69 ]
    return check( a, "lab", [ 87, -67, 69, 1 ] )
}, "assign value by array" )
assert( function(){
    var a = new Color( "hsv" )
    a.arrayWithAlpha = [ 111, 40, 26, 70 ]
    return check( a, "hsv", [ 111, 40, 26, 70 ] )
}, "assign value by array with alpha" )
assert( function(){
    var a = new Color( "xyz" )
    a.x.ratio = 1
    a.y.ratio += 0.5
    a.z.ratio = 1
    a.alpha.ratio = 0.7
    return check( a, "xyz", [ 95.047, 50, 108.883, 0.7 ] )
}, "assign value by key.ratio" )
assert( function(){
    var a = new Color( "cmyk" )
    a.ratio = [ 0.3, 0.26, .14, .2 ]
    return check( a, "cmyk", [ 30, 26, 14, 20 ] )
}, "assign value by ratio" )
assert( function(){
    var a = new Color( "hsl" )
    a.ratioWithAlpha = [ 2/3, .73, .50, .9 ]
    return check( a, "hsl", [ 240, 73, 50, 90 ] )
}, "assign value by ratio with alpha" )
assert( function(){
    var a = new Color( "lch" )
    a[0] = 1000
    a[1] = -0.123456
    a[2] = "hello"
    console.log( "color.[key] equals to indexed value:",
                  a.l == 1000 && a.c == -0.123456 && a.h == "hello" )
    console.log( "key property available:",
                  a.l.validate() === false && a.c.ratio === -0.123456/128 && a.h.value === "hello" )
    return check( a, "lch", [ 1000, -0.123456, "hello", 1 ], undefined, false )
}, "assign value by direct access" )
assert( function(){
    var a = new Color()
    a.r = []
    a.g.value += "3"
    a.b.ratio = {}
    return check( a, "rgb", [ 0, 3, NaN, 255 ] )
}, "assign invalid value by keys, key.value and key.ratio" )
assert( function(){
    var a = new Color( "hsv" )
    a.arrayWithAlpha = [ {}, [], NaN, "40" ]
    return check( a, "hsv", [ NaN, 0, NaN, 40 ] )
}, "assign invalid value by array with alpha" )
assert( function(){
    var a = new Color( "hsl" )
    a.ratioWithAlpha = [ Infinity, NaN, "-5", function(){} ]
    return check( a, "hsl", [ Infinity, NaN, -500, NaN ] )
}, "assign invalid value by ratio with alpha" )

/* Key prototype methods */
console.log( "\n%c/** Key prototype methods **/\n\n", "color: #6666CC;" )
assert( function(){
    var a = new Color( 1, 2, 3, 4 ), b = a.r.concat( a.g.value, [5] ), c = [ 1, 2, 5 ]
    console.log( "concatenated array:", b )
    console.log( "expected array:", c )
    return b.reduce( function( r, v, i ){ return r && v === c[i] }, true )
}, "Key.prototype.concat()" )
assert( function(){
    var a = new Color( 123, 45, 6, 70 ), b = a.alpha.as( 50, [] ), c = a.alpha.as( "50", 1 ), d = a.alpha.as({})
    console.log( "original alpha ratio: ", a.alpha.ratio, "-> as 0-50 ->", b, "rounded:", c, "invalid:", d )
    console.log( "expected value:", 70/255*50, "rounded:", Math.round(70/255*50), "invalid:", NaN )
    return b === 70/255*50 && c === Math.round(70/255*50) && isNaN(d)
}, "Key.prototype.as()" )
assert( function(){
    var a = new Color( 1230000, 45.999, 45.999, 10.2, "cmyk" )
    console.log( "original c value:", a.duplicate().c.value, "scale:", a.c.scale )
    console.log( "original m value:", a.duplicate().m.value, "scale:", a.m.scale )
    console.log( "original y value:", a.duplicate().y.value, "scale:", a.y.scale )
    console.log( "original k value:", a.duplicate().k.value, "scale:", a.k.scale )
    a.c.truncate()
    a.m.truncate(0)
    a.y.truncate()
    a.k.truncate(Infinity)
    console.log( "truncated c value:", a.c.value, "expected:", 100 )
    console.log( "truncated with 0 step m value:", a.m.value, "expected:", 45.999 )
    console.log( "truncated y value:", a.y.value, "expected:", 46 )
    console.log( "invalid truncate k:", a.k.value, "expected:", 10 )
    return a.c.value === 100 && a.m.value === 45.999 && a.y.value === 46 && a.k.value === 10
}, "Key.prototype.truncate()" )
assert( function(){
    var a = new Color( 100, 200, 50 )
    console.log( "key value:", a.r.value, "scale:", a.r.scale )
    a.r.reverse()
    console.log( "reversed value:", a.r.value, "expect:", 155 )
    return a.r.value === 155
}, "Key.prototype.reverse()" )

/* Color prototype methods */
console.log( "\n%c/* Color prototype methods */\n\n", "color: #6666CC;" )
assert( function(){
    var a = new Color( 1, 2, 3, 4 ), b = a.concat( a, [ 1, 2 ], 3 ), c = [ 1, 2, 3, 1, 2, 3, 1, 2, 3 ]
    console.log( "concatenated array:", b )
    console.log( "expected array:", c )
    return b.reduce( function( r, v, i ){ return r && v === c[i] }, true )
}, "Color.prototype.concat()" )
assert( function(){
    var a = new Color( 98, 224, 68, 236 ), b = a.duplicate()
    return check( b, "rgb", [ 98, 224, 68, 236 ] )
}, "Color.prototype.duplicate()" )
assert( function(){
    var a = new Color( 1230000, 45.549, -5 ), b = a.duplicate(), c = a.duplicate(), inv = a.duplicate()
        d = [ 255, 46, 0 ], e = [ 255, 45.549, 0 ], f = [ 255, 45.5, 0 ]
    console.log( "original array:", a.array )
    a.truncate()
    b.truncate(0)
    c.truncate(0.1)
    inv.truncate(Infinity)
    console.log( "truncated with default:", a.array, "expected:", d )
    console.log( "truncated with 0 step:", b.array, "expected:", e )
    console.log( "truncated with 0.1 step:", c.array, "expected:", f )
    console.log( "truncated with invalid step:", inv.array, "expected:", d )
    return a.array.reduce( function( r, v, i ){ return r && v === d[i] }, true )
        && b.array.reduce( function( r, v, i ){ return r && v === e[i] }, true )
        && c.array.reduce( function( r, v, i ){ return r && v === f[i] }, true )
        && inv.array.reduce( function( r, v, i ){ return r && v === d[i] }, true )
}, "Color.prototype.truncate()" )
assert( function(){
    var a = new Color( 100, 200, 50 ), b = a.duplicate()
    return check( a, "rgb", [ 100, 200, 50 ] ) &&
    check( a.reverse(), "rgb", [ 155, 55, 205 ] )
}, "Color.prototype.reverse()" )
assert( function(){
    var a = new Color( 100, 200, 50 )
    return check( a, "rgb", [ 100, 200, 50 ] )
        && check( a.duplicate().to( "cmyk" ), "cmyk", [ 50, 0, 75, 22 ] )
        && check( a.duplicate().to( "hsv", 0.01 ), "hsv", [ 100, 75, 78.43 ] )
        && a.duplicate().to( NaN ) === null
}, "Color.prototype.to()" )

/* conversion */
console.log( "\n%c/* conversion */\n\n", "color: #6666CC;" )
console.log("%ctree:\n rgb - hex \n rgb - css(rgb) \n rgb - hsl - css(hsl) \n rgb - hsv \n rgb - cmyk \n rgb - xyz - lab - lch \n       xyz - luv \n", "color: #6666CC;")
assert( function(){
    var a = new Color( 21, 56, 20 ), b = a.hex(), c = "#153814"
    check( a, "rgb", [ 21, 56, 20 ] )
    console.log( "hex:", b, " expect:", c )
    return b === c
}, "rgb to hex" )
assert( function(){
    var a = new Color( 143, 222, 197, 102 ), b = a.css(), c = "rgba( 143, 222, 197, 0.4 )"
    check( a, "rgb", [ 143, 222, 197 ] )
    console.log( "css:", b, " expect:", c )
    return b === c
}, "rgb to css" )
assert( function(){
    var a = new Color( 340, 76, 89, 80, "hsl" ), b = a.css(), c = "hsla( 340, 76%, 89%, 0.8 )"
    check( a, "hsl", [ 340, 76, 89 ] )
    console.log( "css:", b, " expect:", c )
    return b === c
}, "hsl to css" )
assert( function(){
    var a = new Color( 123, 45, 67 )
    return [ check( a, "rgb", [ 123, 45, 67 ] ),
             check( a.hsv(), "hsv", [ 343, 63, 48 ] ),
             check( a.hsl(), "hsl", [ 343, 46, 33 ] ),
             check( a.cmyk(), "cmyk", [ 0, 63, 46, 52 ] ),
             check( a.xyz(0.001), "xyz", [ 10.121, 6.494, 6.030 ] ),
             check( a.lab(0.0001), "lab", [ 30.6264, 36.0117, 4.1579 ] ),
             check( a.luv(0.00001), "luv", [ 30.62643, 49.53545, -1.22296 ] ),
             check( a.lch(0.0000001), "lch", [ 30.6264268, 36.2509438, 6.5861468 ] )
            ].reduce( AND, true )
}, "rgb to hsv, hsl, cmyk, xyz, lab, luv, lch" )
assert( function(){
    var a = new Color( 30.626, 36.251, 6.586, "lch" )
    return [ check( a, "lch", [ 30.626, 36.251, 6.586 ] ),
             check( a.rgb(), "rgb", [ 123, 45, 67 ] )
            ].reduce( AND, true )
}, "lch to rgb" )
assert( function(){
    var a = new Color( 65.4, 33, -50, "luv" )
    return [ check( a, "luv", [ 65.4, 33, -50 ] ),
             check( a.rgb(), "rgb", [ 203, 134, 210 ] )
            ].reduce( AND, true )
}, "luv to rgb" )
assert( function(){
    var a = new Color( 274, 67, 35, "hsl" )
    return [ check( a, "hsl", [ 274, 67, 35 ] ),
             check( a.rgb(), "rgb", [ 97, 29, 149 ] )
            ].reduce( AND, true )
}, "hsl to rgb" )
assert( function(){
    var a = new Color( 29, 41, 96, "hsv" )
    return [ check( a, "hsv", [ 29, 41, 96 ] ),
             check( a.rgb(), "rgb", [ 245, 193, 144 ] )
            ].reduce( AND, true )
}, "hsv to rgb" )
assert( function(){
    var a = new Color( 91, 32, 50, 10, "cmyk" )
    return [ check( a, "cmyk", [ 91, 32, 50, 10 ] ),
             check( a.rgb(), "rgb", [ 21, 156, 115 ] )
            ].reduce( AND, true )
}, "cmyk to rgb" )

/* adjust methods */
console.log( "\n%c/* adjust methods */\n\n", "color: #6666CC;" )
assert( function(){
    var a = new Color( 100, 50, 118 )
    return [ check( a.duplicate().lightness(NaN), "rgb", [ 100, 50, 118 ] ),
             check( a.duplicate().lightness(10), "rgb", [ 130, 65, 154 ] ),
             check( a.hsl(), "hsl", [ 284, 40, 33 ] ),
             check( a.duplicate().lightness(-10), "rgb", [ 70, 35, 82 ] ),
             check( a.duplicate().lightness("21.74%", "hsv"), "rgb", [ 122, 61, 144 ] ),
             check( a.hsv(), "hsv", [ 284, 58, 46 ] ),
             check( a.duplicate().lightness("-10", "hsv"), "rgb", [ 78, 39, 93 ] ),
             check( a.duplicate().lightness(10, "lab"), "rgb", [ 126, 74, 144 ] ),
             check( a.lab(1), "lab", [ 30, 34, -30 ] ),
             check( a.duplicate().lightness("-33.33%", "lab"), "rgb", [ 75, 26, 93 ] ),
             a.lightness( 0, "hello" ) === a.lightness( 0 )
            ].reduce( AND, true )
}, "increase and decrease lightness by 10 in hsl, hsv, lab" )
assert( function(){
    var a = new Color( 64, 87, 157 )
    return [ check( a.duplicate().saturation(NaN), "rgb", [ 64, 87, 157 ] ),
             check( a.duplicate().saturation(10), "rgb", [ 53, 81, 168 ] ),
             check( a.hsl(), "hsl", [ 225, 42, 43 ] ),
             check( a.duplicate().saturation(-10), "rgb", [ 75, 93, 146 ] ),
             check( a.duplicate().saturation(10, "hsv"), "rgb", [ 48, 75, 157 ] ),
             check( a.hsv(), "hsv", [ 225, 59, 62 ] ),
             check( a.duplicate().saturation("-17%", "hsv"), "rgb", [ 80, 99, 157 ] ),
             a.saturation( 0, "hello" ) === a.saturation( 0 )
            ].reduce( AND, true )
}, "increase and decrease saturation by 10 in hsl, hsv" )
assert( function(){
    var a = new Color( 80, 200, 222 )
    return [ check( a.duplicate().chroma(NaN), "rgb", [ 80, 200, 222 ] ),
             check( a.duplicate().chroma("29.4%"), "rgb", [ 0, 204, 233 ] ),
             check( a.lch(1), "lch", [ 75, 34, 218 ] ),
             check( a.duplicate().chroma(-10), "rgb", [ 123, 196, 211 ] ),
             a.chroma( 0, "hello" ) === a.chroma( 0 )
            ].reduce( AND, true )
}, "increase and decrease chroma by 10 in lch" )
assert( function(){
    var a = new Color( 224, 34, 20 )
    return [ check( a.duplicate().hue(NaN), "rgb", [ 224, 34, 20 ] ),
             check( a.duplicate().hsl().hue("3375%").rgb(), "rgb", [ 20, 225, 85 ] ),
             check( a.hsl(), "hsl", [ 4, 84, 48 ] ),
             check( a.duplicate().hue(-135), "rgb", [ 20, 57, 224 ] ),
             check( a.duplicate().hue(135, "hsv"), "rgb", [20, 224, 85 ] ),
             check( a.hsv(), "hsv", [ 4, 91, 88 ] ),
             check( a.duplicate().hsv().hue("-135", "hsv").rgb(), "rgb", [ 20, 58, 224 ] ),
             check( a.duplicate().hue(135, "lch"), "rgb", [ 0, 143, 97 ] ),
             check( a.lch(0.1), "lch", [ 48.3, 88.3, 39.1 ] ),
             check( a.duplicate().hue(-135, "lch"), "rgb", [ 0, 130, 255 ] ),
             a.hue( 0, "hello" ) === a.hue( 0 )
            ].reduce( AND, true )
}, "increase and decrease hue by 135 in hsl, hsv, lch" )

/* series */
console.log( "\n%c/* series */\n\n", "color: #6666CC;" )
assert( function(){
    var a = new Color( 255, 0, 0 ), hsl = a.triad(), hsv = a.triad("hsv"), lch = a.triad("lch")
    return [ check( hsl[0], "rgb", [ 255, 0, 0 ] ),
             check( hsl[1], "rgb", [ 0, 255, 0 ] ),
             check( hsl[2], "rgb", [ 0, 0, 255 ] ),
             check( hsv[0], "rgb", [ 255, 0, 0 ] ),
             check( hsv[1], "rgb", [ 0, 255, 0 ] ),
             check( hsv[2], "rgb", [ 0, 0, 255 ] ),
             check( lch[0], "rgb", [ 255, 0, 0 ] ),
             check( lch[1], "rgb", [ 0, 158, 59 ] ),
             check( lch[2], "rgb", [ 0, 131, 255 ] ),
             a.triad( "hello" )[0].compare_with(hsl[0]),
             a.triad( "hello" )[1].compare_with(hsl[1]),
             a.triad( "hello" )[2].compare_with(hsl[2])
            ].reduce( AND, true )
}, "triad of hsl, hsv and lch modes" )
assert( function(){
    var a = new Color( 156, 213, 8 ), hsl = a.complement(), hsv = a.complement("hsv"), lch = a.complement("lch")
    return [ check( hsl[0], "rgb", [ 156, 213, 8 ] ),
             check( hsl[1], "rgb", [ 65, 8, 213 ] ),
             check( hsv[0], "rgb", [ 156, 213, 8 ] ),
             check( hsv[1], "rgb", [ 65, 8, 213 ] ),
             check( lch[0], "rgb", [ 156, 213, 8 ] ),
             check( lch[1], "rgb", [ 183, 175, 255 ] ),
             a.complement( "hello" )[0].compare_with(hsl[0]),
             a.complement( "hello" )[1].compare_with(hsl[1])
            ].reduce( AND, true )
}, "complement color of hsl, hsv and lch modes" )
assert( function(){
    var a = new Color( 149, 20, 255 ), hsl = a.shades(), hsv = a.shades("hsv"), lab = a.shades("lab")
    return [ check( hsl[0], "rgb", [ 149, 20, 255 ] ),
             check( hsl[1], "rgb", [ 136, 0, 248 ] ),
             check( hsl[2], "rgb", [ 106, 0, 193 ] ),
             check( hsl[3], "rgb", [ 45, 0, 83 ] ),
             check( hsv[0], "rgb", [ 149, 20, 255 ] ),
             check( hsv[1], "rgb", [ 134, 18, 230 ] ),
             check( hsv[2], "rgb", [ 104, 14, 179 ] ),
             check( hsv[3], "rgb", [ 45, 6, 77 ] ),
             check( lab[0], "rgb", [ 149, 20, 255 ] ),
             check( lab[1], "rgb", [ 135, 0, 242 ] ),
             check( lab[2], "rgb", [ 107, 0, 216 ] ),
             check( lab[3], "rgb", [ 41, 0, 165 ] ),
             a.shades( "hello" )[0].compare_with(hsl[0]),
             a.shades( "hello" )[1].compare_with(hsl[1]),
             a.shades( "hello" )[2].compare_with(hsl[2]),
             a.shades( "hello" )[3].compare_with(hsl[3]),
            ].reduce( AND, true )
}, "shades of hsl, hsv and lab modes" )

/* others */
console.log( "\n%c/* others */\n\n", "color: #6666CC;" )
assert( function(){
    var a = new Color( 56, 210, 94 )
    return [ check( a, "rgb", [ 56, 210, 94 ] ),
             check( a.rgb(0).grayscale().rgb(), "rgb", [ 120, 120, 120 ] ),
             check( a.hsl(0).grayscale().rgb(), "rgb", [ 133, 133, 133 ] ),
             check( a.hsv(0).grayscale().rgb(), "rgb", [ 210, 210, 210 ] ),
             check( a.cmyk(0).grayscale().rgb(), "rgb", [ 210, 210, 210 ] ),
             check( a.xyz(0).grayscale().rgb(), "rgb", [ 122, 122, 122 ] ),
             check( a.lab(0).grayscale().rgb(), "rgb", [ 184, 184, 184 ] )
            ].reduce( AND, true )
}, "grayscale in custom rgb, hsl, hsv, cmyk, xyz, lab " )
assert( function(){
    Color.fn.set_xyz_illuminant("d50_2")
    return Color.modes.xyz.illuminant.current === "d50_2"
         && Color.fn.set_xyz_illuminant("xxx") === "d50_2"
         && Color.modes.xyz.x.max === Color.modes.xyz.illuminant.d50_2.x
         && Color.modes.xyz.y.max === Color.modes.xyz.illuminant.d50_2.y
         && Color.modes.xyz.z.max === Color.modes.xyz.illuminant.d50_2.z
         && Color.modes.xyz.illuminant.current === "d50_2"
         && Color.fn.set_xyz_illuminant("d65_2") === "d65_2"
}, "Color.fn.set_xyz_illuminant()")

/* end */
end_time = performance.now()
console.log( "%ctest time:%c", "font-weight: bold; color: #66C;", "", Math.round( (end_time - start_time)*10000 )/10000000, "seconds" )

/* report */
summary()

})( Color );
