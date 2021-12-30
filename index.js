const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addUtilities }) {
  const fontSizes = {
    sm: {
      size: '1rem',
      height: '1.5rem'
    },
    base: {
      size: '1.125rem',
      height: '1.75rem'
    },
    md: {
      size: '1.25rem',
      height: '1.75rem'
    },
    lg: {
      size: '1.5rem',
      height: '2rem'
    },
    xl: {
      size: '1.875rem',
      height: '2.25rem'
    },
    xxl: {
      size: '2.25rem',
      height: '2.5rem'
    }
  }

  const titleSize = {
    md: {
      key: 'md',
      subtitle: 'base'
    },
    lg: {
      key: 'md',
      subtitle: 'base'
    },
    xl: {
      key: 'md',
      subtitle: 'md'
    },
    xxl: {
      key: 'md',
      subtitle: 'lg'
    }
  }

  const titles = [
    {
      '.title': {
        fontSize: fontSizes.base.size,
        fontWeight: 'bold',
        lineHeight: fontSizes.base.height,
      },
      '.subtitle': {
        fontSize: fontSizes.sm.size,
        lineHeight: fontSizes.sm.height,
      },
    },
    ...Object.entries(titleSize).map(([key, { subtitle }]) => {
      return {
        [`.title.title-${key}`]: {
          fontSize: fontSizes[key].size,
          lineHeight: fontSizes[key].height,
        },
        [`.subtitle.subtitle-${key}`]: {
          fontSize: fontSizes[subtitle].size,
          lineHeight: fontSizes[subtitle].height,
        }
      }
    })
  ]

  addUtilities(titles)
  addUtilities({
    '.paragraph': {
      lineHeight: 2
    }
  })
})
