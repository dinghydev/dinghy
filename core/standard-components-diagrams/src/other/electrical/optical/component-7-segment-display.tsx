import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const COMPONENT_7_SEGMENT_DISPLAY = {
  _style:
    'verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.opto_electronics.7_segment_display;pointerEvents=1;',
  _width: 74.7,
  _height: 96.1,
}

export function Component7SegmentDisplay(props: DiagramNodeProps) {
  return <Shape {...COMPONENT_7_SEGMENT_DISPLAY} {...props} />
}
