import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const IDE_PLUGINS = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjExLjI1OTk5OTI3NTIwNzUyIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHZpZXdCb3g9IjAgMCAyMCAxMS4yNTk5OTkyNzUyMDc1MiI+JiN4YTsJPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hhOwkuc3Qwe2ZpbGw6IzQyODVmNDt9JiN4YTsJLnN0MXtmaWxsOiM2NjlkZjY7fSYjeGE7CS5zdDJ7ZmlsbDojYWVjYmZhO30mI3hhOwk8L3N0eWxlPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00LjY4IDEuNDJIMi40MkwwIDUuNjdsMi40MiA0LjI2aDIuMjZMMi4yNyA1LjY3eiIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0wIDUuNjdsMS4xMSAxLjk3IDEuNDYtMS40NS0uMy0uNTJ6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MiIgZD0iTTEzIDBINy4xMkwzLjgxIDUuNjNsMy4zMSA1LjU5SDEzbDMuMjktNS41OXptLTIuOTMgOC4zNmEyLjY0IDIuNjQgMCAxIDEgMi42Ni0yLjY0IDIuNjUgMi42NSAwIDAgMS0yLjY2IDIuNjR6TTIuNDIgMS40MkwwIDUuNjlsMS4xMSAxLjk3IDEuMTYtMS45NyAyLjQxLTQuMjd6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEzIC4wOGgwbC0xLjcgMy4zM2EyLjY2IDIuNjYgMCAwIDEtMS4yNSA1IDIuNjIgMi42MiAwIDAgMS0xLjE4LS4yN2wtMS43NSAzLjEySDEzbDMuMjktNS42M3ptMi4zMiA5Ljg1aDIuMjdMMjAgNS42N2wtMi40MS00LjI1aC0yLjI3bDIuNDEgNC4yNXoiPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMCA1LjY3TDE4Ljg5IDMuN2wtMS40NiAxLjQ2LjMuNTF6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MiIgZD0iTTE3LjU5IDkuOTNMMjAgNS42NWwtMS4xMS0xLjk3LTEuMTYgMS45Ny0yLjQxIDQuMjh6Ii8+JiN4YTs8L3BhdGg+PC9zdmc+;strokeColor=none;',
  },
  _width: 40,
  _height: 22,
}

export function IdePlugins(props: NodeProps) {
  return (
    <Shape
      {...IDE_PLUGINS}
      {...props}
      _style={extendStyle(IDE_PLUGINS, props)}
    />
  )
}
