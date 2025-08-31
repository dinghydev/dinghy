import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ADMINS = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.admins;',
  _width: 60,
  _height: 60,
}

export function Admins(props: DiagramNodeProps) {
  return <Shape {...ADMINS} {...props} _style={extendStyle(ADMINS, props)} />
}
