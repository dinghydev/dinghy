import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const CHEVRON_LIST_10 = {
  _style: {
    entity:
      'shape=rect;fillColor=#FAD9D5;strokeColor=none;fontSize=12;html=1;whiteSpace=wrap;align=left;verticalAlign=top;spacing=5;rounded=0;',
  },
  _width: 11,
  _height: 420,
}

export function ChevronList10(props: DiagramNodeProps) {
  return (
    <Shape
      {...CHEVRON_LIST_10}
      {...props}
      _style={extendStyle(CHEVRON_LIST_10, props)}
    />
  )
}
