import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_2FTVM = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.2ftvm;',
  },
  _original_width: 68,
  _original_height: 62,
}

export function Component2ftvm(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_2FTVM}
      {...props}
      _style={extendStyle(COMPONENT_2FTVM, props)}
    />
  )
}
