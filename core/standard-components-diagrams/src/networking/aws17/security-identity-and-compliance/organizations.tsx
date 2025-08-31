import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ORGANIZATIONS = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.organizations;fillColor=#759C3E;gradientColor=none;',
  },
  _width: 76.5,
  _height: 93,
}

export function Organizations(props: DiagramNodeProps) {
  return (
    <Shape
      {...ORGANIZATIONS}
      {...props}
      _style={extendStyle(ORGANIZATIONS, props)}
    />
  )
}
