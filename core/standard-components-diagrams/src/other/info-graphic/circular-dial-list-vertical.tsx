import { extendStyle, Shape } from '@diac/base-components'
import type { DiagramNodeProps } from '@diac/base-components'

export const CIRCULAR_DIAL_LIST_VERTICAL = {
  _style:
    'labelPosition=right;spacingLeft=10;html=1;shape=mxgraph.basic.donut;dx=10;strokeColor=none;fillColor=#B1DDF0;fontSize=12;fontColor=#10739E;align=left;fontStyle=1;',
  _width: 0,
  _height: 540,
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
