import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const MANAGED_DESKTOP = {
  _style: {
    entity:
      'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.managed_desktop;',
  },
  _width: 50,
  _height: 38.66,
}

export function ManagedDesktop(props: DiagramNodeProps) {
  return (
    <Shape
      {...MANAGED_DESKTOP}
      {...props}
      _style={extendStyle(MANAGED_DESKTOP, props)}
    />
  )
}
