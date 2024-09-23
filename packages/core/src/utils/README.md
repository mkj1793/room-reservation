# How css is created

## Parameters

### "elements"

Elements define what rules for elements should be outputted.

#### The "base" element

There is a special element named "base" which is for the base rules for block, modifiers and element.

```css
.block {
  /// block base rules
  color: #f00;

  .block--modifier {
    /// modifier base rules
    background-color: #f00;
    .block__element {
      /// element base rules
      padding: 0;
    }
  }
}
```

To control the output of base rules, `@content("base")` should be used. There is no automatic way to pick base rules, so the css must be wrapped.

Usually base is only used in the block level, because other entities are controlled with "elements" and "modifiers".

#### Other elements

Other elements can be named in any way.

### Values

All elements are outputted by default. See...

### "modifiers"

### "extras"

### "all"

### What about "content"?

The argument for the `@contents($elementName)` is an element's name. Usually only "base" is used.

By default, everything is outputted.
"all" is changed to false if

- a modifier has explicitly set value (string/bool/map)
- an element ihas explicitly set value (string/bool/map)
- an extra has explicitly set value (string/bool/map)
- "extras" is false
- "modifiers" is false
- "elements" is false

### Values

Setting a parameter `false`, prohibits all its targets from the output.

For example `elements:false` prohibits all elements.

Setting a parameter `true` (default), allows all its targets.

Setting a single target parameter `false`, prohibits that target from the output.

For example `elements:("base":false)` prohibits "base" element.

Setting a single target parameter `true`, prohibits all other targets from the output and allow only that.

Setting multiple target parameters 'true', allows all those targets.

#### Examples

Let's say there is a following css-structure:

```
- block
  - base content
  - element: table
  - element: button
  - modifier: dark
    - element: table
    - element button
  - modifier: light
    - element: table
    - element button

```

Parameters `("element":"base")` outputs

```
- block
  - base content
  - modifier: dark
  - modifier: light

```

Parameters `("modifier":"dark")` outputs

```
- block
  - modifier: dark
    - element: table
    - element button
```

## If there is NO parent selector in the css ($globalRules.parent does not exists):

By default top level selector is `.hds-<block>`
Modifiers and elements are appended to it with `__element` or `--modifier`

Nested rules are added normally.

```
     @include block{
        div {
          ...
        }
        @include element;
     }
```

will result in

```
.hds-<block> div {
  ...
}
.hds-<block> __<element > {
  ...
}
```

## If there is a parent selector in the css ($globalRules.parent exists)

If the rule (block, modifier, element, etc) is the first nested rule, then only its @content is outputted.

```

.mySelector {
@include block/modifier/element/etc;
}

```

will result in

```

.mySelector {
...@content of block/modifier/element/etc;
}

```

If the rule (block, modifier, element, etc) is NOT the first nested rule, then normal nesting is applied

```

.mySelector {
@include block { (this is the first)
@include element (this is NOT the first);
}

```

will result in

```

.mySelector {
...@content of block
}

.mySelector\*\*element {
...@content of element
}

```

with block() and content(), the @content is outputted
Modifiers and elements are appended to the parent with \*\*<element> or --<modifier>
Nested rules are added normally.

## Overriding automatically created selectors

Selectors can be set with named parameters. If element or modifier values are strings, they are considered as selector overrides

```

element:("content":" section")
modifier:("dark":".variantX ")

@include block {
@include element("content"){

}
@include modifier("dark"){

}

}

```

will result in

```

.hds-<block> section {}
.hds-<block>.variantX {}

```

and NOT

```

.hds-<block>\_\_content {}
.hds-<block>--dark {}

```

Overriding a top level block is not possible with named parameters.
But wrapping with a parent selector will do the same

```

.block-override {
@include ...
}

```

will result in

```

.block-override {
...block contents without selector.
}

```

## Special cases

### No need for block's base styles / base styles NOT outputted

If any modifier's in the parameters are explicitly set to "true"/"string", the block's base styles are NOT outputted.
If parameter "modifiers" is omitted, all base styles are outputted
If parameter "modifiers" is "true", all base styles are outputted
If parameter "modifiers" is a map and any ("modifierName":true/string), base styles are NOT outputted

#### Need block base styles and a modifier together?

Add two calls to the scss function,

### Overrides not in output

If there is a parent selector in the css, first nested rule selectors or overrides are not outputted

```

@include scssFunc(params){
  @include block(){
    @include modifier("dark"){
    ....modifier css
    }
  }
}

```

Without parent selector:

```

@include scssFun((modifier:("dark":".variantX "))){}

```

output

```

.hds-<blockName>.variantX{
  ....modifier css
}

```

With parent selector:

```

.mySelector {
  @include scssFun((modifier:("dark":".variantX "))){}
}

```

output

```

.mySelector
  ....modifier css
}

```
