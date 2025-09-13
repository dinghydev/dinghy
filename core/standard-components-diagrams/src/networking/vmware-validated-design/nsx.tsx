import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NSX = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#434445;aspect=fixed;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;shape=mxgraph.vvd.nsx;',
  },
  _width: 50,
  _height: 38.5,
}

export function Nsx(props: DiagramNodeProps) {
  return <Shape {...NSX} {...props} _style={extendStyle(NSX, props)} />
}
