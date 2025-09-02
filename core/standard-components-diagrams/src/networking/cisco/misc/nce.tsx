import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const NCE = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.nce;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 90,
  _original_height: 64,
}

export function Nce(props: DiagramNodeProps) {
  return <Shape {...NCE} {...props} _style={extendStyle(NCE, props)} />
}
