import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const TOOLKIT_FOR_ECLIPSE = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.toolkit_for_eclipse;fillColor=#342074;gradientColor=none;',
  },
  _width: 70.5,
  _height: 78,
}

export function ToolkitForEclipse(props: DiagramNodeProps) {
  return (
    <Shape
      {...TOOLKIT_FOR_ECLIPSE}
      {...props}
      _style={extendStyle(TOOLKIT_FOR_ECLIPSE, props)}
    />
  )
}
