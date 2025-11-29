import { extendStyle, Shape } from '@dinghy/base-components'
import type { NodeProps } from '@dinghy/base-components'

export const BULLETED_LIST = {
  _style: {
    entity:
      'strokeWidth=1;shadow=0;dashed=0;align=center;html=1;shape=mxgraph.mockup.text.bulletedList;textColor=#666666;mainText=,,,,;textSize=17;bulletStyle=none;strokeColor=none;fillColor=none;align=left;verticalAlign=top;fontSize=17;fontColor=#666666;',
  },
  _width: 150,
  _height: 135,
}

export function BulletedList(props: NodeProps) {
  return <Shape {...props} _style={extendStyle(props, BULLETED_LIST)} />
}
