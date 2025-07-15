import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const STATIC_APPS = {
  _style:
    'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/preview/Static_Apps.svg;',
  _width: 68,
  _height: 54,
}

export function StaticApps(props: DiagramNodeProps) {
  return <Shape {...STATIC_APPS} {...props} />
}
