import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CRUSHER_HAMMER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.crushers_grinding.crusher_(hammer);',
  },
  _width: 100,
  _height: 60,
}

export function CrusherHammer(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CRUSHER_HAMMER)} />
}
