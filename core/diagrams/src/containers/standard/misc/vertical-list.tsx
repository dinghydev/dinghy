import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const VERTICAL_LIST = {
  _style: {
    container:
      'shape=table;startSize=0;container=1;collapsible=0;childLayout=tableLayout;fontSize=11;fillColor=none;strokeColor=none;',
  },
}

export function VerticalList(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, VERTICAL_LIST)} />
}
