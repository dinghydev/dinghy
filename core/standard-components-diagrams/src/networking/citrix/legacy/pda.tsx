import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const PDA = {
  _style:
    'verticalLabelPosition=bottom;sketch=0;aspect=fixed;html=1;verticalAlign=top;strokeColor=none;align=center;outlineConnect=0;shape=mxgraph.citrix.pda;',
  _width: 30,
  _height: 61,
}

export function Pda(props: DiagramNodeProps) {
  return <Shape {...PDA} {...props} _style={extendStyle(PDA, props)} />
}
