import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const WEBSITE = {
  _style: {
    entity:
      'sketch=0;pointerEvents=1;shadow=0;dashed=0;html=1;strokeColor=none;fillColor=#505050;labelPosition=center;verticalLabelPosition=bottom;verticalAlign=top;outlineConnect=0;align=center;shape=mxgraph.office.concepts.website;',
  },
  _original_width: 59,
  _original_height: 49,
}

export function Website(props: NodeProps) {
  return <Shape {...WEBSITE} {...props} _style={extendStyle(WEBSITE, props)} />
}
