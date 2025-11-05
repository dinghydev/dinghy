import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const HEATHER = {
  _style: {
    entity: 'fillColor=#D2D6DF;strokeColor=none;whiteSpace=wrap;html=1;',
  },
  _original_width: 50,
  _original_height: 50,
}

export function Heather(props: NodeProps) {
  return <Shape {...HEATHER} {...props} _style={extendStyle(HEATHER, props)} />
}
