import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const CIRCULAR_DIAL_LIST_HORIZONTAL = {
  _style: {
    entity:
      'verticalLabelPosition=bottom;verticalAlign=top;html=1;shape=mxgraph.basic.donut;dx=10;strokeColor=none;fillColor=#B1DDF0;fontSize=12;fontColor=#10739E;align=center;fontStyle=1;',
  },
  _width: 0,
  _height: 100,
}

export function CircularDialListHorizontal(props: NodeProps) {
  return (
    <Shape
      {...props}
      _style={extendStyle(props, CIRCULAR_DIAL_LIST_HORIZONTAL)}
    />
  )
}
