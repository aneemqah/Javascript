//Define the data object
let data = {
  roles: [
    { role: 'Software Engineer' },
    { role: 'Engineer Manager' },
    { role: 'Project Manager' }
  ]
};

// Get the template script
let source = document.getElementById('job-roles-template').innerHTML;

// Complile the Template
let template = Handlebars.compile(source);

// Pass the data to the template and get the rendered HTML
let html = template(data);

// Insert the rendered HTML into the DOM
document.getElementById('list-container').innerHTML = html;

// Register a Handlebars helper to sort roles alphabetically
Handlebars.registerHelper('sort', function (items, options) {
  // Sort the items alphabetically by the 'role' property
  const sortedItems = items.slice().sort((a, b) => {
    return a.role.localeCompare(b.role);
  });

  // Generate the HTML by iterating over the sorted items
  let result = '';
  for (const item of sortedItems) {
    result += options.fn(item);
  }
  return result;
});
