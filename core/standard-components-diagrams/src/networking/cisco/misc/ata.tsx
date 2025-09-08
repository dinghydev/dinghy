import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ATA = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.ata;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 101,
  _original_height: 50,
}

export function Ata(props: DiagramNodeProps) {
  return <Shape {...ATA} {...props} _style={extendStyle(ATA, props)} />
}
