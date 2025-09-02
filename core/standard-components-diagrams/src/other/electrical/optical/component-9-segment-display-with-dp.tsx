import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_9_SEGMENT_DISPLAY_WITH_DP = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.9_segment_display_with_dp;pointerEvents=1;',
  },
  _original_width: 79.8,
  _original_height: 96.9,
}

export function Component9SegmentDisplayWithDp(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_9_SEGMENT_DISPLAY_WITH_DP}
      {...props}
      _style={extendStyle(COMPONENT_9_SEGMENT_DISPLAY_WITH_DP, props)}
    />
  )
}
