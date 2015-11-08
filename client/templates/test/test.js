Template.test.helpers({
  testSlices: function() {
    return TestSlices.find();
  }
});

Template.test.rendered = function() {
  if(TestSlices.find().count() === 0){

    TestSlices.insert({
      label: 'Public Safety',
      key: 'publicSafety',
      value: "50"
    });

    TestSlices.insert({
        label:'Transportation',
        key:'transportation',
        value: "20"
    });

    TestSlices.insert({
        label:'Health & Human Services',
        key:'healthAndHumanSvcs',
        value: "30"
    });
  }
};
