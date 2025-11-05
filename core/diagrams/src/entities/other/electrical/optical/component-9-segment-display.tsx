import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_9_SEGMENT_DISPLAY = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.9_segment_display;pointerEvents=1;',
  },
  _width: 74.7,
  _height: 96.1,
}

export function Component9SegmentDisplay(props: NodeProps) {
  return (
    <Shape
      {...COMPONENT_9_SEGMENT_DISPLAY}
      {...props}
      _style={extendStyle(COMPONENT_9_SEGMENT_DISPLAY, props)}
    />
  )
}
