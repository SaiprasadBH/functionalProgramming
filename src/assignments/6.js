const outer = {
  name: "Outer",
  inner: {
    name: "Inner",
    showName: function () {
      console.log(this.name);
    },
  },
};

const show = outer.inner.showName;
show(); // What does this print and why?
//undefined since show is called directly without object scope
