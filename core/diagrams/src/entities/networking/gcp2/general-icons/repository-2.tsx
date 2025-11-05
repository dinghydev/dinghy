import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REPOSITORY_2 = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.repository_2',
  },
  _original_width: 94,
  _original_height: 100,
}

export function Repository2(props: NodeProps) {
  return (
    <Shape
      {...REPOSITORY_2}
      {...props}
      _style={extendStyle(REPOSITORY_2, props)}
    />
  )
}
