import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_2FTVM_WARNING = {
  _style: {
    entity:
      'sketch=0;shadow=0;dashed=0;html=1;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.veeam.3d.2ftvm_warning;',
  },
  _width: 68,
  _height: 62,
}

export function Component2ftvmWarning(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_2FTVM_WARNING}
      {...props}
      _style={extendStyle(COMPONENT_2FTVM_WARNING, props)}
    />
  )
}
