import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INSPECTOR = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.inspector;fillColor=#759C3E;gradientColor=none;',
  },
  _width: 67.5,
  _height: 81,
}

export function Inspector(props: DiagramNodeProps) {
  return (
    <Shape {...INSPECTOR} {...props} _style={extendStyle(INSPECTOR, props)} />
  )
}
