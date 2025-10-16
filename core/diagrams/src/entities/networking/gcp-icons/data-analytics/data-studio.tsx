import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DATA_STUDIO = {
  _style: {
    entity:
      'editableCssRules=.*;html=1;shape=image;verticalLabelPosition=bottom;labelBackgroundColor=#ffffff;verticalAlign=top;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwLjAwMDAyNjcwMjg4MDg2IiBoZWlnaHQ9IjE4LjM1OTQ1MTI5Mzk0NTMxMiIgdmlld0JveD0iLTAuMDAwMDI2Njc4MTQ5ODc5NDQ0MzkgMC4wMDAwOTc3MzIxMjUxNDExOTIyMyAyMC4wMDAwMjY3MDI4ODA4NiAxOC4zNTk0NTEyOTM5NDUzMTIiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM2NjlkZjY7fSYjeGE7CS5zdDF7ZmlsbDojNDI4NWY0O30mI3hhOwk8L3N0eWxlPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNy41IDEzLjM0OGgtNy4yNmEyLjUzIDIuNTMgMCAwIDAtMi43NCAyLjUgMi41IDIuNSAwIDAgMCAyLjc0IDIuNWg3LjI2eiIgZmlsbD0iIzY2OWRmNiIvPiYjeGE7CTxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjE3LjUiIGN5PSIxNS44NDgiIHI9IjIuNSIgZmlsbD0iIzQyODVmNCIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMCA2LjY3OEgyLjc0QTIuNTMgMi41MyAwIDAgMCAwIDkuMTc4YTIuNSAyLjUgMCAwIDAgMi43NCAyLjVIMTB6IiBmaWxsPSIjNjY5ZGY2Ii8+JiN4YTsJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iMTAiIGN5PSI5LjE3OCIgcj0iMi41IiBmaWxsPSIjNDI4NWY0Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3LjUuMDA4aC03LjI2YTIuNTQgMi41NCAwIDAgMC0yLjc0IDIuNSAyLjUgMi41IDAgMCAwIDIuNzQgMi41aDcuMjZ6IiBmaWxsPSIjNjY5ZGY2Ii8+JiN4YTsJPGNpcmNsZSBjbGFzcz0ic3QxIiBjeD0iMTcuNSIgY3k9IjIuNTA4IiByPSIyLjUiIGZpbGw9IiM0Mjg1ZjQiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  },
  _width: 40,
  _height: 36,
}

export function DataStudio(props: DiagramNodeProps) {
  return (
    <Shape
      {...DATA_STUDIO}
      {...props}
      _style={extendStyle(DATA_STUDIO, props)}
    />
  )
}
