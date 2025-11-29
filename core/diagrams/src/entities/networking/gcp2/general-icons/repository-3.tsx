import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REPOSITORY_3 = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.repository_3',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Repository3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, REPOSITORY_3)} />
}
