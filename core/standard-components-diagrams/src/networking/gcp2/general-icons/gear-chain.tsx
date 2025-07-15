import { Shape } from '@reactiac/base-components'
import type { DiagramNodeProps } from '@reactiac/base-components'

export const GEAR_CHAIN = {
  _style:
    'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.gear_chain',
  _width: 100,
  _height: 100,
}

export function GearChain(props: DiagramNodeProps) {
  return <Shape {...GEAR_CHAIN} {...props} />
}
