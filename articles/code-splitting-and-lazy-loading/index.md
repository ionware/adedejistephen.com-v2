---
title: "Code splitting & lazy loading a server side rendered React app"
date: 2021-08-08
icon: react.png
description: "Reasoning, approach, and goals Goals Faster initial load times. Users only download the code they need for the features they are using. This is an excellent article that explains the whole thing."
---

# Introduction
Adding metadata to pages (such as a title or description) is key in helping search engines like _Google_ understand your content and decide when to surface it in search results.

React Helmet is a package that provides a **React component** interface for you to manage your document head.

Gatsby’s react helmet plugin provides drop-in support for server rendering data added with [React Helmet](https://npmjs.org/packages/react-helmet). Using the plugin, attributes you add to React Helmet will be added to the ~~static HTML~~ pages that Gatsby builds using ```React.Component```.

```jsx
import React from "react"
// highlight-start
import PropTypes from "prop-types"
// highlight-end
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  class FlavorForm extends React.Component { // highlight-line
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    // highlight-next-line
    this.setState({value: event.target.value});
  }

  // highlight-start
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  // highlight-end

  render() {
    return (
      { /* highlight-range{1,4-9,12} */ }
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
```
## Keep making it better
In this section, we’ve shown you a few **Gatsby-specific** tools to improve your site’s performance and prepare to go live.

- Performance
- Optimization
- Code splitting, and
- Dynamic Rendering

Lighthouse is a great tool for site improvements and learning — Continue looking through the detailed feedback it provides and keep making your site better!

> Adding metadata to pages (such as a title or description) is key in helping search engines like Google understand your content and decide when to surface it in search results.

React Helmet is a package that provides a React component interface for you to manage your document head.
1. Abstract Syntax Tree
2. Parse Tree
3. Postfix / Prefix / Infix Expression
4. BNF
5. Grammer