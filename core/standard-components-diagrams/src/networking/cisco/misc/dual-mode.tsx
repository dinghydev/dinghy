import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const DUAL_MODE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.dual_mode;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 75,
  _height: 54,
}

export function DualMode(props: DiagramNodeProps) {
  return (
    <Shape {...DUAL_MODE} {...props} _style={extendStyle(DUAL_MODE, props)} />
  )
}
