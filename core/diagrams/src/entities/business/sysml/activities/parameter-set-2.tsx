import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARAMETER_SET_2 = {
  _style: {
    entity:
      'html=1;shape=mxgraph.sysml.paramActSet;align=left;spacingLeft=15;verticalAlign=top;spacingTop=-3;fontStyle=1;',
  },
  _width: 250,
  _height: 120,
}

export function ParameterSet2(props: NodeProps) {
  return (
    <Shape
      {...PARAMETER_SET_2}
      {...props}
      _style={extendStyle(PARAMETER_SET_2, props)}
    />
  )
}
