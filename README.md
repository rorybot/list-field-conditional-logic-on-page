As per the docs (as of Nov 2018):
https://docs.gravityforms.com/gf_field_list/

"Unfortunately you can’t configure conditional logic rules on other fields based on the List field; we do have this on the feature request list."

This was frustrating as I had a form with list fields in it, and I needed to be able to prevent progression with the form if the user had selected specific drop-down options. But GF_Field_List does not carry conditional logic inside it itself, so this wasn't possible.

This is a very specific solution, which I hope I can make a bit more generic. At the moment, all it does is act as a guard on progression for the very page itself. You have to manually set the Name attributes, in the code, of the specific drop-downs. It gives them all the same class, so that they can be treated as a group (it contains logic to do this on load, and whenever a new list row is added - every list row gets the same Name attribute from GF as its originator, so the logic doesn't have to change). Then it applies a delegated event listener by looking within your specified page for those dropdowns, and runs the logic to hide the Next button.

As said, this was developed to prevent progression on the same page as the dropdowns, but you can also apply it to any page you like by just changing the .on('change'...) event listener and/or the button it targets in there (you can also make it so it's not  button but a Field as well - it's just targeting a jQuery object afterall).

This is a bit of a hacky solution, as ideally one should be working within the PHP-based framework which Gravity Forms is. But, since the GF_Field_List lacks the bits to hook onto to have the desired effect, and since it seems to lack the ability to query the status of its columns (at least as far as I can see), it had to be done with Javascript.

Please note that since this is a JS rather than PHP solutuon, it isn't a perfect guard. So for instance, if you're worried about some nefarious indiviual progressing when they shouldn't be able to, then they could just find the element and show it anyway. I suppose this could be prevented by making it so that the code actually fills in a hidden field in a way that is invalid (e.g. hidden field must contain string "password" for the form to be submitted, and the code here would input "plarsblurd" into that field). Similar concerns, and a possible solution, might arise if you have Multi-Page Navigation plugin installed (but, again, I suppose you could just tell this to hide that link, or have its apperance conditional on a hidden field that this fills in).
