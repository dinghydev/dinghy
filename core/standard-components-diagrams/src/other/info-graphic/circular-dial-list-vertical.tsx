import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CIRCULAR_DIAL_LIST_VERTICAL = {
  _style: {
    entity:
      'labelPosition=right;spacingLeft=10;html=1;shape=mxgraph.basic.donut;dx=10;strokeColor=none;fillColor=#B1DDF0;fontSize=12;fontColor=#10739E;align=left;fontStyle=1;',
  },
  _original_width: 0,
  _original_height: 540,
}

export function CircularDialListVertical(props: DiagramNodeProps) {
  return (
    <Shape
      {...CIRCULAR_DIAL_LIST_VERTICAL}
      {...props}
      _style={extendStyle(CIRCULAR_DIAL_LIST_VERTICAL, props)}
    />
  )
}
