Template.form.onRendered( function() {
  alert("Form has been processed");
  var budgetList = $("#budget-list");
  var sortable = Sortable.create(budgetList);
});
