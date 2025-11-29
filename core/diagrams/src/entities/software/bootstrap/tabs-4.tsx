import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const TABS_4 = {
  _style: {
    entity: 'shape=line;strokeColor=#dddddd;',
  },
  _width: 4,
  _height: 45,
}

export function Tabs4(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, TABS_4)} />
}
