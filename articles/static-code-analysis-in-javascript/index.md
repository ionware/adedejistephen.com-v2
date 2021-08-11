---
title: "Improve your project with static code checker"
date: 2021-08-11
icon: javascript.png
description: "Reasoning, approach, and goals Goals Faster initial load times. Users only download the code they need for the features they are using. This is an excellent article that explains the whole thing."
---

# Introduction
Adding metadata to pages (such as a title or description) is key in helping search engines like Google understand your content and decide when to surface it in search results.

React Helmet is a package that provides a React component interface for you to manage your document head.

Gatsby’s react helmet plugin provides drop-in support for server rendering data added with React Helmet. Using the plugin, attributes you add to React Helmet will be added to the static HTML pages that Gatsby builds.

```
import React from "react"
import PropTypes from "prop-types"
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
```
## Keep making it better
In this section, we’ve shown you a few Gatsby-specific tools to improve your site’s performance and prepare to go live.

Lighthouse is a great tool for site improvements and learning — Continue looking through the detailed feedback it provides and keep making your site better!