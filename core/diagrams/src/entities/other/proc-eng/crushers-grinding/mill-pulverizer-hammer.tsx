import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MILL_PULVERIZER_HAMMER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.mill,_pulverizer_(hammer);',
  },
  _width: 100,
  _height: 60,
}

export function MillPulverizerHammer(props: NodeProps) {
  return (
    <Shape {...props} _style={extendStyle(props, MILL_PULVERIZER_HAMMER)} />
  )
}
