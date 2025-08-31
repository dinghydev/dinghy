import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CLOUD_CYCLE = {
  _style: {
    entity:
      'image;sketch=0;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/mscae/Cloud_Cycle.svg;strokeColor=none;',
  },
  _width: 50,
  _height: 46,
}

export function CloudCycle(props: DiagramNodeProps) {
  return (
    <Shape
      {...CLOUD_CYCLE}
      {...props}
      _style={extendStyle(CLOUD_CYCLE, props)}
    />
  )
}
