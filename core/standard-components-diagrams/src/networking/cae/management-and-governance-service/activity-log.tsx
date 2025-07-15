import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const ACTIVITY_LOG = {
  _style:
    'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Log.svg;',
  _width: 45,
  _height: 50,
}

export function ActivityLog(props: DiagramNodeProps) {
  return <Shape {...ACTIVITY_LOG} {...props} />
}
