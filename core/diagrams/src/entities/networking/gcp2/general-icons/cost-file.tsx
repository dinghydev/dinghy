import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const COST_FILE = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.cost',
  },
  _original_width: 85,
  _original_height: 100,
}

export function CostFile(props: NodeProps) {
  return (
    <Shape {...COST_FILE} {...props} _style={extendStyle(COST_FILE, props)} />
  )
}
