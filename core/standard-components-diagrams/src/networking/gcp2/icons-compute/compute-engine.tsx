import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPUTE_ENGINE = {
  _style: {
    entity:
      'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CS5zdDF7ZmlsbDojNjY5ZGY2O30mI3hhOwkuc3Qye2ZpbGw6I2FlY2JmYTt9JiN4YTsJPC9zdHlsZT4mI3hhOwk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNNyA3aDZ2Nkg3eiIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik05IDBoMnY0SDl6TTUgMGgydjRINXptOCAwaDJ2NGgtMnoiLz4mI3hhOwk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNOSAxNmgydjRIOXptLTQgMGgydjRINXptOCAwaDJ2NGgtMnptMy01VjloNHYyem0wIDR2LTJoNHYyem0wLThWNWg0djJ6Ii8+JiN4YTsJPHBhdGggY2xhc3M9InN0MSIgZD0iTTAgMTFWOWg0djJ6bTAgNHYtMmg0djJ6bTAtOFY1aDR2MnoiLz4mI3hhOwk8cGF0aCBjbGFzcz0ic3QyIiBkPSJNMyAzdjE0aDE0VjN6bTEyIDEySDVWNWgxMHoiLz4mI3hhOwk8cGF0aCBjbGFzcz0ic3QxIiBkPSJNMTAgMTBsLTMgM2g2eiIvPiYjeGE7CTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xMyA3bC0zIDMgMyAzeiIvPiYjeGE7PC9zdmc+;strokeColor=none;',
  },
  _width: 42,
  _height: 42,
}

export function ComputeEngine(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPUTE_ENGINE}
      {...props}
      _style={extendStyle(COMPUTE_ENGINE, props)}
    />
  )
}
