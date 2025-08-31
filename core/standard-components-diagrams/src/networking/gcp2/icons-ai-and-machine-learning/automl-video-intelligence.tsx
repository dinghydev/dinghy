import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const AUTOML_VIDEO_INTELLIGENCE = {
  _style: {
    entity:
      'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjM4MC42MzY0OTE2NzUyNjI0NSIgaGVpZ2h0PSIyNzUuNjgyNTM0NzQ5ODYxMTMiIHZpZXdCb3g9Ii0wLjM2OTAwMDAxNzY0Mjk3NDg1IDAgMTAwLjcxMDAwNjcxMzg2NzE5IDcyLjk0MTAwMTg5MjA4OTg0Ij4mI3hhOzxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CS5zdDF7ZmlsbDojYWVjYmZhO30mI3hhOwkuc3Qye2ZpbGw6IzY2OWRmNjt9JiN4YTs8L3N0eWxlPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMDAuMzQxIDQwLjA4TDc2LjQ0IDcyLjk0MWwtNDcuNjkyLS4wNy00Ljg0Ni02LjY1OSA0Ljg4MS02LjU4OSAzOC4xMDUuMDcgMjMuNzY1LTMyLjg0NXpNLS4zNjkgMzIuODYxTDIzLjUzMiAwbDQ3LjY5Mi4wNyA0Ljg0NiA2LjY1OS00Ljg4MSA2LjU4OS0zOC4xMDUtLjA3TDkuMzE5IDQ2LjA5M3oiLz4mI3hhOwk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMzIuNjUxIDQ1Ljg4OFYyNi44ODJoOC45MzZsNC41NzMgNS43MzEgNi4wMjcuMDQ5di0zLjAwN0g0OC40NGwtMi4xNjktMi43NzNoMTAuMTU2djguMTcySDQzLjk2NmwtMS44MjQtMi42MDFoLTQuNjU5bDIuODk3IDQuMDA2LTIuODk3IDMuODdoNC42NTlsMS44MjQtMi44MWgxMi40NjF2OC4zNjlINDYuMjcxbDIuMTY5LTIuNzYxaDMuNzQ3di0yLjk0Nkg0Ni4xNmwtNC41NzMgNS43MDd6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MiIgZD0iTTY3LjM4NyA0NC42MzNsLTYuNjM4LTQuMDA4di04LjMxOGw2LjYzOC0zLjkwOXoiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  },
  _width: 42,
  _height: 34,
}

export function AutomlVideoIntelligence(props: DiagramNodeProps) {
  return (
    <Shape
      {...AUTOML_VIDEO_INTELLIGENCE}
      {...props}
      _style={extendStyle(AUTOML_VIDEO_INTELLIGENCE, props)}
    />
  )
}
