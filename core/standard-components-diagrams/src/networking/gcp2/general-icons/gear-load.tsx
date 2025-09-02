import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GEAR_LOAD = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.gear_load',
  },
  _original_width: 100,
  _original_height: 92,
}

export function GearLoad(props: DiagramNodeProps) {
  return (
    <Shape {...GEAR_LOAD} {...props} _style={extendStyle(GEAR_LOAD, props)} />
  )
}
