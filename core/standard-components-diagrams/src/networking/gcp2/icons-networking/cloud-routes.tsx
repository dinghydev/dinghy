import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const CLOUD_ROUTES = {
  _style:
    'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE5LjI5OTk5OTIzNzA2MDU0NyIgdmlld0JveD0iMCAwIDIwIDE5LjI5OTk5OTIzNzA2MDU0NyI+JiN4YTsJPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hhOwkuc3Qwe2ZpbGw6IzQyODVmNDt9JiN4YTsJLnN0MXtmaWxsOiM2NjlkZjY7fSYjeGE7CTwvc3R5bGU+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIuNDMgNi4xSDBWMi42N2gzLjk0bDguNCAxMC40OWgyLjM0di0yLjcyTDIwIDE0Ljg3bC01LjMyIDQuNDN2LTIuNzFoLTMuODd6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE0LjY4IDYuMTR2Mi43MkwyMCA0LjQzIDE0LjY4IDB2Mi43MWgtMy44N0w4LjMzIDUuODJsMi4xMyAyLjY3IDEuODgtMi4zNXpNMCAxMy4ydjMuNDNoMy45NGwyLjUyLTMuMTUtMi4xMy0yLjY3LTEuOSAyLjM5eiIvPiYjeGE7PC9zdmc+;strokeColor=none;',
  _width: 42,
  _height: 40,
}

export function CloudRoutes(props: DiagramNodeProps) {
  return <Shape {...CLOUD_ROUTES} {...props} />
}
