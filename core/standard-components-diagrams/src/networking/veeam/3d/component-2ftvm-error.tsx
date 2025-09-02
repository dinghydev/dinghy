import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_2FTVM_ERROR = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.2ftvm_error;',
  },
  _original_width: 68,
  _original_height: 62,
}

export function Component2ftvmError(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_2FTVM_ERROR}
      {...props}
      _style={extendStyle(COMPONENT_2FTVM_ERROR, props)}
    />
  )
}
