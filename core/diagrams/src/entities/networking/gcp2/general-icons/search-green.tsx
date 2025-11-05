import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEARCH_GREEN = {
  _style: {
    entity:
      'sketch=0;html=1;aspect=fixed;strokeColor=none;shadow=0;align=center;fillColor=#2D9C5E;verticalAlign=top;labelPosition=center;verticalLabelPosition=bottom;shape=mxgraph.gcp2.search',
  },
  _original_width: 99,
  _original_height: 100,
}

export function SearchGreen(props: NodeProps) {
  return (
    <Shape
      {...SEARCH_GREEN}
      {...props}
      _style={extendStyle(SEARCH_GREEN, props)}
    />
  )
}
