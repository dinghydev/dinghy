import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const ATA = {
  _style:
    'shape=mxgraph.cisco.misc.ata;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  _width: 101,
  _height: 50,
}

export function Ata(props: DiagramNodeProps) {
  return <Shape {...ATA} {...props} _style={extendStyle(ATA, props)} />
}
