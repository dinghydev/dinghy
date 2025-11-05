import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const T_TYPE_STRAINER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.t-type_strainer;',
  },
  _width: 20,
  _height: 35,
}

export function TTypeStrainer(props: NodeProps) {
  return (
    <Shape
      {...T_TYPE_STRAINER}
      {...props}
      _style={extendStyle(T_TYPE_STRAINER, props)}
    />
  )
}
