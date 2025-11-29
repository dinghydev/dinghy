import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BIG_QUERY = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.big_query',
  },
  _original_width: 99,
  _original_height: 100,
}

export function BigQuery(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BIG_QUERY)} />
}
