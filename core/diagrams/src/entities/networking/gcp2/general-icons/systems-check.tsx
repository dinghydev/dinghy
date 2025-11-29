import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SYSTEMS_CHECK = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.systems_check',
  },
  _original_width: 99,
  _original_height: 100,
}

export function SystemsCheck(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SYSTEMS_CHECK)} />
}
