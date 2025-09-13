import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const ARC_LIST_7 = {
  _style: {
    entity: 'ellipse;fillColor=none;strokeColor=#444444;',
  },
  _width: 0,
  _height: 200,
}

export function ArcList7(props: DiagramNodeProps) {
  return (
    <Shape {...ARC_LIST_7} {...props} _style={extendStyle(ARC_LIST_7, props)} />
  )
}
