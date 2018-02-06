# Layouts
# https://middlemanapp.com/basics/layouts/
set :css_dir, "stylesheets"
set :images_dir, "images"
set :js_dir, "javascripts"
# set :relative_links, true

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Helpers
# Inline SVG Helper
# <%= inline_svg('name/of/file', class: 'my-addl-class') %>
helpers do
  def inline_svg(name, options = {})
    root = Middleman::Application.root
    file_path = "#{root}/source/images/#{name}.svg"
    return File.read(file_path) if File.exists?(file_path)
    '(not found)'
  end
end

# Build-specific configuration
# https://middlemanapp.com/advanced/configuration/#environment-specific-settings
configure :development do
  # A Sprockets transformer that converts ES6 code into vanilla ES5 with Babel JS
  require 'sprockets/es6'
  activate :sprockets do |s|
    s.supported_output_extensions << '.es6'
  end

  # Reload the browser automatically whenever .ERB change
  activate :livereload,
    :no_swf => true,
    # :ignore => [/\.html$/],
    :livereload_css_pattern => Regexp.new('.+\.scss$'),
    :livereload_css_target => 'stylesheets/styles.css'

  # gulp dev setting
  activate :external_pipeline,
    name: :gulp,
    command: "npm run development",
    source: "",
    latency: 1
end

configure :build do
  # Use relative URLs
  activate :relative_assets

  # Minify CSS on build
  # activate :minify_css
  ignore 'stylesheets/styles'

  # Minify JS on build
  # activate :minify_javascript
  # ignore 'javascripts/all.js'

  # gulp build setting
  activate :external_pipeline,
    name: :gulp,
    command: "npm run build",
    source: "build",
    latency: 1
end
