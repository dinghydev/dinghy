import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const Y_TYPE_STRAINER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.y-type_strainer;pointerEvents=1;',
  },
  _width: 50,
  _height: 35,
}

export function YTypeStrainer(props: NodeProps) {
  return (
    <Shape
      {...Y_TYPE_STRAINER}
      {...props}
      _style={extendStyle(Y_TYPE_STRAINER, props)}
    />
  )
}
