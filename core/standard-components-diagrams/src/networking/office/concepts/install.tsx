import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const INSTALL = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.install;',
  _width: 45,
  _height: 52,
}

export function Install(props: DiagramNodeProps) {
  return <Shape {...INSTALL} {...props} _style={extendStyle(INSTALL, props)} />
}
