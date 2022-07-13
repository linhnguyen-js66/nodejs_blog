import Handlebars from "handlebars";
export const handleBarsHelper = {
  sum: (a, b) => {
    return a + b;
  },
  sorttable: (field, sort) => {
    const sortType = field === sort?.column ? sort.type : "default";
    const icons = {
      default: "oi oi-elevator",
      asc: "oi oi-sort-ascending",
      desc: "oi oi-sort-descending",
    };
    const types = {
      default: "asc",
      asc: "desc",
      desc: "asc",
    };
    const icon = icons[sortType];
    const type = types[sortType];

    const address = Handlebars.escapeExpression(
      `?_sort&column=${field}&type=${type}`
    );
    //sap xep theo field nao thi chuyen field do vao
    //column = name la sap xep theo truong ten
    const output = `<a href="${address}">
       <span class="${icon}"></span>
      </a>`;
    return new Handlebars.SafeString(output)
  },
};
