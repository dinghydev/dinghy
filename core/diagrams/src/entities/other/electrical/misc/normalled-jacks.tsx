import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NORMALLED_JACKS = {
  _style: {
    entity:
      'pointerEvents=1;verticalLabelPosition=bottom;shadow=0;dashed=0;align=center;html=1;verticalAlign=top;shape=mxgraph.electrical.miscellaneous.normalled_jacks2',
  },
  _width: 230,
  _height: 65,
}

export function NormalledJacks(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, NORMALLED_JACKS)} />
}
