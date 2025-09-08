import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const T_TYPE_STRAINER = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;align=center;dashed=0;html=1;verticalAlign=top;shape=mxgraph.pid.piping.t-type_strainer;',
  },
  _original_width: 20,
  _original_height: 35,
}

export function TTypeStrainer(props: DiagramNodeProps) {
  return (
    <Shape
      {...T_TYPE_STRAINER}
      {...props}
      _style={extendStyle(T_TYPE_STRAINER, props)}
    />
  )
}
