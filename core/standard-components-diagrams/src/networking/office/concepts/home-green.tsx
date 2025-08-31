import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const HOME_GREEN = {
  _style:
    'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.home;fillColor=#7FBA42;',
  _width: 51,
  _height: 50,
}

export function HomeGreen(props: DiagramNodeProps) {
  return (
    <Shape {...HOME_GREEN} {...props} _style={extendStyle(HOME_GREEN, props)} />
  )
}
