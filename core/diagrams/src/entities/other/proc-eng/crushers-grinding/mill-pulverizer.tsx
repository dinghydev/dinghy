import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MILL_PULVERIZER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.mill,_pulverizer;',
  },
  _width: 100,
  _height: 60,
}

export function MillPulverizer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MILL_PULVERIZER)} />
}
