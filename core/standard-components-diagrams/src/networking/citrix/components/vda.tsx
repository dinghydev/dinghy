import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const VDA = {
  _style:
    'sketch=0;verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;fillColor=#000000;align=center;outlineConnect=0;pointerEvents=1;shape=mxgraph.citrix2.vda;',
  _width: 50,
  _height: 41.185,
}

export function Vda(props: DiagramNodeProps) {
  return <Shape {...VDA} {...props} _style={extendStyle(VDA, props)} />
}
