import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const REGION_2 = {
  _style: {
    entity: 'text;align=right;',
  },
  _width: 1,
  _height: 100,
}

export function Region2(props: NodeProps) {
  return (
    <Shape {...REGION_2} {...props} _style={extendStyle(REGION_2, props)} />
  )
}
