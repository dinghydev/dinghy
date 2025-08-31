import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_ROUTER = {
  _style:
    'sketch=0;html=1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;align=center;spacingTop=-6;fontSize=11;fontStyle=1;fontColor=#999999;shape=image;aspect=fixed;imageAspect=0;image=data:image/svg+xml,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB2aWV3Qm94PSIwIDAgMjAgMjAiPiYjeGE7CTxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4YTsJLnN0MHtmaWxsOiM0Mjg1ZjQ7fSYjeGE7CTwvc3R5bGU+JiN4YTsJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3IDEydjNsLTUtNSA1LTV2M2gzdjR6TTMgOEgwdjRoM3YzbDUtNS01LTV6bTkgN3YtM0g4djNINWw1IDUgNS01em0wLTEwdjNIOFY1SDVsNS01IDUgNXoiLz4mI3hhOzwvc3ZnPg==;strokeColor=none;',
  _width: 42,
  _height: 42,
}

export function CloudRouter(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_ROUTER}
      {...props}
      _style={extendStyle(CLOUD_ROUTER, props)}
    />
  )
}
