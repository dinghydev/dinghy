import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const SEARCH = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.search;',
  },
  _original_width: 49,
  _original_height: 49,
}

export function Search(props: NodeProps) {
  return <Shape {...SEARCH} {...props} _style={extendStyle(SEARCH, props)} />
}
