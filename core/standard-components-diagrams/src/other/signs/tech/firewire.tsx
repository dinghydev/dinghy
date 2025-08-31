import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const FIREWIRE = {
  _style:
    'shape=mxgraph.signs.tech.firewire;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  _width: 93,
  _height: 99,
}

export function Firewire(props: DiagramNodeProps) {
  return (
    <Shape {...FIREWIRE} {...props} _style={extendStyle(FIREWIRE, props)} />
  )
}
