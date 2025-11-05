import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COMPONENT_1FTVM_ERROR = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.1ftvm_error;',
  },
  _original_width: 68,
  _original_height: 62,
}

export function Component1ftvmError(props: NodeProps) {
  return (
    <Shape
      {...COMPONENT_1FTVM_ERROR}
      {...props}
      _style={extendStyle(COMPONENT_1FTVM_ERROR, props)}
    />
  )
}
