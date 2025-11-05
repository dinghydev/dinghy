import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REPOSITORY_4 = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.repository_primary',
  },
  _original_width: 100,
  _original_height: 100,
}

export function Repository4(props: NodeProps) {
  return (
    <Shape
      {...REPOSITORY_4}
      {...props}
      _style={extendStyle(REPOSITORY_4, props)}
    />
  )
}
