import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_7_SEGMENT_DISPLAY_WITH_DP = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.7_segment_display_with_dp;pointerEvents=1;',
  _width: 79.8,
  _height: 96.9,
}

export function Component7SegmentDisplayWithDp(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_7_SEGMENT_DISPLAY_WITH_DP} {...props} />
}
