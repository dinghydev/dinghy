import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const RADIO_TOWER = {
  _style: {
    entity:
      'shape=mxgraph.cisco.wireless.radio_tower;sketch=0;html=1;pointerEvents=1;dashed=0;fillColor=#036897;strokeColor=#ffffff;strokeWidth=2;verticalLabelPosition=bottom;verticalAlign=top;align=center;outlineConnect=0;',
  },
  _original_width: 37,
  _original_height: 101,
}

export function RadioTower(props: DiagramNodeProps) {
  return (
    <Shape
      {...RADIO_TOWER}
      {...props}
      _style={extendStyle(RADIO_TOWER, props)}
    />
  )
}
