import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_DATAFLOW = {
  _style:
    'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjExLjUzOTk5OTk2MTg1MzAyNyIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDExLjUzOTk5OTk2MTg1MzAyNyAxNiI+JiN4YTsJPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hhOwkuc3Qwe2ZpbGw6IzQyODVmNDt9JiN4YTsJPC9zdHlsZT4mI3hhOwk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSIxMC42MyIgY3k9IjguMDEiIHI9Ii45MSIvPiYjeGE7CTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9Ii45MSIgY3k9IjguMDEiIHI9Ii45MSIvPiYjeGE7CTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjUuNzciIGN5PSI2LjY1IiByPSIuOTEiLz4mI3hhOwk8Y2lyY2xlIGNsYXNzPSJzdDAiIGN4PSI1Ljc3IiBjeT0iOS4zNyIgcj0iLjkxIi8+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTguNTcgMGgtLjAzTDUuNzcgMS42aDAgMEwzIDBoLS4wM0wxLjYyLjc4IDQuNCAyLjM5LjIgNC44djEuN2gxLjQ0di0uOTFsMy40NC0yLjAydjEuNDhoMS4zOFYzLjU3TDkuOSA1LjU5di45MWgxLjQ0VjQuOGwtNC4yLTIuNDFMOS45Mi43OHpNNi40NiAxMC45Nkg1LjA4djEuNDZsLTMuNDQtMi4wMVY5LjVILjJ2MS43bDQuMjEgMi40MS0yLjc5IDEuNjEgMS4zNS43OEgzbDIuNzctMS42TDguNTQgMTZoLjAzbDEuMzUtLjc4LTIuNzktMS42MSA0LjIxLTIuNDFWOS41SDkuOXYuOTFsLTMuNDQgMi4wMXoiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  _width: 24,
  _height: 32,
}

export function CloudDataflow(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_DATAFLOW}
      {...props}
      _style={extendStyle(CLOUD_DATAFLOW, props)}
    />
  )
}
