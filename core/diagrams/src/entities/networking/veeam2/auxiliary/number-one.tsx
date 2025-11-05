import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const NUMBER_ONE = {
  _style: {
    entity:
      'ellipse;whiteSpace=wrap;html=1;aspect=fixed;strokeWidth=2;fontFamily=Tahoma;spacingBottom=4;spacingRight=2;strokeColor=#d3d3d3;',
  },
  _original_width: 20,
  _original_height: 20,
}

export function NumberOne(props: NodeProps) {
  return (
    <Shape {...NUMBER_ONE} {...props} _style={extendStyle(NUMBER_ONE, props)} />
  )
}
