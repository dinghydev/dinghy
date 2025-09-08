import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTIVITY_PARTITION = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.actPart;strokeWidth=3;verticalAlign=top;rotation=-90;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 100,
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
