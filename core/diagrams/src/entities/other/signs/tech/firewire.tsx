import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const FIREWIRE = {
  _style: {
    entity:
      'shape=mxgraph.signs.tech.firewire;html=1;pointerEvents=1;fillColor=#000000;strokeColor=none;verticalLabelPosition=bottom;verticalAlign=top;align=center;sketch=0;',
  },
  _original_width: 93,
  _original_height: 99,
}

export function Firewire(props: DiagramNodeProps) {
  return (
    <Shape {...FIREWIRE} {...props} _style={extendStyle(FIREWIRE, props)} />
  )
}
