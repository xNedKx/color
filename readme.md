# Color Class for JS

This module defines "Color" in window, and provides new instance creation.

Color.Set class provide basic image manipulation but requires performance improvement.

Supports 11 color models: grayscale, rgb, hsl, hsv, cmyk, xyz, lab, luv, lch, lms, dkl

Example: \[Not suit for mobile\]

1. [Color Wheel](http://xnedkx.github.io/color/color_wheel.htm)
2. [Color Palette](http://xnedkx.github.io/color/hp.htm)
3. [Grayscale Image](http://xnedkx.github.io/color/grayscale_worker_cc.htm)
4. [Color Analyse](http://xnedkx.github.io/color/cc_analyse.htm)

------------

> Author: xNedKx
>
> Version: 20151129
>
> Document Version: 20160403

------------

# Class Documents

* Color Class
* Key Class
* Color.Set Class


## Color class

##### `new Color( args... )`
##### `new Color( color_instance )`
##### `new Color( string_to_be_parsed )`

> create new Color instance
> 
> args are mixed values of numbers and color model, within or without array. the first available color model will be used.
> 
> if any string argument can be parsed, the parsed color instance will be returned. ( when mixed with other arguments )
> 
> parsable string includes rgb hex value, css-like rgb/rgba/hsl/hsla color string ( you can use other color models ), and css-like color string without parenthesis.
> 
> the Color class inherit Array with some methods removed.
>
> can be used as a function.



### Color properties


##### `[index]`

> direct access values of keys in color model name order.


##### `.meta`

> extensible property to restore extra data


##### `.alpha`

> set: assign alphaValue
> 
> get: returns Key instance of alpha


##### `.alphaRatio`

> the ratio of alpha, from 0 to 1.
> 
> this is the only alpha value kept in instance, other alpha related values refer to it.


##### `.alphaValue`

> the value of alpha, from the maximum to minium of the color mode.
> 
> set: transform value to ratio and change the alphaRatio value
> 
> get: returns the value transformed from ratio


##### `.mode`

> set: check if model available and change model, remove old model keys and add new keys. this does not affect the values.
> 
> get: returns current model name


##### `.modeWithoutKeys`

> set: same as .mode property but not add new keys
> 
> get: returns current model name.


##### `.<key>`

> the \<key\> value is one of the color model keys, ex: .r, .g, and .b in RGB model.
> 
> set: set the value of the key
> 
> get: returns Key instance of the key


##### `.scales`

> get: returns the range and step of current color mode


##### `.in_scale`

> get: returns if values in the range without check step interval matching


##### `.array`

> set: set key values by a array without alpha, the order is the same as the model name. using this assigns values without type check.
> 
> get: returns values in an array


##### `.arrayWithAlpha`

> set: same as .array accompanied with alpha key
> 
> get: same as .array accompanied with alpha key


##### `.ratio`

> set: same as .array but using value ratio from 0 to 1 as from range minimum to maximum
> 
> get: same as .array but using value ratio from 0 to 1 as from range minimum to maximum


##### `.ratioWithAlpha`

> set: same as .ratio accompanied with alpha key
> 
> get: same as .ratio accompanied with alpha key



### Color methods


##### `.concat( args... )`

> return array of keys without alpha followed by arguments.


##### `.validate()`

> check if the values of this instance are in the range and on the step.
> 
> returns boolean.


##### `.truncate( with_step_interval = default_step )`

> truncate the values to fit their range.
> 
> with_step_interval is optional, giving step number to truncate the values ( except alpha ) by the given step. else default step of the color model is used. set to 0 to do no truncation.
> 
> if the value is larger than maximum and the maximum is not on step, the value is truncated to the maximum.


##### `.reverse()`

> convert the values to the reversed value ( set ratios to 1 - ratio and convert back to values )


##### `.restore( color_instance )`

> convert the color instance to the same as the given color instance.
> 
> currently not checking input type.


##### `.duplicate()`

> returns a duplicate of this instance.


##### `.compare_with( color_instance, strict_compare = false )`

> compare if this instance and the given color have the same model and values.
> 
> strict_compare is option. while set to true, returns true if only the valuse are exactly the same. else the value would be compared as truncated.


##### `.to( color_model, trucation_option = true )`

> change color model and convert values by scales to given color_model.
> 
> truncation_option is option, it accept boolean or numbers. giving numbers would set the truncate step value.
> 
> true would use default step, false would not truncate the values.


##### `.toString( with_alpha_ratio = false, letter_spacing = 0, spacing_character = " " )`

> returns color instance in string, the form is "\<color_model\>( \<value_key1\>, \<value_key2\>, ..., [\<alpha_ratio\>] )".
> 
> using letter_spacing option can make arrangement of the keys.


##### `.serialize()`

> returns an array which contains the color model string in 0 index and following key values with alpha.


##### `.<color_mode>( trucation_option = true )`

> returns a duplication of the color model, key values will be converted.
>
> truncation_option is option, it accept boolean or numbers. giving numbers would set the truncate step value.

##### `.<adjusters>( adjust_value, color_model = current_model/default_supported_model )`

> execute the adjuster by given value in color model.
> 
> the value can be a percent number string ends with "%", or a number.
> 
> there are 3 types of adjuster: ratio, value, loop.
> 
> in ratio adjuster, number between 1 and -1 would be took as percentage, outer numbers would be divided by 100.
> 
> others uses the original value.
> 
> the value would be added to the original value, the percentage will add to the ratio.


##### `.<series>( color_model = current_model/default_supported_model )`

> execute the series method in color model.


##### `.gamma( new_gamma, old_gamma = 2.2 )`

> convert the color value by gamma.
> 
> using ratio to transform, 2.2 is sRGB gamma default.


##### `.wb( color_instance, conversion_truncation = true )`

> adjust color by white balance with given color.


##### `.under( color_instance ), .over( color_instance ), .mask_by( color_instance ), .expose_by( color_instance ), .add( color_instance ), .subtract( color_instance )`

> blend colors.


##### `.threshold( max_color_instance, min_color_instance )`

> truncate the color by threshold.


##### `.noise( grayscale = false, alpha = 1 )`

> make a random rgb noise color over the original color.


##### `.light_contrast( color_model = default_model )`

> create a contrast color by adjusting lightness in given model.
> 
> support limited models. default to "lch".


##### `.contrast_with( color_instance, color_model = default_model )`

> get a color that is contrast with original color and given color.
> 
> support limited models. default to "lch".


##### `.distance( color_instance, no_adjustion = false )`

> calculate the color difference between 2 colors.
> 
> using different algorithm in different color models, the original color model is used.
> 
> returned distance is adjusted trying to fit 0 - 1 scale.
> 
> if scale_adaption option is true, the returned distance is not adjusted.
> 
> support limited models.
> 
> lch model using CIEDE2000.


##### `.partial_rate( color_model )`

> returns the rate of each key value to total key values in an array.
> 
> if total is 0, returns a 0 length array.


##### `.log( truncation = true, color_model = current_model, show_color_box = true )`

> display the color instance information in console log.



### Color class properties


##### `Color.fn`

> store the funtions of Color class


###### `Color.fn.parse( string )`

> try Color.parsers in order to parse the input string.
> 
> returns Color instance when success.


###### `Color.fn.average( color_1, color_2, ... )`

> returns the calculated average color value.
> 
> this has color model dependency.


###### `Color.fn.css_linear_gradient( direction, colors, repeat = 0 )`

> create css linear gradient.
> 
> the colors should be an array of colors, and leave blank items to adjust the ratio of gradient density.


###### `Color.fn.css_radial_gradient( position, colors, repeat = 0 )`

> create css radial gradient.
> 
> the colors should be an array of colors, and leave blank items to adjust the ratio of gradient density.


###### `Color.fn.set_xyz_illuminant( illuminant )`

> change the illuinant of xyz model.
> 
> default is D65 ( observer 2 degree ).
> 
> currently not well supported.


###### `Color.fn.array_convert( source_array, converter_function_chains )`

> using converter functions to convert the given source array.
> 
> beware of the source type ( value / ratio ).


##### `Color.defaultMode`

> default color model.
> 
> default to "rgb"


##### `Color.defaultIlluminant`

> default illuminant. the profile affect the conversion between rgb and xyz.
> 
> default to "d65_2"


##### `Color.modes`

> store defined color models.
> 
> currently support 11 different models: grayscale, rgb, hsl, hsv, cmyk, xyz, lab, luv, lch, lms, dkl.
> 
> the profile defines the keys, scales of keys and other model dependent properties.


##### `Color.converters`

> store defined color model converters.
> 
> the first level is the source model and the second level is the target model.
> 
> the profile describes the source and target type. the function returns an array or in paser a Color instance.


##### `Color.parsers`

> this is an array of pasers which refered from converters.


##### `Color.adjusters`

> store adjusters like hue/saturation/lightness.


##### `Color.series`

> store functions that can produce series of colors from resouce color. ex: shades/triad


##### `Color.math`

> refers to the collection of some basic functions.


------------

## Key class

> the Key class is use to help accessing the key and value.
> 
> it is better not to create and assign it to vars multiple times.
> 
> the class instances are created from get_keys method when called by \<color\>.\<key\> or \<color\>.alpha.
> 
> beware old Key instance is not synchronized to the original color instance.
> 
> Key class inherit Array class.



### Key properties


##### `[0]`

> the value of the key.


##### `.owner`

> refer to the original color instance.


##### `.key`

> the key name.


##### `.scale`

> get: return the range and step of this key from original color model


##### `.value`

> set: assign value to the owner color instance and this key
> 
> get: return the value of this key instance


##### `.ratio`

> set: assign value to the owner color instance and this key by converting the ratio to value
> 
> get: return the ratio of the value of this key instance



### Key methods


##### `.valueOf()`

> return the value of key.


##### `.concat( args... )`

> return array of the value followed by arguments.


##### `.reverse()`

> set the ratio of the key to ( 1 - ratio of the key ).
> 
> affect original color.


##### `.truncate( with_step_interval = default_step )`

> truncate the value to fit the range.
> 
> with_step_interval is optional, giving step number to truncate the value by the given step.
> 
> else default step of the key is used. set to 0 to do no truncation.
> 
> if the value is larger than maximum and the maximum is not on step, the value is truncated to the maximum.
> 
> affect original color.


##### `.validate()`

> check if the value of key is in the range and on the step.
> 
> returns boolean.


##### `.as( scale, step = 0 )`

> get the value as in given scale from ratio.


------------

## Color.Set class

##### `new Color.Set( color_instance_1, color_instance_2, ..., width = color_instances_number, height = ceil(color_instances_number/width) )`

> create a Color.Set instance by color instances. set the model, width and height.
> 
> the model is set to the model of first color instance or default model of Color when no color is given.
> 
> the first number is width, and the second is height. they could appear as leading arguments.
> 
> currently not checking if they are integers.



### Color.Set Properties


##### `.mode`

> set: checks model availability and set to it
> 
> get: returns model name


##### `.width`

> the number of the width of this color set.


##### `.height`

> the number of the height of this color set.


##### `.data`

> a Float64Array instance with width * height * key numbers length that keeps all color data.


##### `.keyLength`

> the key numbers of the color model.


##### `.size`

> returns data length / key numbers


##### `.length`

> returns real data length, which means the last non-zero color position + 1



### Color.Set methods


##### `.valueOf()`

> returns the .data property.


##### `.toString()`

> serialize the instance to JSON.


##### `.to( color_model )`

> converts data to another color model.


##### `.duplicate()`

> returns a duplicate of this color set.


##### `.restore( colorset_instance )`

> copies other color set data to this color set.


##### `.truncate( with_step_interval = default_step )`

> truncate all color data.


##### `.adjust_size( width = length, height = ceil(length/width) )`

> adjust the size of .data, this would ignore exceeded data.


##### `.toImageData()`

> returns a ImageData instance with the data.


##### `.get_array( position )`

> get color array in .data at the position index.
> 
> the order of the array is the same as \<color\>.arrayWithalpha.


##### `.set_array( position, array )`

> set color array in .data at the position index.
> 
> the order of the array is the same as \<color\>.arrayWithalpha.


##### `.set_color( position, color_instance )`

> set .data at the position index with given Color instance.


##### `.get_colors( position = 0, length = all )`

> get an array with Color instances from the position by the length.


##### `.insert( colors, position = after_the_last_color )`

> insert color instances at the position.


##### `.average()`

> get the average color of the color set.


##### `.get_key_map( key )`

> returns an array which keeps only the value of given key.


##### `.set_key_type( key, array )`

> set the value of certain key to given array.
> 
> if the length of given array is lesser than the color set size, 0 will be set to the lack value.


##### `.get_key_contrast_map( key )`

> returns an array of the value of the key.
> 
> where the value is the difference between the original value and the average value.


##### `.get_distance_map()`

> returns an array containing the distance between every 2 points.
> 
> this method takes times to execute.


##### `.edge_map()`

> using the distance map to get the edge.
> 
> returns Color.Set instance of the edge map.
> 
> this method takes times to execute.


##### `.analyse()`

> analyse the key distribution, color average, mean, model, standard deviation and sampling colors.
> 
> this method takes times to execute.



### Color.Set class properties


##### `Color.Set.fn`

> stores functions of Color.Set


###### `Color.Set.fn.parseString`

> load a JSON string encoded by .toString() method and returns Color.Set instance.


###### `Color.Set.fn.readImageData`

> load an ImageData object and returns Color.Set instance.


```
| cc.js | xNedKx |
```