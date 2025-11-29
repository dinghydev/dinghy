import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const ON_PAGE_REFERENCE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.flowchart.on-page_reference;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function OnPageReference(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, ON_PAGE_REFERENCE)} />
}
