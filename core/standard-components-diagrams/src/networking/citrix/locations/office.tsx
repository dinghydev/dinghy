import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const OFFICE = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.office;',
  _width: 50,
  _height: 49.230000000000004,
}

export function Office(props: DiagramNodeProps) {
  return <Shape {...OFFICE} {...props} _style={extendStyle(OFFICE, props)} />
}
