import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CLOUD_SQL = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjE0LjY1OTk5OTg0NzQxMjExIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMTQuNjU5OTk5ODQ3NDEyMTEgMjAiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CS5zdDF7ZmlsbDojNjY5ZGY2O30mI3hhOwkuc3Qye2ZpbGw6I2FlY2JmYTt9JiN4YTsJPC9zdHlsZT4mI3hhOwk8c3R5bGU+JiN4YTsJCS5Ee2ZpbGwtcnVsZTpldmVub2RkfSYjeGE7CTwvc3R5bGU+JiN4YTsJPHBhdGggZD0iTTcuMzMgMTUuMzV2LTMuMDFMMCA4LjQ0djMuMDF6bTAgNC42NXYtMy4wMUwwIDEzLjA5djMuMDF6IiBjbGFzcz0ic3QyIEQiLz4mI3hhOwk8cGF0aCBkPSJNMTQuNjYgOC40NGwtNy4zMyAzLjl2My4wMWw3LjMzLTMuOXptMCA0LjY1bC03LjMzIDMuOVYyMGw3LjMzLTMuOXoiIGNsYXNzPSJzdDEgRCIvPiYjeGE7CTxwYXRoIGQ9Ik03LjMzIDB2My4wMWw3LjMzIDMuOVYzLjl6IiBjbGFzcz0ic3QwIEQiLz4mI3hhOwk8cGF0aCBkPSJNMCA2LjkxbDcuMzMtMy45VjBMMCAzLjl6IiBjbGFzcz0iRCBzdDEiLz4mI3hhOwk8cGF0aCBkPSJNNy4zMyAxMC43OVY3Ljc3TDAgMy44N3YzLjAyeiIgY2xhc3M9IkQgc3QyIi8+JiN4YTsJPHBhdGggZD0iTTE0LjY2IDMuODdsLTcuMzMgMy45djMuMDJsNy4zMy0zLjl6IiBjbGFzcz0iRCBzdDEiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  },
  _width: 30,
  _height: 40,
}

export function CloudSql(props: NodeProps) {
  return (
    <Shape {...CLOUD_SQL} {...props} _style={extendStyle(CLOUD_SQL, props)} />
  )
}
