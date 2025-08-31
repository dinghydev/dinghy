import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const WORKSPACES = {
  _style: {
    entity:
      'outlineConnect=0;dashed=0;verticalLabelPosition=bottom;verticalAlign=top;align=center;html=1;shape=mxgraph.aws3.workspaces;fillColor=#D16A28;gradientColor=#F58435;gradientDirection=north;',
  },
  _width: 82.5,
  _height: 94.5,
}

export function Workspaces(props: DiagramNodeProps) {
  return (
    <Shape {...WORKSPACES} {...props} _style={extendStyle(WORKSPACES, props)} />
  )
}
