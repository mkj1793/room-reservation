/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, withPrefix, Link as GatsbyLink } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { Container, Footer, Navigation, SideNavigation } from 'hds-react';

import Seo from './seo';
import './layout.scss';

const resolveCurrentMenuItem = (menuItems, slugWithPrefix) => {
  const rootPath = withPrefix('/');

  if (slugWithPrefix === rootPath) {
    return menuItems.find(({ link }) => withPrefix(link) === rootPath);
  } else {
    return menuItems
      .filter(({ link }) => withPrefix(link) !== rootPath)
      .find((menuItem) => slugWithPrefix.startsWith(withPrefix(menuItem.link)));
  }
};

const generateUiIdFromPath = (path, prefix) => {
  const pathStr =
    !path && path === '/'
      ? 'home'
      : path
          .split('/')
          .filter((str) => !!str)
          .join('-');
  return `${prefix}-${pathStr}`;
};

const Layout = ({ children, pageContext }) => {
  const { title: pageTitle, slug: pageSlug } = pageContext.frontmatter;
  const pageSlugWithPrefix = withPrefix(pageSlug);

  const queryData = useStaticQuery(graphql`
    query SiteDataQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
            subMenuLinks {
              name
              link
              withDivider
            }
          }
          footerTitle
          footerAriaLabel
          footerCopyrightLinks {
            name
            link
          }
        }
      }
      allMdx {
        edges {
          node {
            frontmatter {
              title
              slug
            }
            fields {
              subDir
            }
          }
        }
      }
    }
  `);

  const siteData = queryData.site.siteMetadata;
  const mdxPageData = queryData.allMdx?.edges || [];
  const allPages = mdxPageData.map(({ node }) => ({ ...node.frontmatter, ...node.fields }));
  const siteTitle = siteData?.title || 'Title';
  const footerTitle = siteData?.footerTitle || siteTitle;
  const footerAriaLabel = siteData?.footerAriaLabel;
  const menuLinks =
    siteData?.menuLinks.map((menuLink) => ({
      ...menuLink,
      uiId: generateUiIdFromPath(menuLink.link, 'nav'),
    })) || [];
  const currentMenuItem = resolveCurrentMenuItem(menuLinks, pageSlugWithPrefix);
  const pageSubMenuLinks = currentMenuItem?.subMenuLinks || [];
  const sideNavigation = pageSubMenuLinks.map((subMenuLink) => ({
    ...subMenuLink,
    prefixedLink: withPrefix(subMenuLink.link),
    uiId: generateUiIdFromPath(subMenuLink.link, 'side-nav'),
    subLevels: allPages
      .filter(({ subDir }) => subMenuLink.link.includes(subDir))
      .map((subLevelLink) => ({
        ...subLevelLink,
        uiId: generateUiIdFromPath(subLevelLink.slug, 'side-nav-sub'),
        prefixedLink: withPrefix(subLevelLink.slug),
      })),
  }));
  const footerCopyRightLinks = siteData?.footerCopyrightLinks || [];
  const contentId = 'content';

  return (
    <>
      <Seo title={pageTitle} />
      <div className="page text-body">
        <Navigation
          id="page-header"
          className="pageHeader"
          title={siteTitle}
          menuToggleAriaLabel="menu"
          skipTo={`#${contentId}`}
          skipToContentLabel="Skip to content"
        >
          <Navigation.Row>
            {menuLinks.map(({ name, link, uiId }) => (
              <Navigation.Item
                active={withPrefix(currentMenuItem?.link || '') === withPrefix(link)}
                key={uiId}
                label={name}
                to={link}
                as={GatsbyLink}
              />
            ))}
          </Navigation.Row>
        </Navigation>
        <Container className="pageContent">
          {sideNavigation.length > 0 && (
            <aside className="sideContent" key="side-navigation">
              <SideNavigation
                defaultOpenMainLevels={[...Array(sideNavigation.length).keys()]}
                id="side-navigation"
                toggleButtonLabel="Navigate to page"
              >
                {sideNavigation.map(({ name, prefixedLink, uiId, withDivider, subLevels }) => (
                  <SideNavigation.MainLevel
                    key={uiId}
                    id={uiId}
                    href={prefixedLink}
                    label={name}
                    active={pageSlugWithPrefix === prefixedLink}
                    withDivider={withDivider}
                  >
                    {subLevels.map(({ title, prefixedLink, uiId }) => (
                      <SideNavigation.SubLevel
                        key={uiId}
                        href={prefixedLink}
                        label={title}
                        active={pageSlugWithPrefix === prefixedLink}
                      />
                    ))}
                  </SideNavigation.MainLevel>
                ))}
              </SideNavigation>
            </aside>
          )}
          <main id={contentId} className="mainContent">
            <MDXProvider>{children}</MDXProvider>
          </main>
        </Container>
        <Footer id="page-footer" className="pageFooter" title={footerTitle} footerAriaLabel={footerAriaLabel}>
          <Footer.Base copyrightHolder="Copyright">
            {footerCopyRightLinks.map(({ name, link }) => (
              <Footer.Item key={name} label={name} href={link} />
            ))}
          </Footer.Base>
        </Footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
