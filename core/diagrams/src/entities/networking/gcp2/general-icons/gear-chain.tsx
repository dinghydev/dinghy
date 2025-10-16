import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const GEAR_CHAIN = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.gear_chain',
  },
  _original_width: 100,
  _original_height: 100,
}

export function GearChain(props: DiagramNodeProps) {
  return (
    <Shape {...GEAR_CHAIN} {...props} _style={extendStyle(GEAR_CHAIN, props)} />
  )
}
