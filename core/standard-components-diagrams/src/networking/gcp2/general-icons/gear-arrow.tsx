import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GEAR_ARROW = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.gear_arrow',
  },
  _original_width: 100,
  _original_height: 61,
}

export function GearArrow(props: DiagramNodeProps) {
  return (
    <Shape {...GEAR_ARROW} {...props} _style={extendStyle(GEAR_ARROW, props)} />
  )
}
