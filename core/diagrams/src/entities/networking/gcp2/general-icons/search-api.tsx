import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEARCH_API = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;fillColor=#3B8DF1;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.search_api',
  },
  _original_width: 100,
  _original_height: 100,
}

export function SearchApi(props: NodeProps) {
  return (
    <Shape {...SEARCH_API} {...props} _style={extendStyle(SEARCH_API, props)} />
  )
}
