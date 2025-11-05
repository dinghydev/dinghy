import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOADING_2 = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.loading_2',
  },
  _original_width: 93,
  _original_height: 100,
}

export function Loading2(props: NodeProps) {
  return (
    <Shape {...LOADING_2} {...props} _style={extendStyle(LOADING_2, props)} />
  )
}
