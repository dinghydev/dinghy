import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CIRCULAR_CALLOUT = {
  _style: {
    entity:
      'verticalLabelPosition=middle;verticalAlign=middle;html=1;shape=mxgraph.infographic.circularCallout;dy=15;fillColor=#10739E;strokeColor=none;labelPosition=center;align=center;fontColor=#10739E;fontStyle=1;fontSize=24;whiteSpace=wrap;',
  },
  _original_width: 100,
  _original_height: 100,
}

export function CircularCallout(props: NodeProps) {
  return (
    <Shape
      {...CIRCULAR_CALLOUT}
      {...props}
      _style={extendStyle(CIRCULAR_CALLOUT, props)}
    />
  )
}
