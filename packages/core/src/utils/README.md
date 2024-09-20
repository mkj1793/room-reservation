# How css is created

## "elements" in parameters

## "modifiers" in parameters

## "extras" in parameters

## "all" in parameters

By default, everything is outputted.
"all" is changed to false if

- a modifier has explicitly set value (string/bool/map)
- an element ihas explicitly set value (string/bool/map)
- an extra has explicitly set value (string/bool/map)
- "extras" is false
- "modifiers" is false
- "elements" is false

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
