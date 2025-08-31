import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ACTIVITY_PARTITION = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.actPart;strokeWidth=3;verticalAlign=top;rotation=-90;whiteSpace=wrap;',
  },
  _width: 60,
  _height: 60,
}

export function ActivityPartition(props: DiagramNodeProps) {
  return (
    <Shape
      {...ACTIVITY_PARTITION}
      {...props}
      _style={extendStyle(ACTIVITY_PARTITION, props)}
    />
  )
}
