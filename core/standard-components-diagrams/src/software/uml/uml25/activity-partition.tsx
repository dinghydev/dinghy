import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ACTIVITY_PARTITION = {
  _style: {
    entity:
      'html=1;align=center;verticalAlign=middle;rounded=1;absoluteArcSize=1;arcSize=10;dashed=0;whiteSpace=wrap;',
  },
  _width: 140,
  _height: 70,
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
