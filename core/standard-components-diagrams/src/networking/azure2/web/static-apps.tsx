import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STATIC_APPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/Static_Apps.svg;strokeColor=none;',
  _width: 68,
  _height: 54,
}

export function StaticApps(props: DiagramNodeProps) {
  return (
    <Shape
      {...STATIC_APPS}
      {...props}
      _style={extendStyle(STATIC_APPS, props)}
    />
  )
}
