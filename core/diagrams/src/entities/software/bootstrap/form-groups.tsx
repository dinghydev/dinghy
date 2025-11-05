import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const FORM_GROUPS = {
  _style: {
    entity:
      'fillColor=none;strokeColor=none;align=left;fontSize=14;fontColor=#212529;',
  },
  _width: 0,
  _height: 150,
}

export function FormGroups(props: NodeProps) {
  return (
    <Shape
      {...FORM_GROUPS}
      {...props}
      _style={extendStyle(FORM_GROUPS, props)}
    />
  )
}
