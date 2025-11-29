import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const AUTOML = {
  _style: {
    entity:
      'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE4IiB2aWV3Qm94PSIwIDAgMjAgMTgiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CS5zdDF7ZmlsbDojNjY5ZGY2O2ZpbGwtb3BhY2l0eTouOH0mI3hhOwkuc3Qye2ZpbGw6I2FlY2JmYTtmaWxsLW9wYWNpdHk6LjZ9JiN4YTsJPC9zdHlsZT4mI3hhOwk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOS4xNyA1LjE0bDEuNjYtMi41N0w5LjE1IDBINUwwIDguNThsMi41IDUuMTQgNS04LjU4eiIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik0xNC4xNyA1LjE0bDEuNjYtMi41N0wxNC4xNyAwaC0zLjM0bDEuNjcgMi41Ny0xLjY3IDIuNTd6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MiIgZD0iTTEwLjgzIDEyLjg2bC0xLjY2IDIuNTdMMTAuODUgMThIMTVsNS04LjU4LTIuNS01LjE0LTUgOC41OHoiLz4mI3hhOwk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOS4xNyAxMi44Nkg1LjgzbC0xLjY2IDIuNTdMNS44MyAxOGgzLjM0TDcuNSAxNS40M3oiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  },
  _width: 42,
  _height: 38,
}

export function Automl(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, AUTOML)} />
}
