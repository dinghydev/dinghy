import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REGION_3 = {
  _style: {
    entity: 'text;align=left;',
  },
  _width: 2,
  _height: 100,
}

export function Region3(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, REGION_3)} />
}
