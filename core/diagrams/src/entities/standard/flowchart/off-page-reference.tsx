import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const OFF_PAGE_REFERENCE = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=offPageConnector;rounded=0;size=0.5;',
  },
  _original_width: 60,
  _original_height: 60,
}

export function OffPageReference(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, OFF_PAGE_REFERENCE)} />
}
