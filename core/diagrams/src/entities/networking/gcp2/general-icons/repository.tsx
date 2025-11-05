import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REPOSITORY = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.repository',
  },
  _width: 60,
  _height: 100,
}

export function Repository(props: NodeProps) {
  return (
    <Shape {...REPOSITORY} {...props} _style={extendStyle(REPOSITORY, props)} />
  )
}
