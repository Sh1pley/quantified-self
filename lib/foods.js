$('document').ready(function() {
  $("#add-food").on('click', function() {
    var foodName = $('#name-field input').val();
    var calories = $('#calories-field input').val();
    
    if (foodName && calories) {
      $('#food-list > tbody:first')
        .prepend(
          "<tr class='food-row'><td class='food-name'>" + 
          foodName + "</td><td class='food-calories'>" + 
          calories + "</td><td class='food-delete'><button class='delete'>-</button></td></tr>"
        );

      $('#name-field input, #calories-field input').val("");
      $('#name-field .validation-error').html('');
      $('#calories-field .validation-error').html('');
    } else {
      $('#name-field .validation-error').html('Please Enter a Name').show().fadeOut(2000);
      $('#calories-field .validation-error').html('Please Enter Calories').show().fadeOut(2000);
    };

    $('.food-delete').on('click', function() {
      this.parentNode.remove()
    });

    $('#food-search').keyup(function () {
      var rows = $('#food-list > tbody').find('tr').hide();
      if (this.value.length) {
        var data = this.value.toLowerCase().split(" ");
        $.each(data, function(i, v) {
          rows.filter(":contains('" + v + "')").show();
        });
      } else rows.show()
    });
  });
})
