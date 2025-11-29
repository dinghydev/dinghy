import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const GEAR_ARROW = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.gear_arrow',
  },
  _width: 100,
  _height: 61,
}

export function GearArrow(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, GEAR_ARROW)} />
}
