import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const PARAMETER_SET = {
  _style: {
    entity: 'html=1;shape=mxgraph.sysml.paramSet;whiteSpace=wrap;align=center;',
  },
  _width: 160,
  _height: 100,
}

export function ParameterSet(props: NodeProps) {
  return (
    <Shape
      {...PARAMETER_SET}
      {...props}
      _style={extendStyle(PARAMETER_SET, props)}
    />
  )
}
