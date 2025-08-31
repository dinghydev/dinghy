import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const MONITOR = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/management_governance/Monitor.svg;strokeColor=none;',
  },
  _width: 60,
  _height: 60,
}

export function Monitor(props: DiagramNodeProps) {
  return <Shape {...MONITOR} {...props} _style={extendStyle(MONITOR, props)} />
}
