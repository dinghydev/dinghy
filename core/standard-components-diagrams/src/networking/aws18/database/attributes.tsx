import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ATTRIBUTES = {
  _style: {
    entity:
      'sketch=0;outlineConnect=0;fontColor=#232F3E;gradientColor=none;strokeColor=#232F3E;fillColor=#ffffff;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;fontSize=12;fontStyle=0;aspect=fixed;shape=mxgraph.aws4.resourceIcon;resIcon=mxgraph.aws4.attributes;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function Attributes(props: DiagramNodeProps) {
  return (
    <Shape {...ATTRIBUTES} {...props} _style={extendStyle(ATTRIBUTES, props)} />
  )
}
