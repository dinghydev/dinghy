import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const STATIC_APPS = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/Static_Apps.svg;strokeColor=none;',
  },
  _width: 70,
  _height: 56.00000000000001,
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
