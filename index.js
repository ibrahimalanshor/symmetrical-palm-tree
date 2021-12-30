const plugin = require('tailwindcss/plugin')

const { fontWeight, fontSize, lineHeight } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = plugin(function ({ addUtilities }) {
  const titleSizes = {
    md: {
      title: 'xl',
      subtitle: 'base'
    },
    lg: {
      title: '2xl',
      subtitle: 'lg'
    },
    xl: {
      title: '3xl',
      subtitle: 'lg'
    },
    xxl: {
      title: '4xl',
      subtitle: 'xl'
    }
  }

  const titles = [
    {
      '.title': {
        fontSize: fontSize['lg'][0],
        fontWeight: fontWeight.bold,
        lineHeight: fontSize['lg'][1].lineHeight
      },
      '.subtitle': {
        fontSize: fontSize['base'][0],
        lineHeight: lineHeight.loose,
      },
    },
    ...Object.entries(titleSizes).map(([key, { title, subtitle }]) => ({
      [`.title.title-${key}`]: {
        fontSize: fontSize[title][0],
        lineHeight: fontSize[title][1].lineHeight
      },
      [`.subtitle.subtitle-${key}`]: {
        fontSize: fontSize[subtitle][0],
      }
    }))
  ]

  const paragraph = {
    '.paragraph': {
      lineHeight: lineHeight.loose
    }
  }

  const small = {
    '.small': {
      fontSize: fontSize.sm[0],
      lineHeight: fontSize.sm[1].lineHeight
    }
  }

  addUtilities([...titles, paragraph, small])
})
