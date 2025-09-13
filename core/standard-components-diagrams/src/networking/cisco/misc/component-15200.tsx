import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const COMPONENT_15200 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.15200;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 96,
  _height: 58,
}

export function Component15200(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_15200}
      {...props}
      _style={extendStyle(COMPONENT_15200, props)}
    />
  )
}
