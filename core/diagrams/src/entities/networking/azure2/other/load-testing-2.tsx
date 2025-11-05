import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const LOAD_TESTING_2 = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Load_Testing.svg;strokeColor=none;',
  },
  _original_width: 59.199999999999996,
  _original_height: 68,
}

export function LoadTesting2(props: NodeProps) {
  return (
    <Shape
      {...LOAD_TESTING_2}
      {...props}
      _style={extendStyle(LOAD_TESTING_2, props)}
    />
  )
}
