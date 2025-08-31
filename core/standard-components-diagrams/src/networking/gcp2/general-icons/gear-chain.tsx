import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const GEAR_CHAIN = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.gear_chain',
  },
  _width: 60,
  _height: 60,
}

export function GearChain(props: DiagramNodeProps) {
  return (
    <Shape {...GEAR_CHAIN} {...props} _style={extendStyle(GEAR_CHAIN, props)} />
  )
}
