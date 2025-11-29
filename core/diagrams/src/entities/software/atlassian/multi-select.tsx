import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const MULTI_SELECT = {
  _style: {
    entity:
      'html=1;fillColor=none;strokeColor=none;fontSize=11;align=left;fontColor=#596780;whiteSpace=wrap;',
  },
  _width: 270,
  _height: 390,
}

export function MultiSelect(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, MULTI_SELECT)} />
}
