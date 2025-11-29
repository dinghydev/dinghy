import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LABELS = {
  _style: {
    entity: 'shape=rect;fillColor=#F6F6F8;strokeColor=none;',
  },
  _width: 0,
  _height: 20,
}

export function Labels(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, LABELS)} />
}
