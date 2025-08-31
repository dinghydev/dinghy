import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CISCO_CA = {
  _style: {
    entity:
      'shape=mxgraph.cisco.misc.cisco_ca;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _width: 83,
  _height: 67,
}

export function CiscoCa(props: DiagramNodeProps) {
  return (
    <Shape {...CISCO_CA} {...props} _style={extendStyle(CISCO_CA, props)} />
  )
}
