import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CONTAINER_2 = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.container_2;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Container2(props: DiagramNodeProps) {
  return (
    <Shape
      {...CONTAINER_2}
      {...props}
      _style={extendStyle(CONTAINER_2, props)}
    />
  )
}
