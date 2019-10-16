# ngx-advanced-input
A simple input directive with different alpha-numeric restrictions.

## Installation instructions

Install `ngx-advanced-input` from `npm`:
```bash
npm install ngx-advanced-input --save
```

Add to Modules:
```typescript
import { NgxAdvancedInputModule } from 'ngx-advanced-input';

@NgModule({
  ...
  imports: [NgxAdvancedInputModule,...]
  ...
})
```

## Usage

Easily add `advancedInput` directive and choose `inputType`. You are done:
```html
<input advancedInput inputType="alphaWithSpace">         
```
## Input Types
| InputType          | Description   | Example |
| ------------- |:-------------:| ---| 
| alphaWithSpace     | Only Alpha Numeric Values, No Initial space, No multiple spaces together |  A10 B20 |
| noFSpace    | Only Alpha Numeric Values with Space, allows multiple spaces      | A10 B20 |
| alpha | Only Alpha Numeric Values, no spaces allowed      | A10B10 |
| noSpace | All letters with no initial space, No multiple spaces together     | A10 B20 $100 |
| number | Numbers only, accept '.'     | 10.5 |
| strictlyNumber | Numbers only     | 1994 |
| strictlyNumber | Only Alpha Numeric Values, no spaces, accept underscore     | A10_B20 |
| numberWithColon | Numbers only, accept ':'     | 10:30 |

## Example
```html
<form class="form-horizontal">
  <div class="form-group">
    <div class="col-sm-10">
      <input advancedInput inputType="alphaWithSpace" class="form-control" placeholder="eg.  A10 B20">
      <small class="text-muted">
        Only Alpha Numeric Values, No Initial space, No multiple spaces together
      </small>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-10">
      <input advancedInput inputType="noFSpace" class="form-control" placeholder="eg. A10 B20">
      <small class="text-muted">
        Only Alpha Numeric Values with Space, allows multiple spaces
      </small>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-10">
      <input advancedInput inputType="alpha" class="form-control" placeholder="eg. A10B10">
      <small class="text-muted">
        Only Alpha Numeric Values, allows multiple spaces
      </small>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-10">
      <input advancedInput inputType="noSpace" class="form-control" placeholder="eg. A10 B20 $100">
      <small class="text-muted">
        All letters with no initial space, No multiple spaces together
      </small>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-10">
      <input advancedInput inputType="number" class="form-control" placeholder="eg. 10.5">
      <small class="text-muted">
        Numbers only, accept '.'
      </small>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-10">
      <input advancedInput inputType="strictlyNumber" class="form-control" placeholder="eg. 1994">
      <small class="text-muted">
        Numbers only
      </small>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-10">
      <input advancedInput inputType="alphaWithUnderscore" class="form-control" placeholder="eg. A10_B20">
      <small class="text-muted">
        Only Alpha Numeric Values, no spaces, accept underscore
      </small>
    </div>
  </div>
  <div class="form-group">
    <div class="col-sm-10">
      <input advancedInput inputType="numberWithColon" class="form-control" placeholder="eg. 10:30">
      <small class="text-muted">
        Numbers only, accept ':'
      </small>
    </div>
  </div>
</form>
```