import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LOAD_TESTING = {
  _style: {
    entity:
      'image;aspect=fixed;html=1;points=[];align=center;fontSize=12;image=img/lib/azure2/other/Azure_Load_Testing.svg;strokeColor=none;',
  },
  _original_width: 68,
  _original_height: 65.2,
}

export function LoadTesting(props: DiagramNodeProps) {
  return (
    <Shape
      {...LOAD_TESTING}
      {...props}
      _style={extendStyle(LOAD_TESTING, props)}
    />
  )
}
