import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHEVRON_LIST_11 = {
  _style: {
    entity:
      'shape=rect;fillColor=#BAC8D3;strokeColor=none;fontSize=12;html=1;whiteSpace=wrap;align=left;verticalAlign=top;spacing=5;rounded=0;',
  },
  _width: 14,
  _height: 420,
}

export function ChevronList11(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, CHEVRON_LIST_11)} />
}
