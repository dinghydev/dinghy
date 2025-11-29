import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEARCH = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.search',
  },
  _original_width: 99,
  _original_height: 100,
}

export function Search(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, SEARCH)} />
}
