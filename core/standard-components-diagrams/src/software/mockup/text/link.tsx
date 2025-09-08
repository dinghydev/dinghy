import { extendStyle, Shape } from '@dinghy/base-components'
import type { DiagramNodeProps } from '@dinghy/base-components'

export const LINK = {
  _style: {
    entity:
      'shape=rectangle;strokeColor=none;fillColor=none;linkText=;fontSize=17;fontColor=#0000ff;fontStyle=4;html=1;align=center;',
  },
  _original_width: 150,
  _original_height: 30,
}

export function Link(props: DiagramNodeProps) {
  return <Shape {...LINK} {...props} _style={extendStyle(LINK, props)} />
}
