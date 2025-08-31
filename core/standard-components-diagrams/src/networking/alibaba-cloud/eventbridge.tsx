import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const EVENTBRIDGE = {
  _style: {
    entity:
      'points=[];aspect=fixed;html=1;align=center;shadow=0;dashed=0;fillColor=#FF6A00;strokeColor=none;shape=mxgraph.alibaba_cloud.eventbridge;',
  },
  _width: 48.9,
  _height: 48.9,
}

export function Eventbridge(props: DiagramNodeProps) {
  return (
    <Shape
      {...EVENTBRIDGE}
      {...props}
      _style={extendStyle(EVENTBRIDGE, props)}
    />
  )
}
