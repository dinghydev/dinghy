import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOAD_TESTING = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Load_Testing.svg;strokeColor=none;',
  },
  _original_width: 59.199999999999996,
  _original_height: 68,
}

export function LoadTesting(props: NodeProps) {
  return (
    <Shape
      {...LOAD_TESTING}
      {...props}
      _style={extendStyle(LOAD_TESTING, props)}
    />
  )
}
