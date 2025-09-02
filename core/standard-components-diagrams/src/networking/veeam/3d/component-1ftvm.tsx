import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_1FTVM = {
  _style: {
    entity:
      'shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.1ftvm;',
  },
  _original_width: 68,
  _original_height: 62,
}

export function Component1ftvm(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_1FTVM}
      {...props}
      _style={extendStyle(COMPONENT_1FTVM, props)}
    />
  )
}
