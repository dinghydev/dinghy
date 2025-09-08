import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PARAMETER_SET = {
  _style: {
    entity: 'html=1;shape=mxgraph.sysml.paramSet;whiteSpace=wrap;align=center;',
  },
  _original_width: 160,
  _original_height: 100,
}

export function ParameterSet(props: DiagramNodeProps) {
  return (
    <Shape
      {...PARAMETER_SET}
      {...props}
      _style={extendStyle(PARAMETER_SET, props)}
    />
  )
}
