import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NAVIGATION = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.navigation;',
  _width: 53,
  _height: 40,
}

export function Navigation(props: DiagramNodeProps) {
  return (
    <Shape {...NAVIGATION} {...props} _style={extendStyle(NAVIGATION, props)} />
  )
}
