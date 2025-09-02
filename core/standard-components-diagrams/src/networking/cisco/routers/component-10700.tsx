import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const COMPONENT_10700 = {
  _style: {
    entity:
      'shape=mxgraph.cisco.routers.10700;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 78,
  _original_height: 53,
}

export function Component10700(props: DiagramNodeProps) {
  return (
    <Shape
      {...COMPONENT_10700}
      {...props}
      _style={extendStyle(COMPONENT_10700, props)}
    />
  )
}
