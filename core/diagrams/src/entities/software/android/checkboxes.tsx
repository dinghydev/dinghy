import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CHECKBOXES = {
  _style: {
    entity:
      'strokeWidth=1;html=1;shadow=0;dashed=0;shape=transparent;strokeColor=#33b5e5',
  },
  _width: 0,
  _height: 50,
}

export function Checkboxes(props: NodeProps) {
  return (
    <Shape {...CHECKBOXES} {...props} _style={extendStyle(CHECKBOXES, props)} />
  )
}
