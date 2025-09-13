import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const NETRANGER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.netranger;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 75,
  _height: 51,
}

export function Netranger(props: DiagramNodeProps) {
  return (
    <Shape {...NETRANGER} {...props} _style={extendStyle(NETRANGER, props)} />
  )
}
