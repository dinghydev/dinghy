import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const SWITCHES_2 = {
  _style: {
    entity:
      'strokeColor=#666666;html=1;labelPosition=right;align=left;spacingLeft=15;shadow=0;dashed=0;outlineConnect=0;shape=mxgraph.rack.general.switches_2;',
  },
  _original_width: 160,
  _original_height: 30,
}

export function Switches2(props: DiagramNodeProps) {
  return (
    <Shape {...SWITCHES_2} {...props} _style={extendStyle(SWITCHES_2, props)} />
  )
}
