import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const PMC = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.pmc;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 122,
  _height: 77,
}

export function Pmc(props: DiagramNodeProps) {
  return <Shape {...PMC} {...props} _style={extendStyle(PMC, props)} />
}
