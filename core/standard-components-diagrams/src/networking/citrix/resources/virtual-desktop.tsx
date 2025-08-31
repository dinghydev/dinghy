import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VIRTUAL_DESKTOP = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.virtual_desktop;',
  },
  _width: 39.23,
  _height: 50,
}

export function VirtualDesktop(props: DiagramNodeProps) {
  return (
    <Shape
      {...VIRTUAL_DESKTOP}
      {...props}
      _style={extendStyle(VIRTUAL_DESKTOP, props)}
    />
  )
}
